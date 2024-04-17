import React from 'react';
import { NavLink } from "react-router-dom";
import "/src/pages/home/components/HomeLinks/HomeLinks.scss";

export const HomeLinks = () => {
  return (
    <div className="selection">
        <a href="/" className="products__a is-active">All</a>
        <a href="/" className="products__a">Cappuccino</a>
        <a href="/" className="products__a">Espresso</a>
        <a href="/" className="products__a">Americano</a>
        <a href="/" className="products__a">Macchiato</a>
  
    </div>  
  );
};
