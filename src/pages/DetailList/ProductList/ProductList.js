import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Preview from '../Preview/Preview';
import SubCategoryMenu from '../SubCategoryMenu/SubCategoryMenu';
import { SUB_CATEGORY_LIST } from '../Datas/subCategoryList';
import './ProductList.scss';

const ProductList = () => {
    const [productData, setProductData] = useState([]);
    const subParams = useParams();

    useEffect(() => {
        fetch(
            `http://10.58.52.204:8000/products/sub_categories/${subParams.id}`,
            {
                method: 'GET',
            }
        )
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
                            <h2 className="listTitle">
                                {SUB_CATEGORY_LIST.map(sub => {
                                    return (
                                        sub.subCategories ===
                                            Number(subParams.id) && sub.title
                                    );
                                })}
                            </h2>
                            <p>
                                {SUB_CATEGORY_LIST.map(sub => {
                                    return (
                                        sub.subCategories ===
                                            Number(subParams.id) && sub.content
                                    );
                                })}
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
