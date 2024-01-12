import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Input, Button, Typography } from "@mui/joy";
import { setLogginIn } from "../features/menuSlice.js";
import { Snackbar } from "@mui/joy";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (email === "admin@admin.com" && password === "admin") {
            dispatch(setLogginIn(true));
        } else {
            setOpen(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Snackbar
                autoHideDuration={3000}
                color="danger"
                variant="solid"
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                Usuario no encontrado
            </Snackbar>
            <Box
                component="form"
                onSubmit={handleLogin}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignSelf: "center",
                    alignItems: "center",
                    mt: "9em",
                    height: "100vh",
                    width: "100%",
                    gap: 2,
                    backgroundColor: "transparent",
                }}>
                <Typography
                    level="h4"
                    variant="outlined"
                    backgroundColor="rgb(157, 115, 76)"
                    sx={{ p: ".5em 1em", textWrap: "nowrap" }}>
                    {" "}
                    Iniciar sesión
                </Typography>
                <Input
                    autoComplete="true"
                    name="email"
                    label="Correo electrónico"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    autoComplete="current-password"
                    name="password"
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit" variant="solid" color="neutral">
                    Iniciar sesión
                </Button>
            </Box>
        </>
    );
};
