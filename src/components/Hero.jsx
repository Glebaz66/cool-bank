import React from 'react'
import style from '../style'
import { discount, robot } from '../assets'
import { hero } from '../constants'
import GetStarted from './GetStarted'
const Hero = () => 
   (
    <section id='home' className={`flex flex-col md:flex-row ${style.paddingY}`}>
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6 ss:w-full w-auto`}>
        <div className='flex flex-row items-center justify-center w-full sm:w-auto sm:justify-start py-[6px] px-[4px] bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
          <p className={`${style.paragraph} mx-2 text-[12px] ss:text-[24px]`}>
            <span className='text-white'>20%</span>{" "} DISCOUNT FOR <span className='text-white'>1 MONTH</span>{" "} ACCOUNT
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden'/>{" "}
            <span className='text-gradient'>Generation</span><br className='sm:block hidden'/>{" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
          Payment Method.
        </h1>

        <p className={`${style.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.</p>
      </div>

      <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5] object-contain'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${style.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )

export default Hero