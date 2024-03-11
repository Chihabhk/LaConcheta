import React from "react";
// import Footer from "./Footer.jsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

//todo: improve Footer UI & UX first
const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        <Footer />
    </>
);
export default Layout;
