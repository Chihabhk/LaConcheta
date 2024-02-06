import "./App.css";

import * as React from "react";
import { lazy, Suspense, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NonAuthRoutes } from "./routes/routes.js";
import { getAllCategories } from "./features/menuSlice";

const Layout = lazy("./Components/Layout");

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
                    {NonAuthRoutes.map(
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
                    {/*{AuthRoutes.map(({ path, component: Component }, index) => {
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
                    })}*/}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
