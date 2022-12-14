import React from 'react';
import { Link } from 'react-router-dom';
import './DescriptionCarousel.scss';

const DescriptionCarousel = ({ subcategory, content, products }) => {
    return (
        <div className="descriptionCarousel">
            <div>
                <h2 className="productCategory">{subcategory}</h2>
                <p className="descriptionCategory">{content}</p>
                <Link>
                    <span className="anchorToList">
                        {subcategory} 모두 보기 ({products.length})
                        <span className="arrowToList">→</span>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default DescriptionCarousel;
