import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Input, Button, Typography, Snackbar } from "@mui/joy";
import { setLoggedIn } from "../features/menuSlice.js";
import { InfoOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const LoginPage = () => {
    useDocumentTitle("LaConcheta - Inicio Sesión");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        if (email === "admin@admin.com" && password === "laconchetA") {
            localStorage.setItem(
                "user",
                JSON.stringify({ email, timestamp: new Date().getTime() })
            );
            dispatch(setLoggedIn(true));
            navigate("/");
        } else {
            setSnackBarOpen(true);
        }
    };

    return (
        <>
            <Snackbar
                autoHideDuration={3000}
                color="danger"
                variant="solid"
                open={snackBarOpen}
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
                    placeholder="correo@electrónico.com"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    autoComplete="true"
                    name="password"
                    label="Contraseña"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endDecorator={
                        <Button
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            variant="text">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </Button>
                    }
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
export default LoginPage;
