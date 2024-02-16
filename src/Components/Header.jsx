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
    Autocomplete,
} from "@mui/joy";
import { Instagram, Phone, Search, ShoppingBasket } from "@mui/icons-material";

import Cuenta from "../Components/Cuenta.tsx";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { cartItems, menuCategories } = useSelector((state) => state.menu);
    const navigate = useNavigate();
    const handleLogoOnClick = () => {
        navigate("/");
    };
    const [isSearchDrawerOpen, setSearchDrawer] = useState(false);
    const handleCartIconClick = () => {
        setIsDrawerOpen(true);
    };
    const handleSearchOnClick = () => {
        setSearchDrawer(true);
    };
    const flattenedOptions = Object.values(menuCategories).flatMap(
        (category) => category.data
    );

    return (
        <>
            <Box
                component="header"
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: ".3rem .2rem",
                    position: "sticky",
                    top: "0",
                    zIndex: 1100,
                    backgroundColor: "rgba(45, 33, 24, 1)",
                    backdropFilter: "blur(20px)",
                }}>
                <IconButton onClick={handleSearchOnClick} size={"lg"}>
                    <Search
                        sx={{ color: "white", transform: "rotate(70deg)" }}
                    />
                </IconButton>
                <Typography
                    level="h1"
                    onClick={handleLogoOnClick}
                    fontFamily={"Dancing Script, cursive"}
                    sx={{
                        userSelect: "none",
                        cursor: "pointer",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        letterSpacing: "0.07em",
                    }}>
                    La Concheta
                </Typography>
                <IconButton onClick={handleCartIconClick}>
                    <Badge
                        badgeContent={cartItems.length}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        sx={{
                            "& .MuiBadge-badge": {
                                fontWeight: "bold",
                                fontFamily: "Arial, sans-serif",
                            },
                        }}
                        variant="solid"
                        color="warning"
                        size="md">
                        <ShoppingBasket
                            sx={{
                                color: "white",
                                borderRadius: "50%",
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
            <Drawer
                size="sm"
                onClose={() => setSearchDrawer(false)}
                anchor="top"
                open={isSearchDrawerOpen}>
                <Autocomplete
                    options={flattenedOptions}
                    getOptionLabel={(option) => option.name || ""}
                />
            </Drawer>

            <Box
                variant="plain"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "space-evenly",
                    gap: "1%",
                    position: "sticky",
                    top: "3.5em",
                    zIndex: 1000,
                    p: ".4em",
                    backgroundColor: "rgba(162, 125, 94, 1)",
                }}>
                <Typography
                    level="title-md"
                    sx={{
                        textAlign: "center",
                        textWrap: "pretty",
                        color: "white",
                    }}>
                    Visítanos en Instagram!
                </Typography>
                <IconButton
                    component="a"
                    target="_blank"
                    href="https://www.instagram.com/laconchetarestaurante/"
                    variant="solid"
                    sx={{
                        backgroundColor: "#8d6749",
                    }}>
                    <Instagram
                        sx={{
                            color: "white",
                        }}
                    />
                </IconButton>

                <Typography
                    level="title-sm"
                    sx={{
                        textAlign: "center",
                        textWrap: "balance",
                        color: "white",
                    }}>
                    O...
                </Typography>
                <Button
                    component="a"
                    href="tel:962121602"
                    variant="solid"
                    sx={{
                        backgroundColor: "#8d6749",
                    }}
                    startDecorator={<Phone sx={{ color: "white" }} />}>
                    <Typography
                        sx={{
                            color: "white",
                        }}>
                        LLámanos!
                    </Typography>
                </Button>
            </Box>
        </>
    );
};
export default Header;
