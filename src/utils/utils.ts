import { Robot } from "@/components/Global/interfaces";

export const getCommands = (command: string) => {
    return command.split(/[\s,]+/);
};

export const getRobotCoord = (robot: Robot) => {
    const facedPosition = {
        NORTH: { x: 0, y: 1 },
        EAST: { x: 1, y: 0 },
        SOUTH: { x: 0, y: -1 },
        WEST: { x: -1, y: 0 },
    };

    const position = facedPosition[robot.face];

    const x = robot.position.x + position.x;
    const y = robot.position.y + position.y;

    return { x, y };
};

interface NextPosition {
    [key: string]: string;
}

const nextLeft: NextPosition = {
    NORTH: "WEST",
    WEST: "SOUTH",
    SOUTH: "EAST",
    EAST: "NORTH",
};

const nextRight: NextPosition = {
    NORTH: "EAST",
    WEST: "NORTH",
    SOUTH: "WEST",
    EAST: "SOUTH",
};

export const getNewFace = (face: string, dir: "LEFT" | "RIGHT") => {
    if (dir === "LEFT") {
        return nextLeft[face];
    }

    return nextRight[face];
};

export const isOffTable = (x: number, y: number) => {
    return x < 0 || x > 5 || y < 0 || y > 5;
};
