import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from "../../assets/Logo.svg"
import Invic from "../../assets/INVICIOUS.svg"
import Bars from "../../assets/bars.svg"
import { Link } from 'react-scroll'


const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className={css.container} >
     
      <div className={css.left}>
       <img src={Logo} alt="" />
       <img className={css.invic} src={Invic} alt="" />
        
      </div>


      <div className={css.right}>
    
      {menuOpened === false && mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            src={Bars}
            alt=""
            style={{ width: "1.4rem", height: "1.1rem" }}
          />
        </div>
      ) : (
        <ul className={css.ulist} onClick={()=>setMenuOpened(false)}>
            <li> <Link onClick={() => setMenuOpened(!menuOpened)} to="home" spy={true} smooth={true}> Home  </Link> </li>
            <li> <Link onClick={() => setMenuOpened(false)} to="about" spy={true} smooth={true}> About  </Link> </li>
            <li onClick={() => setMenuOpened(false)}> <Link onClick={() => setMenuOpened(false)} to="products" spy={true} smooth={true}> Products and Services </Link> </li>
            {/* <li> <Link to="home" spy={true} smooth={true}> Service  </Link> </li> */}
            <li> <Link onClick={() => setMenuOpened(false)} to="contact" spy={true} smooth={true}> Contact </Link> </li>
          
        </ul> ) }
        
      </div>
    </div>
  )
}

export default Header
