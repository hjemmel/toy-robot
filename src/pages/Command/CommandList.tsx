import React from "react";
import { GlobalContext } from "@/components/Global/GlobalState";
import Alert from "@/components/Alert";

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
        <Alert testId="commands-list" type="success" title="Commands">
            {renderCommands()}
        </Alert>
    );
};

export default CommandList;
