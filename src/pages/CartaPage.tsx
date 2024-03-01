import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";

const CartaPage = () => {
    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state.menu
    );

    return (
        <Swiper style={{ padding: ".8rem" }}>
            {loading === "succeeded" &&
                menuCategories.map((category) => (
                    <SwiperSlide key={category.id}>
                        {category.data.map((item) => (
                            <ItemCard key={item.id} item={item}></ItemCard>
                        ))}
                    </SwiperSlide>
                ))}
        </Swiper>
    );
};

export default CartaPage;
