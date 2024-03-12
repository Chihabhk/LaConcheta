import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import { MenuState } from "../types";
import { Chip } from "@mui/joy";
import ItemCard from "../Components/ItemCard.tsx";

const CartaPage = () => {
    const menuCategories = useSelector(
        (state: MenuState) => state.menu.menuCategories
    );
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <main>
            <Swiper
                modules={[Controller]}
                slidesPerView={"auto"}
                onSwiper={(swiper) => setFirstSwiper}
                controller={{ control: secondSwiper }}>
                {menuCategories.map((Category) => {
                    return (
                        <SwiperSlide key={Category.id}>
                            <Chip>{Category.name}</Chip>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <Swiper
                modules={[Controller]}
                onSwiper={(swiper) => setSecondSwiper}
                controller={{ control: firstSwiper }}>
                {menuCategories.map((Category) => {
                    return (
                        <SwiperSlide key={Category.id}>
                            {Category.data.map((item) => {
                                return (
                                    <ItemCard
                                        key={item.id}
                                        item={item}></ItemCard>
                                );
                            })}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </main>
    );
};

export default CartaPage;
