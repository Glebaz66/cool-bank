import React from 'react'
import { feedback } from '../constants'
import style, {layout} from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className={`${style.paddingY} ${style.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex md:justify-between justify-center items-center xl:px-0 sm:px-16 px-6 md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <div className={`${style.heading2}`}>
          What people are <br className="sm:block hidden"/> saying about us
        </div>
        <div className=" w-full md:mt-0 mt-6">
          <div className={`${style.paragraph}  text-left max-w-[450px]`}>
              Everything you need to accept card payments and grow your business anywhere on the planet.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:justify-start xl:px-0 sm:px-16 px-6 justify-center w-full feedback-container relative z-[1]">
        {feedback.map((feed) => (
          <FeedbackCard 
            key={feed.id}
            content={feed.content}
            name={feed.name}
            title={feed.title}
            img={feed.img}
          /> 
        ))}
      </div>
    </section>
  )
}

export default Testimonials