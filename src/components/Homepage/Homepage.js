import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Homepage.css'
import Navbar from '../Navbar/NavBar.js';
import ItemCard from '../ItemCard/ItemCard.js';


function HomePage() {

  // const id = localStorage.getItem("token");

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8082/api/blog/itemsall")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  const [filters, setFilters] = useState({ district: '', category: '' });

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(filters.district);
    axios.get(`http://localhost:8082/api/blog/search?district=${filters.district}&category=${filters.category}`)
      .then(response => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="home-page">
      <Navbar />
      <main className="main-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="district">District:</label>
            <select
              id="district"
              name="district"
              value={filters.district}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="District1">District1</option>
              <option value="District2">District2</option>
              <option value="District3">District3</option>
              <option value="District4">District4</option>
              <option value="District5">District5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="EggProduct">EggProduct</option>
              <option value="MilkProduct">MilkProduct</option>
              <option value="MeatProduct">MeatProduct</option>
              <option value="CropsProduct">CropsProduct</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <button type="submit">Filter</button>
        </form>
        {/* <div className="product-list">
          {products.map(product => (
            <ItemCard
              key={product._id}
              name={product.itemName}
              district={product.district}
              price={product.price}
              sellerName={product.sellerName}
              category={product.category}
              id1 = {product._id}
            />
          ))}
        </div> */}
        <div className="product-list">
          {products.length === 0 ? (
            <p>No items available with selected specifications</p>
          ) : (
            products.map(product => (
              <div className="item-card">
                <ItemCard
                  key={product._id}
                  name={product.itemName}
                  district={product.district}
                  price={product.price}
                  sellerName={product.sellerName}
                  category={product.category}
                  id1 = {product._id}
                />
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
