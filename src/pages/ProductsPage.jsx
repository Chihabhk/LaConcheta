import { useSelector } from "react-redux";
import ItemCard from "../Components/ItemCard.jsx";
import { useParams } from "react-router-dom";

function ProductsPage() {
    const { menuCategories } = useSelector((state) => state.menu);
    const { categoryName } = useParams();

    const filteredCategory = Object.values(menuCategories).filter(
        ([name, value]) => name === categoryName
    );
    return (
        <>
            {filteredCategory[0][1].data.map((item, key) => {
                return <ItemCard item={item} key={key} />;
            })}
        </>
    );
}

export default ProductsPage;
