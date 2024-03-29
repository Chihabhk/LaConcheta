import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Divider, Typography, Checkbox, Button, IconButton } from "@mui/joy";

import { calculateTotal } from "../utils/utils.ts";
import { Item, MenuState } from "../types.ts";
import DeleteConfirmationModal from "./DeleteConfirmationModal.tsx";
import CuentaHeader from "./CuentaHeader.tsx";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice.ts";
import { Add, Remove } from "@mui/icons-material";
import { useAppDispatch } from "../store/store.ts";

const Cuenta = () => {
    const dispatch = useAppDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const cartItems = useSelector((state: MenuState) => state.menu.cartItems);
    const total: number = calculateTotal(
        selectedItems.length > 0 ? selectedItems : cartItems
    );

    useEffect(() => {
        setBtnDisabled(selectedItems.length === 0);
    }, [selectedItems, cartItems]);

    const handleItemChecked = (item: Item) => {
        setSelectedItems((prevItems) => {
            const itemExists = prevItems.some(
                (selectedItem) => selectedItem.id === item.id
            );
            if (itemExists) {
                return prevItems.filter((prevItem) => prevItem.id !== item.id);
            } else {
                return [...prevItems, item];
            }
        });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1em",
                alignContent: "center",
                justifyContent: "center",
            }}>
            <CuentaHeader total={total} />
            <Divider />

            <div
                style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "0.8em .8em",
                }}>
                <Checkbox
                    label="Seleccionar todo"
                    color="warning"
                    checked={cartItems.every((item) =>
                        selectedItems.includes(item)
                    )}
                    onChange={() => {
                        if (
                            cartItems.every((item) =>
                                selectedItems.includes(item)
                            )
                        ) {
                            setSelectedItems([]);
                        } else {
                            setSelectedItems(cartItems);
                        }
                    }}
                />
                <Button
                    size="md"
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
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                />
            </div>
            <Divider />

            {cartItems.map((item: Item, index: number) => {
                return (
                    <div key={item.id}>
                        <div
                            style={{
                                display: "flex",
                                alignContent: "center",
                                alignItems: "center",
                                justifyContent: "space-between",
                                margin: "0.8em .8em",
                            }}>
                            <Checkbox
                                color="warning"
                                label={
                                    <Typography>
                                        {item.quantity} x {item.name}
                                    </Typography>
                                }
                                sx={{
                                    alignContent: "center",
                                    alignSelf: "center",
                                    marginRight: 2,
                                }}
                                checked={selectedItems.some(
                                    (selectedItem) =>
                                        selectedItem.id === item.id
                                )}
                                onChange={() => {
                                    handleItemChecked(item);
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                }}>
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
                                            setSelectedItems((prevItems) => {
                                                return prevItems.filter(
                                                    (prevItem) =>
                                                        prevItem.id !== item.id
                                                );
                                            });
                                        }}>
                                        <Remove />
                                    </IconButton>
                                    <Typography
                                        level="body-lg"
                                        sx={{ textAlign: "center" }}>
                                        {item.quantity}
                                    </Typography>
                                    <IconButton
                                        variant="soft"
                                        color="warning"
                                        onClick={() => {
                                            dispatch(addItemToCart(item));
                                            setSelectedItems((prevItems) => {
                                                return prevItems.filter(
                                                    (prevItem) =>
                                                        prevItem.id !== item.id
                                                );
                                            });
                                        }}>
                                        <Add />
                                    </IconButton>
                                </div>
                                <Typography
                                    level="body-lg"
                                    ml={1}
                                    textAlign={"right"}
                                    alignSelf={"center"}
                                    width={45}>
                                    {item.price}
                                </Typography>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Cuenta;
