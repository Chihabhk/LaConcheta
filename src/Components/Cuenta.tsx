import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    IconButton,
    Divider,
    Typography,
    Checkbox,
    Chip,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionGroup,
    accordionClasses,
    Button,
} from "@mui/joy";
import { Add, PriorityHigh, Receipt, Remove } from "@mui/icons-material";
import DeleteConfirmationModal from "./DeleteConfirmationModal.tsx";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice";

interface Item {
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
    const [modalOpen, setModalOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const { cartItems } = useSelector((state: State) => state.menu);
    const total = calculateTotal(cartItems);

    useEffect(() => {
        selectedItems.length > 0 ? setBtnDisabled(false) : setBtnDisabled(true);
    }, [selectedItems]);

    const handleItemChecked = (item: Item) => {
        if (
            selectedItems.some(
                (selectedItem) => selectedItem.name === item.name
            )
        ) {
            setSelectedItems((prevItems) =>
                prevItems.filter((prevItem) => prevItem.name !== item.name)
            );
        } else {
            setSelectedItems((prevItems) => [...prevItems, item]);
        }
    };

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
                    }}>
                    Cuenta
                </Typography>
                <Receipt sx={{ fontSize: 50 }} />
            </div>
            <Divider sx={{ "--Divider-childPosition": "80%" }}>
                <Chip size="lg">
                    Total: {total} {" €"}
                </Chip>
            </Divider>
            <AccordionGroup
                size="md"
                transition="0.2s ease"
                sx={{
                    [`& .${accordionClasses.root}`]: {
                        marginTop: "0.5rem",
                        transition: "0.2s ease",
                        '& button:not([aria-expanded="true"])': {
                            transition: "0.2s ease",
                            paddingBottom: "0.625rem",
                        },
                        "& button:hover": {
                            background: "transparent",
                        },
                    },
                    [`& .${accordionClasses.root}.${accordionClasses.expanded}`]:
                        {
                            bgcolor: "background.level1",
                            borderRadius: "md",
                            borderBottom: "1px solid",
                            borderColor: "background.level2",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        },
                }}>
                <Accordion sx={{ m: 1 }} defaultExpanded>
                    <AccordionSummary color="danger">
                        ¡Importante lectura!
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            level="body-sm"
                            sx={{
                                textAlign: "justify",
                                fontSize: 13,
                            }}
                            startDecorator={
                                <PriorityHigh
                                    sx={{ color: "#f44336", fontSize: 25 }}
                                />
                            }>
                            El total del carrito es un estimado; recibirá el
                            monto final al concluir su pedido. Agradecemos su
                            comprensión y estamos a su servicio para dudas.
                        </Typography>
                    </AccordionDetails>
                    <Divider />
                </Accordion>
            </AccordionGroup>
            <div
                style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    margin: "0.8em 1em",
                }}>
                <Checkbox
                    label="Seleccionar todo"
                    checked={cartItems.every((item) =>
                        selectedItems.includes(item)
                    )}
                    onChange={() => {
                        const cart = [...cartItems];
                        if (
                            cart.every((item) => selectedItems.includes(item))
                        ) {
                            setSelectedItems([]);
                        } else {
                            setSelectedItems(cart);
                        }
                    }}
                />

                <Button
                    variant="soft"
                    color="danger"
                    onClick={() => {
                        setModalOpen(true);
                    }}
                    disabled={btnDisabled}>
                    Eliminar
                </Button>
                <DeleteConfirmationModal
                    open={modalOpen}
                    setOpen={setModalOpen}
                    items={selectedItems}
                />
            </div>
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
                                checked={selectedItems.includes(item)}
                                onChange={() => handleItemChecked(item)}
                            />
                            <Typography flex={1}>
                                {item.quantity} x {item.name}
                            </Typography>
                            <QuantityEdit item={item} />
                            <Typography
                                level="body-lg"
                                textAlign={"right"}
                                ml={2}
                                minWidth={30}>
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
