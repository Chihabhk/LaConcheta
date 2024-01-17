import { Add } from "@mui/icons-material";
import { Typography, Card, CardContent, IconButton } from "@mui/joy";

const ItemCard = ({ item }) => {
    return (
        <Card
            variant="outlined"
            key={item.name}
            sx={{
                background:
                    "radial-gradient(circle, rgba(235,194,94,0.6689655172413793) 0%, rgba(58,59,61,1) 100%)",
                backdropFilter: "blur(50px)",
                cursor: "pointer",
                m: "1em",
            }}>
            <Typography level="h3">{item.name}</Typography>
            <CardContent>
                <Typography level="body-lg">{item.description}</Typography>
            </CardContent>
            <CardContent orientation="horizontal">
                <Typography level="body-md">
                    Precio:
                    {" " + item.price}
                </Typography>
                <IconButton aria-label="Add to cart">
                    <Add />
                </IconButton>
            </CardContent>
        </Card>
    );
};
export default ItemCard;
