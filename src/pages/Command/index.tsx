import React from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { Grid, GridColumn } from "@atlaskit/page";
import styled from "styled-components";
import { GlobalContext } from "@/components/Global/GlobalState";
import SectionMessage from "@atlaskit/section-message";
import Padding from "@/components/Padding";
import commandRuler from "@/pages/Command/commandRuler";
import ButterToast, { Cinnamon } from "butter-toast";
import { GoAlert } from "react-icons/go";

const NewButton = styled(Button)`
    margin-top: 3px;
    margin-right: 10px;
    display: inline-block;
`;

const Command = () => {
    const [command, setCommand] = React.useState("");
    const [isInvalid, setIsInvalid] = React.useState(false);
    const context = React.useContext(GlobalContext);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCommand = e.target.value
            ? e.target.value.toLocaleUpperCase()
            : "";
        setCommand(newCommand);
    };

    const validateAndSetCommand = () => {
        const result = commandRuler(
            command,
            context.state.robot,
            context.state.obj
        );
        setIsInvalid(result.invalid);
        if (result.invalid) {
            ButterToast.raise({
                content: (
                    <Cinnamon.Crunch
                        scheme={Cinnamon.Crunch.SCHEME_RED}
                        icon={() => (
                            <p style={{ fontSize: "20px" }}>
                                <GoAlert />
                            </p>
                        )}
                        content={<div>{result.message}</div>}
                        title="Invalid Entry"
                    />
                )
            });
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
                    <SectionMessage testId="message-info" appearance="info">
                        <p>
                            <span>
                                Please type one of the following commands:{" "}
                                <b>PLACE</b>, <b>MOVE</b>, <b>LEFT</b>,{" "}
                                <b>RIGHT</b>, <b>REPORT</b>
                            </span>
                        </p>
                    </SectionMessage>
                </GridColumn>
            </Grid>
        </Padding>
    );
};

export default Command;
