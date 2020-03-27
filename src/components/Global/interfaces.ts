import { ActionMap } from "./GlobalState";

export interface MainState {
    commands: string[];
    robot: Robot | null;
    obj: Obj | null;
}

export interface ContextProps {
    state: MainState;
    actions: ActionMap<MainState, Actions>;
}

export interface Position {
    x: number;
    y: number;
}

export type FACE = "NORTH" | "SOUTH" | "EAST" | "WEST";

export interface Obj {
    position: Position;
}

export interface Robot {
    position: Position;
    face: FACE;
}

export interface Actions {
    addCommand: (text: string) => void;
    clear: () => void;
}

export const initialData: MainState = {
    commands: [],
    robot: null,
    obj: null,
};
