import { useDispatch } from "react-redux";
import { Typography, Card, CardContent, IconButton } from "@mui/joy";
import { Add } from "@mui/icons-material";
import { addItemToCart } from "../features/menuSlice";

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <Card
            variant="outlined"
            key={item.name}
            sx={{
                // backdropFilter: "blur(50px)",
                cursor: "pointer",
                m: "1em",
            }}>
            <Typography level="h3" fontSize={"1.5rem"}>
                {item.name}
            </Typography>
            <CardContent>
                <Typography level="body-md">{item.description}</Typography>
            </CardContent>
            <CardContent orientation="horizontal">
                <Typography level="body-md" flex="1">
                    Precio:
                    {" " + item.price}
                </Typography>
                <IconButton
                    aria-label="Add to cart"
                    onClick={() => dispatch(addItemToCart(item))}>
                    <Add />
                </IconButton>
            </CardContent>
        </Card>
    );
};
export default ItemCard;
