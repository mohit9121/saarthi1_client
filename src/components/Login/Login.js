import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/NavBar.js";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const body = JSON.stringify({ email, password });
        try {
            const res = await axios.post("http://localhost:8082/api/users/login", body, config);
            localStorage.setItem("token", res.data.id);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="form-container">
            <h1 className="form-header">Login</h1>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={e => onChange(e)}
                        minLength="6"
                        required
                        className="form-control"
                    />
                </div>
                <input type="submit" value="Login" className="form-submit" />
            </form>
            <Link
                to='/register'
                className='no_account_btn'
            >
                Don't have an account ? Register here
            </Link>
        </div>
        </>
    );
};

export default Login; 