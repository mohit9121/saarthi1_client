// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo192.png';
import './NavBar.css';
import axios from 'axios';
import Login from '../Login/Login.js';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const id = localStorage.getItem("token");
  // console.log("id he "+id);
  const [users, setUser] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/users/${id}`);
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [id]);
  const userName = users.username; 

  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the JWT from local storage
    console.log("andar gaya ");
    localStorage.removeItem("token");
    window.location.reload();
    // navigate('/test')
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo" className="navbar__logo-img"/>
      </div>
      <ul className="navbar__menu">
        <li>
          <Link to="/test" className="navbar__menu-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="navbar__menu-item">About</Link>
        </li>
        <li>
          <Link to="/show-items" className="navbar__menu-item">Your Products</Link>
        </li>
        <li>
          <Link to="/discussion-forum" className="navbar__menu-item">Discussion</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar__menu-item">Contact</Link>
        </li>
      </ul>
      <div className="navbar__user">
        {userName}
        {userName?(
          <button className="header__logout-button" onClick={handleLogout}>Logout</button>
        ):(
          <Link to ='/login'>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
