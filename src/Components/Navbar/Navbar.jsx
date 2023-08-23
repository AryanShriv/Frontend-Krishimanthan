import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your custom CSS for Navbar styling

import Logo from "../../Assets/Logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* Use the imported logo */}
          <Link to="/" className="nav-logo">
            <img className="Logo" src={Logo} alt="Your Logo" />
            <h5 className="tagline">Lorem ipsum dolor sit amet</h5>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">होम</Link>
          </li>
          <li>
            <Link to="/Krishi">कृषि</Link>
          </li>
          <li>
            <Link to="/Sehkarita">सहकारिता</Link>
          </li>
          <li>
            <Link to="/Pashupalan">पशुपालन</Link>
          </li>
          <li>
            <Link to="/Panchayat">पंचायत</Link>
          </li>
          <li>
            <Link to="/Van">वन</Link>
          </li>
          <li>
            <Link to="/EPaper">ईपेपर</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;