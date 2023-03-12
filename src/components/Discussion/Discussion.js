import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Discussion.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/NavBar.js';
 
const BlogList = () => { 
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:8082/api/blog');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="blog-list">
      <div className='col-md-11'>
        <Link
          to='/create-blog'
          className='btn btn-outline-warning float-right'
        >
          + Add New blog
        </Link>
        
        <br />
        <br />
        <hr />
      </div>
      {blogs.map(blog => (
        <div key={blog._id} className="blog-item">
          <h2 className="blog-item-title">{blog.title}</h2>
          <p className="blog-item-content">{blog.content.slice(0, 200)} ....</p>
          <p className="blog-item-content">Likes: {blog.likes}</p>
          <p className="blog-item-content">Dislikes: {blog.dislikes}</p>
          <p className="blog-item-content">Comments: {blog.comments}</p>
          <Link to = {`/show-blog/${blog._id}`} className='read-more-button'>
            Read More
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default BlogList;
