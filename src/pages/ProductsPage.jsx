import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";
import ItemCard from "../Components/ItemCard.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

function ProductsPage() {
    useDocumentTitle("LaConcheta - Carta de la casa");
    const { menuCategories } = useSelector((state) => state.menu);
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const [value, setValue] = useState(categoryName);

    // Función para manejar el cambio de pestaña
    const handleTabChange = (event, newValue) => {
        navigate(`/categories/${Object.keys(menuCategories)[newValue]}`);
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                sx={{
                    maxWidth: "100%",
                }}
                aria-label="Scrollable tabs"
                orientation="vertical"
                onChange={handleTabChange}
                defaultValue={Object.keys(menuCategories).indexOf(value)}>
                <TabList
                    // sticky="bottom"
                    tabFlex={1}
                    sx={{
                        position: "sticky",
                        top: 0, // Ajusta según sea necesario
                        bgcolor: "background.paper",
                        borderRadius: "8px", // O '0px' para bordes completamente cuadrados
                        "& .MuiTab-root": {
                            // Aplicando estilos a cada Tab individualmente
                            width: "100px", // Ajusta según sea necesario para que sea cuadrado
                            height: "100px", // Ajusta según sea necesario para que sea cuadrado
                            borderRadius: "8px", // O '0px' para bordes completamente cuadrados
                            margin: "8px", // Agrega espacio alrededor de las pestañas si es necesario
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            typography: "body1",
                        },
                    }}>
                    {Object.entries(menuCategories).map(([key], index) => (
                        <Tab
                            key={index}
                            sx={{
                                maxHeight: "60px",
                                "&.Mui-selected": {
                                    color: "primary.main",
                                    fontWeight: "bold",
                                },
                            }}>
                            {key}
                        </Tab>
                    ))}
                </TabList>
                {Object.entries(menuCategories).map(([key, value], index) => (
                    <TabPanel key={index} value={index}>
                        {value.data.map((item, key) => (
                            <ItemCard item={item} key={key} />
                        ))}
                    </TabPanel>
                ))}
            </Tabs>
        </>
    );
}

export default ProductsPage;
