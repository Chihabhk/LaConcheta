import { useDispatch, useSelector } from "react-redux";
import {
    Typography,
    Card,
    CardContent,
    IconButton,
    CardActions,
} from "@mui/joy";
import { Add, Remove } from "@mui/icons-material";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice";

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.menu);
    const itemInCart = cartItems.find(
        (cartItem) => cartItem.name === item.name
    );
    const quantity = itemInCart ? itemInCart.quantity : 0;
    return (
        <Card
            variant="outlined"
            key={item.name}
            sx={{
                // backdropFilter: "blur(50px)",
                cursor: "pointer",
                m: "1em",
            }}>
            <CardContent>
                <Typography level="h3" fontSize={"1.5rem"}>
                    {item.name}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography level="body-md">{item.description}</Typography>
            </CardContent>
            <CardContent orientation="horizontal">
                <Typography level="body-md" flex="1">
                    Precio:
                    {" " + item.price}
                </Typography>
                <CardActions>
                    <IconButton
                        aria-label="Delete from cart"
                        onClick={() => dispatch(removeItemFromCart(item))}>
                        <Remove />
                    </IconButton>
                    <Typography level="body-2" color="neutral">
                        {quantity}
                    </Typography>
                    <IconButton
                        aria-label="Add to cart"
                        onClick={() => dispatch(addItemToCart(item))}>
                        <Add />
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    );
};
export default ItemCard;
