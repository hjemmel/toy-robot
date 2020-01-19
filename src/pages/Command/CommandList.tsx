import React from "react";
import SectionMessage from "@atlaskit/section-message";
import { GlobalContext } from "@/components/Global/GlobalState";

const CommandList = () => {
    const context = React.useContext(GlobalContext);

    const renderCommands = () => {
        if (context.state.commands.length > 0) {
            return (
                <ul>
                    {context.state.commands.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            );
        } else {
            return null;
        }
    };

    return (
        <SectionMessage
            testId="commands-list"
            appearance="confirmation"
            title="Commands"
        >
            {renderCommands()}
        </SectionMessage>
    );
};

export default CommandList;
