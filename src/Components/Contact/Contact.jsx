import React from 'react'
import css from "./Contact.module.css"
import Location from "../../assets/map-marker 1.svg"
import Phone from "../../assets/Phone.svg"
import Mail from "../../assets/Mail.svg"
import Twitter from "../../assets/Twitter.svg"
import Fb from "../../assets/Facebook logo.svg"
import Insta from "../../assets/instagram logo.svg"


const Contact = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>CONTACT US!</span>
        </div>

        <div className={css.div2}>

<div className={css.div2left}>
    <span>From Concept to Reality <br />
Let’s make it happen</span>

<div className={css.set}>
    <img src={Location} alt="" />
    <span className={css.sp}>124-H, 3rd Floor, Thendral Complex, <br />
DB Road, RS Puram, Coimbatore - 641002</span>
</div>
    
    <div className={css.set}> 
    <img src={Phone} alt="" /> 
    <span>+91 7550315660</span>
    </div>

    <div className={css.set}> 
    <img src={Mail} alt="" /> 
    <span>contact@inivicious.in</span>
    </div>
   
</div>



<div className={css.div2right}>
    <div className={css.box}> 
     <span>Sent us a message</span>

     <form className={css.contactform} action="">
        <input className={css.inp} type="text" name="" id="" placeholder='Name' />
        <input className={css.inp} type="email" name="" id="" placeholder='Mail' />
        <input className={css.inp} type="text" name="" id="" placeholder='Subject' />
        <input className={css.inp} type="text" name="" id="" placeholder='Message(Optinal)' />
        
     </form>
    </div>
</div>


        </div>
      
    </div>
  )
}

export default Contact
