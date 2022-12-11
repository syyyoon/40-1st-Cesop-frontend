import React from 'react';
import Carousel from '../Carousel/Carousel';
import SubCategoryMenu from '../SubCategoryMenu.js/SubCategoryMenu';
import { PRODUCT_LIST } from '../Datas/allProductData';
import './AllProducts.scss';

const AllProducts = () => {
    return (
        <section className="allProducts">
            <img className="cesopLogo" alt="logo" src="/images/cesopLogo.png" />
            <div className="categoryTitleHolder">
                <h1 className="categoryTitle">모든 스킨</h1>
            </div>
            <SubCategoryMenu />
            <div>
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
            </div>
        </section>
    );
};

export default AllProducts;
