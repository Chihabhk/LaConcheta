import React from "react";
import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { AspectRatio, Divider, Typography } from "@mui/joy";
import { Receipt } from "@mui/icons-material";
// import ItemCard from "../Components/ItemCard";

interface Item {
    id: number;
    name: string;
    description: string;
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

const CuentaPage = ({ isCartModalOpen }) => {
    useDocumentTitle("LaConcheta - Cuenta");
    const { cartItems } = useSelector((state: State) => state.menu);
    const total = calculateTotal(cartItems);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2em",
                alignContent: "center",
                justifyContent: "center",
            }}>
            <Typography
                level="h1"
                fontSize={"2rem"}
                textAlign="center"
                sx={{
                    marginBottom: "1em",
                }}>
                Cuenta <Receipt />
            </Typography>
            <Divider />
            {cartItems.map((item: Item, index: number) => {
                return (
                    <div
                        key={index}
                        style={{ display: "flex", margin: "0.8em 1em" }}>
                        <Typography flex={1}>{item.name}</Typography>
                        <Typography>{item.price}</Typography>
                        <Divider />
                    </div>
                );
            })}
            <AspectRatio ratio="12/4" sx={{ backgroundColor: "blue" }}>
                <Typography level="h3" fontSize={"1.5rem"}>
                    Total = {total} €
                </Typography>
            </AspectRatio>
        </div>
    );
};

export default CuentaPage;
