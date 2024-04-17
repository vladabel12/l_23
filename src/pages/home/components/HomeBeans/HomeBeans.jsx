import React from 'react';
import './HomeBeans.scss';
export const HomeBeans = ({type, imageSrc, imageTitle, markText, coffeeTitle, desc, price, className, ...props }) => {
    return (
        <div className="coffee__container">
            <div className="coffee__image">
                <img src={imageSrc} alt={imageTitle} className="coffee__image" />
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
