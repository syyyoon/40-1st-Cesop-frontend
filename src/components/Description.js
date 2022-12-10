import React from 'react';
import './Description.scss';

const Description = ({ detail, index }) => {
    return (
        <div key={index} className="productDetailList">
            <div className="productTerm">
                <strong>{detail.title}</strong>
            </div>
            <div className="productDescription">
                <p>{detail.content}</p>
            </div>
        </div>
    );
};

export default Description;
