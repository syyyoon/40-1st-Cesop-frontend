import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';
import { SUB_CATEGORY_LIST } from '../Datas/subCategoryList';
import './AllProducts.scss';

const AllProducts = () => {
    const [allProductData, setAllProductData] = useState([]);

    const divisionBySubCategory = [];

    useEffect(() => {
        fetch('/data/allProductList.json')
            .then(response => response.json())
            .then(result => {
                setAllProductData(result);
            });
    }, []);

    const changeDataToArray = () => {
        SUB_CATEGORY_LIST.map(sub => {
            let listBySubCategory = [];
            allProductData.map(list => {
                list.subCategories === sub.subCategories &&
                    listBySubCategory.push(list);
            });
            divisionBySubCategory.push({
                id: sub.id,
                subCategories: sub.subCategories,
                content: sub.content,
                product: listBySubCategory,
            });
        });
    };

    changeDataToArray();

    return (
        <>
            <SubCategoryMenu />

            <div className="allProducts">
                {divisionBySubCategory.map(list => {
                    return <Carousel key={list.id} list={list} />;
                })}
            </div>
        </>
    );
};

export default AllProducts;
