import React, { useContext } from "react";
import { render, fireEvent } from "@testing-library/react";
import GlobalState, { GlobalContext } from "@/components/Global/GlobalState";
import Command from "@/pages/Command";
import "@testing-library/jest-dom/extend-expect";
import ButterToast from 'butter-toast';
import stringMatching = jasmine.stringMatching;

describe("<Command />", () => {

    beforeEach(() => {
        jest.spyOn(ButterToast, "raise").mockImplementation(jest.fn());
    });

    afterEach(() => {
        (ButterToast.raise as jest.Mock).mockRestore();
    });

    it("Should not be empty", () => {

        const { getByTestId } = render(
            <GlobalState>
                <Command />
            </GlobalState>
        );

        fireEvent.click(getByTestId("send-btn"));
        expect(ButterToast.raise).toHaveBeenCalledTimes(1);
    });

    it("Should validate on ENTER", () => {
        const { getByTestId } = render(
            <GlobalState>
                <Command />
            </GlobalState>
        );

        fireEvent.keyUp(getByTestId("command-text"), {
            key: "Enter",
            keyCode: 13
        });
        const messageInfo = getByTestId("message-info");

        expect(ButterToast.raise).toHaveBeenCalledTimes(1);
    });

    it("Should send a valid command", () => {
        const { getByTestId } = render(
            <GlobalState>
                <Command />
            </GlobalState>
        );

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "place 1,1,NORTH" }
        });
        const messageInfo = getByTestId("message-info");
        expect(getByTestId("command-text")).toHaveValue("PLACE 1,1,NORTH");
        expect(messageInfo).toHaveStyle("background-color: #DEEBFF");
    });

    const CommandsList = () => {
        const context = useContext(GlobalContext);
        return (
            <span data-testid="commands-list">
                {context.state.commands.join(", ")}
            </span>
        );
    };

    it("Should clear commands", () => {
        const { getByTestId } = render(
            <GlobalState>
                <Command />
                <CommandsList />
            </GlobalState>
        );

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "place 1,1,NORTH" }
        });
        fireEvent.click(getByTestId("send-btn"));

        const messageInfo = getByTestId("message-info");
        expect(getByTestId("commands-list")).toHaveTextContent(
            "PLACE 1,1,NORTH"
        );
        expect(messageInfo).toHaveStyle("background-color: #DEEBFF");

        fireEvent.click(getByTestId("clear-btn"));
        expect(getByTestId("commands-list")).toHaveTextContent("");
    });

    it("Should send multiple commands", () => {
        const { getByTestId } = render(
            <GlobalState>
                <Command />
                <CommandsList />
            </GlobalState>
        );

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "place 1,1,NORTH" }
        });
        fireEvent.click(getByTestId("send-btn"));

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "MOVE" }
        });
        fireEvent.click(getByTestId("send-btn"));

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "LEFT" }
        });
        fireEvent.click(getByTestId("send-btn"));

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "RIGHT" }
        });
        fireEvent.click(getByTestId("send-btn"));

        fireEvent.change(getByTestId("command-text"), {
            target: { value: "REPORT" }
        });
        fireEvent.keyUp(getByTestId("command-text"), {
            key: "Enter",
            keyCode: 13
        });

        expect(getByTestId("commands-list")).toHaveTextContent(
            "PLACE 1,1,NORTH, MOVE, LEFT, RIGHT, REPORT: 1, 2, NORTH"
        );
    });
});
