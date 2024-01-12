import "./App.css";

import * as React from "react";
import { useSelector } from "react-redux";

import { Header } from "./Components/Header.jsx";
import { CategoriesPage } from "./Components/CategoriesPage.jsx";
import { CartPage } from "./Components/CartPage.jsx";
import ProductsPage from "./Components/ProductsPage.jsx";

function App() {
    const { selectedCategory, isCartView } = useSelector((state) => state.menu);

    return (
        <>
            <Header />
            {Array.isArray(selectedCategory) ? (
                <ProductsPage />
            ) : isCartView ? (
                <CartPage />
            ) : (
                <CategoriesPage />
            )}
        </>
    );
}

export default App;
