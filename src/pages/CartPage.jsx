import { useSelector } from "react-redux";
import { Tabs, TabList, Tab } from "@mui/joy";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { CartItemCard } from "../Components/CartItemCard";

const CartPage = () => {
    useDocumentTitle("LaConcheta - Carrito");
    const { cartItems } = useSelector((state) => state.menu);
    return (
        <>
            <Tabs size="sm" aria-label="Scrollable tabs" defaultValue={0}>
                <TabList
                    sx={{
                        overflow: "auto",
                        scrollSnapType: "x mandatory",
                        "&::-webkit-scrollbar": { display: "none" },
                    }}>
                    <Tab>hola</Tab>
                </TabList>
            </Tabs>
            {cartItems.map((item, key) => {
                console.log(item);
                return <CartItemCard key={key} item={item} />;
            })}
        </>
    );
};
export default CartPage;
