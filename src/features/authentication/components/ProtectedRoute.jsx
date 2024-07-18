// src/components/ProtectedRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Spinner from "../../../components/Spinner";

const ProtectedRoute = ({ element }) => {
  const { authUser } = useContext(AuthContext);

  if (authUser === null) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
