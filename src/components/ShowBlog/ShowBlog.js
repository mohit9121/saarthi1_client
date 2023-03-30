import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/NavBar.js";
import CommentCard from "../commentCard/commentCard.js";

import "./ShowBlog.css";

function ShowBlog() {
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [currLikes, setLikes] = useState(0);
  const [currDislikes, setDislikes] = useState(0);
  const [commentContent, setCommentContent] = useState({ text: "" });

  const { blogId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/blog/get-blog/${blogId}`)
      .then((response) => {
        setBlog(response.data);
        setLikes(response.data.likes);
        setDislikes(response.data.dislikes);
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get(`http://localhost:8082/api/blog/get-comments/${blogId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [blogId]);

  const handleLike = () => {
    axios
      .put(`http://localhost:8082/api/blog/increase-like/${blogId}`)
      .then((resp) => {
        setLikes(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleDislike = () => {
    axios
      .put(`http://localhost:8082/api/blog/increase-dislike/${blogId}`)
      .then((resp) => {
        setDislikes(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleAddComment = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8082/api/blog/post-comment/${blogId}`,
        commentContent
      )
      .then((response) => {
        setComments([...comments, response.data]);
        setCommentContent({ text: "" });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .put(`http://localhost:8082/api/blog/increase-comment/${blogId}`)
      .then((resp) => {
        console.log("comment added successfully");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCommentChange = (e) => {
    setCommentContent({
      ...commentContent,
      [e.target.name]: e.target.value,
    });
  };

  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Navbar />
      <div className="blog-container">
        <h2 className="blog-title">{blog.title}</h2>
        <div className="blog-content">{blog.content}</div>
        <div className="blog-likes">
          <button onClick={handleLike} className="like-button">
            Likes: {currLikes}
          </button>
        </div>
        <div className="blog-dislikes">
          <button onClick={handleDislike} className="dislike-button">
            {" "}
            Dislikes: {currDislikes}{" "}
          </button>
        </div>
        <h3 className="comments-header">Comments:</h3>
        <form className="add-comment-form" onSubmit={handleAddComment}>
          <input
            className="comment-input"
            type="text"
            name="commentContent"
            onChange={handleCommentChange}
            placeholder="write your comment here "
          />
          <button className="add-comment-button" type="submit">
            Post Comment
          </button>
        </form>

        {comments.map((comment) => {
          return <CommentCard key={comment._id} comment={comment} />;
        })}
      </div>
    </>
  );
}

export default ShowBlog;
