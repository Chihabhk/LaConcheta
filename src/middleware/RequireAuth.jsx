import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn, getAllCategories } from "../features/menuSlice";

const RequireAuth = (WrappedComponent) => {
    // This is the functional component that `RequireAuth` will return
    return function ProtectedComponent(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { isLoggedIn, menuCategories } = useSelector(
            (state) => state.menu
        );

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                // If there is no user in localStorage, redirect to login
                alert("Debes iniciar sesión para acceder a esta página.");
                navigate("/login");
            } else {
                const currentTime = new Date().getTime();
                const userTime = user.timestamp;
                const diffTime = currentTime - userTime;

                if (diffTime > 60 * 60 * 1000) {
                    dispatch(setLoggedIn(false));
                    localStorage.removeItem("user");
                    alert(
                        "Tu sesión ha caducado, por favor, inicie sesión para acceder a esta página."
                    );
                    navigate("/login");
                    return;
                } else {
                    if (isLoggedIn === false) {
                        dispatch(setLoggedIn(true));
                    }
                    if (Object.entries(menuCategories).length === 0) {
                        dispatch(getAllCategories());
                    }
                }
            }
        }, [dispatch, navigate, isLoggedIn, menuCategories]);

        // Only render the WrappedComponent if the user is logged in
        return isLoggedIn ? <WrappedComponent {...props} /> : null;
    };
};

export default RequireAuth;
