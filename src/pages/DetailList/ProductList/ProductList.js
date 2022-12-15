import React, { useEffect, useState } from 'react';
import Preview from '../Preview/Preview';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';
import './ProductList.scss';

const ProductList = () => {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetch('/data/product.json')
            .then(response => response.json())
            .then(result => setProductData(result));
    }, []);

    return (
        <>
            <SubCategoryMenu />
            <section className="productList">
                <div className="listSection">
                    <div className="descriptionOfList">
                        <div>
                            <h2 className="listTitle">클랜저</h2>
                            <p>
                                피부의 남은 각질, 불필요한 유분 그리고 기타
                                잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는
                                것은 인텔리전트 스킨케어의 기초입니다.
                            </p>
                        </div>
                    </div>
                    {productData.map(product => {
                        return <Preview key={product.id} product={product} />;
                    })}
                </div>
            </section>
        </>
    );
};

export default ProductList;
