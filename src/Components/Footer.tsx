import React from "react";
import { IconButton, Typography } from "@mui/joy";
import { Instagram } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer>
            <Typography>LaConcheta</Typography>
            <Typography>Síguenos para más contenido</Typography>
            <IconButton
                component="a"
                target="_blank"
                href="https://www.instagram.com/laconchetarestaurante/"
                variant="solid"
                sx={
                    {
                        // backgroundColor: "#df9a66",
                    }
                }>
                <Instagram
                    sx={{
                        color: "white",
                    }}
                />
            </IconButton>
            {/*Encuentranos en la presa...*/}
            {/*Conócenos*/}
        </footer>
    );
}
