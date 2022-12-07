import React from 'react';
import Preview from './Preview';
import FilterButton from './FilterButton';
import './DetailList.scss';

const LIST = [
    { id: 1, name: '이름1', ml: '10ml', price: '1000원' },
    { id: 2, name: '이름2', ml: '20ml', price: '2000원' },
    { id: 3, name: '이름3', ml: '30ml', price: '3000원' },
    { id: 4, name: '이름4', ml: '40ml', price: '4000원' },
    { id: 5, name: '이름5', ml: '50ml', price: '5000원' },
    { id: 6, name: '이름6', ml: '60ml', price: '6000원' },
];

const MENU = [
    { id: 1, title: '모든 스킨' },
    { id: 2, title: '클렌저' },
    { id: 3, title: '각질 제거' },
    { id: 4, title: '트리트먼트&마스크' },
    { id: 5, title: '토너' },
];

const DetailList = () => {
    return (
        <section className="listSection">
            <div>
                <div className="categoryTitleHolder">
                    <h1 className="categoryTitle">클랜저</h1>
                </div>
                <div className="categoryBar">
                    <ul className="categoryList">
                        {MENU.map(title => {
                            return (
                                <li className="categoryTitles" key={title.id}>
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
            <div className="productList">
                <div className="descriptionOfList">
                    <div>
                        <h2>처음의 시작</h2>
                        <p>각질, 불필요한 유분 그리고 기타 잔여물을</p>
                    </div>
                </div>
                {LIST.map(product => {
                    return <Preview key={product.id} product={product} />;
                })}
            </div>
        </section>
    );
};

export default DetailList;
