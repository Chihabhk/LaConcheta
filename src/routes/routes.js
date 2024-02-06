import { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const CartaPage = lazy(() => import("../pages/CartaPage"));

const RedirectToCategories = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/carta/Entrantes%20Calientes");
    }, [navigate]);
    return null;
};
const routes = [
    {
        path: "/",
        component: RedirectToCategories,
    },
    {
        path: "/carta/:categoryName",
        component: CartaPage,
    },
    {
        path: "*",
        component: NotFoundPage,
    },
];

// export const AuthRoutes = routes.filter((route) => route.requiresAuth);
export const NonAuthRoutes = routes;
