import { useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard.jsx";

function ProductsPage({ categoryId }) {
    const { menuCategories } = useSelector((state) => state.menu);
    const filteredCategories = Object.values(menuCategories).filter(
        (category) => category.id === categoryId
    );
    return (
        <>
            {filteredCategories.map((item, key) => {
                return <ItemCard item={item} key={key} />;
            })}
        </>
    );
}
export default ProductsPage;
