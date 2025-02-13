import React, { useEffect, useRef, useState } from 'react';
import './ProductCarousel.scss';

const ProductCarousel = props => {
    const { productData } = props;
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isShowButton, setIsShowButton] = useState('');
    const productRef = useRef(null);
    const scrollRef = useRef(null);

    const PRODUCT_NUM_IN_FIRST_VIEW = 2;
    const NUMBER_OF_DESCRIPTION = 1;

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () => {
        if (currentSlide >= productData.length - PRODUCT_NUM_IN_FIRST_VIEW) {
            setCurrentSlide(productData.length - PRODUCT_NUM_IN_FIRST_VIEW);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const onMouseEventHandler = () => {
        productData.length > PRODUCT_NUM_IN_FIRST_VIEW
            ? setIsShowButton('--show')
            : setIsShowButton('');
    };
    const leaveMouseEventHandler = () => {
        setIsShowButton('');
    };

    useEffect(() => {
        productRef.current.style.transition = 'all 0.5s ease-in-out';
        productRef.current.style.transform = `translateX(-${
            (100 / (productData.length + NUMBER_OF_DESCRIPTION)) * currentSlide
        }%)`;
        scrollRef.current.style.width = `${
            100 / (productData.length - (PRODUCT_NUM_IN_FIRST_VIEW - 1))
        }%`;
        scrollRef.current.style.transition = 'all 0.5s ease-in-out';
        scrollRef.current.style.transform = `translateX(${
            100 * currentSlide
        }%)`;
    }, [currentSlide]);

    return (
        <section className="productCarousel">
            <div
                className="showBox"
                onMouseEnter={onMouseEventHandler}
                onMouseLeave={leaveMouseEventHandler}
            >
                <div className="carouselBox" ref={productRef}>
                    {productData.map(product => {
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
                                    {product.size}/
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
                    className={`carousleMove${
                        currentSlide !== 0 ? isShowButton : ''
                    } movePrev`}
                    onClick={prevSlide}
                >
                    <span className="arrowInButton">〈</span>
                </button>
                <button
                    className={`carousleMove${
                        currentSlide !==
                        productData.length - PRODUCT_NUM_IN_FIRST_VIEW
                            ? isShowButton
                            : ''
                    } moveNext`}
                    onClick={nextSlide}
                >
                    <span className="arrowInButton">〉</span>
                </button>
            </div>
            {productData.length >= 3 ? (
                <div className="totalIndicator">
                    <div className="selectedIndicator" ref={scrollRef} />
                </div>
            ) : (
                <div ref={scrollRef} />
            )}
        </section>
    );
};

export default ProductCarousel;
