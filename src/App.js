import "./App.css";
import * as React from "react";

import { LoginPage } from "./Components/LoginPage";
import { Main } from "./Components/Main";
import { useSelector } from "react-redux";

function App() {
    const { isLoggedIn } = useSelector((state) => state.menu);

    return <>{isLoggedIn ? <Main /> : <LoginPage />}</>;
}

export default App;
