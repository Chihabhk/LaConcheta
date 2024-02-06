import { lazy } from "react";
// import Footer from "./Footer.jsx";

const Header = lazy(() => import("./Header.jsx"));

//todo: improve Footer UI & UX first
const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        {/* <Footer /> */}
    </>
);
export default Layout;
