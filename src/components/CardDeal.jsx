import React from 'react'
import style, {layout} from '../style'
import { card } from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section id="product1" className={`${layout.sectionReverse} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className={layout.sectionInfo}>
      <div className={`${style.heading2} mb-3`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps. 
      </div>
      <div className={`${style.paragraph} max-w-[470px] mb-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </div>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} alt="card" />
    </div>
  </section>
  )
}

export default CardDeal