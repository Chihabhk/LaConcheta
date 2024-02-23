import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../Components/ItemCard";
import { MenuState } from "../types";

const CartaPage = () => {
    const menuCategories = useSelector(
        (state: MenuState) => state.menuCategories
    );

    return (
        <Swiper>
            {menuCategories.length > 0
                ? menuCategories.map((category) =>
                      category.data.map((item) => (
                          <SwiperSlide key={item.id}>
                              <ItemCard item={item}></ItemCard>
                          </SwiperSlide>
                      ))
                  )
                : undefined}
        </Swiper>
    );
};

export default CartaPage;
