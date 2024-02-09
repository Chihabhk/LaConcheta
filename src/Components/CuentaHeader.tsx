import React from "react";
import {
    Chip,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AccordionGroup,
    accordionClasses,
    Typography,
    Divider,
} from "@mui/joy";
import { PriorityHigh, Receipt } from "@mui/icons-material";

export default function CuentaHeader({ total }: { total: number }) {
    return (
        <>
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
        </>
    );
}
