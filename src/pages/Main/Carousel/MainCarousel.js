import React, { useState } from 'react';
import { CAROUSEL_IMAGES } from './carouselData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './MainCarousel.scss';
import '../../../styles/mixin.scss';

const MainCarousel = () => {
    const carouselImages = [
        CAROUSEL_IMAGES[CAROUSEL_IMAGES.length - 1],
        ...CAROUSEL_IMAGES,
        CAROUSEL_IMAGES[0],
    ];
    const totalImage = carouselImages.length - 1;
    const [currentImg, setCurrentImg] = useState(1);
    const [transition, setTransition] = useState('transform 500ms ease-in-out');

    const nextButtonClick = () => {
        const nextChanged = currentImg + 1;

        if (currentImg >= totalImage - 1) {
            moveToNthSlide(1);
        }
        setTransition('all 0.5s ease-in-out ');
        setCurrentImg(nextChanged);
    };

    const prevButtonClick = () => {
        const prevChanged = currentImg - 1;

        if (prevChanged === 0) {
            moveToNthSlide(totalImage - 1);
        }
        setTransition('all 0.5s ease-in-out ');
        setCurrentImg(prevChanged);
    };

    const moveToNthSlide = n => {
        setTimeout(() => {
            setTransition('');
            setCurrentImg(n);
        }, 500);
    };

    const carouselStyle = {
        transition,
        transform: `translateX(-${currentImg}00%)`,
    };

    return (
        <div className="mainCarousel">
            <div className="carouselBox">
                <div className="carouselWrapper" style={carouselStyle}>
                    {carouselImages.map((items, idx) => {
                        return (
                            <div key={'' + items.id + idx}>
                                <img src={items.img} alt="carouselImage" />
                            </div>
                        );
                    })}
                </div>
                <div className="carouselButton">
                    <button
                        type="button"
                        className="prevButton"
                        onClick={prevButtonClick}
                    >
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="arrowIcon"
                        />
                    </button>
                    <button
                        type="button"
                        className="nextButton"
                        onClick={nextButtonClick}
                    >
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="arrowIcon"
                        />
                    </button>
                </div>
                <div className="carousel" />
            </div>
        </div>
    );
};

export default MainCarousel;
