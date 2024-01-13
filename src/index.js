import App from "./App";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CssVarsProvider } from "@mui/joy/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssVarsProvider>
                <App />
            </CssVarsProvider>
        </Provider>
    </React.StrictMode>
);