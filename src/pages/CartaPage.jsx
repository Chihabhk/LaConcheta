import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel, Typography } from "@mui/joy";
import ItemCard from "../Components/ItemCard.jsx";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";
import { useSwipeable } from "react-swipeable";

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

    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setValue((value + 1) % Object.keys(menuCategories).length),
        onSwipedRight: () =>
            setValue(
                (value - 1 + Object.keys(menuCategories).length) %
                    Object.keys(menuCategories).length
            ),
    });

    return (
        <Tabs
            aria-label="Vertical tabs"
            orientation="horizontal"
            onChange={handleTabChange}
            value={value}
            sx={{
                backgroundColor: "transparent",
                mt: ".8em",
            }}>
            <TabList
                sx={{
                    gap: "0.8rem",
                    overflow: "auto",
                    "&::-webkit-scrollbar": { display: "none" },
                    scrollSnapType: "x mandatory",
                }}>
                {Object.entries(menuCategories).map(
                    ([key, category], index) => (
                        <Tab
                            key={category.id}
                            color="warning"
                            disableIndicator
                            sx={{
                                flex: "none",
                                scrollSnapAlign: "start",
                                textAlign: "center",
                                alignContent: "center",
                                backgroundColor: "#F2E3CA",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                borderRadius: "8px",
                                "&.Mui-selected": {
                                    backgroundColor: "#a67e5f",
                                },
                            }}>
                            <Typography
                                level="h4"
                                textAlign={"left"}
                                fontSize={18}
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
            <div {...handlers}>
                {Object.entries(menuCategories).map(
                    ([key, category], index) => (
                        <TabPanel key={category.id} value={index}>
                            {category.data.map((item) => (
                                <ItemCard item={item} key={item.id} />
                            ))}
                        </TabPanel>
                    )
                )}
            </div>
        </Tabs>
    );
}

export default CartaPage;
