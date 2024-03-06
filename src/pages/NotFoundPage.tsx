import React from "react";
import { Typography, Sheet, Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle.js";

const NotFoundPage = () => {
    useDocumentTitle("LaConcheta - Página no existe");
    const navigate = useNavigate();
    return (
        <Sheet
            variant="soft"
            sx={{
                textAlign: "center",
                justifyContent: "center",
                p: "1em",
                background: "transparent",
                flexGrow: "1",
            }}>
            <Typography level="h1" variant="plain">
                404 - Página no encontrada
            </Typography>
            <Button
                onClick={() => navigate("/")}
                variant="soft"
                color="danger"
                sx={{ mt: 5 }}>
                <Typography> Ir a la página principal</Typography>
            </Button>
        </Sheet>
    );
};

export default NotFoundPage;
