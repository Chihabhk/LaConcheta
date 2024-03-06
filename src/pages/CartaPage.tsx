import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ItemCard from "../Components/ItemCard.tsx";
import { MenuState } from "../types";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typography } from "@mui/joy";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const CartaPage = () => {
    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state.menu
    );

    return (
        <main>
            {loading === "succeeded" && (
                <>
                    <Swiper
                        style={{ padding: ".4em" }}
                        modules={[Pagination, Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoHeight={true}
                        navigation={true}
                        navigation-next-el=".custom-next-button"
                        navigation-prev-el=".custom-prev-button">
                        {menuCategories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <Typography
                                    level="h2"
                                    sx={{
                                        justifyContent: "center",
                                        mb: 0.8,
                                    }}>
                                    {category.name}
                                </Typography>
                                {category.data.map((item) => (
                                    <ItemCard key={item.id} item={item} />
                                ))}
                            </SwiperSlide>
                        ))}
                        <div className="pagination-next-button">
                            <ArrowBack />
                        </div>
                        <div className="pagination-prev-button">
                            <ArrowForward />
                        </div>
                    </Swiper>
                </>
            )}
        </main>
    );
};

export default CartaPage;
