import "./App.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { CategoryCard } from "./Components/CategoryCard.jsx";
import { getAllCategories } from "./features/menuSlice";
import logo from "./assets/logo.png";

const AppWrapper = styled.div`
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f9fa;
`;

const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1em;

    > img {
        width: 80%;
        max-width: 300px;
        height: 5em;
        object-fit: cover;
    }
`;
const TelContact = styled.div`
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em 0;

    > a {
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
        font-size: 1em;
        padding: 0.5em 1em;
        border-radius: 7px;
        background-color: #e7f1ff;
        transition: all 0.3s ease;
        display: inline-block;

        &:hover {
            background-color: #cfe2ff;
            color: #0056b3;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
    }
`;

const CategoriesWrapper = styled.section`
    position: relative;
    width: 80%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1.5em;
    padding: 1em;
    transition: grid-gap 0.3s ease;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0.5em;
        grid-gap: 1em;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const ItemsWrapper = styled.section`
    position: relative;
    width: 90%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1.5em;
    padding: 1em;
    transition: grid-gap 0.3s ease;
`;

function App() {
    const dispatch = useDispatch();

    const { selectedCategory, menuCategories } = useSelector(
        (state) => state.menu
    );

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    const handleOnClick = () => {};
    return (
        <AppWrapper>
            <Header>
                <img src={logo} alt="LaConcheta-logo" onClick={handleOnClick} />
                <TelContact>
                    <label htmlFor="callUs">
                        Quieres reservar mesa o tienes dudas?
                    </label>
                    <a href="tel:962121602">LLámanos!</a>
                </TelContact>
            </Header>
            {selectedCategory && selectedCategory.length > 0 ? (
                <ItemsWrapper>
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
                        Object.values(menuCategories).map(([key, value]) => {
                            return (
                                <CategoryCard
                                    category={{ name: key, ...value }}
                                    key={key}
                                />
                            );
                        })}
                </CategoriesWrapper>
            )}
        </AppWrapper>
    );
}

export default App;
