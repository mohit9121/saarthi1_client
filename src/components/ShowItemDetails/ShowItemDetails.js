import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './ShowItemDetails.css'; 
import Navbar from '../Navbar/NavBar.js';
import { Nav } from 'react-bootstrap';

function ShowItemDetails() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const currentUserId = localStorage.getItem("token");
  let thisProductId = null; 

  useEffect( () => {
    axios.get(`http://localhost:8082/api/blog/show-item/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [productId]);
  const handleEdit = () => {
    if(currentUserId === thisProductId){
    navigate(`/edit-item/${productId}`);
    }
    else{
      alert('since this is not your product so you cannot edit this item');
    }
  };

  const handleDelete = () => {
    if(currentUserId === thisProductId){
    axios.delete(`http://localhost:8082/api/blog/delete-item/${productId}`)
      .then(response => {
        navigate('/test');
      })
      .catch(error => {
        setError(error.message);
      });
    }
    else{
      alert('since this is not your product so you cannot delete this item');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }
  thisProductId = product.userId; 


  return (
    <>
    <Navbar/>
    <div className="product-details">
      <h2>Product Details</h2>
      <table>
        <tbody>
          <tr>
            <th>Seller Name:</th>
            <td>{product.sellerName}</td>
          </tr>
          <tr>
            <th>Name:</th>
            <td>{product.itemName}</td>
          </tr>
          <tr>
            <th>District:</th>
            <td>{product.district}</td>
          </tr>
          <tr>
            <th>village/area/street:</th>
            <td>{product.village}</td>
          </tr>
          <tr>
            <th>Quantity:</th>
            <td>{product.quantity}</td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>{product.category}</td>
          </tr>
          <tr>
            <th>Description :</th>
            <td>{product.description}</td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>{product.price}</td>
          </tr>
          <tr>
            <th>Discount:</th>
            <td>{product.discount}</td>
          </tr>
          <tr>
            <th>Deliverable:</th>
            <td>{product.deliverable}</td>
          </tr>
          <tr>
            <th>Maximum available quantity:</th>
            <td>{product.maxQuantity}</td>
          </tr>
          
        </tbody>
      </table>
      <div className="buttons">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    </>
  );
}

export default ShowItemDetails;
