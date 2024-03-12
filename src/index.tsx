import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CssVarsProvider } from "@mui/joy/styles";
import { store } from "./store/store.ts";
import App from "./App.tsx";
import { theme } from "./theme.ts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssVarsProvider theme={theme} disableNestedContext>
                <App />
            </CssVarsProvider>
        </Provider>
    </React.StrictMode>
);
