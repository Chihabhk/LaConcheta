import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setLogginIn, getAllCategories } from "../features/menuSlice";

const RequireAuth = (WrappedComponent) => {
    // This is the functional component that `RequireAuth` will return
    return function ProtectedComponent(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const location = useLocation();
        const { isLoggedIn } = useSelector((state) => state.menu);

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                const currentTime = new Date().getTime();
                const userTime = user.timestamp;
                const diffTime = currentTime - userTime;

                if (diffTime > 60 * 60 * 1000) {
                    // One hour in milliseconds
                    dispatch(setLogginIn(false));
                    localStorage.removeItem("user");
                    navigate("/login", { state: { from: location.pathname } });
                } else {
                    dispatch(setLogginIn(true));
                    dispatch(getAllCategories());
                }
            } else {
                // If there is no user in localStorage, redirect to login
                navigate("/login", { state: { from: location.pathname } });
            }
        }, [dispatch, navigate, location.pathname]);

        // Only render the WrappedComponent if the user is logged in
        return isLoggedIn ? <WrappedComponent {...props} /> : null;
    };
};

export default RequireAuth;
