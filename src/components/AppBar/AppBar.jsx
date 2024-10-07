import Navigation from "../../components/Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "../AppBar/AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn} from "../../redux/auth/selectors";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
