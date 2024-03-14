import React from "react";
import { IconButton, Typography } from "@mui/joy";
import { Instagram } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "rgba(45, 33, 24, 1)",
                position: "static",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // width: "100%",
            }}>
            <Typography color="neutral">LaConcheta</Typography>
            <Typography color="neutral">Síguenos para más contenido</Typography>
            <IconButton
                component="a"
                target="_blank"
                href="https://www.instagram.com/laconchetarestaurante/"
                variant="solid"
                sx={{
                    alignSelf: "center",
                    // mr: "2em",
                    backgroundColor: "#df9a66",
                }}>
                <Instagram
                    sx={
                        {
                            // color: "white",
                        }
                    }
                />
            </IconButton>
            <Typography color="neutral">
                Todos los derechos reservados.
            </Typography>
            {/*Encuentranos en la presa...*/}
            {/*Conócenos*/}
        </footer>
    );
}
