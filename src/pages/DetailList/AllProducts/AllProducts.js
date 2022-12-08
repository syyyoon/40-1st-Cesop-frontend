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
                    <li className="categoryTitles">
                        <button>
                            <span>모든 스킨</span>
                        </button>
                    </li>
                    {PRODUCT_LIST.map(list => {
                        return (
                            <li className="categoryTitles" key={list.id}>
                                <button>
                                    <span>{list.main_category}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="carouselSection">
                {PRODUCT_LIST.map(
                    ({ id, main_category, content, product_list }) => {
                        return (
                            <Carousel
                                key={id}
                                main_category={main_category}
                                content={content}
                                product_list={product_list}
                            />
                        );
                    }
                )}
            </div>
        </section>
    );
};

export default AllProducts;
