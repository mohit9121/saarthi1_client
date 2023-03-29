import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditItemDetails.css";
import Navbar from "../Navbar/NavBar.js";
import { cities } from "../../assets/locations.js";

function EditItemDetails(props) {
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/blog/show-item/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const categories = [
    "MilkProduct",
    "EggProduct",
    "MeatProduct",
    "CropsProduct",
    "Others",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = item;
    axios
      .put(`http://localhost:8082/api/blog/update-item/${id}`, data)
      .then((res) => {
        navigate(`/show-item/${id}`);
      })
      .catch((err) => {
        console.log("Error in Updating the item ! ", err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="mainBody">
        <h2>Edit the details </h2>
        <form className="add-post-form" onSubmit={handleSubmit}>
          <input
            className="add-post-input"
            type="text"
            name="sellerName"
            value={item.sellerName}
            onChange={handleChange}
            placeholder="Name of the seller "
          />
          <input
            className="add-post-input"
            type="text"
            name="itemName"
            value={item.itemName}
            onChange={handleChange}
            placeholder="Name of the item "
          />
          <select
            className="add-post-input"
            name="district"
            value={item.district}
            onChange={handleChange}
            defaultValue="Ludhiana"
          >
            {cities.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>

          <input
            className="add-post-input"
            type="text"
            name="village"
            value={item.village}
            onChange={handleChange}
            placeholder="Village/town/street"
          />
          <input
            className="add-post-input"
            type="text"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            placeholder="Quantity of the Item"
          />
          <input
            className="add-post-input"
            type="text"
            name="description"
            value={item.description}
            onChange={handleChange}
            placeholder="Description of your item"
          />
          <input
            className="add-post-input"
            type="text"
            name="price"
            value={item.price}
            onChange={handleChange}
            placeholder="price per kg/pecs"
          />
          <select
            className="add-post-input"
            name="category"
            value={item.category}
            onChange={handleChange}
            defaultValue="MilkProduct"
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
      </div>
    </>
  );
}
export default EditItemDetails;
