import React from 'react';
import './Description.scss';

const SubDescription = ({ itemData }) => {
    return (
        <div>
            {ITEM_SUB_TITLE_LIST.map(itemTitle => {
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

export default SubDescription;

const ITEM_SUB_TITLE_LIST = [
    { id: 1, title: '사용량', name: 'amountUsed' },
    { id: 2, title: '텍스처', name: 'texture' },
];
