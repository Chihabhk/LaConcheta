import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Chip, Typography } from "@mui/joy";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import ItemCard from "../Components/ItemCard";
import { MenuState } from "../types";

const CartaPage = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const { menuCategories, loading } = useSelector(
        (state: MenuState) => state.menu
    );

    return (
        <main>
            {loading === "succeeded" && (
                <>
                    <Swiper
                        modules={[Thumbs, Pagination, Navigation]}
                        thumbs={{ swiper: thumbsSwiper }}
                        style={{ padding: ".4em" }}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoHeight={true}
                        navigation={{
                            nextEl: ".custom-next-button",
                            prevEl: ".custom-prev-button",
                        }}>
                        {menuCategories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <Typography
                                    level="h2"
                                    sx={{ justifyContent: "center", mb: 0.8 }}>
                                    {category.name}
                                </Typography>
                                {category.data.map((item) => (
                                    <ItemCard key={item.id} item={item} />
                                ))}
                            </SwiperSlide>
                        ))}
                        <div className="custom-next-button">
                            <ArrowForward />
                        </div>
                        <div className="custom-prev-button">
                            <ArrowBack />
                        </div>
                    </Swiper>

                    <Swiper
                        modules={[Thumbs]}
                        // onSwiper={setThumbsSwiper}
                        watchSlidesProgress
                        onSlideChange={() => console.log("slide change")}>
                        {menuCategories.map((category) => (
                            <SwiperSlide key={category.id}>
                                <Chip variant="outlined">{category.name}</Chip>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </main>
    );
};

export default CartaPage;
