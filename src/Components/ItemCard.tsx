import React from "react";
import { useSelector } from "react-redux";
import {
    Typography,
    Card,
    CardContent,
    IconButton,
    CardActions,
} from "@mui/joy";
import { Add, Remove } from "@mui/icons-material";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice.ts";
import { useAppDispatch } from "../store/store.ts";
import { Item, MenuState } from "../types.ts";

const ItemCard = ({ item }: { item: Item }) => {
    const dispatch = useAppDispatch();
    const { cartItems } = useSelector((state: MenuState) => state.menu);
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;
    return (
        <Card
            variant="plain"
            color="warning"
            sx={{
                cursor: "pointer",
                marginBottom: 1,
                // backgroundColor: "rgba(223, 154, 102, 0.4)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}>
            <CardContent>
                <Typography
                    level="h2"
                    fontSize={18}
                    fontFamily={"Arial, sans-serif"}
                    sx={{ color: "black" }}>
                    {item.name}
                </Typography>
                <Typography sx={{ color: "black" }} level="body-sm">
                    {item.description}
                </Typography>
            </CardContent>
            {item.allergies && (
                <CardContent>
                    <Typography>Allergies:</Typography>
                    {item.allergies.split(",").map((allergy, index) => (
                        <IconButton key={index} size="sm" disabled>
                            {" "}
                            <img
                                src={`/path/to/icons/${allergy.trim()}.png`}
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                }}
                                alt={allergy.trim()}
                            />
                        </IconButton>
                    ))}
                </CardContent>
            )}
            <CardContent
                orientation="horizontal"
                sx={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <Typography level="body-md" fontWeight={"bold"}>
                    Precio:
                    <Typography level="body-md" sx={{ color: "black" }}>
                        {" " + item.price}
                    </Typography>
                </Typography>
                <CardActions
                    sx={{
                        p: 0,
                        justifyContent: "flex-end",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                    <IconButton
                        size="sm"
                        variant={quantity && quantity > 0 ? "solid" : undefined}
                        color={quantity && quantity > 0 ? "warning" : undefined}
                        aria-label="Delete from cart"
                        onClick={() => dispatch(removeItemFromCart(item))}>
                        <Remove />
                    </IconButton>
                    <Typography
                        level="body-md"
                        color="warning"
                        fontStyle={
                            quantity && quantity === 0 ? "italic" : "bold"
                        }
                        fontSize={16}>
                        {quantity || 0}
                    </Typography>
                    <IconButton
                        size="sm"
                        variant={quantity && quantity > 0 ? "solid" : undefined}
                        color={quantity && quantity > 0 ? "warning" : undefined}
                        aria-label="Add to cart"
                        onClick={() => dispatch(addItemToCart(item))}>
                        <Add />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    );
};
export default ItemCard;
