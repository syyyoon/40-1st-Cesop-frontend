import React from 'react';
import Carousel from '../Carousel/Carousel';
import { PRODUCT_LIST } from '../Datas/AllProductData';
import './AllProducts.scss';

const AllProducts = () => {
    return (
        <section className="allProducts">
            <div className="categoryTitleHolder">
                <h1 className="categoryTitle">모든 스킨</h1>
            </div>
            <div className="categoryBar">
                <ul className="categoryList">
                    <li className="categoryName">
                        <button>
                            <span>모든 스킨</span>
                        </button>
                    </li>
                    {PRODUCT_LIST.map(list => {
                        return (
                            <li key={list.id}>
                                <button className="categoryName">
                                    <span>{list.mainCategory}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {PRODUCT_LIST.map(
                ({ id, mainCategory, content, productList, image }) => {
                    return (
                        <Carousel
                            key={id}
                            mainCategory={mainCategory}
                            content={content}
                            productList={productList}
                            image={image}
                        />
                    );
                }
            )}
        </section>
    );
};

export default AllProducts;
