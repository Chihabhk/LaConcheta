import { useNavigate } from "react-router-dom";
import { Card, Typography } from "@mui/joy";

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate(`/categories/${category.name}`);
    };

    return (
        <Card
            component={"li"}
            onClick={handleOnClick}
            sx={{
                backgroundColor: "transparent",
                backdropFilter: "blur(50px)",
                cursor: "pointer",
                width: "80%",
            }}>
            <Typography level="h2">{category.name}</Typography>
        </Card>
    );
};
export default CategoryCard;
