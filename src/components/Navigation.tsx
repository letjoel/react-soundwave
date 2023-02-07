import { NavLink } from "react-router-dom";
import styles from "./Navbar/Navbar.module.css";
import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <header>
        <div className={styles.logo} onClick={handleClick}>
          <img src={logo} alt="Logo" />
          <p>Soundwave</p>
        </div>
        <ul>
          <li>
            <NavLink to="/discover">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/join">Join</NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navigation;
