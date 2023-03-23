import React from 'react';
import "./Header.scss";
import Logo from "../../assets/Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Logo />
        <p className="header-logo_text">Qahwa App</p>
      </div>
      <div className="header-list">
        <div className="header-list_item">Whats new?</div>
        <div className="header-list_item">About</div>
      </div>
    </div>
  );
}

export default Header;
