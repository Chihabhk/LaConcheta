import { useSelector } from "react-redux";

import { ItemCard } from "./ItemCard.jsx";

export default function ProductsPage() {
    const { selectedCategory } = useSelector((state) => state.menu);

    return (
        <>
            {selectedCategory.map((item, key) => {
                return <ItemCard item={item} key={key} />;
            })}
        </>
    );
}
