import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

import { CategoryCard } from "./Components/CategoryCard.jsx";
import { getAllCategories } from "./features/menuSlice";
import logo from "./assets/logo.png";

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f9fa;
    width: 100%;
    > div.main {
        width: 100%;
    }
`;

const Header = styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: 100%;
        height: 7em;
        object-fit: cover;
    }
`;
const TelContact = styled.div`
    position: relative;
    width: 100%;
    height: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 1em;

    > a {
        text-decoration: none;
        color: #007bff; // Example color
        font-weight: bold;
        font-size: 1.2em;
        margin-left: 0.5em;
        border-radius: 7px;
        background-color: bisque;
        padding: 0.5em;
        transition: background-color 0.3s;

        &:hover {
            background-color: #f0f0f0; // Example hover color
        }
    }
`;

const CategoriesWrapper = styled.div`
    position: relative;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
    grid-auto-rows: minmax(150%, auto);
    grid-gap: 0.5em;
    list-style: none;
    padding: 0.5em;
`;

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const { menuCategories } = useSelector((state) => state.menu);

    return (
        <AppWrapper>
            <Header>
                <img src={logo} alt="LaConcheta-logo" />
                <TelContact>
                    <label htmlFor="callUs">
                        Quieres reservar mesa o tienes dudas?
                    </label>
                    <a href="tel:962121602">LLámanos!</a>
                </TelContact>
            </Header>
            <div className="main">
                <CategoriesWrapper>
                    {menuCategories &&
                        Object.values(menuCategories).map(([key, value]) => {
                            return (
                                <CategoryCard
                                    category={{ name: key, ...value }}
                                    key={key}
                                />
                            );
                        })}
                </CategoriesWrapper>
            </div>
        </AppWrapper>
    );
}

export default App;
