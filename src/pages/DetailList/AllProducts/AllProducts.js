import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';
import { SUB_CATEGORY_LIST } from '../Datas/subCategoryList';
import './AllProducts.scss';

const AllProducts = () => {
    const [allProductData, setAllProductData] = useState([]);

    useEffect(() => {
        fetch('/data/allProductList.json')
            .then(response => response.json())
            .then(result => {
                setAllProductData(result);
            });
    }, []);

    return (
        <>
            <SubCategoryMenu />

            <div className="allProducts">
                {allProductData.map(list => {
                    return <Carousel key={list.id} list={list} />;
                })}
            </div>
        </>
    );
};

export default AllProducts;
