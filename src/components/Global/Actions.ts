import { Actions, FACE, MainState } from "./interfaces";
import { ActionMap } from "./GlobalState";
import { getCommands, getNewFace, getRobotCoord } from "@/utils/utils";
import { Command } from "@/pages/Command/interfaces";

export const actions: ActionMap<MainState, Actions> = {
    addCommand: (command: string) => (state: MainState) => {
        const commands = state.commands.concat();

        const commandSplit = getCommands(command);

        let robot = state.robot;
        let obj = state.obj;
        let position = { x: 0, y: 0 };
        let face: FACE = "NORTH";

        switch (commandSplit[0] as Command) {
            case "PLACE":
                position = {
                    x: parseInt(commandSplit[1]),
                    y: parseInt(commandSplit[2]),
                };

                face = commandSplit[3] as FACE;

                //place resets the robot
                robot = { position, face };
                break;
            case "PLACE_OBJ":
                position = {
                    x: parseInt(commandSplit[1]),
                    y: parseInt(commandSplit[2]),
                };

                //place resets the robot
                obj = { position };
                break;
            case "MOVE":
                if (robot) robot.position = { ...getRobotCoord(robot) };
                break;
            case "LEFT":
            case "RIGHT":
                if (robot)
                    robot.face = getNewFace(
                        robot?.face,
                        command as "LEFT" | "RIGHT"
                    ) as FACE;
                break;
            case "REPORT":
                command = `${command}: ${robot?.position.x}, ${robot?.position.y}, ${robot?.face}`;
                break;
        }

        commands.push(command);

        return { ...state, commands, robot, obj };
    },
    clear: () => (state: MainState) => {
        const commands: string[] = [];
        const robot = null;

        return { ...state, commands, robot };
    },
};
