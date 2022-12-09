import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scss';

function Carousel({ mainCategory, content, productList }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const productRef = useRef(null);
    const scrollRef = useRef(null);

    const productNumInFirstView = 3;
    const numberOfDescription = 1;

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () => {
        if (currentSlide >= productList.length - productNumInFirstView) {
            setCurrentSlide(productList.length - productNumInFirstView);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    useEffect(() => {
        productRef.current.style.transition = 'all 0.5s ease-in-out';
        productRef.current.style.transform = `translateX(-${
            (100 / (productList.length + numberOfDescription)) * currentSlide
        }%)`;
        scrollRef.current.style.width = `${
            100 / (productList.length - (productNumInFirstView - 1))
        }%`;
        scrollRef.current.style.transition = 'all 0.5s ease-in-out';
        scrollRef.current.style.transform = `translateX(${
            100 * currentSlide
        }%)`;
    }, [currentSlide]);

    return (
        <section className="carousel">
            <div className="showBox">
                <div className="carouselBox" ref={productRef}>
                    <div className="descriptionOfList">
                        <div>
                            <h2 className="productCategory">{mainCategory}</h2>
                            <p className="descriptionCategory">{content}</p>
                            <a className="anchorToList">
                                {mainCategory} 모두 보기 ({productList.length})
                                <span className="arrowToList">→</span>
                            </a>
                        </div>
                    </div>
                    {productList.map(product => {
                        return (
                            <div key={product.id} className="productCell">
                                <img
                                    className="allProductImage"
                                    alt="product"
                                    src="/images/DetailList/product1.png"
                                />
                                <h5 className="productName">{product.name}</h5>
                                <span className="productInfo">
                                    {product.volume}
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
            </div>
            {productList.length >= 3 ? (
                <div className="totalIndicator">
                    <div className="selectedIndicator" ref={scrollRef} />
                </div>
            ) : (
                <div ref={scrollRef} />
            )}

            <button className="carousleMove moveLeft" onClick={prevSlide}>
                〈
            </button>
            <button className="carousleMove moveRight" onClick={nextSlide}>
                〉
            </button>
        </section>
    );
}

export default Carousel;
