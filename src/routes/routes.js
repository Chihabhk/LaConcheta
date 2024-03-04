import { lazy, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CartaPage from "../pages/CartaPage.tsx";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const RedirectToCategories = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/carta");
    }, [navigate]);
};
const routes = [
    {
        path: "/",
        component: RedirectToCategories,
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
