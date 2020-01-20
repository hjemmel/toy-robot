import commandRuler from "@/pages/Command/commandRuler";

describe("Command Ruler", () => {
    describe("General commands", () => {
        it("Should not be empty", () => {
            const result = commandRuler("", null);
            expect(result.invalid).toBeTruthy();
            expect(result.message).toBe("Please provide a command to continue");
        });

        it("Should have a valid command", () => {
            const result = commandRuler("INVALID", null);

            expect(result).toStrictEqual({
                invalid: true,
                message: "Invalid command, please input a valid command"
            });
        });
    });

    describe("PLACE_OBJ", () => {
        it("Should have 2 parameters", () => {
            const result = commandRuler("PLACE_OBJ A", null);

            expect(result).toStrictEqual({
                invalid: true,
                message: "PLACE_OBJ requires: Y, X"
            });
        });
    });

    describe("PLACE", () => {
        it("Should have 3 parameters", () => {
            const result = commandRuler("PLACE A,A", null);

            expect(result).toStrictEqual({
                invalid: true,
                message: "PLACE requires: Y, X and a facing"
            });
        });

        it("Should third parameter should be a valid face", () => {
            const result = commandRuler("PLACE A,A,WRONG", null);

            expect(result).toStrictEqual({
                invalid: true,
                message: "Face needs to be: NORTH, SOUTH, EAST, WEST"
            });
        });

        it("Should have a valid number as a position", () => {
            const result = commandRuler("PLACE A,A,NORTH", null);

            expect(result).toStrictEqual({
                invalid: true,
                message: "Please inform a valid number"
            });
        });

        it.each`
            a      | b
            ${"X"} | ${"Y"}
            ${1}   | ${"Y"}
            ${"X"} | ${1}
        `("Should check if $a or $b are numbers", ({ a, b }) => {
            const result = commandRuler(`PLACE ${a},${b},NORTH`, null);
            expect(result).toStrictEqual({
                invalid: true,
                message: "Please inform a valid number"
            });
        });

        it.each([
            [6, 1],
            [1, 6],
            [6, 6],
            [-1, 1],
            [-1, -1],
            [1, -1]
        ])("Should %i and %i not exceed the table length", (a, b) => {
            const result = commandRuler(`PLACE ${a},${b},NORTH`, null);
            expect(result).toStrictEqual({
                invalid: true,
                message:
                    "Your robot is off the table, please inform a valid position"
            });
        });

        it.each(["MOVE", "LEFT", "RIGHT", "REPORT"])(
            "Should %s not be the first command",
            (command) => {
                const result = commandRuler(`${command}`, null);
                expect(result).toStrictEqual({
                    invalid: true,
                    message: "You should place your robot somewhere first"
                });
            }
        );
    });

    describe("MOVE", () => {
        it.each`
            x    | y    | face
            ${5} | ${5} | ${"NORTH"}
            ${0} | ${5} | ${"NORTH"}
            ${5} | ${5} | ${"EAST"}
            ${5} | ${0} | ${"EAST"}
            ${0} | ${0} | ${"SOUTH"}
            ${5} | ${0} | ${"SOUTH"}
            ${0} | ${0} | ${"WEST"}
            ${0} | ${5} | ${"WEST"}
        `(
            "Should robot position (x: $x, y: $y) not exceed the table length",
            ({ x, y, face }) => {
                const position = { x, y };

                const result = commandRuler("MOVE", { position, face });
                expect(result).toStrictEqual({
                    invalid: true,
                    message:
                        "You can't move your robot, position is off the table, please turn it or place it again"
                });
            }
        );
    });

    it("Should be valid PLACE", () => {
        const result = commandRuler("PLACE 1,1,NORTH", null);
        expect(result).toStrictEqual({
            invalid: false,
            message: ""
        });
    });

    it("Should be valid MOVE", () => {
        const position = { x: 3, y: 3 };

        const result = commandRuler("MOVE", { position, face: "NORTH" });
        expect(result).toStrictEqual({
            invalid: false,
            message: ""
        });
    });

    it("Should no overlapping obj", () => {
        const position = { x: 3, y: 3 };
        const positionObj = { x: 3, y: 4 };

        const result = commandRuler(
            "MOVE",
            { position, face: "NORTH" },
            { position: positionObj }
        );
        expect(result).toStrictEqual({
            invalid: true,
            message:
                "You can't move your robot, position is overlapping the object, please turn it or place it again"
        });
    });

    it("Should be valid REPORT", () => {
        const position = { x: 3, y: 3 };

        const result = commandRuler("REPORT", { position, face: "NORTH" });
        expect(result).toStrictEqual({
            invalid: false,
            message: ""
        });
    });
});
