import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../features/menuSlice.js";

import { Header } from "./Header.jsx";
import { CategoriesPage } from "./CategoriesPage.jsx";
import { CartPage } from "./CartPage.jsx";
import ProductsPage from "./ProductsPage.jsx";
export const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

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
};
