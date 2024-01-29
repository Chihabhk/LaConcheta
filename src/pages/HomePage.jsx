import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Typography, Skeleton, AspectRatio } from "@mui/joy";
import { register } from "swiper/element/bundle";
import { EffectFade } from "swiper/modules";
import "swiper/css";

const HomePage = () => {
    useDocumentTitle("Saborea la Auténtica Cocina Mediterránea en LaConcheta");
    const navigate = useNavigate();
    const { menuCategories } = useSelector((state) => state.menu);
    const [loading, setLoading] = useState(true);
    const imgOnLoad = () => {
        setLoading(false);
    };

    useEffect(() => {
        // Register Swiper web component
        register();
    }, []);

    return (
        <div style={{ padding: ".4em" }}>
            <swiper-container
                slides-per-view="1"
                modules={[EffectFade]}
                effect="coverflow"
                centered-slides="true"
                autoplay="true"
                speed={1000}
                Scrollbar="true"
                style={{ height: "auto" }}>
                {Object.entries(menuCategories).map((category, key) => {
                    return (
                        <swiper-slide
                            key={key}
                            onClick={() => {
                                navigate(`/categories/${category[0]}`);
                            }}>
                            <AspectRatio ratio="21/9">
                                <Skeleton
                                    loading={loading}
                                    variant="rectangular">
                                    <img
                                        onLoad={imgOnLoad}
                                        src={
                                            loading
                                                ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                                : category[1].url
                                        }
                                        alt={
                                            category[0] +
                                            " del restaurante La Concheta"
                                        }
                                    />
                                </Skeleton>
                            </AspectRatio>
                            <Typography
                                alignSelf={"center"}
                                level="h3"
                                sx={{ mb: 2 }}>
                                {category[0]}
                            </Typography>
                        </swiper-slide>
                    );
                })}
            </swiper-container>
            <Typography level="h1" component="h1" gutterBottom>
                Bienvenido a nuestro restaurante La Concheta
            </Typography>
            <Typography level="body-lg" gutterBottom>
                Ofrecemos una variedad de deliciosos platos para satisfacer
                todos los gustos.
            </Typography>

            <Typography level="h4" component="h2" gutterBottom>
                Lo que dicen nuestros clientes
            </Typography>
        </div>
    );
};
export default HomePage;
