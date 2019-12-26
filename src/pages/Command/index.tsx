import React from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { Grid, GridColumn } from "@atlaskit/page";
import styled from "styled-components";
import { GlobalContext } from "@/components/Global/GlobalState";
import SectionMessage from "@atlaskit/section-message";
import Padding from "@/components/Padding";
import commandRuler from "@/pages/Command/commandRuler";

const NewButton = styled(Button)`
    margin-top: 3px;
    margin-right: 10px;
    display: inline-block;
`;

const Command = () => {
    const [command, setCommand] = React.useState("");
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [invalidMessage, setInvalidMessage] = React.useState("");
    const context = React.useContext(GlobalContext);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCommand = e.target.value
            ? e.target.value.toLocaleUpperCase()
            : "";
        setCommand(newCommand);
    };

    const validateAndSetCommand = () => {
        const result = commandRuler(command, context.state.robot);
        setIsInvalid(result.invalid);
        if (result.invalid) {
            setInvalidMessage(result.message);
        } else {
            context.actions.addCommand(command);
            setCommand("");
        }
    };

    const onClickHandler = () => {
        validateAndSetCommand();
    };

    const onClearHandler = () => {
        context.actions.clear();
    };

    const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13 || e.keyCode === 13) {
            validateAndSetCommand();
        }
    };

    return (
        <Padding>
            <Grid layout={"fluid"}>
                <GridColumn medium={10}>
                    <Textfield
                        isInvalid={isInvalid}
                        value={command}
                        testId="command-text"
                        onKeyUp={onKeyUpHandler}
                        onChange={onChangeHandler}
                    />
                </GridColumn>
                <GridColumn medium={2}>
                    <NewButton
                        testId="send-btn"
                        appearance="primary"
                        onClick={onClickHandler}
                    >
                        Send
                    </NewButton>
                    <NewButton
                        testId="clear-btn"
                        appearance="danger"
                        onClick={onClearHandler}
                    >
                        Clear
                    </NewButton>
                </GridColumn>
                <GridColumn medium={12}>
                    <br />
                    <SectionMessage
                        testId="message-info"
                        appearance={isInvalid ? "error" : "info"}
                    >
                        <p>
                            {isInvalid ? (
                                <span>{invalidMessage}</span>
                            ) : (
                                <span>
                                    Please type one of the following commands:{" "}
                                    <b>PLACE</b>, <b>MOVE</b>, <b>LEFT</b>,{" "}
                                    <b>RIGHT</b>, <b>REPORT</b>
                                </span>
                            )}
                        </p>
                    </SectionMessage>
                </GridColumn>
            </Grid>
        </Padding>
    );
};

export default Command;
