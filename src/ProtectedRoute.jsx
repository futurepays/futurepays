import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const accessToken = sessionStorage.getItem("accessToken");

  return accessToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
