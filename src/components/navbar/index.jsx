import "./index.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">Inicio</a>
          <a href="/sobre">Sobre</a>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
