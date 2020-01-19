import React from "react";
import ReactDOM from "react-dom";
import Main from "@/pages/Main";
import GlobalState from "@/components/Global/GlobalState";
import { GlobalStyles } from "@/components/Global/GlobalStyles";
import ButterToast from "butter-toast";
import { Normalize } from "styled-normalize";

ReactDOM.render(
    <>
        <GlobalState>
            <Normalize />
            <GlobalStyles />
            <ButterToast />
            <Main />
        </GlobalState>
    </>,
    document.getElementById("app") as HTMLElement
);
