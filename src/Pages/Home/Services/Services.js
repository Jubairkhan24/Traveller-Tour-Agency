import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className="">
            <h2 className=" common-text-color mt-5 text-center">Popular Places</h2>
            <h5 className="common-text-color text-center">Explore the beauty of Nature</h5>
            <div className="container service-container mt-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;