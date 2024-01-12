import { Typography, Link } from "@mui/material";

export const Footer = () => {
    return (
        <footer>
            <Typography variant="body1" color="textSecondary" align="center">
                {"Made "}
                {" by "}
                <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/chihabhk/">
                    Chihab
                </Link>
            </Typography>
        </footer>
    );
};
