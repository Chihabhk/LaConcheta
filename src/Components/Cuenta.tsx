import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Divider, Typography, Checkbox, Button } from "@mui/joy";

import { calculateTotal, itemsNeedUpdate } from "../utils/utils.ts";
import { Item, State } from "../types.ts";
import QuantityEdit from "./QuantityEdit.tsx";
import DeleteConfirmationModal from "./DeleteConfirmationModal.tsx";
import CuentaHeader from "./CuentaHeader.tsx";

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
            <CuentaHeader total={total} />
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
                            <QuantityEdit {...item} />
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
