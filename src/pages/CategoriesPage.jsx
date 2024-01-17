import { useSelector } from "react-redux";
import { Sheet } from "@mui/joy";
import CategoryCard from "../Components/CategoryCard";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const CategoriesPage = () => {
    useDocumentTitle("LaConcheta - Carta de la casa");
    const { menuCategories } = useSelector((state) => state.menu);
    return (
        <Sheet
            component={"ul"}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1em",
                backgroundColor: "transparent",
            }}>
            {menuCategories &&
                Object.values(menuCategories).map(([key, value]) => {
                    return (
                        <CategoryCard
                            category={{ name: key, ...value }}
                            key={key}
                        />
                    );
                })}
        </Sheet>
    );
};
export default CategoriesPage;
