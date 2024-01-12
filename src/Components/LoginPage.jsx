import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Input, Button, Typography } from "@mui/joy";
import { setLogginIn } from "../features/menuSlice.js";
import { Snackbar } from "@mui/joy";
import { InfoOutlined } from "@mui/icons-material";

export const LoginPage = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            const currentTime = new Date().getTime();
            const userTime = user.timestamp;
            const diffTime = currentTime - userTime;

            if (diffTime > 7 * 24 * 60 * 60 * 1000) {
                localStorage.removeItem("user");
                dispatch(setLogginIn(false));
            } else {
                dispatch(setLogginIn(true));
            }
        }
    }, [dispatch]);

    const handleLogin = (event) => {
        event.preventDefault();
        if (email === "admin@admin.com" && password === "admin") {
            localStorage.setItem(
                "user",
                JSON.stringify({ email, timestamp: new Date().getTime() })
            );
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
                    width: "100%",
                    height: "100vh",
                    gap: 2,
                    backgroundColor: "transparent",
                }}>
                <Typography
                    level="h4"
                    variant="solid"
                    color="warning"
                    sx={{ p: ".5em 1em", textWrap: "nowrap" }}>
                    {" "}
                    Iniciar sesión
                </Typography>
                <Input
                    autoComplete="true"
                    name="email"
                    label="Correo electrónico"
                    placeholder="Correo@electrónico.com"
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
                <Typography
                    startDecorator={<InfoOutlined />}
                    level="body-md"
                    variant="solid"
                    color="warning">
                    Solo miembros VIP de LaConcheta
                </Typography>
                <Button type="submit" variant="solid" color="neutral">
                    Iniciar sesión
                </Button>
            </Box>
        </>
    );
};
