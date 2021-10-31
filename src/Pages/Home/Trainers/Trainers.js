import React from 'react';

import trainer01 from '../../../images/trainers/jakob-owens-qkQwDvRqQY8-unsplash.jpg';
import trainer02 from '../../../images/trainers/damir-spanic-uytHnZAKNWQ-unsplash.jpg'
import trainer03 from '../../../images/trainers/aaron-brogden-9y4MaTz2Js0-unsplash.jpg'

import Trainer from '../Trainer/Trainer';

const trainers = [
    {
        img: trainer01,
        name: 'Baker Ali',
        expertize: 'Professional Body Builder'
    },
    {
        img: trainer02,
        name: 'Montu Mia',
        expertize: 'Fitness Trainer'
    },
    {
        img: trainer03,
        name: 'Mofiz Molla',
        expertize: 'Yoga Specialist'
    },
]

const Trainers = () => {
    return (
        <div id="trainers" className="container">
            <h2 className="common-text-color my-5">Our Experts</h2>
            <div className="row">
                {
                    trainers.map(expert => <Trainer
                        key={expert.name}
                        expert={expert}
                    >

                    </Trainer>)
                }
            </div>
        </div>
    );
};

export default Trainers;