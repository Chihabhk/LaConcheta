import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MenuState } from "../types";
import { Chip } from "@mui/joy";
import ItemCard from "../Components/ItemCard";

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
                        <SwiperSlide>
                            <Chip key={Category.id}>{Category.name}</Chip>
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
                                return <ItemCard item={item}></ItemCard>;
                            })}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </main>
    );
};

export default CartaPage;
