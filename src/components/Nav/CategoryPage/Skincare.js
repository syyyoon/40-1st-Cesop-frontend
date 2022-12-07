import React from 'react';
import { MODAL_LIST } from '../CategoryList';
import './ModalCategory.scss';
import '../../../styles/mixin.scss';

const Skincare = listId => {
    return (
        <div className="categoryBody">
            <div className="bodyWrapper">
                <img
                    className="logoImage"
                    src="../../images/cesop-logo.png"
                    alt="logo"
                />
                <ul className="categoryTitleList">
                    {MODAL_LIST[0].category.map(category => {
                        return <li key={category.id}>{category.text}</li>;
                    })}
                </ul>
                <div className="categoryList">
                    <ul>
                        {MODAL_LIST[0].items.map(items => {
                            return <li key={items.id}>{items.text}</li>;
                        })}
                    </ul>
                    <ul>
                        {MODAL_LIST[0].range.map(range => {
                            return <li key={range.id}>{range.text}</li>;
                        })}
                    </ul>
                </div>
                <div className="rightImage">
                    <img
                        className="skinImage"
                        src="../../images/category1.png"
                        alt="skinImage"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skincare;
