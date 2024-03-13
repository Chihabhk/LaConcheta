import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import { Chip } from "@mui/joy";
import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";
import "swiper/css";

const CartaPage = () => {
    const menuCategories = useSelector(
        (state: MenuState) => state.menu.menuCategories
    );

    const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
    const [secondSwiper, setSecondSwiper] = useState<SwiperClass | null>(null);

    return (
        <main>
            <Swiper
                modules={[Controller]}
                slidesPerView={3}
                centeredSlides
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}>
                {menuCategories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <Chip>{category.name}</Chip>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[Controller]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                autoHeight>
                {menuCategories.map((category) => (
                    <SwiperSlide key={category.id}>
                        {category.data.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    );
};

export default CartaPage;
