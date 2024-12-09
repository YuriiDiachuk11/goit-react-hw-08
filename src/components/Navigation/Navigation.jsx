import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      {isLoggedIn && <div>{user.email}</div>}
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </ul>
    </header>
  );
};
export default Navigation;
