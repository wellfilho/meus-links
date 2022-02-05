import { BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./style.css";

function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://youtube.com" target="_blank">
        <BsYoutube />
      </a>

      <a className="social" href="https://instagram.com" target="_blank">
        <BsInstagram />
      </a>

      <Link to="/links" className="menu-item">
        Meus Links
      </Link>
    </div>
  );
}

export default Menu;
