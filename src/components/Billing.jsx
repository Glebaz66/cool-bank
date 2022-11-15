import React from 'react'
import {apple, bill, google} from '../assets'
import style, {layout} from '../style'

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionImgReverse} md:flex-row flex-col xl:px-0 sm:px-16 px-6`} >
      <div className={layout.sectionImg}>
        <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <div className={style.heading2}>Easily control your <br className="md:block hidden" /> billing & invoicing.</div>
        <div className={`${style.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</div>
        <div className="flex flex-wrap items-center sm:mt-10 mt-6">
          <a href="https://apple.com/" target="_blank">
            <img 
              src={apple} 
              alt="apple" 
              className="mr-5 w-[128px] h-[42px] cursor-pointer"
            />
          </a>
          <a href="https://google.com" target="_blank">
            <img 
              src={google}
              alt="google" 
              className="w-[128px] h-[42px] cursor-pointer"
      />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Billing