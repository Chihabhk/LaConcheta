import extendTheme from "@mui/joy";

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    solidBg: "#007bff",
                    solidHoverBg: "#0056b3",
                    solidActiveBg: "#004085",
                    outlinedColor: "#007bff",
                    outlinedBorder: "#007bff",
                    outlinedHoverBg: "#e9ecef",
                    outlinedHoverBorder: "#007bff",
                    outlinedActiveBg: "#dbe4ea",
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    solidBg: "#0056b3",
                    solidHoverBg: "#004085",
                    solidActiveBg: "#002858",
                    outlinedColor: "#0056b3",
                    outlinedBorder: "#0056b3",
                    outlinedHoverBg: "#343a40",
                    outlinedHoverBorder: "#0056b3",
                    outlinedActiveBg: "#23272b",
                },
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 14,
            body1: {
                fontSize: "1rem",
            },
        },
        components: {
            JoyButton: {
                styleOverrides: {
                    root: {
                        fontWeight: 500,
                        textTransform: "none",
                    },
                },
            },
        },
    },
});
