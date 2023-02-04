import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogoMini from "../../assets/logo-mini.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/" className="Navbar_brand">
        <img src={Logo} alt="Logo" />
      </Link>

      <Link to="/" className="Navbar_brand Navbar_brand-mobile">
        <img src={LogoMini} alt="Logo" />
      </Link>

      <ul className="Navbar_list">
        <li className="Navbar_item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="Navbar_item Navbar_item-marked">
          <Link to="/gps">Météo chez moi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
