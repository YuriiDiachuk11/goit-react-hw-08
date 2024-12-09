import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RestrictedRoute = ({ component: RegistrationPage, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <RegistrationPage />;
};

export default RestrictedRoute;
