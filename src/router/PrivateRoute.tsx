import { ReactElement } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { currentUser, loading } = useAuth();
  //console.log(currentUser, loading);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (currentUser) {
    return children;
  }

  return <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
