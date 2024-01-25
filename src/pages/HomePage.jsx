import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Typography } from "@mui/joy";
import { register } from "swiper/element/bundle";
import { EffectFade } from "swiper/modules";
import "swiper/css";

const HomePage = () => {
    const navigate = useNavigate();
    useDocumentTitle("Saborea la Auténtica Cocina Mediterránea en LaConcheta");
    const { menuCategories } = useSelector((state) => state.menu);

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
                            <img
                                style={{
                                    height: "200px",
                                    width: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                }}
                                src={category[1].url}
                                alt={
                                    category[0] + " del restaurante La Concheta"
                                }
                            />
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
