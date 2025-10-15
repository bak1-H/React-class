
import React from 'react';
import { Link } from 'react-router-dom';
import "../temp/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link to="/poke" className="link">Pokemon</Link>
        </li>
        <li className="navItem">
          <Link to="/" className="link">Main</Link>
        </li>
        <li classname="navItem">
          <Link to ="/buscar" className="link"> Buscar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
