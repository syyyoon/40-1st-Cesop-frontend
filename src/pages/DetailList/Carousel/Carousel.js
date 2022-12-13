import React, { useEffect, useRef, useState } from 'react';
import DescriptionCarousel from '../DescriptionCarousel/DescriptionCarousel';
import './Carousel.scss';

const Carousel = ({ list }) => {
    const { subCategories, content, product } = list;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showButton, setShowButton] = useState({ display: 'none' });
    const productRef = useRef(null);
    const scrollRef = useRef(null);

    console.log(product);
    const productNumInFirstView = 2;
    const numberOfDescription = 1;

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () => {
        if (currentSlide >= product.length - productNumInFirstView) {
            setCurrentSlide(product.length - productNumInFirstView);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const onMouseEventHandler = () => {
        product.length > productNumInFirstView
            ? setShowButton({ display: 'block' })
            : setShowButton({ display: 'none' });
    };
    const leaveMouseEventHandler = () => {
        setShowButton({ display: 'none' });
    };

    const stopShowAtFirst =
        currentSlide !== 0 ? showButton : { display: 'none' };
    const stopShowAtLast =
        currentSlide !== product.length - productNumInFirstView
            ? showButton
            : { display: 'none' };

    useEffect(() => {
        productRef.current.style.transition = 'all 0.5s ease-in-out';
        productRef.current.style.transform = `translateX(-${
            (100 / (product.length + numberOfDescription)) * currentSlide
        }%)`;
        scrollRef.current.style.width = `${
            100 / (product.length - (productNumInFirstView - 1))
        }%`;
        scrollRef.current.style.transition = 'all 0.5s ease-in-out';
        scrollRef.current.style.transform = `translateX(${
            100 * currentSlide
        }%)`;
    }, [currentSlide]);

    return (
        <section className="carousel">
            <div
                className="showBox"
                onMouseEnter={onMouseEventHandler}
                onMouseLeave={leaveMouseEventHandler}
            >
                <div className="carouselBox" ref={productRef}>
                    <DescriptionCarousel
                        subCategories={subCategories}
                        content={content}
                        product={product}
                    />
                    {product.map(product => {
                        return (
                            <div key={product.id} className="productCell">
                                <img
                                    className="allProductImage"
                                    alt="product"
                                    src={product.productImage}
                                />
                                <h5 className="productName">
                                    {product.productName}
                                </h5>
                                <span className="productInfo">
                                    {product.size}
                                    {' / '}
                                    {product.price.toLocaleString('ko-KR', {
                                        style: 'currency',
                                        currency: 'KRW',
                                    })}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <button
                    className="carousleMove movePrev"
                    onClick={prevSlide}
                    style={stopShowAtFirst}
                >
                    <span className="arrowInButton">〈</span>
                </button>
                <button
                    className="carousleMove moveNext"
                    onClick={nextSlide}
                    style={stopShowAtLast}
                >
                    <span className="arrowInButton">〉</span>
                </button>
            </div>
            {product.length >= 3 ? (
                <div className="totalIndicator">
                    <div className="selectedIndicator" ref={scrollRef} />
                </div>
            ) : (
                <div ref={scrollRef} />
            )}
        </section>
    );
};

export default Carousel;
