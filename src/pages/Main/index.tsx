import React from "react";
import SectionMessage from "@atlaskit/section-message";
import styled from "styled-components";
import Command from "@/pages/Command";
import Padding from "@/components/Padding";
import CommandList from "@/pages/Command/CommandList";
import { Box, Flex } from "rebass";

const Ul = styled.div`
    list-style: circle;
`;

const Alert = styled.div``;

const Main = () => {
    return (
        <Flex flexWrap="wrap">
            <Box px={2} py={2} width={1}>
                <h1>Toy Robot Simulator</h1>
                <Command />
            </Box>
            <Box px={2} py={2} width={1 / 2}>
                <Padding>
                    <SectionMessage title="Instructions" appearance="change">
                        <Ul>
                            <li>
                                PLACE will put the toy robot on the table in
                                position X,Y and facing NORTH, SOUTH, EAST or
                                WEST.
                            </li>
                            <li>
                                The origin (0,0) can be considered to be the
                                SOUTH WEST most corner.
                            </li>
                            <li>
                                The first valid command to the robot is a PLACE
                                command, after that, any sequence of commands
                                may be issued, in any order, including another
                                PLACE command. The application should discard
                                all commands in the sequence until a valid PLACE
                                command has been executed.
                            </li>
                            <li>
                                MOVE will move the toy robot one unit forward in
                                the direction it is currently facing.
                            </li>
                            <li>
                                LEFT and RIGHT will rotate the robot 90 degrees
                                in the specified direction without changing the
                                position of the robot.
                            </li>
                            <li>
                                REPORT will announce the X,Y and F of the robot.
                                This can be in any form, but standard output is
                                sufficient.
                            </li>
                            <li>
                                A robot that is not on the table can choose the
                                ignore the MOVE, LEFT, RIGHT and REPORT
                                commands.
                            </li>
                            <li>
                                Input can be from a file, or from standard
                                input, as the developer chooses.
                            </li>
                            <li>
                                Provide test data to exercise the application.
                            </li>
                        </Ul>
                    </SectionMessage>
                </Padding>
            </Box>
            <Box px={2} py={2} width={1 / 2}>
                <Padding>
                    <CommandList />
                </Padding>
            </Box>
        </Flex>
    );
};

export default Main;
