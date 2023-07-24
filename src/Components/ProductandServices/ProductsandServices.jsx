import React from 'react'
import css from "./ProductsandServices.module.css"
import Inv from "../../assets/iNVICIOUS LOGO.svg"
import Batcave from "../../assets/btv.svg"
import Trib from "../../assets/TC logo.svg"
import IT1 from "../../assets/itservice.svg"
import IT2 from "../../assets/itconsultancy.svg"
import IT3 from "../../assets/it.svg"

import Carrow from "../../assets/curvearrow.svg"

const ProductsandServices = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
            <span>PRODUCTS & SERVICES

            </span>
        </div>

        <div className={css.div2}>
            <div className={css.products}>
            <img src={Inv} alt="" />
            <span>Invicious</span>
            </div>
            <div className={css.products}>
            <img className={css.btv} src={Batcave} alt="" />
            <span>Batcave</span>
            </div>
            <div className={css.products}>
            <img src={Trib} alt="" />
            <span>Tributor</span>
            </div>
         
        </div>

        <div className={css.div3}>
            <div className={css.services}>
                <img src={IT1} alt="" />
                <span>IT Services</span>
            </div>
            <div> <img src={Carrow} alt="" /></div>
            <div className={css.services}>
                <img src={IT2} alt="" />
                <span>IT Consultancy</span>
            </div>
            <div> <img src={Carrow} alt="" /></div>
            <div className={css.services}>
                <img src={IT3} alt="" />
                <span>It Services</span>
            </div>
        </div>
      
    </div>
  )
}

export default ProductsandServices
