import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, IconButton, Button } from "@mui/joy";
import { selectCategory, setCartView } from "../features/menuSlice";
import { Phone, ShoppingBasket } from "@mui/icons-material";

export const Header = () => {
    const dispatch = useDispatch();
    const handleLogoOnClick = () => {
        dispatch(selectCategory({ data: null }));
    };
    const handleCartIconClick = () => {
        dispatch(selectCategory({ data: null }));
        dispatch(setCartView());
    };
    const [ocultarHeader, setOcultarHeader] = useState(false);
    useEffect(() => {
        let ultimoScrollTop = 0;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos > ultimoScrollTop) {
                setOcultarHeader(true);
            } else {
                setOcultarHeader(false);
            }
            ultimoScrollTop = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                <IconButton variant="plain" onClick={handleCartIconClick}>
                    <ShoppingBasket
                        sx={{
                            color: "#fff",
                            border: "2px solid #fff",
                            borderRadius: "50%",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                        }}
                    />
                </IconButton>
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
                    mb: ".5em",
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
