import React from "react";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { AspectRatio, Typography } from "@mui/joy";
import ItemCard from "../Components/ItemCard";

interface Item {
    id: number;
    name: string;
    price: string;
    quantity: number;
    url: string;
}

interface State {
    menu: {
        cartItems: Item[];
    };
}
const calculateTotal = (items: Item[]) => {
    return items.reduce((total, item) => {
        const priceMatch = item.price.match(/[\d.]+/);
        const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
        return total + price * item.quantity;
    }, 0);
};

const CartPage = ({ isCartModalOpen }) => {
    useDocumentTitle("LaConcheta - Carrito");
    const { cartItems } = useSelector((state: State) => state.menu);
    const total = calculateTotal(cartItems);

    return (
        <>
            {cartItems.map((item: Item, index: number) => {
                return <ItemCard key={index} item={item} />;
            })}
            <AspectRatio ratio="12/4" sx={{ backgroundColor: "blue" }}>
                <Typography level="h3" fontSize={"1.5rem"}>
                    Total = {total} €
                </Typography>
            </AspectRatio>
        </>
    );
};

export default CartPage;
