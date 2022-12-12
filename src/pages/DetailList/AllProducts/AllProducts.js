import React from 'react';
import Carousel from '../Carousel/Carousel';
import { PRODUCT_LIST } from '../Datas/allProductData';
import './AllProducts.scss';

const AllProducts = () => {
    return (
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
    );
};

export default AllProducts;
