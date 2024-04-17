import React from 'react';
import './HomeCoffee.scss';
export const HomeCoffee = ({type, imageSrc, imageTitle, markText, coffeeTitle, desc, price, className, ...props }) => {
    return (
        <div className="coffee__container">
            <div className="coffee__image">
                <img src={imageSrc} alt={imageTitle} className="coffee__image" />
                <div className="coffee__mark">
                    <span className="header-link__icon icon-star"></span>
                    <p className="coffee__mark-text">{markText}</p>
                </div>
            </div>
            <div className="coffee__info">
                <h className="coffee__name">{coffeeTitle}</h>
                <p className="coffee__desc">{desc}</p>
                <div className="coffee__footer">
                    <div className="coffee__price">
                        <span className="dollar">$</span>
                        {price}
                    </div>
                    <button className="coffee__button">
                        <span className="coffee__link__icon icon-plus"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

