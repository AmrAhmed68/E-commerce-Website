import React, { useState } from "react";

import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./Logo.png";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img src= {logo} alt="" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? "open" : ""}> 
        
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/Profile">Profile</NavLink>
        </li>

        <li className="dropdown">
          <NavLink> Brands <span> &rsaquo; </span> </NavLink>
          <ul>
            <li> <Link to="/products/Lenovo">Lenovo</Link></li>
            <li> <NavLink to='/products/HP'>HP</NavLink> </li>
            <li> <NavLink to="/products/Dell">Dell</NavLink></li>
            <li> <NavLink to="/products/Apple">Apple</NavLink></li>
          </ul>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/addProduct">addProduct</NavLink>
        </li>

        <li>
            <NavLink to="/Login"> LogIn </NavLink>
        </li>

      </ul>
    </nav>
  );
};
