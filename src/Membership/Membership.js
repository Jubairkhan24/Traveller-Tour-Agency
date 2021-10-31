import React from 'react';
import './Membership.css'

const Membership = () => {
    return (
        <div id="membership" className="mt-5">
            <h5 className="common-text-color text-center mb-3">Become a part of our Gym</h5>
            <h1 className="text-center mb-4">Membership Packages</h1>
            <p className="text-center text-secondary">We offer 3 monthly packages for our customers at a low price.</p>
            <p className="text-center text-secondary mb-5">Anyone can buy more than one month at a time</p>

            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                <div class="col">
                    <div class="card card-style">
                        <div class="card-body ">
                            <h5 className="member-plan my-3 d-flex justify-content-center">Beginner Plan</h5>
                            <h1 class="card-title text-center">$30</h1>
                            <p className="text-center">Ultimate Equipment</p>
                            <p className="text-center">Diet Plans</p>
                            <p className="text-center">Workout Plans</p>
                            <p className="text-center">Suppliment Guidance</p>
                            <p className="text-center">Detox Drinks</p>
                            <p className="text-center">Limited Trainer Guidance</p>
                            <button className="member-btn-design  d-flex justify-content-center">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-style">

                        <div class="card-body ">
                            <h5 className="member-plan my-3 d-flex justify-content-center">Intermediate Plan</h5>
                            <h1 class="card-title text-center">$50</h1>
                            <p className="text-center">Ultimate Equipment</p>
                            <p className="text-center">Diet Plans</p>
                            <p className="text-center">Workout Plans</p>
                            <p className="text-center">Suppliment Guidance</p>
                            <p className="text-center">Detox Drinks</p>
                            <p className="text-center">Personal Trainer Guidance</p>
                            <button className="member-btn-design  d-flex justify-content-center">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-style">

                        <div class="card-body">
                            <h5 className="member-plan my-3 d-flex justify-content-center">Ultimate Plan</h5>
                            <h1 class="card-title text-center">$90</h1>
                            <p className="text-center">Ultimate Equipment</p>
                            <p className="text-center">Diet Plans</p>
                            <p className="text-center">Workout Plans</p>
                            <p className="text-center">Suppliment Guidance</p>
                            <p className="text-center">Detox Drinks</p>
                            <p className="text-center">Personal Trainer Guidance</p>
                            <button className="member-btn-design  d-flex justify-content-center">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Membership;