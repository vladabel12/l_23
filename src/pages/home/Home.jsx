import { HomeInput } from "./components/HomeInput/HomeInput"
import React, { useState } from "react";
import "/src/pages/home/Home.scss"
import { SearchIcon } from "../../shared/Icons/SearchIcon";
import { HomeLinks } from "./components/HomeLinks/HomeLinks";
import { HomeCoffee } from "./components/HomeCoffee/HomeCoffee";
import { NavLink } from "react-router-dom";
import { HomeBeans } from "./components/HomeBeans/HomeBeans";
export const Home = () => {
  return (
    <div className="home">
      <div className="home-header">Find the best coffee for you</div>
      <HomeInput placeholder='Find Your Coffee...' type='text' className='login__input' icon={<SearchIcon />} />
      <HomeLinks />
      <div className="coffee">
        <div className="coffee__main-container">
          <div className="coffee__objects">
            <NavLink to="cappucino" className="coffee__links">
              <HomeCoffee type="coffee"
              imageSrc="/src/assets/img/cappucino1.png"
              imageTitle="Cappucino1"
              markText="4.5"
              coffeeTitle="Cappuccino"
              desc="With Steamed Milk"
              price="4.20" />
            </NavLink>

            <NavLink to="/" className="coffee__links">
              <HomeCoffee
              imageSrc="/src/assets/img/cappucino2.png"
              imageTitle="Cappucino2"
              markText="4.2"
              coffeeTitle="Cappuccino"
              desc="With Foam"
              price="4.20" />
            </NavLink>

            <NavLink to="/" className="coffee__links">
              <HomeCoffee
              imageSrc="/src/assets/img/cappucino1.png"
              imageTitle="Cappucino3"
              markText="4.5"
              coffeeTitle="Cappuccino"
              desc="With Steamed Milk"
              price="4.20" />
            </NavLink>
          </div>
        </div>
      </div>

      <div class="beans">Coffee beans</div>
      <div className="coffee">
        <div className="coffee__main-container">
          <div className="coffee__objects">
            <NavLink to="beans" className="coffee__links">
              <HomeBeans
              imageSrc="/src/assets/img/beans1.png"
              imageTitle="Beans1"
              coffeeTitle="Robusta Beans"
              desc="Medium Roasted"
              price="4.20" />
            </NavLink>

            <NavLink to="/" className="coffee__links">
              <HomeBeans
              imageSrc="/src/assets/img/beans2.png"
              imageTitle="Beans2"
              coffeeTitle="Cappuccino"
              desc="With Steamed Milk"
              price="4.20" />
            </NavLink>

            <NavLink to="/" className="coffee__links">
              <HomeBeans
              imageSrc="/src/assets/img/beans1.png"
              imageTitle="Beans3"
              coffeeTitle="Robusta Beans"
              desc="Medium Roasted"
              price="4.20" />
            </NavLink>

            <NavLink to="/" className="coffee__links">
              <HomeBeans
              imageSrc="/src/assets/img/beans2.png"
              imageTitle="Beans4"
              coffeeTitle="Cappuccino"
              desc="With Steamed Milk"
              price="4.20" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

