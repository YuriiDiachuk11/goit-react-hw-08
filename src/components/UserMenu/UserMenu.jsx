import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import SearchBox from "../SearchBox/SearchBox";
import { useEffect } from "react";
import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    toast.success(`Welcome, ${user.name} "👏"`, {
      duration: 4000,
    });
  }, [user.name]);

  return (
    <div className={s.userBox}>
      <div className={s.searchBoxWrapper}>
        <SearchBox />
      </div>

      <button className={s.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
