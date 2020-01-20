import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

type Props = {
    type?: "success" | "info" | "warning" | "error";
    title?: string;
};

const handleColorType = (type: string) => {
    switch (type) {
        case "success":
            return "border-color: #b7eb8f; background-color: #f6ffed;";
        case "error":
            return "border-color: #ffa39e; background-color: #fff1f0;";
        case "warning":
            return "border-color: #ffe58f; background-color: #fffbe6;";
        default:
            return "border-color: #91d5ff; background-color: #e6f7ff;";
    }
};

const getTitleCss = (title?: string) => {
    if (title !== undefined) {
        return css`
            & > span:nth-of-type(1) {
                display: block;
                font-size: 16px;
                font-weight: 500;
                margin-bottom: 5px;
            }
        `;
    }
};

const Div = styled.div<Props>`
    border: 1px solid;
    ${({ type }) => handleColorType(type != null ? type : "info")}
    padding: 8px 15px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;

    ${({ title }) => getTitleCss(title)}
`;

const Alert: FunctionComponent<Props> = (props) => {
    return (
        <Div type={props.type} title={props.title}>
            {props.title !== undefined && <span>{props.title}</span>}

            {props.children}
        </Div>
    );
};

export default Alert;
