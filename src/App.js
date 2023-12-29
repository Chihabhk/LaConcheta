import "./App.css";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LogoPaella from "./assets/LogoPaella.jpg";
import {
    getAllCategories,
    selectCategory,
    setCartView,
} from "./features/menuSlice";
import { CategoryCard } from "./Components/CategoryCard.jsx";
import { Button } from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { Box, IconButton, Sheet, Typography } from "@mui/joy";
import { CartPage } from "./Components/CartPage.js";
import { Phone, ShoppingBasket } from "@mui/icons-material";

function App() {
    const dispatch = useDispatch();
    const { selectedCategory, menuCategories, isCartView } = useSelector(
        (state) => state.menu
    );
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const handleLogoOnClick = () => {
        dispatch(selectCategory({ data: null }));
    };
    const handleCartIconClick = () => {
        dispatch(selectCategory({ data: null }));
        dispatch(setCartView());
    };
    return (
        <>
            <Sheet
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "sticky",
                    top: "0",
                    zIndex: "999",
                }}>
                <Box
                    component="header"
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        backgroundImage: `url(${LogoPaella})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top left", // Cambia esto para ajustar la posición de la imagen de fondo
                        backdropFilter: "blur(30px)",
                        padding: "0.5rem 0",
                        mb: "1em",
                    }}>
                    <Typography
                        level="h1"
                        onClick={handleLogoOnClick}
                        sx={{
                            color: "#fff", // Cambia el color del texto a blanco
                            fontFamily: "Arial, sans-serif", // Usa una fuente moderna
                            fontWeight: "bold", // Haz que el texto sea negrita
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Agrega una sombra de texto para hacer que el texto resalte
                            letterSpacing: "0.05em", // Espacia un poco las letras para un look más moderno
                        }}>
                        La Concheta
                    </Typography>
                    <IconButton variant="plain" onClick={handleCartIconClick}>
                        <ShoppingBasket
                            sx={{
                                p: "0.5em",
                                color: "#fff", // Cambia el color del icono a blanco
                                border: "2px solid #fff", // Agrega un borde blanco alrededor del icono
                                borderRadius: "50%", // Hace que el icono sea circular
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Agrega una sombra al icono para que resalte
                            }}
                        />
                    </IconButton>{" "}
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        mb: "1em",
                    }}
                    variant="plain">
                    <label htmlFor="callUs">
                        ¿Te gustaría reservar una mesa?
                    </label>
                    <Button
                        component="a"
                        href="tel:962121602"
                        variant="outlined"
                        startIcon={<Phone />}>
                        LLámanos!
                    </Button>
                </Box>
            </Sheet>
            {Array.isArray(selectedCategory) ? (
                <Box>
                    {selectedCategory.map((item) => {
                        return (
                            <Card variant="outlined" key={item.name}>
                                <CardHeader title={item.name} />
                                <CardContent>
                                    {item.description}
                                    {/* <IconButton>
                                        <Add />
                                    </IconButton> */}
                                    <p>{item.price}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Box>
            ) : isCartView ? (
                <CartPage />
            ) : (
                <Box>
                    {menuCategories &&
                        Object.values(menuCategories).map(([key, value]) => {
                            return (
                                <CategoryCard
                                    category={{ name: key, ...value }}
                                    key={key}
                                />
                            );
                        })}
                </Box>
            )}
        </>
    );
}

export default App;
