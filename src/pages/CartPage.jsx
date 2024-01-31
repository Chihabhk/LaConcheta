import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import ItemCard from "../Components/ItemCard";
import { AspectRatio, Typography } from "@mui/joy";

const CartPage = () => {
    useDocumentTitle("LaConcheta - Carrito");
    const { cartItems } = useSelector((state) => state.menu);
    const calculateTotal = (items) => {
        return items.reduce((total, item) => {
            const price = parseInt(item.price.match(/\d+/), 10);
            return total + price * item.quantity;
        }, 0);
    };
    const total = calculateTotal(cartItems);
    return (
        <>
            {cartItems.map((item, index) => {
                return <ItemCard key={index} item={item} />;
            })}
            <AspectRatio ratio="12/4" sx={{ backgroundColor: "blue" }}>
                <Typography level="h3" fontSize={"1.5rem"}>
                    Total = {total} €
                </Typography>
            </AspectRatio>
        </>
    );
};
export default CartPage;
