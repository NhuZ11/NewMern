import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credential, setCredential] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credential;
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const json = await response.json();
        console.log('this is response ', json);
        if (json) {
            localStorage.setItem('token', json.authToken);
            navigate("/home");
            props.showAlert('Account created', 'success');
        } else {
            props.showAlert('invalid credential', 'danger');
        }
    }

    const handleChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value });
    }

    return (
       <div className=''>
        <h1 className='display-5 text-center fw-bold pt-4'>Getting Started</h1>
         <div className="container d-flex justify-content-center mt-4">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%', backgroundColor: '#2C2C2C', color: '#E0E0E0' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control bg-dark text-light border-0" 
                            onChange={handleChange} 
                            value={credential.email} 
                            name="email" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control bg-dark text-light border-0" 
                            name="password" 
                            value={credential.password} 
                            onChange={handleChange} 
                            id="exampleInputPassword1" 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">Not registered?</p>
                    <Link className="text-primary" to="/signup">Signup</Link>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Login;
