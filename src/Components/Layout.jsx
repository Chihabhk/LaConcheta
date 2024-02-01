import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
//todo: improve Footer UI & UX first
const Layout = ({ children }) => (
    <>
        <Header />
        {children}
        {/* <Footer /> */}
    </>
);
export default Layout;
