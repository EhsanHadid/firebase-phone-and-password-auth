import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/login",
  children = <Outlet />,
}) => {
  const location = useLocation();

  if (!isAllowed) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
