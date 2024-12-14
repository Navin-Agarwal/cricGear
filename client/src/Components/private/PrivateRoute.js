import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "../../Auth/auth-context";
import { Route,Routes } from "react-router";
import { useEffect } from "react";
export const PrivateRoute = ({ path, ...props }) => {
  const { state } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.isUserLoggedIn) {
      navigate(path);
    }
  }, [navigate, path]);
  return state.login ? (
    <Outlet/>
  ) : (
    <Navigate state={{ from: path }} replace to='/signin' />
  );
};
