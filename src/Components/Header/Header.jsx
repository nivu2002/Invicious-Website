import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/Logo.svg"
import Invic from "../../assets/INVICIOUS.svg"
const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
       <img src={Logo} alt="" />
       <img src={Invic} alt="" />
        
      </div>


      <div className={css.right}>
        <ul className={css.ulist}>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Header
