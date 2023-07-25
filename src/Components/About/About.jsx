import React from 'react'
import css from "./About.module.css"
import In from "../../assets/Group 55.svg"

const About = () => {
  return (
    <div className={css.container} id="about">
      <div className={css.left}>

<span className={css.span1}>WHO WE ARE !</span>

<span className={css.samespan}>Invicious is a Tech start up committed to building a better future for all through innovation and digital empowerment. We create tools that help individuals and organisations thrive in a rapidly evolving digital landscape. </span>

<span className={css.samespan}>Invicious envisions an inclusive digital world, maximizing technology's benefits across sectors. We empower film industry professionals with automated post-production processes, delivering high-quality content efficiently through collaboration and analytics.</span>

      </div>







      <div className={css.right}>
         <div className={css.box}>
            {/* <span className={css.sp2}>Invicious</span> */}
            <img className={css.sp2} src={In} alt="" />
         </div>
      </div>
    </div>
  )
}

export default About
