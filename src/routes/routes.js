import { lazy } from "react";

// const LoginPage = lazy(() => import("../pages/LoginPage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const routes = [
    // { path: "/login", component: LoginPage, requiresAuth: false },
    { path: "/categories", component: CategoriesPage, requiresAuth: false },
    {
        path: "/categories/:categoryName",
        component: ProductsPage,
        requiresAuth: false,
    },
    { path: "/", component: HomePage, requiresAuth: false },
    { path: "*", component: NotFoundPage, requiresAuth: false },
];

// export const AuthRoutes = routes.filter((route) => route.requiresAuth);
export const NonAuthRoutes = routes.filter((route) => !route.requiresAuth);
