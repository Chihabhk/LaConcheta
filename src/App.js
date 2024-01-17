import "./App.css";
import * as React from "react";
import { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import RequireAuth from "./middleware/RequireAuth.jsx";
import { LayoutRoutes, NonLayoutRoutes } from "./routes/routes.js";

import Layout from "./Components/Layout";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
    return (
        <Router>
            {}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {NonLayoutRoutes.map(
                        ({ path, component: Component }, index) => (
                            <Route
                                key={index}
                                path={path}
                                element={<Component />}
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
                    <Route
                        path="*"
                        element={
                            <Layout>
                                <NotFoundPage />
                            </Layout>
                        }
                    />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
