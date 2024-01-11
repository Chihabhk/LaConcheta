import "./App.css";

import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getAllCategories,
    selectCategory,
    setCartView,
} from "./features/menuSlice";
import { Button } from "@mui/joy";
import { Card, CardContent } from "@mui/joy";
import { Box, IconButton, Typography } from "@mui/joy";

import { CartPage } from "./Components/CartPage.js";
import { Phone, ShoppingBasket } from "@mui/icons-material";
import { CategoriesPage } from "./Components/CategoriesPage.js";
import { useColorScheme } from "@mui/joy";

function App() {
    const { setMode } = useColorScheme();
    const dispatch = useDispatch();

    const { selectedCategory, isCartView } = useSelector((state) => state.menu);

    useEffect(() => {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            setMode("dark");
        } else {
            setMode("light");
        }
        dispatch(getAllCategories());
    }, [dispatch, setMode]);

    const handleLogoOnClick = () => {
        dispatch(selectCategory({ data: null }));
    };
    const handleCartIconClick = () => {
        dispatch(selectCategory({ data: null }));
        dispatch(setCartView());
    };

    const [ocultarHeader, setOcultarHeader] = React.useState(false);

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
            <>
                <Box
                    component="header"
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "0.5rem 0",
                        position: "fixed",
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
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        position: "sticky",
                        top: "-1px",
                        zIndex: 1000,
                        maxHeight: "2em",
                        p: "1em",
                        backdropFilter: "blur(20px)",
                        transform: ocultarHeader
                            ? "translateY(0)"
                            : "translateY(100%)",
                        transition:
                            "transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)",
                    }}
                    variant="plain">
                    <Typography>¿Te gustaría reservar una mesa?</Typography>
                    <Button
                        component="a"
                        href="tel:962121602"
                        variant="outlined"
                        startDecorator={<Phone />}>
                        LLámanos!
                    </Button>
                </Box>
            </>

            {Array.isArray(selectedCategory) ? (
                <>
                    {selectedCategory.map((item) => {
                        return (
                            <Card variant="outlined" key={item.name}>
                                <Typography level="title-lg">
                                    {item.name}
                                </Typography>
                                <CardContent>
                                    {item.description}
                                    {/* <IconButton>
                                        <Add />
                                    </IconButton> */}
                                    <Typography level="body-xs">
                                        Precio:
                                        {" " + item.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        );
                    })}
                </>
            ) : isCartView ? (
                <CartPage />
            ) : (
                <CategoriesPage />
            )}
        </>
    );
}

export default App;
