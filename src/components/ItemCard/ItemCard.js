import React from "react";
import { Link } from "react-router-dom";
import "./ItemCard.css";
import avatar1 from "../../assets/milk.jpg";
import avatar2 from "../../assets/meat.jpg";
import avatar3 from "../../assets/egg.jpg";
import avatar4 from "../../assets/crop.jpg";
import avatar5 from "../../assets/dairy.jpg";

const ItemCard = ({ name, district, price, sellerName, category, id1 }) => {
  // Map each category to its corresponding image
  const categoryImageMap = {
    MilkProduct: avatar1,
    EggProduct: avatar3,
    MeatProduct: avatar2,
    CropsProduct: avatar4,
    Others: avatar5,
    "": avatar5,
  };

  // Get the image URL for the current category
  const imageURL = categoryImageMap[category];

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageURL} alt={category} />
      </div>
      <div className="card-content">
        <h2>
          <Link className="card-content" to={`/show-item/${id1}`}>
            {" "}
            {category}{" "}
          </Link>
        </h2>
        <p>{district}</p>
        <p>name: {name}</p>
        <p>Price: {price}</p>
        <p>Seller: {sellerName}</p>
      </div>
    </div>
  );
};

export default ItemCard;
