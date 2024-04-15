import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Pages/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center my-20">
        <HashLoader color="#77c720" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
