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
                    top: "7.5rem",
                    "&::-webkit-scrollbar": { display: "none" },
                    width: "7rem",
                    ml: "-7.2rem",
                    gap: "0.8rem",
                    overflowY: "auto",
                    scrollbarWidth: "unset",
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "warning",
                    },
                    maxHeight: "calc(100vh - 9.5rem )",
                }}>
                {Object.entries(menuCategories).map(
                    ([key, category], index) => (
                        <Tab
                            key={category.id}
                            color="warning"
                            disableIndicator
                            sx={{
                                textAlign: "center",
                                alignContent: "center",
                                backgroundColor: "#F2E3CA",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                borderRadius: "8px",
                                p: ".7em 5px",
                                "&.Mui-selected": {
                                    backgroundColor: "#a67e5f",
                                },
                            }}>
                            <Typography
                                level="h4"
                                textAlign={"left"}
                                fontFamily={"Arial, sans-serif"}
                                sx={{
                                    letterSpacing: ".01em",
                                    textAlign: "center",
                                    textShadow:
                                        value === index
                                            ? "0px 2px 2px rgba(0, 0, 0, 0.5)"
                                            : "inherit",
                                    color:
                                        value === index ? "#F2E3CA" : "inherit",
                                }}>
                                {key}
                            </Typography>
                        </Tab>
                    )
                )}
            </TabList>
            {Object.entries(menuCategories).map(([key, category], index) => (
                <TabPanel
                    key={category.id}
                    value={index}
                    sx={{
                        ml: "0.8em",
                        mr: "0.3rem",
                        mt: ".9em",
                        p: 0,
                        width: "100%",
                    }}>
                    {category.data.map((item) => (
                        <ItemCard item={item} key={item.id} />
                    ))}
                </TabPanel>
            ))}
        </Tabs>
    );
}

export default CartaPage;
