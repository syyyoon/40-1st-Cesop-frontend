import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { PRODUCT_LIST } from '../Datas/allProductData';
import { AAAAA } from '../Datas/aaaaa';
import './AllProducts.scss';

const SUB_CATE = [1, 2, 3];

const AllProducts = () => {
    const allList = [];
    const cccc = () => {
        SUB_CATE.map(name => {
            let b = [];
            AAAAA.map(list => {
                return list.sub_categories === name && b.push(list);
            });
            allList.push(b);
        });
    };
    cccc();
    console.log(allList);
    console.log(allList.length);

    return (
        <div>
            {/* <button onClick={a}>크아ㅏㅏ아아아아아아아아아</button> */}
            {allList.map((list, index) => {
                return (
                    <Carousel
                        key={index}
                        list={list}
                        sub_categories={list.sub_categories}
                    />
                );
            })}
        </div>
    );
};

export default AllProducts;
