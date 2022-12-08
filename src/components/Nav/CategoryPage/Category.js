import React from 'react';
import './Category.scss';

const Category = ({ list }) => {
    const imagePosition = () => {
        if (list[0].id === 1) {
            return (
                <img
                    className="skinImage"
                    src="../../images/category1.png"
                    alt="skinImage"
                />
            );
        } else if (list[0].id === 2) {
            return (
                <img
                    className="skinImage"
                    src="../../images/category2.png"
                    alt="skinImage"
                />
            );
        } else {
            return (
                <img
                    className="skinImage"
                    src="../../images/category3.png"
                    alt="skinImage"
                />
            );
        }
    };
    return (
        <div className="categoryBody">
            <div className="bodyWrapper">
                <img
                    className="logoImage"
                    src="../../images/cesop-logo.png"
                    alt="logo"
                />

                <div className="categoryWrapper">
                    {list.map(menu => {
                        return (
                            <ul key={menu.id}>
                                {menu.category.map(category => {
                                    return (
                                        <div
                                            className="categoryList"
                                            key={category.id}
                                        >
                                            <h3 className="categoryTitle">
                                                {category.title}
                                            </h3>
                                            {category.subCategory.map(
                                                subCategory => {
                                                    return (
                                                        <li
                                                            className="category"
                                                            key={subCategory.id}
                                                        >
                                                            {subCategory.text}
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </div>
                                    );
                                })}
                            </ul>
                        );
                    })}
                </div>
                <div className="rightImage">{imagePosition()}</div>
            </div>
        </div>
    );
};

export default Category;
