import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoggedIn, getAllCategories } from "../features/menuSlice";

const RequireAuth = (WrappedComponent) => {
    return function ProtectedComponent(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const { isLoggedIn, menuCategories } = useSelector(
            (state) => state.menu
        );

        useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                alert("Debes iniciar sesión para acceder a esta página.");
                navigate("/login");
                return;
            }

            const currentTime = new Date().getTime();
            const diffTime = currentTime - user.timestamp;

            if (diffTime > 60 * 60 * 1000) {
                // 1 hour in milliseconds
                dispatch(setLoggedIn(false));
                localStorage.removeItem("user");
                alert(
                    "Tu sesión ha caducado, por favor, inicia sesión de nuevo."
                );
                navigate("/login");
            } else {
                if (!isLoggedIn) dispatch(setLoggedIn(true));
                if (Object.keys(menuCategories).length === 0)
                    dispatch(getAllCategories());
            }
        }, [dispatch, isLoggedIn, menuCategories, navigate]);

        return isLoggedIn ? <WrappedComponent {...props} /> : null;
    };
};

export default RequireAuth;
