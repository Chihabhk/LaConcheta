import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const CartaPage = () => {
    useDocumentTitle("Carta de la casa");
    const menuCategories = useSelector(
        (state: MenuState) => state.menuCategories
    );
    useEffect(() => {
        console.log(menuCategories);
    }, [menuCategories]);
    return (
        <>
            {menuCategories && menuCategories.length > 0 ? (
                <ItemCard item={menuCategories[3].data[0]} />
            ) : (
                <h1>no</h1>
            )}
        </>
    );
};

export default CartaPage;
