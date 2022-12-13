import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scss';

const Carousel = ({ list, sub_categories }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showButton, setShowButton] = useState({ display: 'none' });
    const productRef = useRef(null);
    const scrollRef = useRef(null);

    console.log(list);
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
        if (currentSlide >= list.length - productNumInFirstView) {
            setCurrentSlide(list.length - productNumInFirstView);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const onMouseEventHandler = () => {
        list.length > productNumInFirstView
            ? setShowButton({ display: 'block' })
            : setShowButton({ display: 'none' });
    };
    const leaveMouseEventHandler = () => {
        setShowButton({ display: 'none' });
    };

    const stopShowAtFirst =
        currentSlide !== 0 ? showButton : { display: 'none' };
    const stopShowAtLast =
        currentSlide !== list.length - productNumInFirstView
            ? showButton
            : { display: 'none' };

    useEffect(() => {
        productRef.current.style.transition = 'all 0.5s ease-in-out';
        productRef.current.style.transform = `translateX(-${
            (100 / (list.length + numberOfDescription)) * currentSlide
        }%)`;
        scrollRef.current.style.width = `${
            100 / (list.length - (productNumInFirstView - 1))
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
                    <div className="descriptionOfList">
                        <div>
                            <h2 className="productCategory">
                                {list[0].sub_categories}
                            </h2>
                            <p className="descriptionCategory">aaaa</p>
                            <a className="anchorToList">
                                {sub_categories} 모두 보기 ({list.length})
                                <span className="arrowToList">→</span>
                            </a>
                        </div>
                    </div>
                    {list.map(product => {
                        return (
                            <div key={product.id} className="productCell">
                                <img
                                    className="allProductImage"
                                    alt="product"
                                    src={product.product_image}
                                />
                                <h5 className="productName">
                                    {product.product_name}
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
            {list.length >= 3 ? (
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
