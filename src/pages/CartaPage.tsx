import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";
const CartaPage = () => {
    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state.menu
    );
    const pagination = {
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return (
                "<span class='" +
                className +
                "'>" +
                menuCategories[index].name +
                "</span>"
            );
        },
    };

    return (
        <main>
            {loading === "succeeded" && (
                <Swiper
                    className="mySwiper"
                    style={{ padding: "20px" }}
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
