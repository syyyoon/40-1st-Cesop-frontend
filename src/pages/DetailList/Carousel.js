import React, { useEffect, useRef, useState } from 'react';
import './Carousel.scss';

const LIST = [
    { id: 1, name: '이름1', ml: '10ml', price: '1000원' },
    { id: 2, name: '이름2', ml: '20ml', price: '2000원' },
    { id: 3, name: '이름3', ml: '30ml', price: '3000원' },
    { id: 4, name: '이름4', ml: '40ml', price: '4000원' },
    { id: 5, name: '이름5', ml: '50ml', price: '5000원' },
    { id: 6, name: '이름6', ml: '60ml', price: '6000원' },
    { id: 7, name: '이름7', ml: '70ml', price: '7000원' },
    { id: 8, name: '이름8', ml: '80ml', price: '8000원' },
    { id: 9, name: '이름9', ml: '90ml', price: '9000원' },
];

function Carousel(props) {
    const colorS =
        props.backgroundColor == true
            ? 'rgb(246, 245, 232)'
            : 'rgb(235, 234, 222)';
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
        if (currentSlide >= LIST.length) {
            setCurrentSlide(LIST.length);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    useEffect(() => {
        scrollRef.current.style.transition = 'all 0.5s ease-in-out';
        scrollRef.current.style.transform = `translateX(-${currentSlide * 9}%)`;
        productRef.current.style.transition = 'all 0.5s ease-in-out';
        productRef.current.style.transform = `translateX(${
            (90 / LIST.length) * currentSlide
        }0%)`;
    }, [currentSlide]);

    return (
        <section
            className="carouselSection"
            style={{ backgroundColor: colorS }}
        >
            <div className="showBox">
                <div
                    className="carouselBox"
                    ref={scrollRef}
                    style={{ width: LIST.length * 282 + '%' }}
                >
                    <div className="descriptionOfList">
                        <div>
                            <h2 className="productCategory">{props.title}</h2>
                            <p className="descriptionCategory">
                                {props.content}
                            </p>
                            <a className="anchorToList">
                                {props.title} 모두 보기 (9)
                                <span className="arrowToList">→</span>
                            </a>
                        </div>
                    </div>
                    {LIST.map(product => {
                        return (
                            <div key={product.id} className="productCell">
                                <img
                                    className="allProductImage"
                                    alt=",,,"
                                    src="/images/DetailList/product1.png"
                                />
                                <h5 className="productName">{product.name}</h5>
                                <span className="productInfo">
                                    {product.ml} / {product.price}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="totalUnderBar">
                <div className="selectedUnderBar" ref={productRef} />
            </div>
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
