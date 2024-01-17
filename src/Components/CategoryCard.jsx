import { useDispatch } from "react-redux";
import { selectCategory } from "../features/menuSlice";
import { Card, Typography } from "@mui/joy";

const CategoryCard = ({ category }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        const { data } = category;
        dispatch(selectCategory({ data }));
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
