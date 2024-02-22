import { useSelector } from "react-redux";
import {
    Typography,
    Card,
    CardContent,
    IconButton,
    CardActions,
} from "@mui/joy";
import { Add, Remove } from "@mui/icons-material";
import { addItemToCart, removeItemFromCart } from "../features/menuSlice";
import { useAppDispatch } from "../store/store";

const ItemCard = ({ item }) => {
    const dispatch = useAppDispatch();
    const { cartItems } = useSelector((state) => state.menu);
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;
    return (
        <Card
            variant="plain"
            color="warning"
            sx={{
                cursor: "pointer",
                marginBottom: 1,
                backgroundColor: "#F2E3CA",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}>
            <CardContent>
                <Typography
                    level="h2"
                    color="warning"
                    fontSize={18}
                    fontFamily={"Arial, sans-serif"}>
                    {item.name}
                </Typography>
                <Typography sx={{ color: "black" }} level="body-sm">
                    {item.description}
                </Typography>
            </CardContent>
            <CardContent
                orientation="horizontal"
                sx={{
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <Typography level="body-md" color="warning" fontWeight={"bold"}>
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
                        size="sm"
                        variant={quantity > 0 ? "solid" : ""}
                        color={quantity > 0 ? "warning" : ""}
                        aria-label="Delete from cart"
                        onClick={() => dispatch(removeItemFromCart(item))}>
                        <Remove />
                    </IconButton>
                    <Typography
                        level="body-2"
                        color="warning"
                        fontStyle={quantity === 0 ? "italic" : "bold"}
                        fontSize={16}>
                        {quantity}
                    </Typography>
                    <IconButton
                        size="sm"
                        variant={quantity > 0 ? "solid" : ""}
                        color={quantity > 0 ? "warning" : ""}
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
