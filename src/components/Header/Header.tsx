import React from 'react';
import "./Header.scss";
import Logo from "../../assets/Logo";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo />
        {/*<p className="header-logo_text">Qahwa App</p>*/}
      </div>
      <div className="header-list">
        <Link to="about" className="header-list_item" smooth={true}>О нас</Link>
        <Link to="pricing" className="header-list_item" smooth={true}>Тарифы</Link>

      </div>
    </div>
  );
}

export default Header;
