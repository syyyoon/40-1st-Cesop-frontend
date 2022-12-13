import React from 'react';
import './Description.scss';

const MainDescription = ({ itemData }) => {
    return (
        <div>
            {ITEM_MAIN_TITLE_LIST.map(itemTitle => {
                return (
                    <div className="productDetailList">
                        <div className="productTerm">
                            <div key={itemTitle.id}>
                                <strong>{itemTitle.title}</strong>
                                <div className="productDescription">
                                    <p>{itemData[`${itemTitle.name}`]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MainDescription;

const ITEM_MAIN_TITLE_LIST = [
    { id: 1, title: '사용감', name: 'feeling' },
    { id: 2, title: '향', name: 'flavor' },
    { id: 3, title: '주요 성분', name: 'mainIngredient' },
    { id: 4, title: '사이즈', name: 'size' },
];
