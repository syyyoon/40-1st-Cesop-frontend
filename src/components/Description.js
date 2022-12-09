import React from 'react';
import './Description.scss';

const Description = ({ term, description }) => {
    return (
        <div className="productDetailList">
            <div className="productTerm">
                <strong>{term}</strong>
            </div>
            <div className="productDescription">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Description;
