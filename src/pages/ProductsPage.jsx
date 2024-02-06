import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel, Typography } from "@mui/joy";
import ItemCard from "../Components/ItemCard.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

function ProductsPage() {
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
                position: "relative",
                backgroundColor: "transparent",
                marginLeft: "8rem",
                marginRight: "0.8rem",
                height: "100%",
            }}>
            <TabList
                sx={{
                    position: "fixed",
                    left: "0",
                    overflow: "hidden",
                    "&::-webkit-scrollbar": { display: "none" },
                    width: "7rem",
                    p: "0",
                    gap: "0.5rem",
                    backdropFilter: "blur(20px)",
                    maxHeight: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {Object.entries(menuCategories).map(([key], index) => (
                    <Tab
                        key={index}
                        sx={{
                            width: "100%",
                            textAlign: "center",

                            borderRadius: "8px",
                            "&.Mui-selected": {
                                fontWeight: "bold",
                            },
                        }}>
                        <Typography level="body-lg">{key}</Typography>
                    </Tab>
                ))}
            </TabList>
            {Object.entries(menuCategories).map(([key, value], index) => (
                <TabPanel key={key} value={index} sx={{ m: 0, p: 0 }}>
                    {value.data.map((item, key) => (
                        <ItemCard item={item} key={key} />
                    ))}
                </TabPanel>
            ))}
        </Tabs>
    );
}

export default ProductsPage;
