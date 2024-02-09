import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel, Typography } from "@mui/joy";
import ItemCard from "../Components/ItemCard.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

function CartaPage() {
    useDocumentTitle("LaConcheta - Carta de la casa");
    const { menuCategories } = useSelector((state) => state.menu);
    const navigate = useNavigate();
    const { categoryName } = useParams();
    const categoryIndex = Object.keys(menuCategories).indexOf(categoryName);
    const [value, setValue] = useState(
        categoryIndex === -1 ? 2 : categoryIndex
    );

    useEffect(() => {
        setValue(categoryIndex === -1 ? 2 : categoryIndex);
    }, [categoryIndex]);

    const handleTabChange = (event, newValue) => {
        navigate(`/carta/${Object.keys(menuCategories)[newValue]}`);
    };

    return (
        <Tabs
            aria-label="Vertical tabs"
            orientation="vertical"
            onChange={handleTabChange}
            value={value}
            sx={{
                backgroundColor: "transparent",
                marginLeft: "8rem",
                marginRight: "0.8rem",
            }}>
            <TabList
                sx={{
                    position: "fixed",
                    top: "8rem",
                    "&::-webkit-scrollbar": { display: "none" },
                    width: "7rem",
                    ml: "-7.2rem",
                    gap: "0.8rem",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "warning", // Usa el color warning aquí
                    },
                    maxHeight: "calc(100vh - 9.5rem )",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}>
                {Object.entries(menuCategories).map(([key], index) => (
                    <Tab
                        key={index}
                        sx={{
                            width: "100%",
                            minHeight: "3rem",
                            textAlign: "center",
                            backgroundColor: "#f5f5f5",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "8px",
                            p: "2em 10px",
                        }}>
                        <Typography level="h4" color="warning">
                            {key}
                        </Typography>
                    </Tab>
                ))}
            </TabList>
            {Object.entries(menuCategories).map(([key, value], index) => (
                <TabPanel
                    key={key}
                    value={index}
                    sx={{ ml: "0.8em", mr: "0.3rem", p: 0, width: "100%" }}>
                    {value.data.map((item, key) => (
                        <ItemCard item={item} key={key} />
                    ))}
                </TabPanel>
            ))}
        </Tabs>
    );
}

export default CartaPage;
