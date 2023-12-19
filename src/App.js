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

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
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
                                <div key={item.name}>
                                    <h6>{item.name}</h6>
                                    <p>{item.description}</p>
                                    <p>{item.price}</p>
                                </div>
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
