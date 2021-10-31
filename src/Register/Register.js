import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Register = () => {
    const { handleEmailChange, handleRegistration, error, signInUsingGoogle } = useAuth;
    return (
        <div>
            <div>
                <h1 className="text-center my-5 ">Please Sign up</h1>
                <form onSubmit={handleRegistration} className="container col-7 my-5">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label ">Email address</label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label ">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label ">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-outline-success">Submit</button>
                </form>

                <p className="text-center">Already have an account? <Link to="/login">Login</Link></p>

                <button onClick={signInUsingGoogle} className="btn btn-outline-success">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;