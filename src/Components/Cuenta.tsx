import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { IconButton, Divider, Typography, Checkbox, Chip } from "@mui/joy";
import { Add, Receipt, Remove } from "@mui/icons-material";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice";

interface Item {
    id: number;
    name: string;
    description: string;
    price: string;
    quantity: number;
    url: string;
    checked: boolean;
}

interface State {
    menu: {
        cartItems: Item[];
    };
}
const calculateTotal = (items: Item[] | Item) => {
    const arrayItems = Array.isArray(items) ? items : [items];
    return arrayItems.reduce((total, item) => {
        const priceMatch = item.price.match(/[\d.]+/);
        const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
        return total + price * item.quantity;
    }, 0);
};

const QuantityEdit = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div
            style={{
                display: "flex",
                gap: 5,
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
            }}>
            <IconButton
                variant="soft"
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
                onClick={() => dispatch(addItemToCart(item))}>
                <Add />
            </IconButton>
        </div>
    );
};

const Cuenta = () => {
    useDocumentTitle("LaConcheta - Cuenta");
    const { cartItems } = useSelector((state: State) => state.menu);
    const total = calculateTotal(cartItems);
    const handleChecked = (index: number) => {};
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2em",
                alignContent: "center",
                justifyContent: "center",
            }}>
            <div
                style={{
                    display: "flex",
                    gap: 5,
                    alignContent: "center",
                    justifyContent: "center ",
                    alignItems: "center",
                    marginBottom: "1em",
                }}>
                <Typography
                    level="h1"
                    sx={{
                        alignSelf: "center",
                        fontWeight: 600,
                        color: "primary",
                    }}
                    // fontSize="1.5rem"
                    // textAlign="center"
                >
                    Cuenta
                </Typography>
                <Receipt sx={{ fontSize: 50 }} />
            </div>
            <Divider sx={{ "--Divider-childPosition": "80%" }}>
                <Chip size="lg">
                    Subtotal: {total} {" €"}
                </Chip>
            </Divider>
            {cartItems.map((item: Item, index: number) => {
                return (
                    <div key={index}>
                        <div
                            style={{
                                display: "flex",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "space-evenly",
                                margin: "0.8em 1em",
                            }}>
                            <Checkbox
                                variant="outlined"
                                sx={{ marginRight: 2 }}
                                checked={item.checked ? item.checked : false}
                                onChange={() => handleChecked(index)}
                            />
                            <Typography flex={1}>
                                {item.quantity} x {item.name}
                            </Typography>
                            <QuantityEdit item={item} />
                            <Typography level="body-lg" ml={2}>
                                {item.price}
                            </Typography>
                        </div>
                        <Divider />
                    </div>
                );
            })}
        </div>
    );
};

export default Cuenta;
