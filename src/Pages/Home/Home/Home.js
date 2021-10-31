import React from 'react';
import Membership from '../../../Membership/Membership';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Membership></Membership>

        </div>
    );
};

export default Home;