import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [credential, setCredential] = useState({ email: "", password: "" })

    const handleSubmit = () => {
        console.log("This is handle sumbit")

    }

    const handleChange = () => {

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={handleChange} name='email' value={credential.email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={handleChange} name='password' value={credential.password} id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h6>Not Registered?</h6>
            <Link className="nav-link" to="/signup">Signup</Link>
        </div>
    );
};

export default Login;
