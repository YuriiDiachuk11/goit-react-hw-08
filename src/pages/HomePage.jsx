import { FaUserEdit } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { GiQuicksand } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import s from "./HomePage.module.css";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.homePage}>
      <div className={s.homeSection}>
        <h1>
          Welcome to your magical contact book 📜 ✨✨✨💫 <br />
          Your contacts, your rules 🌟 !
        </h1>
        {!isLoggedIn && (
          <button
            type="button"
            className={s.button}
            onClick={() => (window.location.href = "/register")}
          >
            Get Started
          </button>
        )}
      </div>
      <div className={s.featuresBox}>
        <div className={s.featureCard}>
          <div className={s.icon}>📱</div>
          <h3>Add & Manage</h3>
          <p>
            Add and manage anytime <IoPersonAdd size={20} />
          </p>
        </div>
        <div className={s.featureCard}>
          <div className={s.icon}>🔎</div>
          <h3>Quick Search</h3>
          <p>
            Search contacts in a flash <GiQuicksand size={25} />
          </p>
        </div>
        <div className={s.featureCard}>
          <div className={s.icon}>✍️</div>
          <h3>Edit in a flash</h3>
          <p>
            Edit your contacts when you want <FaUserEdit size={25} />
          </p>
        </div>
        <div className={s.featureCard}>
          <div className={s.icon}>🔐</div>
          <h3>Secure Priority</h3>
          <p>
            Keep all your data in safe <GrSecure size={25} />
          </p>
        </div>
      </div>
    </div>
  );
}
