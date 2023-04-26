import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/NavBar.js";
import ItemCard from "../ItemCard/ItemCard.js";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "./ShowItems.css";

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
    <>
      <Navbar />
      <div className="container">
        <h2>Your Products</h2>
        <Link to="/add-item">Add new product</Link>
        <Container>
          <Row>
            {products.map((product) => (
              <Col xs={12} md={4} className="justify-content-center">
                <div className="item-card">
                  <ItemCard
                    key={product._id}
                    name={product.itemName}
                    district={product.district}
                    price={product.price}
                    sellerName={product.sellerName}
                    category={product.category}
                    id1={product._id}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ShowItems;
