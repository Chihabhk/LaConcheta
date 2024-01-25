import { useSelector } from "react-redux";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { CartItemCard } from "../Components/CartItemCard";

const CartPage = () => {
    useDocumentTitle("LaConcheta - Carrito");
    const { cartItems } = useSelector((state) => state.menu);
    return (
        <>
            {cartItems.map((item, key) => {
                return <CartItemCard key={key} item={item} />;
            })}
        </>
    );
};
export default CartPage;
