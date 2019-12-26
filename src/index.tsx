import React from "react";
import ReactDOM from "react-dom";
import Main from "@/pages/Main";
import GlobalState from "@/components/Global/GlobalState";
import { GlobalStyles } from "@/components/Global/GlobalStyles";

ReactDOM.render(
    <>
        <GlobalState>
            <GlobalStyles />
            <Main />
        </GlobalState>
    </>,
    document.getElementById("app") as HTMLElement
);
