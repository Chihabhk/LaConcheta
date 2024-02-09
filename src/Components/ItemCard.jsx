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
            variant="plain"
            color="warning"
            sx={{
                cursor: "pointer",
                marginBottom: 1,
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}>
            <CardContent>
                <Typography level="h2" color="warning" fontSize={18}>
                    {item.name}
                </Typography>
                <Typography level="body-sm">{item.description}</Typography>
            </CardContent>
            <CardContent
                orientation="horizontal"
                sx={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <Typography level="body-md" color="warning">
                    Precio:
                    <Typography level="body-md">{" " + item.price}</Typography>
                </Typography>
                <CardActions
                    sx={{
                        p: 0,
                        justifyContent: "flex-end",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                    <IconButton
                        aria-label="Delete from cart"
                        onClick={() => dispatch(removeItemFromCart(item))}>
                        <Remove />
                    </IconButton>
                    <Typography level="body-2" color="warning">
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
