import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import SectionMessage from "@atlaskit/section-message";
import styled from "styled-components";
import Command from "@/pages/Command";
import Padding from "@/components/Padding";
import CommandList from "@/pages/Command/CommandList";

const Ul = styled.div`
    list-style: circle;
`;

const Main = () => {
    return (
        <Page>
            <Grid layout={"fluid"}>
                <GridColumn medium={12}>
                    <h1>Toy Robot Simulator</h1>
                    <Command />
                </GridColumn>
                <GridColumn medium={6}>
                    <Padding>
                        <h2>Instructions</h2>
                        <SectionMessage appearance="change">
                            <Ul>
                                <li>
                                    PLACE will put the toy robot on the table in
                                    position X,Y and facing NORTH, SOUTH, EAST
                                    or WEST.
                                </li>
                                <li>
                                    The origin (0,0) can be considered to be the
                                    SOUTH WEST most corner.
                                </li>
                                <li>
                                    The first valid command to the robot is a
                                    PLACE command, after that, any sequence of
                                    commands may be issued, in any order,
                                    including another PLACE command. The
                                    application should discard all commands in
                                    the sequence until a valid PLACE command has
                                    been executed.
                                </li>
                                <li>
                                    MOVE will move the toy robot one unit
                                    forward in the direction it is currently
                                    facing.
                                </li>
                                <li>
                                    LEFT and RIGHT will rotate the robot 90
                                    degrees in the specified direction without
                                    changing the position of the robot.
                                </li>
                                <li>
                                    REPORT will announce the X,Y and F of the
                                    robot. This can be in any form, but standard
                                    output is sufficient.
                                </li>
                                <li>
                                    A robot that is not on the table can choose
                                    the ignore the MOVE, LEFT, RIGHT and REPORT
                                    commands.
                                </li>
                                <li>
                                    Input can be from a file, or from standard
                                    input, as the developer chooses.
                                </li>
                                <li>
                                    Provide test data to exercise the
                                    application.
                                </li>
                            </Ul>
                        </SectionMessage>
                    </Padding>
                </GridColumn>
                <GridColumn medium={6}>
                    <Padding>
                        <h2>Commands</h2>
                        <CommandList />
                    </Padding>
                </GridColumn>
            </Grid>
        </Page>
    );
};

export default Main;
