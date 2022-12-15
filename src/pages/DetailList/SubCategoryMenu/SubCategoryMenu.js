import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubCategoryMenu.scss';

const SubCategoryMenu = () => {
    return (
        <div className="subCategoryMenu">
            <section className="topSection">
                <img
                    className="cesopLogo"
                    alt="logo"
                    src="/images/cesopLogo.png"
                />
                <div className="categoryTitleHolder">
                    <h1 className="categoryTitle">스킨</h1>
                </div>
            </section>
            <div className="categoryBar">
                <ul className="categoryList">
                    {TAB_ARR.map(tap => {
                        return (
                            <li key={tap.id} className="categoryName">
                                <button className="subCategoryButton">
                                    <NavLink
                                        to={tap.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'textOfName--selected'
                                                : 'textOfName'
                                        }
                                    >
                                        {tap.text}
                                    </NavLink>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SubCategoryMenu;

const TAB_ARR = [
    { id: 1, text: '모든 스킨 보기', path: '/all-products' },
    { id: 2, text: '클렌저', path: '/product-list' },
    { id: 3, text: '각질 제거', path: '/product-list' },
    { id: 4, text: '트리트먼트&마스크', path: '/product-list' },
    { id: 5, text: '토너', path: '/product-list' },
];
