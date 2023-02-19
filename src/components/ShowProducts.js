import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './ProductCard.js';
import { useNavigate } from 'react-router-dom';
// import jwt from "jsonwebtoken";

function ShowBookList() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log(token); 
  const id = token;
  const handleLogout = () => {
    // Remove the JWT from local storage
    console.log("andar gaya ");
    localStorage.removeItem("token");

    // Navigate to the login page
    // props.history.push("/login");
    navigate('/')
  };
  // const payload = jwt.decode(token);
  // console.log(payload);
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/products')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);


  // console.log("no user"); 
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
  // console.log(users)



  const bookList =
    books.length === 0
      ? 'You Havent added any product till now '
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Current Product List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-book'
              className='btn btn-outline-warning float-right'
            >
              + Add New product
            </Link>
            <Link
              to='/discussion-forum'
              className='btn btn-outline-warning float-right'
            >
              Discussion forum
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
      <div>
        {id ? (
          <>
            <h1>Welcome, {users.username}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <h1>Welcome</h1>
            <Link
              to='/login'
              className='btn btn-outline-warning float-right'
            >
              Login
            </Link>
          </>
        )}
        {/* <LogoutButton {...props} /> */}
      </div>
      {/* <div className='info1'>
        <h1>welcome {users.username}</h1>
      </div> */}
    </div>
  );
}

export default ShowBookList;