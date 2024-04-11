import React from "react";
import { IconButton, Typography } from "@mui/joy";
import { Instagram } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "rgba(45, 33, 24, 1)",
                position: "sticky",
                bottom: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <Typography color="neutral">La Concheta</Typography>
            <Typography color="neutral">
                Síguenos para más contenido.
            </Typography>
            <IconButton
                component="a"
                target="_blank"
                href="https://www.instagram.com/laconchetarestaurante/"
                variant="solid"
                sx={{
                    alignSelf: "center",
                    backgroundColor: "#df9a66",
                }}>
                <Instagram />
            </IconButton>
            <Typography color="neutral">
                Todos los derechos reservados.
            </Typography>
        </footer>
    );
}
