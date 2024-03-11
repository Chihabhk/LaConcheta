import React from "react";
import { AspectRatio, Typography } from "@mui/joy";

export default function Footer() {
    return (
        <footer>
            <Typography>LaConcheta</Typography>
            <AspectRatio ratio={9 / 12}>
                <Typography>Síguenos en Instgram para más contenido</Typography>
            </AspectRatio>
        </footer>
    );
}
