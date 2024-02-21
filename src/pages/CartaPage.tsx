import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/joy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import ItemCard from "../Components/ItemCard.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { useSwipeable } from "react-swipeable";
import { State, Category } from "../types.ts";

function CartaPage() {
    useDocumentTitle("LaConcheta - Carta de la casa");
    const refs = useRef([]);
    const menuCategories = useSelector(
        (state: State) => state.menu.menuCategories
    );
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const categoryIndex = Object.keys(menuCategories).indexOf(
        categoryName || ""
    );
    const [value, setValue] = useState(
        categoryIndex === -1 ? 2 : categoryIndex
    );

    useEffect(() => {
        setValue(categoryIndex === -1 ? 2 : categoryIndex);
    }, [categoryIndex]);

    const handleTabChange = (newValue) => {
        const categoryId = Object.keys(menuCategories)[newValue];
        navigate(`/carta/${categoryId}`);
        let element = document.getElementById("tabs-container");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                inline: "center",
            });
        }
    };

    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setValue((value + 1) % Object.keys(menuCategories).length),
        onSwipedRight: () =>
            setValue(
                (value - 1 + Object.keys(menuCategories).length) %
                    Object.keys(menuCategories).length
            ),
    });

    return (
        <Swiper
            onSlideChange={(swiper) => handleTabChange(swiper.activeIndex)}
            {...handlers}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}>
            {Object.entries(menuCategories).map(
                ([key, category]: [string, Category], index: number) => (
                    <SwiperSlide key={category.id}>
                        <Typography
                            level="h4"
                            textAlign={"left"}
                            fontSize={18}
                            fontFamily={"Arial, sans-serif"}
                            sx={{
                                letterSpacing: ".01em",
                                textAlign: "center",
                                textShadow:
                                    value === index
                                        ? "0px 2px 2px rgba(0, 0, 0, 0.5)"
                                        : "inherit",
                                color: value === index ? "#F2E3CA" : "inherit",
                            }}>
                            {key}
                        </Typography>
                        {category.data.map((item) => (
                            <ItemCard item={item} key={item.id} />
                        ))}
                    </SwiperSlide>
                )
            )}
        </Swiper>
    );
}

export default CartaPage;
