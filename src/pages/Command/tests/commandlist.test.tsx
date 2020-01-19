import React from "react";
import { render } from "@testing-library/react";
import GlobalState from "@/components/Global/GlobalState";
import "@testing-library/jest-dom/extend-expect";
import CommandList from "@/pages/Command/CommandList";

describe("<CommandList/>", () => {
    it("Should list the commands", () => {
        const commands = {
            commands: ["PLACE 1,1,NORTH", "MOVE", "LEFT", "RIGHT"],
            robot: null
        };

        const { getByTestId } = render(
            <GlobalState initialState={commands}>
                <CommandList />
            </GlobalState>
        );

        const commandList = getByTestId("commands-list");
        expect(commandList).toHaveTextContent("PLACE 1,1,NORTHMOVELEFTRIGHT");
    });

    it("Should be empty", () => {
        const { getByTestId } = render(
            <GlobalState>
                <CommandList />
            </GlobalState>
        );

        const commandList = getByTestId("commands-list");
        expect(commandList).toHaveTextContent("Commands");
    });
});
