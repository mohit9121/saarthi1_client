import React, { useState } from 'react';
import axios from 'axios';
import './BlogForm.css';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        const blog = {
            title,
            content
        };
        try {
            await axios.post('http://localhost:8082/api/blog', blog);
            setTitle('');
            setContent('');
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="blog-form">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                className="blog-form-input"
            />
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Content"
                className="blog-form-textarea"
            />
            <button type="submit" className="blog-form-button">Save</button>
        </form>
    );
};

export default BlogForm;