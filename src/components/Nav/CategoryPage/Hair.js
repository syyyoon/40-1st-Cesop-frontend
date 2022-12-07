import React from 'react';
import { MODAL_LIST } from '../CategoryList';
import './ModalCategory.scss';
import '../../../styles/mixin.scss';

const Hair = () => {
    return (
        <div className="categoryBody" style={{ backgroundColor: '#ded8d4' }}>
            <div className="bodyWrapper">
                <img
                    className="logoImage"
                    src="../../images/cesop-logo.png"
                    alt="logo"
                />
                <ul className="categoryTitleList">
                    {MODAL_LIST[2].category.map(category => {
                        return <li key={category.id}>{category.text}</li>;
                    })}
                </ul>
                <div className="categoryList">
                    <ul>
                        {MODAL_LIST[2].sellection.map(sellection => {
                            return (
                                <li key={sellection.id}>{sellection.text}</li>
                            );
                        })}
                    </ul>
                </div>
                <div className="rightImage">
                    <img
                        className="skinImage"
                        src="../../images/category3.png"
                        alt="skinImage"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hair;
