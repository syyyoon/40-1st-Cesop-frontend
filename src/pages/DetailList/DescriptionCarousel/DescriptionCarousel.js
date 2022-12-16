import React from 'react';
import { Link } from 'react-router-dom';
import './DescriptionCarousel.scss';

const DescriptionCarousel = ({ title, content, products }) => {
    return (
        <div className="descriptionCarousel">
            <div>
                <h2 className="productCategory">{title}</h2>
                <p className="descriptionCategory">{content}</p>
                <Link>
                    <span className="anchorToList">
                        {title} 모두 보기 ({products.length})
                        <span className="arrowToList">→</span>
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default DescriptionCarousel;
