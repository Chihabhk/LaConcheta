import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard";
import { MenuState } from "../types";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const CartaPage = () => {
    useDocumentTitle("Carta de la casa");
    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state
    );
    return (
        <Suspense>
            <ItemCard item={menuCategories[3].data[2]} />
        </Suspense>
    );
};

export default CartaPage;
