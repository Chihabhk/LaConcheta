import "./App.css";

import * as React from "react";
import { lazy, Suspense, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NonAuthRoutes } from "./routes/routes.js";
import { getAllCategories } from "./features/menuSlice";
import { CircularProgress, Box } from "@mui/joy";
const Layout = lazy(() => import("./Components/Layout"));

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
            <Suspense
                fallback={
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignContent: "center",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                        }}>
                        <CircularProgress
                            color="warning"
                            variant="solid"
                            size="lg"
                        />
                    </Box>
                }>
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
