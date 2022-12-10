import React from 'react';
import './FilterButton.scss';

function FilterButton() {
    return (
        <div className="filterButton">
            <button className="buttonLayout">
                <div className="buttonContent">
                    <span>필터</span>
                    <img
                        className="underArrow"
                        alt="seemore"
                        src="/images/down.png"
                    />
                </div>
            </button>
        </div>
    );
}

export default FilterButton;
