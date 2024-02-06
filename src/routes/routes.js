import { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const LoginPage = lazy(() => import("../pages/LoginPage"));
// const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
// const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const ProductsPage = lazy(() => import("../pages/ProductsPage"));

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
        requiresAuth: false,
    },
    {
        path: "/carta/:categoryName",
        component: ProductsPage,
        requiresAuth: false,
    },
    {
        path: "*",
        component: NotFoundPage,
        requiresAuth: false,
    },
];

export const AuthRoutes = routes.filter((route) => route.requiresAuth);
export const NonAuthRoutes = routes.filter((route) => !route.requiresAuth);
