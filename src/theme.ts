import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                neutral: {
                    500: "#eee",
                },
                warning: {
                    500: "#df9a66",
                },
            },
        },
    },
});
