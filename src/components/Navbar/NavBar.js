import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import axios from "axios";

const Navbar = () => {
  
  const id = localStorage.getItem("token");
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      try {
        if (id != null) {
          const response = await axios.get(
            `http://localhost:8082/api/users/${id}`
          );
          if (response.status === 200) setUser(response.data);
        }
      } catch (err) {}
    })();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <nav className="navbar_">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img" />
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/test" className="navbar__menu-item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar__menu-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/show-items" className="navbar__menu-item">
            Your Products
          </Link>
        </li>
        <li>
          <Link to="/discussion-forum" className="navbar__menu-item">
            Discussion
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar__menu-item">
            Contact
          </Link>
        </li>
      </ul>
      <div className="navbar__user">
        {user ? (
          <button className="btn btn-default" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-dark btn btn-default">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
