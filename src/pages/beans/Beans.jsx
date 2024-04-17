import React from 'react';
import './Beans.scss';
export const Beans = ({imageBg, descName, descDesc, beanIcon, beanDesc, locationIcon, locationDesc, description, size1, size2, size3, price, className, ...props }) => {
    const goBack = () => {
        window.history.back();
    };
    return (
        <div className="beans-page">
                    <div className="product">
                        <div className="product__image" style={{backgroundImage: `url(${imageBg})`}}>
                            <div className="product__buttons">
                                <div className="button-left">
                                    <span className="icon-chevron-left left" onClick={goBack}></span>
                                </div>
                            <div className="button-heart">
                                <span class="header__icon icon-heart heart"></span>
                            </div>
                        </div>
                        <div className="product__footer">
                            <div className="product__description">
                                <div className="product__description-main">
                                    <div className="product__description-name">{descName}</div>
                                    <div className="product__description-desc">{descDesc}</div>
                                </div>
                                <div className="product__description-icons">
                                    <div className="product__description-icons-bean-icon">
                                        <span className={beanIcon}></span>
                                        <p className="product__description-icons-desc">{beanDesc}</p>
                                    </div>
                                    <div className="product__description-icons-location-icon">
                                        <span className={locationIcon}></span>
                                        <p className="product__description-icons-desc">{locationDesc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product__mark">
                            <div className="product__mark-info">
                                <span className="product__link__icon icon-star"></span>
                                <p className="product__mark-text">4.5</p>
                                <span className="product__mark-ending">(6,879)</span>
                            </div>
                            <div className="product__mark-icon">Medium Roasted</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-main">
                <div className="title">Description</div>
                <div className="description">{description}</div>
                <div className="title-size">Size</div>
                <div className="sizes">
                    <button className="sizes__main">{size1}</button>
                    <button className="sizes__main">{size2}</button>
                    <button className="sizes__main">{size3}</button>
                </div>
                <div className="product__price">
                    <div className="product__price-info">
                        <div className="product__price-text">Price</div>
                        <p className="product__price-main">
                            <span className="dollar">$ </span>{price}
                        </p>
                    </div>
                    <button className="product__price-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
