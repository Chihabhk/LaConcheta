import { useDispatch } from "react-redux";
import { selectCategory } from "../features/menuSlice";
import { AspectRatio, Card, Typography } from "@mui/joy";

// const Img = styled("img")({});

export const CategoryCard = ({ category }) => {
    const dispatch = useDispatch();

    const handleOnClick = () => {
        const { data } = category;
        dispatch(selectCategory({ data }));
    };

    return (
        <AspectRatio ratio="4" sx={{ width: "80%" }} variant="outlined">
            <Card
                onClick={handleOnClick}
                sx={{
                    backgroundColor: "transparent",
                    backdropFilter: "blur(7px)",
                }}>
                <Typography color="neutral">{category.name}</Typography>
                {/* <Img
                    // src="https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece"
                    alt={category.name}
                /> */}
            </Card>
        </AspectRatio>
    );
};
