import React from 'react'
import css from "./About.module.css"

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.left}>

<span className={css.span1}>WHO WE ARE !</span>

<span className={css.samespan}>Invicious is a Tech start up committed to building a better future for all through innovation and digital empowerment. We create tools that help individuals and organisations thrive in a rapidly evolving digital landscape. </span>

<span className={css.samespan}>Invicious envisions an inclusive digital world, maximizing technology's benefits across sectors. We empower film industry professionals with automated post-production processes, delivering high-quality content efficiently through collaboration and analytics.</span>

      </div>







      <div className={css.right}>
         <div className={css.box}>
            <span className={css.sp2}>Invicious</span>
         </div>
      </div>
    </div>
  )
}

export default About
