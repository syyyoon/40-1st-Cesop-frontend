import React from 'react';
import Carousel from '../Carousel/Carousel';
import SubCategoryMenu from '../SubCategoryMenu.js/SubCategoryMenu';
import { PRODUCT_LIST } from '../Datas/AllProductData';
import './AllProducts.scss';

const AllProducts = () => {
    return (
        <section className="allProducts">
            <div className="categoryTitleHolder">
                <h1 className="categoryTitle">모든 스킨</h1>
            </div>
            <SubCategoryMenu />

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
