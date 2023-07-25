import React from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/Logo.svg"
import Invic from "../../assets/INVICIOUS.svg"
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>
       <img src={Logo} alt="" />
       <img src={Invic} alt="" />
        
      </div>


      <div className={css.right}>
        <ul className={css.ulist}>
            <li> <Link to="home" spy={true} smooth={true}> Home  </Link> </li>
            <li> <Link to="about" spy={true} smooth={true}> About  </Link> </li>
            <li> <Link to="products" spy={true} smooth={true}> Products and Services </Link> </li>
            {/* <li> <Link to="home" spy={true} smooth={true}> Service  </Link> </li> */}
            <li> <Link to="contact" spy={true} smooth={true}> Contact </Link> </li>
          
        </ul>
        
      </div>
    </div>
  )
}

export default Header
