import React from "react";
import { useDispatch } from "react-redux";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    List,
    Modal,
    ModalDialog,
    Typography,
} from "@mui/joy";
import { WarningRounded } from "@mui/icons-material";
import { removeAllFromCart } from "../features/menuSlice";

const DeleteConfirmationModal = ({
    open,
    setOpen,
    selectedItems,
    setSelectedItems,
}) => {
    const dispatch = useDispatch();
    return (
        <Modal open={open}>
            <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                    <WarningRounded color="warning" />
                    Confirmación
                </DialogTitle>
                <Divider />
                <DialogContent sx={{ overflow: "visible" }}>
                    ¿Confirmas que deseas eliminar estos artículos seleccionados
                    del carrito?
                </DialogContent>
                <List sx={{ overflow: "auto" }}>
                    {selectedItems.map((item) => (
                        <Typography key={item.id} fontSize={14}>
                            {item.quantity} x {item.name}
                        </Typography>
                    ))}
                </List>

                <DialogActions>
                    <Button
                        variant="solid"
                        color="danger"
                        onClick={() => {
                            setOpen(false);
                            dispatch(removeAllFromCart(selectedItems));
                            setSelectedItems([]);
                        }}>
                        Eliminar
                    </Button>
                    <Button
                        variant="plain"
                        color="neutral"
                        onClick={() => setOpen(false)}>
                        Cancelar
                    </Button>
                </DialogActions>
            </ModalDialog>
        </Modal>
    );
};
export default DeleteConfirmationModal;
