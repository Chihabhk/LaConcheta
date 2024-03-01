import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CssVarsProvider } from "@mui/joy/styles";
import { store } from "./store/store.ts";
import App from "./App.tsx";
import { extendTheme } from "@mui/joy/styles";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                warning: {
                    500: "#df9a66",
                },
            },
        },
    },
});
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
