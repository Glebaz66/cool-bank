import React from 'react'
import style from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section id="cta" className={`${style.padding} ${style.marginY} ${style.marginX} ${style.flexCenter} sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow cta`}>
      <div className="flex-1 flex flex-col">
        <div className={`${style.heading2}`}>Let’s try our service now!</div>
        <div className={`${style.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</div>
      </div>

      <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA