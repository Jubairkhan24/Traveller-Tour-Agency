import React from 'react';

const Expert = ({ expert: trainer }) => {
    const { name, img, expertize } = trainer;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="img-fluid mb-3" src={img} alt="" />
            <h3>Name: {name}</h3>
            <h5 className="common-text-color mt-3">{expertize}</h5>
        </div>
    );
};

export default Expert;