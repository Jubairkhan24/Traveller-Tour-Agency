import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, description } = service;
    return (
        <div className=" service pb-3 mt-5">
            <img src={img} alt="" />
            <h3 className="mt-3 text-center">{name}</h3>
            <p className="px-3">{description}</p>
            <Link className="btn-style d-flex justify-content-center" to={`/booking/${_id}`}>
                <button className="btn btn-design text-center">View Details</button>
            </Link>
        </div>
        // <div className="card-group">
        //     <div className="card">
        //         <div className="">
        //             <img className="img-fluid" src={img} alt="" />
        //         </div>
        //     </div>
        // </div>
    );
};

export default Service;