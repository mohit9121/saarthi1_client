import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/NavBar.js';
import CommentCard from '../commentCard/commentCard.js';

import './ShowBlog.css';

function ShowBlog() {
    const [blog, setBlog] = useState(null);
    const [comments, setComments] = useState([]);
    const [currlikes, setLikes] = useState(0);
    const [currdislikes, setDislikes] = useState(0);
    // const [commentContent, setCommentContent] = useState(null);
    const [commentContent, setCommentContent] = useState({ text: '' });

    const { blogId } = useParams();

    

    useEffect(() => {
        axios.get(`http://localhost:8082/api/blog/get-blog/${blogId}`)
            .then(response => {
                setBlog(response.data);
                setLikes(response.data.likes);
                setDislikes(response.data.dislikes);
            })
            .catch(err => {
                console.log(err.message);
            });

        axios.get(`http://localhost:8082/api/blog/get-comments/${blogId}`)
            .then(response => {
                // console.log(response.data); 
                setComments(response.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [blogId]);


    const handleLike = () => {
        // setLikes(currlikes + 1);
        axios.put(`http://localhost:8082/api/blog/increase-like/${blogId}`)
            .then(resp => {
                setLikes(resp.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    };
    const handleDislike = () => {
        axios.put(`http://localhost:8082/api/blog/increase-dislike/${blogId}`)
            .then(resp => {
                setDislikes(resp.data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const handleAddcomment = (e) => {
        e.preventDefault(); // prevent default form submission behavior
        axios.post(`http://localhost:8082/api/blog/post-comment/${blogId}`, commentContent)
        .then(response=>{
            // console.log(response.data); 
            setComments([...comments, response.data]);
            setCommentContent({text: ''});
        })
        .catch(err =>{
            console.log(err); 
        })

        axios.put(`http://localhost:8082/api/blog/increase-comment/${blogId}`)
            .then(resp => {
                console.log("comment added successfully"); 
            })
            .catch(err => {
                console.log(err.message);
            })
    };


    const handleCommentChange = (e) => {
        // console.log("comment value changes ");
        setCommentContent({
            ...commentContent,
            [e.target.name]: e.target.value
        });
    }


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
                    <button onClick={handleLike} className='like-button'>Likes: {currlikes}</button>
                </div>
                <div className="blog-dislikes">
                    <button onClick={handleDislike} className='dislike-button'> Dislikes: {currdislikes} </button>
                </div>
                <h3 className="comments-header">Comments:</h3>
                <form className='add-comment-form' onSubmit={handleAddcomment}>
                    <input className="comment-input" type="text" name="commentContent" onChange={handleCommentChange} placeholder="write your comment here " />
                    <button className="add-comment-button" type="submit">Post Comment</button>
                </form>

                {comments.map(comment => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}

            </div>
        </>
    )
}


export default ShowBlog;

