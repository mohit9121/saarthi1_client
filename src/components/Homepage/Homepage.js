import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/NavBar.js";
import ItemCard from "../ItemCard/ItemCard.js";
import { cities } from "../../assets/locations.js";
import { Container, Col, Row } from "react-bootstrap";
import "./Homepage.css";

function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8082/api/blog/itemsall")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [filters, setFilters] = useState({ district: "", category: "" });

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `http://localhost:8082/api/blog/search?district=${filters.district}&category=${filters.category}`
      )
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
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
              {cities.map((city) => {
                return <option value={city}>{city}</option>;
              })}
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
        {products.length === 0 ? (
          <p>No items available with selected specifications</p>
        ) : (
          <Container>
            <Row>
              {products.map((product) => {
                return (
                  <>
                    <Col
                      xs={12}
                      md={4}
                      className="d-flex justify-content-evenly"
                    >
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
                  </>
                );
              })}
            </Row>
          </Container>
        )}
      </main>
    </div>
  );
}

export default HomePage;
