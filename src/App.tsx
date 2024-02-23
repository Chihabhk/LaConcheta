import "./App.css";
import React from "react";
import { Suspense, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CircularProgress, Box } from "@mui/joy";
import { NonAuthRoutes } from "./routes/routes.js";
import { fetchMenu } from "./features/menuSlice.ts";
import { useAppDispatch } from "./store/store.ts";
import Layout from "./Components/Layout.jsx";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

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
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
