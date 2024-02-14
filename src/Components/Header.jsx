import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    Card,
    Drawer,
    ModalClose,
    Box,
    Typography,
    Badge,
    IconButton,
    Button,
} from "@mui/joy";
import { Instagram, Phone, ShoppingBasket } from "@mui/icons-material";

import Cuenta from "../Components/Cuenta.tsx";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { cartItems } = useSelector((state) => state.menu);
    const navigate = useNavigate();
    const handleLogoOnClick = () => {
        // navigate("/");
    };
    const handleCartIconClick = () => {
        setIsDrawerOpen(true);
    };
    const [ocultarHeader] = useState(false);

    return (
        <>
            <Box
                component="header"
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "0.5rem 0",
                    position: "sticky",
                    top: "0",
                    zIndex: 1100,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(20px)",
                }}>
                <Typography
                    level="h1"
                    onClick={handleLogoOnClick}
                    fontFamily={"Dancing Script, cursive"}
                    sx={{
                        userSelect: "none",
                        cursor: "pointer",
                        color: "#fff",
                        fontWeight: "bold",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        letterSpacing: "0.05em",
                    }}>
                    La Concheta
                </Typography>
                <IconButton onClick={handleCartIconClick}>
                    <Badge
                        badgeContent={cartItems.length}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        showZero
                        sx={{
                            "& .MuiBadge-badge": {
                                fontSize: "0.8rem",
                                boxShadow: "0 0 0 2px #c369",
                                fontWeight: "bold",
                                fontFamily: "Arial, sans-serif",
                            },
                        }}
                        variant="solid"
                        color="warning"
                        size="md">
                        <ShoppingBasket
                            sx={{
                                color: "#fff",
                                border: "2px solid #2C1F16",
                                borderRadius: "50%",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </Badge>
                </IconButton>
                <Drawer
                    anchor="right"
                    color="warning"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    size="md">
                    <ModalClose />
                    {cartItems.length > 0 ? (
                        <Cuenta />
                    ) : (
                        <>
                            <Card
                                variant="soft"
                                color="warning"
                                sx={{
                                    p: 2,
                                    flexGrow: "1",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    gap: "2rem",
                                }}>
                                <Typography level="title-lg" align="center">
                                    Tu carrito está vacío
                                </Typography>
                                <Typography
                                    level="body-md"
                                    sx={{
                                        textAlign: "center",
                                    }}>
                                    Para continuar, añade tus platos favoritos
                                    al carrito desde nuestro menú.
                                </Typography>
                                <Button
                                    variant="solid"
                                    color="warning"
                                    sx={{
                                        display: "block",
                                        p: "auto",
                                    }}
                                    onClick={() => {
                                        setIsDrawerOpen(false);
                                        !window.location.hash.startsWith(
                                            "#/carta/"
                                        ) &&
                                            navigate(
                                                "/carta/Entrantes%20Calientes"
                                            );
                                    }}>
                                    <Typography
                                        color="#fff"
                                        level="body-lg"
                                        fontWeight="bold">
                                        Añadir platos
                                    </Typography>
                                </Button>
                            </Card>
                        </>
                    )}
                </Drawer>
            </Box>
            <Box
                variant="plain"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    position: "sticky",
                    top: "4em",
                    zIndex: 1000,
                    p: ".5em",
                    backdropFilter: "blur(20px)",
                    transform: ocultarHeader
                        ? "translateY(-100%)"
                        : "translateY(0%)",
                    transition:
                        "transform 0.2s cubic-bezier(0.22, 0.61, 0.36, 1)",
                }}>
                <IconButton
                    component="a"
                    target="_blank"
                    href="https://www.instagram.com/laconchetarestaurante/"
                    variant="plain">
                    <Instagram
                        sx={{
                            color: "#2C1F16",
                            // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        }}
                    />
                </IconButton>
                <Typography
                    level="title-sm"
                    sx={{
                        textAlign: "center",
                        textWrap: "balance",
                    }}>
                    Visítanos en Instagram! o...
                </Typography>
                <Button
                    component="a"
                    href="tel:962121602"
                    variant="outlined"
                    color="warning"
                    startDecorator={<Phone sx={{ color: "#2C1F16" }} />}>
                    <Typography>LLámanos!</Typography>
                </Button>
            </Box>
        </>
    );
};
export default Header;
