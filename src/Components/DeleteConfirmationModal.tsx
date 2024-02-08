import React from "react";
import { useDispatch } from "react-redux";
import {
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Modal,
    ModalDialog,
    Typography,
} from "@mui/joy";
import { WarningRounded } from "@mui/icons-material";
import { removeAllFromCart } from "../features/menuSlice";

const DeleteConfirmationModal = ({ open, setOpen, items }) => {
    const dispatch = useDispatch();
    return (
        <Modal open={open}>
            <ModalDialog variant="outlined" role="alertdialog">
                <DialogTitle>
                    <WarningRounded />
                    Confirmación
                </DialogTitle>
                <Divider />
                <DialogContent>
                    ¿Confirmas que deseas eliminar estos artículos seleccionados
                    del carrito?
                </DialogContent>
                {items.map((item) => (
                    <Typography key={item.name} fontSize={12}>
                        {item.quantity} x {item.name}
                    </Typography>
                ))}

                <DialogActions>
                    <Button
                        variant="solid"
                        color="danger"
                        onClick={() => {
                            setOpen(false);
                            dispatch(removeAllFromCart(items));
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
