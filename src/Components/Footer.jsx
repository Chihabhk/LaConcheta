import { Typography, Link } from "@mui/material";

export const Footer = () => {
    return (
        <footer>
            <Typography variant="body1" color="textSecondary" align="center">
                {"Made "}
                {" by "}
                <Link
                    color="inherit"
                    href="https://www.linkedin.com/in/chihabhk/"
                    target="_blanc">
                    Chihab
                </Link>
            </Typography>
        </footer>
    );
};
