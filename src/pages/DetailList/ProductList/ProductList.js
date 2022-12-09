import React from 'react';
import Preview from '../Preview/Preview';
import FilterButton from '../FilterButton/FilterButton';
import './ProductList.scss';

const PREVIEW_LIST = [
    {
        id: 1,
        name: '리무브',
        volume: '60 mL',
        price: 27000,
        skinType: '모든 피부, 메이크업을 한 피부',
        texture: '진정된, 생기있는',
    },
    {
        id: 2,
        name: '이름파슬리 씨드 오일',
        volume: '200 mL',
        price: 65000,
        skinType: '중성, 복합성, 건성, 민감성 피부',
        texture: '부드러운, 진정된',
    },
    {
        id: 3,
        name: '퓨리파잉 클렌저',
        volume: '100 mL',
        price: 40000,
        skinType: '중성, 건성 피부',
        texture: '탄력, 유연, 부드러운',
    },
    {
        id: 4,
        name: '페뷸러스 페이스 클렌저',
        volume: '100 mL',
        price: 35000,
        skinType: '중성, 건성 피부',
        texture: '상쾌한, 진정된, 부드러운',
    },
    {
        id: 5,
        name: '파슬리 씨드 페이셜 클렌저',
        volume: '100 mL',
        price: 45000,
        skinType: '중성, 복합성, 문제성 피부',
        texture: '매끄러운, 부드러운',
    },
    {
        id: 6,
        name: '어메이징 페이스 클렌저',
        volume: '100 mL',
        price: 35000,
        skinType: '지성, 복합성 피부, 덥고 습한 날씨의 피부',
        texture: '산뜻한, 매끄러운',
    },
];

const CATEGORY_TITLE = [
    { id: 1, title: '모든 스킨' },
    { id: 2, title: '클렌저' },
    { id: 3, title: '각질 제거' },
    { id: 4, title: '트리트먼트&마스크' },
    { id: 5, title: '토너' },
];

const ProductList = () => {
    return (
        <section className="productList">
            <div>
                <div className="categoryTitleHolder">
                    <h1 className="categoryTitle">클랜저</h1>
                </div>
                <div className="categoryBar">
                    <ul className="categoryList">
                        {CATEGORY_TITLE.map(title => {
                            return (
                                <li className="categoryName" key={title.id}>
                                    <button>
                                        <span>{title.title}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    <FilterButton />
                </div>
            </div>
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
                {PREVIEW_LIST.map(product => {
                    return <Preview key={product.id} product={product} />;
                })}
            </div>
        </section>
    );
};

export default ProductList;
