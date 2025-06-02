import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({
  allowedRoles,
}: {
  allowedRoles: string[];
}) => {
  const { user } = useAuth();

  if (!user?.role) return <Navigate to="/signin" replace />;
  console.log(user.role);
  console.log(allowedRoles[0]);

  if (allowedRoles[0] !== user.role) return <Navigate to="/" replace />;

  return <Outlet />;
};
