import { Commands, FACES } from "@/pages/Command/interfaces";
import { getCommands, getRobotCoord, isOffTable } from "@/utils/utils";
import { Obj, Robot } from "@/components/Global/interfaces";

export default (
    command: string,
    robot: Robot | null,
    obj: Obj | null = null
) => {
    let result = { invalid: false, message: "" };

    const commandParams = getCommands(command);
    command = commandParams[0];

    if (command === "") {
        result = {
            ...result,
            invalid: true,
            message: "Please provide a command to continue"
        };
    } else if (Commands.indexOf(command) < 0) {
        result = {
            ...result,
            invalid: true,
            message: "Invalid command, please input a valid command"
        };
    } else if (command === "PLACE_OBJ") {
        if (commandParams.length < 3) {
            result = {
                ...result,
                invalid: true,
                message: "PLACE_OBJ requires: Y, X"
            };
        }
    } else if (command === "PLACE") {
        if (commandParams.length < 4) {
            result = {
                ...result,
                invalid: true,
                message: "PLACE requires: Y, X and a facing"
            };
        } else {
            const x = parseInt(commandParams[1], 10);
            const y = parseInt(commandParams[2], 10);

            if (FACES.indexOf(commandParams[3]) < 0) {
                result = {
                    ...result,
                    invalid: true,
                    message: "Face needs to be: " + FACES.join(", ")
                };
            } else if (isNaN(x) || isNaN(y)) {
                result = {
                    ...result,
                    invalid: true,
                    message: "Please inform a valid number"
                };
            }
            if (isOffTable(x, y)) {
                result = {
                    ...result,
                    invalid: true,
                    message:
                        "Your robot is off the table, please inform a valid position"
                };
            }
        }
    } else {
        if (robot === null) {
            result = {
                ...result,
                invalid: true,
                message: "You should place your robot somewhere first"
            };
        } else if (command === "MOVE") {
            const coords = getRobotCoord(robot);

            if (obj?.position.y === coords.y && obj?.position.x === coords.x) {
                result = {
                    ...result,
                    invalid: true,
                    message:
                        "You can't move your robot, position is overlapping the object, please turn it or place it again"
                };
            }

            if (isOffTable(coords.x, coords.y)) {
                result = {
                    ...result,
                    invalid: true,
                    message:
                        "You can't move your robot, position is off the table, please turn it or place it again"
                };
            }
        }
    }

    return result;
};
