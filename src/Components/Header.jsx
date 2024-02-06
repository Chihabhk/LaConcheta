import { useEffect, useState } from "react";
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
import { Phone, ShoppingBasket } from "@mui/icons-material";
import CuentaPage from "../pages/CuentaPage.tsx";

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
    const [ocultarHeader, setOcultarHeader] = useState(false);
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY;
            if (scrollDifference > 50) {
                setOcultarHeader(true);
            } else if (scrollDifference < -10) {
                setOcultarHeader(false);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

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
                    sx={{
                        color: "#fff",
                        fontFamily: "Arial, sans-serif",
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
                                border: "2px solid #fff",
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
                    size="sm"
                    sx={{
                        "& .MuiDrawer-paper": {
                            // width: "100%",
                            // maxWidth: "400px",
                            backgroundColor: "rgba(0,0,0,0.7)",
                        },
                    }}>
                    <ModalClose />
                    {cartItems.length > 0 ? (
                        <CuentaPage />
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
                    justifyContent: "space-evenly",
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
                <Typography
                    level="title-lg"
                    sx={{ textAlign: "center", textWrap: "balance " }}>
                    ¿Te gustaría reservar una mesa?
                </Typography>
                <Button
                    component="a"
                    href="tel:962121602"
                    variant="outlined"
                    startDecorator={<Phone />}>
                    <Typography>LLámanos!</Typography>
                </Button>
            </Box>
        </>
    );
};
export default Header;
