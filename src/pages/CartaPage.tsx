import React from "react";
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
        <div className="swiper-container">
            {loading === "succeeded" &&
                menuCategories.map((category) =>
                    category.data.map((item) => (
                        <div key={item.id} className="swiper-slide">
                            <ItemCard item={item} />
                        </div>
                    ))
                )}
        </div>
    );
};

export default CartaPage;
