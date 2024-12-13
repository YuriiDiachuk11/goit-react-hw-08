import { NavLink, useLocation } from "react-router-dom";

const AuthNav = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
