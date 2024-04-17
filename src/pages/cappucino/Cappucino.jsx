import React from 'react'
import { Beans } from '../beans/Beans'

export const Cappucino = () => {
  return (
    <div>
      <Beans 
      imageBg="/src/assets/img/cappucino3.jpg"
      descName="Cappuccino"
      descDesc="With Steamed Milk"
      beanIcon="icon-coffee_2"
      beanDesc="Coffee"
      locationIcon="icon-water"
      locationDesc="Milk"
      description="Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top."
      size1="S"
      size2="M"
      size3="L"
      price="4.20"/>
    </div>
  )
}
