import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleRegister, handleEmailChange, handlePassWordChange } = useAuth();
    return (
        <div>
            <div>
                <h1 className="text-center my-5 ">Please Log In</h1>
                <form onSubmit={handleRegister} className="container col-7 my-5">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label ">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label ">Password</label>
                        <input onBlur={handlePassWordChange} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>
                <p className="my-4 text-center">New Here? <Link to="/register">create account</Link></p>
            </div>
            <button onClick={signInUsingGoogle} className="btn btn-outline-success">Google Sign In</button>
        </div>
    );
};

export default Login;