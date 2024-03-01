import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";
import "swiper/css/pagination";

const CartaPage = () => {
    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state.menu
    );
    const pagination = {
        clickable: true,
        renderBullet: function (index) {
            return "<span>" + menuCategories[index].name + "</span>";
        },
    };
    return (
        <main>
            {loading === "succeeded" && (
                <Swiper
                    hashNavigation={{
                        watchState: true,
                        replaceState: true,
                    }}
                    pagination={pagination}
                    navigation={true}
                    style={{ padding: ".5rem" }}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoHeight={true}
                    modules={[Pagination, Navigation, HashNavigation]}>
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
