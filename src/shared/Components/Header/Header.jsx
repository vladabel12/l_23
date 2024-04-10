import { useState } from 'react';
import '/src/shared/Components/Header/Header.scss'
import{ HeaderMenu } from "/src/shared/Components/Header/components/HeaderMenu/HeaderMenu"

export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false)
  return (
      <div className="header">
        <div className="menu" onClick={() => setNavIsActive(true)}>
          <span className="icon-menu"></span>
        </div>
        <div className="user">
          <span className="icon-coffee_2"></span>
        </div>
        {<HeaderMenu navIsActive={navIsActive} navClose={() => setNavIsActive(false)}/>}
      </div>
  )
}
