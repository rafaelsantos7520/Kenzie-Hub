import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const RotasProtegidas = () => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
    return null;
  }
  return user ? <Outlet /> : 
  <Navigate to="/" replace state={{from:location}} />;
};
