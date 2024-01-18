import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));

const routes = [
    { path: "/login", component: LoginPage, requiresAuth: false },
    { path: "/categories", component: CategoriesPage, requiresAuth: true },
    { path: "/cart", component: CartPage, requiresAuth: true },
    {
        path: "/categories/:categoryName",
        component: ProductsPage,
        requiresAuth: true,
    },
    { path: "/", component: HomePage, requiresAuth: true },
];

export const LayoutRoutes = routes.filter((route) => route.requiresAuth);
export const NonLayoutRoutes = routes.filter((route) => !route.requiresAuth);
