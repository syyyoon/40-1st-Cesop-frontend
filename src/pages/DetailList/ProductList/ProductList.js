import React from 'react';
import Preview from '../Preview/Preview';
import SubCategoryMenu from '../SubCategoryMenu.js/SubCategoryMenu';
import { SKIN_PRODUCT_LIST } from '../Datas/skinProductList';
import './ProductList.scss';

const ProductList = () => {
    return (
        <section className="productList">
            <img className="cesopLogo" alt="logo" src="/images/cesopLogo.png" />

            <div className="categoryTitleHolder">
                <h1 className="categoryTitle">클랜저</h1>
            </div>
            <SubCategoryMenu />

            <div className="listSection">
                <div className="descriptionOfList">
                    <div>
                        <h2 className="listTitle">처음의 시작</h2>
                        <p>
                            피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을
                            말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트
                            스킨케어의 기초입니다.
                        </p>
                    </div>
                </div>
                {SKIN_PRODUCT_LIST.map(product => {
                    return <Preview key={product.id} product={product} />;
                })}
            </div>
        </section>
    );
};

export default ProductList;
