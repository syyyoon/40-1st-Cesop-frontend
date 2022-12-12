import React, { useRef, useState } from 'react';
import { CAROUSEL_IMAGES } from './carouselData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './MainCarousel.scss';
import '../../../styles/mixin.scss';

const MainCarousel = () => {
    const TOTAL_IMAGES = 2;
    const [currentImg, setCurrentImg] = useState(0);
    const imagePageRef = useRef();

    const NextSlide = () => {
        let nextChanged;

        if (currentImg >= TOTAL_IMAGES) {
            nextChanged = 0;
        } else {
            nextChanged = currentImg + 1;
        }

        let moveToPage = nextChanged * 100;
        imagePageRef.current.style.transition = 'all 0.5s ease-in-out';
        imagePageRef.current.style.transform = `translateX(${moveToPage}%)`;

        setCurrentImg(nextChanged);
    };

    const PrevSlide = () => {
        let prevChanged;

        if (currentImg === 0) {
            prevChanged = TOTAL_IMAGES;
        } else {
            prevChanged = currentImg - 1;
        }
        let moveToPage = prevChanged * 100;
        imagePageRef.current.style.transition = 'all 0.5s ease-in-out';
        imagePageRef.current.style.transform = `translateX(${moveToPage}%)`;

        setCurrentImg(prevChanged);
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
                <div className="carousel" />
            </div>
            <div className="pageBox">
                <span ref={imagePageRef} className="pagination" />
            </div>
        </div>
    );
};

export default MainCarousel;
