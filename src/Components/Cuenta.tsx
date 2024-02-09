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
                alignSelf: "flex-end",
                gap: 4,
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

function itemsNeedUpdate(currentItems: Item[], newItems: Item[]) {
    if (currentItems.length !== newItems.length) return true;

    return currentItems.some((item, index) => {
        return (
            item.name !== newItems[index].name ||
            item.quantity !== newItems[index].quantity
        );
    });
}

const Cuenta = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const { cartItems } = useSelector((state: State) => state.menu);

    const total = calculateTotal(
        selectedItems.length > 0 ? selectedItems : cartItems
    );

    useEffect(() => {
        const updatedItems = selectedItems.map((selectedItem) => {
            const cartItem = cartItems.find(
                (item) => item.name === selectedItem.name
            );
            if (!cartItem) return selectedItem;
            return {
                ...selectedItem,
                quantity: cartItem.quantity,
            };
        });

        setBtnDisabled(updatedItems.length === 0);
        if (itemsNeedUpdate(selectedItems, updatedItems)) {
            setSelectedItems(updatedItems);
        }
    }, [cartItems, selectedItems]);

    const handleItemChecked = (item: Item) => {
        setSelectedItems((prevItems) => {
            const itemExists = prevItems.some(
                (selectedItem) => selectedItem.name === item.name
            );
            if (itemExists) {
                // Filtrar fuera el item si ya existe
                return prevItems.filter(
                    (prevItem) => prevItem.name !== item.name
                );
            } else {
                // Agregar el nuevo item a la lista
                return [...prevItems, item];
            }
        });
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
                <Receipt color="warning" sx={{ fontSize: 50 }} />
            </div>
            <Divider sx={{ "--Divider-childPosition": "80%" }}>
                <Chip color="warning" size="lg">
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
                    <AccordionSummary color="warning">
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
                                    color="warning"
                                    sx={{ fontSize: 25 }}
                                />
                            }>
                            El total del carrito es orientativo; el monto
                            definitivo le será presentado por el camarero o el
                            encargado al solicitar la cuenta. Agradecemos su
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
                    justifyContent: "space-between",
                    margin: "0.8em 1em",
                }}>
                <Checkbox
                    label="Seleccionar todo"
                    color="warning"
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
                    variant="solid"
                    color="warning"
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
                                justifyContent: "space-between",
                                margin: "0.8em 1em",
                            }}>
                            <Checkbox
                                color="warning"
                                label={
                                    <Typography flex={1}>
                                        {item.quantity} x {item.name}
                                    </Typography>
                                }
                                sx={{ marginRight: 2 }}
                                checked={selectedItems.some(
                                    (selectedItem) =>
                                        selectedItem.name === item.name
                                )}
                                onChange={() => handleItemChecked(item)}
                            />
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
