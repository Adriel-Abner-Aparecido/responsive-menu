import { FaBars } from "react-icons/fa";
import "./index.css";
import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [toggle, setToggle] = useState("navbar");

  return (
    <>
      <div className={`${toggle}`}>
        <a className="btn-close" onClick={() => setToggle("navbar")}>
          <FaXmark />
        </a>
        <ul>
          <li>
            <a href="/">Inicio</a>
            <a href="/sobre">Sobre</a>
            <a href="/contato">Contato</a>
          </li>
        </ul>
      </div>
      <a className="btn-toggle" onClick={() => setToggle("toggle")}>
        <FaBars />
      </a>
    </>
  );
};
export default Navbar;
