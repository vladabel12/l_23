import { Beans } from "./Beans"

export const BeansComponent = () => {
  return (
    <div>
      <Beans 
      imageBg="/src/assets/img/beans3.png"
      descName="Robusta Beans"
      descDesc="From Africa"
      beanIcon="icon-coffee"
      beanDesc="Bean"
      locationIcon="header__coffee icon-location"
      locationDesc="Africa"
      description="Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!"
      size1="250gm"
      size2="500gm"
      size3="1000gm"
      price="10.50"/>
    </div>
  )
}

