import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BookCard from "./ProductCard.js";
import Navbar from "./Navbar/NavBar.js";

function ShowBookList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/products")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowBookList");
      });
  }, []);

  const bookList =
    books.length === 0
      ? "You Haven't added any product till now "
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className="ShowBookList">
      <div className="container">
        <>
          <Navbar />
        </>
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Current Product List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/discussion-forum"
              className="btn btn-outline-warning float-right m-1"
            >
              Discussion forum
            </Link>
            <Link
              to="/create-book"
              className="btn btn-outline-warning float-right m-1"
            >
              + Add New product
            </Link>
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;
