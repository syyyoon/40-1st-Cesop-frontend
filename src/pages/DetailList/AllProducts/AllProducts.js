import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';
import { SUB_CATEGORY_LIST } from '../Datas/subCategoryList';
import './AllProducts.scss';
import { API } from '../../../config';

const AllProducts = () => {
    const [allProductData, setAllProductData] = useState([]);
    const mainParams = useParams();

    const divisionBySubCategory = [];

    useEffect(() => {
        fetch(`${API.main_categories}/${mainParams.id}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setAllProductData(result);
            });
    }, []);

    const changeDataToArray = () => {
        SUB_CATEGORY_LIST.map(sub => {
            let listBySubCategory = [];
            allProductData.map(list => {
                list.sub_category_id === sub.subCategories &&
                    listBySubCategory.push(list);
            });
            divisionBySubCategory.push({
                id: sub.id,
                title: sub.title,
                content: sub.content,
                products: listBySubCategory,
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
