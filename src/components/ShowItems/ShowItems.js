import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../Navbar/NavBar.js';
import ItemCard from '../ItemCard/ItemCard.js';
import { Link } from "react-router-dom";
import './ShowItems.css'


const ShowItems = () => {

    const userId = localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:8082/api/blog/${userId}`);
      // console.log(res);
      setProducts(res.data);
    };
    fetchData();
  }, [userId]);

  return (
    <div>
      <Navbar/>
      <h2>Your Products</h2>
      <Link to = '/add-item'>Add new product</Link>
      <div className="product-list">
      <ul>
        {products.map(product => (
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
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ShowItems;
