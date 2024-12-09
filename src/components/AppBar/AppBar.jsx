import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
