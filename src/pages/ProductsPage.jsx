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
    const [value, setValue] = useState(
        Object.keys(menuCategories).indexOf(categoryName)
    );
    useEffect(() => {
        const categoryIndex = Object.keys(menuCategories).indexOf(categoryName);
        setValue(categoryIndex);
    }, [categoryName, menuCategories]);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
        navigate(`/categories/${Object.keys(menuCategories)[newValue]}`);
    };

    return (
        <Tabs
            aria-label="Vertical tabs"
            orientation="vertical"
            onChange={handleTabChange}
            value={value}
            sx={{
                // maxWidth: "100%",
                backgroundColor: "transparent",
                // position: "relative",
                // display: "flex",
                marginLeft: "5.8rem",
            }}>
            <TabList
                sx={{
                    position: "fixed",
                    left: "0",
                    // overflow: "  hidden",
                    "&::-webkit-scrollbar": { display: "none" },
                    width: "7rem",
                    p: "1rem 0",
                    gap: "1em",
                    bgcolor: "AppWorkspace",
                    borderRadius: "8px",
                }}>
                {Object.entries(menuCategories).map(([key], index) => (
                    <Tab
                        key={index}
                        sx={{
                            // paddingRight: 2,
                            "&.Mui-selected": {
                                fontWeight: "bold",
                            },
                        }}>
                        <Typography level="body-lg">{key}</Typography>
                    </Tab>
                ))}
            </TabList>
            {Object.entries(menuCategories).map(([key, value], index) => (
                <TabPanel
                    key={key}
                    value={index}
                    sx={{ p: "0 0 0 1em", m: "0" }}>
                    {value.data.map((item, key) => (
                        <ItemCard item={item} key={key} />
                    ))}
                </TabPanel>
            ))}
        </Tabs>
    );
}

export default ProductsPage;
