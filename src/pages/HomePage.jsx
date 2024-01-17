import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Typography,
    AspectRatio,
    Grid,
    Card,
    CardActions,
    Button,
} from "@mui/joy";

const HomePage = () => {
    const { menuCategories } = useSelector((state) => state.menu);

    return (
        <>
            <Typography level="h2" component="h1" gutterBottom>
                Bienvenido a nuestro restaurante La Concheta
            </Typography>
            <Typography level="body1" gutterBottom>
                Ofrecemos una variedad de deliciosos platos para satisfacer
                todos los gustos.
            </Typography>
            <Typography level="h4" component="h2" gutterBottom>
                Nuestras categorías
            </Typography>
            <Grid container>
                {Object.values(menuCategories).map(
                    ([categoryId, categoryData]) => (
                        <Grid xs={12} sm={6} md={4} key={categoryId}>
                            <Card>
                                <AspectRatio
                                    ratio="4"
                                    // component="img"
                                    height="140"
                                    // image={categoryData.image}
                                    // alt={categoryData.name}
                                />
                                <AspectRatio ratio="4">
                                    <Typography variant="h5" component="div">
                                        {categoryData.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary">
                                        {categoryData.description}
                                    </Typography>
                                </AspectRatio>
                                <CardActions>
                                    <Button
                                        component={Link}
                                        to={`/categories/${categoryId}`}
                                        variant="contained">
                                        Ver más
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                )}
            </Grid>
            <Typography level="h4" component="h2" gutterBottom>
                Lo que dicen nuestros clientes
            </Typography>
        </>
    );
};
export default HomePage;
