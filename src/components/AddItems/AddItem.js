import React, { useState } from "react";
import axios from "axios";
import "./AddItem.styles.css";
import Navbar from "../Navbar/NavBar.js";
import { useNavigate } from "react-router-dom";
import LoginPrompt from "../Loginprompt/Loginprompt.js";
import { cities } from "../../assets/locations.js";

const AddItem = () => {
  const navigate = useNavigate();
  const [itemData, setitemData] = useState({});

  const handleChange = (e) => {
    setitemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const userId = localStorage.getItem("token");
  console.log(userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8082/api/users/add-item", { userId, itemData })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    navigate("/show-items");
  };
  const categories = [
    "MilkProduct",
    "EggProduct",
    "MeatProduct",
    "CropsProduct",
    "Others",
  ];

  if (userId == null) {
    return (
      <>
        <Navbar />
        <LoginPrompt />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <form className="add-post-form" onSubmit={handleSubmit}>
        <input
          className="add-post-input"
          type="text"
          name="sellerName"
          onChange={handleChange}
          placeholder="Name of the seller "
        />
        <input
          className="add-post-input"
          type="text"
          name="itemName"
          onChange={handleChange}
          placeholder="Name of the item "
        />
        <select
          className="add-post-input"
          name="district"
          onChange={handleChange}
          defaultValue="Ludhiana"
        >
          {cities.map((city) => {
            return <option value={city}>{city}</option>;
          })}
        </select>

        <input
          className="add-post-input"
          type="text"
          name="village"
          onChange={handleChange}
          placeholder="Village/town/street"
        />
        <input
          className="add-post-input"
          type="text"
          name="quantity"
          onChange={handleChange}
          placeholder="Quantity of the Item"
        />
        <input
          className="add-post-input"
          type="text"
          name="description"
          onChange={handleChange}
          placeholder="Description of your item"
        />
        <input
          className="add-post-input"
          type="text"
          name="price"
          onChange={handleChange}
          placeholder="price per kg/pecs"
        />
        <select
          className="add-post-input"
          name="category"
          onChange={handleChange}
        >
          {categories.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
        <button className="add-post-button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddItem;
