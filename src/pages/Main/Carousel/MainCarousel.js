import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { CAROUSEL_IMAGES } from './carouselData';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './MainCarousel.scss';
import '../../../styles/mixin.scss';

const MainCarousel = () => {
    const TOTAL_IMAGES = 2;
    const [currentImg, setCurrentImg] = useState(0);

    const NextSlide = () => {
        if (currentImg >= TOTAL_IMAGES) {
            setCurrentImg(0);
        } else {
            setCurrentImg(currentImg + 1);
        }
    };
    const PrevSlide = () => {
        if (currentImg === 0) {
            setCurrentImg(TOTAL_IMAGES);
        } else {
            setCurrentImg(currentImg - 1);
        }
    };

    const carouselStyle = {
        transition: 'all 0.5s ease-in-out',
        transform: `translateX(-${currentImg}00%)`,
    };

    return (
        <div className="mainCarousel">
            <div className="carouselBox">
                <div className="carouselWrapper" style={carouselStyle}>
                    {CAROUSEL_IMAGES.map(items => {
                        return (
                            <div key={items.id}>
                                <img src={items.img} alt="carouselImage" />
                            </div>
                        );
                    })}
                </div>
                <div className="carouselButton">
                    <button
                        type="button"
                        className="prevButton"
                        onClick={PrevSlide}
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="arrowIcon"
                        />
                    </button>
                    <button
                        type="button"
                        className="nextButton"
                        onClick={NextSlide}
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="arrowIcon"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainCarousel;
