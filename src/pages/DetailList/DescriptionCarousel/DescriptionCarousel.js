import React from 'react';
import './DescriptionCarousel.scss';

const DescriptionCarousel = ({ subCategories, content, product }) => {
    return (
        <div className="descriptionCarousel">
            <div>
                <h2 className="productCategory">{subCategories}</h2>
                <p className="descriptionCategory">{content}</p>
                <a className="anchorToList">
                    {subCategories} 모두 보기 ({product.length})
                    <span className="arrowToList">→</span>
                </a>
            </div>
        </div>
    );
};

export default DescriptionCarousel;
