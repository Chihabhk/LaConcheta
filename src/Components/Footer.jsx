import { Typography, Link } from "@mui/joy";

export const Footer = () => {
    return (
        <footer>
            <Typography align="center">
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
