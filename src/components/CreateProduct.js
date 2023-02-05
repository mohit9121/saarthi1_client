import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBook = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    isbn: '',
    author: '',
    description: '',
    published_date: '',
    publisher: '',
    photo: '',
  });

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  // const onChange_img = (e) =>{
  //   setBook({...book, photo: e.target.files[0].append()}); 
  //   // console.log(e.target.files[0]);
  //   // book.photo = e.target.files[0];
  //   // console.log(book.photo);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData(); 
    // formData.append('photo', book.photo);
    // console.log(book);

    axios
      .post('http://localhost:8082/api/products', book, {})
      .then((res) => {
        setBook({
          title: '',
          isbn: '',
          author: '',
          description: '',
          published_date: '',
          publisher: '',
          photo: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Product List
            </Link>
            <Link to='/create-blog' className='btn btn-outline-warning float-left'>
              write something to discussion forum
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Product</h1>
            <p className='lead text-center'>Create new Product</p>

            <form noValidate onSubmit={onSubmit} encType='multipart/form-data'>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the product'
                  name='title'
                  className='form-control'
                  value={book.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Max quantity that you can sell'
                  name='isbn'
                  className='form-control'
                  value={book.isbn}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Name of the seller'
                  name='author'
                  className='form-control'
                  value={book.author}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Describe this Product that you want to sell'
                  name='description'
                  className='form-control'
                  value={book.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='published_date'
                  name='published_date'
                  className='form-control'
                  value={book.published_date}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Seller of this product'
                  name='publisher'
                  className='form-control'
                  value={book.publisher}
                  onChange={onChange}
                />
              </div>
              {/* <div className='form-group'>
                <input
                  type='file'
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  className='form-control'
                  onChange={onChange_img}
                />
              </div> */}
              {/* <div className='form-group'>
                <input
                  type='text'
                  placeholder='photo'
                  name='photo'
                  className='form-control'
                  value={book.photo}
                  onChange={onChange}
                />
              </div> */}

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;