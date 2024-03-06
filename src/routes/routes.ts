import CartaPage from "../pages/CartaPage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

const routes = [
    {
        path: "/",
        component: CartaPage,
    },
    {
        path: "/carta",
        component: CartaPage,
    },
    {
        path: "*",
        component: NotFoundPage,
    },
];

// export const AuthRoutes = routes.filter((route) => route.requiresAuth);
export const NonAuthRoutes = routes;
