import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.header}>
      {isLoggedIn && <div className={s.userInfo}>{user.email}</div>}
      <ul className={s.list}>
        <span className={s.home}>
          <NavLink className={s.item} to="/">
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink className={s.item} to="/contacts">
              Contacts
            </NavLink>
          )}
        </span>

        {!isLoggedIn && (
          <div className={s.authBox}>
            <NavLink className={s.item} to="/login">
              LogIn
            </NavLink>
            <NavLink className={s.item} to="/register">
              Register
            </NavLink>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Navigation;
