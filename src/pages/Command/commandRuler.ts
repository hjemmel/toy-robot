import { Commands, FACES } from "@/pages/Command/interfaces";
import { getCommands, getRobotCoord, isOffTable } from "@/utils/utils";
import { Robot } from "@/components/Global/interfaces";

export default (command: string, robot: Robot | null) => {
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
            const coord = getRobotCoord(robot);

            if (isOffTable(coord.x, coord.y)) {
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
