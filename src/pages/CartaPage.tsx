import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";
import "swiper/css";
import "swiper/css/pagination";

const CartaPage = () => {
    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state.menu
    );
    const pagination = {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return "<span class='" + className + "'>" + (index + 1) + "</span>";
        },
    };

    return (
        <main>
            {loading === "succeeded" && (
                <Swiper
                    modules={[Pagination]}
                    pagination={pagination}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoHeight={true}>
                    {menuCategories.map((category) => (
                        <SwiperSlide key={category.id}>
                            {" "}
                            {category.data.map((item) => (
                                <ItemCard key={item.id} item={item}></ItemCard>
                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </main>
    );
};

export default CartaPage;
