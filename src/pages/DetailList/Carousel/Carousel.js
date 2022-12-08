import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scss';

function Carousel(props) {
    const { main_category, content, product_list } = props;
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollRef = useRef(null);
    const productRef = useRef(null);

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () => {
        if (currentSlide >= product_list.length - 3) {
            setCurrentSlide(product_list.length - 3);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    useEffect(() => {
        scrollRef.current.style.transition = 'all 0.5s ease-in-out';
        scrollRef.current.style.transform = `translateX(-${
            (100 / (product_list.length + 1)) * currentSlide
        }%)`;
        productRef.current.style.width = `${100 / (product_list.length - 2)}%`;
        productRef.current.style.transition = 'all 0.5s ease-in-out';
        productRef.current.style.transform = `translateX(${
            100 * currentSlide
        }%)`;
    }, [currentSlide]);

    return (
        <section className="carousel">
            <div className="showBox">
                <div className="carouselBox" ref={scrollRef}>
                    <div className="descriptionOfList">
                        <div>
                            <h2 className="productCategory">{main_category}</h2>
                            <p className="descriptionCategory">{content}</p>
                            <a className="anchorToList">
                                {main_category} 모두 보기 ({product_list.length}
                                )<span className="arrowToList">→</span>
                            </a>
                        </div>
                    </div>
                    {product_list.map(product => {
                        return (
                            <div key={product.id} className="productCell">
                                <img
                                    className="allProductImage"
                                    alt=",,,"
                                    src="/images/DetailList/product1.png"
                                />
                                <h5 className="productName">{product.name}</h5>
                                <span className="productInfo">
                                    {product.volume} / {product.price}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            {product_list.length >= 3 ? (
                <div className="totalIndicator">
                    <div className="selectedIndicator" ref={productRef} />
                </div>
            ) : (
                <div ref={productRef} />
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
