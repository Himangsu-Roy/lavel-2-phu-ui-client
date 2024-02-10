import { Navigate } from "react-router-dom";
import { selectToken } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(selectToken);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
