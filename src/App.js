import "./App.css";

import {
    AppWrapper,
    Header,
    TelContact,
    CategoriesWrapper,
    ItemsWrapper,
} from "./AppStyle.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories, selectCategory } from "./features/menuSlice";
import { CategoryCard } from "./Components/CategoryCard.jsx";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const theme = createTheme({
    palette: {
        primary: {
            main: red[400],
        },
    },
});
function App() {
    const dispatch = useDispatch();

    const { selectedCategory, menuCategories } = useSelector(
        (state) => state.menu
    );

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const handleOnClick = () => {
        dispatch(selectCategory({ data: null }));
    };
    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <Header>
                    <h1>La Concheta</h1>

                    <TelContact>
                        <label htmlFor="callUs">
                            ¿Te gustaría reservar una mesa?
                        </label>
                        <Button href="tel:962121602">LLámanos!</Button>
                    </TelContact>
                </Header>
                {Array.isArray(selectedCategory) ? (
                    <ItemsWrapper>
                        <span onClick={handleOnClick}>Atrás</span>
                        {selectedCategory.map((item) => {
                            return (
                                <Card variant="outlined" key={item.name}>
                                    <CardHeader>{item.name}</CardHeader>
                                    <CardContent>
                                        {item.description}
                                        <p>{item.price}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </ItemsWrapper>
                ) : (
                    <CategoriesWrapper>
                        {menuCategories &&
                            Object.values(menuCategories).map(
                                ([key, value]) => {
                                    return (
                                        <CategoryCard
                                            category={{ name: key, ...value }}
                                            key={key}
                                        />
                                    );
                                }
                            )}
                    </CategoriesWrapper>
                )}
            </AppWrapper>
        </ThemeProvider>
    );
}

export default App;
