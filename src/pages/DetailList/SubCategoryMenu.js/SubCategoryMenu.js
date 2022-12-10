import React from 'react';
import { PRODUCT_LIST } from '../Datas/allProductData';
import FilterButton from '../FilterButton/FilterButton';
import './SubCategoryMenu.scss';

const SubCategoryMenu = () => {
    return (
        <div className="categoryBar">
            <ul className="categoryList">
                <li>
                    <button className="categoryName noneClick">
                        <span>모든 스킨</span>
                    </button>
                </li>
                {PRODUCT_LIST.map(list => {
                    return (
                        <li key={list.id}>
                            <button className="categoryName">
                                <span className="textOfName">
                                    {list.mainCategory}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ul>
            <FilterButton />
        </div>
    );
};

export default SubCategoryMenu;
