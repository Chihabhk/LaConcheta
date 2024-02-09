import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice";
import { IconButton, Typography } from "@mui/joy";
import { Add, Remove } from "@mui/icons-material";
import { Item } from "../types";

const QuantityEdit = (props: Item) => {
    const item = props;
    const dispatch = useDispatch();

    return (
        <div
            style={{
                display: "flex",
                gap: 4,
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
            }}>
            <IconButton
                variant="soft"
                color="warning"
                onClick={() => {
                    dispatch(removeItemFromCart(item));
                }}>
                <Remove />
            </IconButton>
            <Typography level="body-lg" sx={{ textAlign: "center" }}>
                {item.quantity}
            </Typography>
            <IconButton
                variant="soft"
                color="warning"
                onClick={() => dispatch(addItemToCart(item))}>
                <Add />
            </IconButton>
        </div>
    );
};
export default QuantityEdit;
