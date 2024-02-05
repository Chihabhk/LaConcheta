import "./App.css";
import * as React from "react";
import { Suspense, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RequireAuth from "./middleware/RequireAuth.jsx";
import { LayoutRoutes, NonLayoutRoutes } from "./routes/routes.js";
import { getAllCategories } from "./features/menuSlice";

import Layout from "./Components/Layout";

function App() {
    const dispatch = useDispatch();
    const menuCategories = useSelector((state) => state.menu.menuCategories);
    useEffect(() => {
        if (Object.keys(menuCategories).length === 0) {
            dispatch(getAllCategories());
        }
    }, [dispatch, menuCategories]);
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {NonLayoutRoutes.map(
                        ({ path, component: Component }, index) => (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        )
                    )}
                    {LayoutRoutes.map(
                        ({ path, component: Component }, index) => {
                            const AuthComponent = RequireAuth(Component);
                            return (
                                <Route
                                    key={index}
                                    path={path}
                                    element={
                                        <Layout>
                                            <AuthComponent />
                                        </Layout>
                                    }
                                />
                            );
                        }
                    )}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
