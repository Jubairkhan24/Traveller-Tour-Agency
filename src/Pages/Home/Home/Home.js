import React from 'react';
import Membership from '../../../Membership/Membership';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Trainers></Trainers>
            <Membership></Membership>

        </div>
    );
};

export default Home;