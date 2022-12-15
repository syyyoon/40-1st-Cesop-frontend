import React from 'react';
import { Link } from 'react-router-dom';
import './Category.scss';

const IMAGES = Array(3)
    .fill()
    .map((_, index) => ({
        src: `../../images/category${index + 1}.png`,
        alt: 'skin',
    }));

const Category = ({ list }) => {
    const imagePosition = () => {
        const currentImage = IMAGES[list[0].id - 1];

        return (
            <img
                className="skinImage"
                src={currentImage.src}
                alt={currentImage.alt}
            />
        );
    };

    return (
        <div className="category">
            <div className="bodyWrapper">
                <img
                    className="logoImage"
                    src="../../images/cesop-logo.png"
                    alt="logo"
                />

                <div className="categoryWrapper">
                    {list.map(menu => {
                        return (
                            <ul className="categoryWrapperUl" key={menu.id}>
                                {menu.category.map(category => {
                                    return (
                                        <div
                                            className="categoryList"
                                            key={category.id}
                                        >
                                            <h4 className="categoryTitle">
                                                {category.title}
                                            </h4>
                                            {category.subCategory.map(
                                                subCategory => {
                                                    return (
                                                        <li
                                                            className="subcategoryList"
                                                            key={subCategory.id}
                                                        >
                                                            <Link
                                                                to={
                                                                    subCategory.path
                                                                }
                                                            >
                                                                {
                                                                    subCategory.text
                                                                }
                                                            </Link>
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
                <div className="categoryImage">{imagePosition()}</div>
            </div>
        </div>
    );
};

export default Category;
