import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { SUB_CATEGORY_LIST } from '../Datas/subCategoryList';
import './AllProducts.scss';
const AllProducts = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data/allProductList.json')
            .then(response => response.json())
            .then(result => setData(result));
    }, []);

    const allList = [];
    const changeDataToArray = () => {
        SUB_CATEGORY_LIST.map(sub => {
            let listBySubCategory = [];
            data.map(list => {
                list.subCategories === sub.subCategories &&
                    listBySubCategory.push(list);
            });
            allList.push({
                id: sub.id,
                subCategories: sub.subCategories,
                content: sub.content,
                product: listBySubCategory,
            });
        });
    };

    changeDataToArray();

    console.log(data);

    return (
        <div>
            {allList.map(list => {
                return <Carousel key={list.id} list={list} />;
            })}
        </div>
    );
};

export default AllProducts;
