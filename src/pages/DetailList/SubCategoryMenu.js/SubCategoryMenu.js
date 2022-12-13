import React, { useState } from 'react';
import AllProducts from '../AllProducts/AllProducts';
import ProductList from '../ProductList/ProductList';
import './SubCategoryMenu.scss';

const SubCategoryMenu = () => {
    const [currentTap, setCurrentTap] = useState('모든 스킨 보기');

    return (
        <>
            <section className="allProducts">
                <img
                    className="cesopLogo"
                    alt="logo"
                    src="/images/cesopLogo.png"
                />
                <div className="categoryTitleHolder">
                    <h1 className="categoryTitle">{currentTap}</h1>
                </div>
            </section>
            <div className="categoryBar">
                <ul className="categoryList">
                    {TAB_ARR.map(tap => {
                        return (
                            <li key={tap.id} className="categoryName">
                                <button className="subCategoryButton">
                                    <span
                                        className={
                                            currentTap === tap.text
                                                ? 'textOfName--selected'
                                                : 'textOfName'
                                        }
                                        onClick={() => setCurrentTap(tap.text)}
                                    >
                                        {tap.text}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
                {/* {currentTap !== '모든 스킨 보기' && <FilterButton />} */}
            </div>
            {/* {<FilterButton /> && <FilterSection />} */}

            {MAPPING_OBJ[currentTap]}
        </>
    );
};

export default SubCategoryMenu;

const TAB_ARR = [
    { id: 1, text: '모든 스킨 보기' },
    { id: 2, text: '클렌저' },
    { id: 3, text: '각질 제거' },
    { id: 4, text: '트리트먼트&마스크' },
    { id: 5, text: '토너' },
];

const MAPPING_OBJ = {
    '모든 스킨 보기': <AllProducts />,
    클렌저: <ProductList />,
    '각질 제거': <ProductList />,
    '트리트먼트&마스크': <ProductList />,
    토너: <ProductList />,
};
