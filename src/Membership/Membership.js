import React from 'react';
import './Membership.css'

const Membership = () => {
    return (
        <div id="membership" className="mt-5">
            <h5 className="common-text-color text-center mb-3">Become a part of our Gym</h5>
            <h1 className="text-center mb-4">Membership Packages</h1>
            <p className="text-center text-secondary">We offer some special packages for our regular customer.</p>
            <p className="text-center text-secondary mb-5">Anyone can book more than 1 at a time</p>

            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
                <div class="col">
                    <div class="card card-style">
                        <div class="card-body ">
                            <h5 className="member-plan my-3 d-flex justify-content-center">Starter Plan</h5>
                            <h1 class="card-title text-center">3000</h1>
                            <p className="text-center">2 days of tour</p>
                            <p className="text-center">Breakfast</p>
                            <p className="text-center">Lunch </p>
                            <p className="text-center">Tent</p>
                            <p className="text-center">Limited water</p>
                            <p className="text-center">1 Guide</p>
                            <button className="member-btn-design  d-flex justify-content-center">Purchase now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-style">

                        <div class="card-body ">
                            <h5 className="member-plan my-3 d-flex justify-content-center">medium Plan</h5>
                            <h1 class="card-title text-center">5000</h1>
                            <p className="text-center">3 days of tour</p>
                            <p className="text-center">Breakfast</p>
                            <p className="text-center">Lunch</p>
                            <p className="text-center">Special dinner</p>
                            <p className="text-center">Bed for 2 persons</p>
                            <p className="text-center">1 Guide</p>
                            <button className="member-btn-design  d-flex justify-content-center">Purchase now</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-style">

                        <div class="card-body">
                            <h5 className="member-plan my-3 d-flex justify-content-center">Ultimate Plan</h5>
                            <h1 class="card-title text-center">7000</h1>
                            <p className="text-center">5 days of tour</p>
                            <p className="text-center">buffet breakfast</p>
                            <p className="text-center">lunch</p>
                            <p className="text-center">Secial dinner</p>
                            <p className="text-center">bed for each person</p>
                            <p className="text-center">3 guides</p>
                            <button className="member-btn-design  d-flex justify-content-center">Purchase now</button>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Membership;