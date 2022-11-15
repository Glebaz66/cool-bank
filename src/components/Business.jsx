import React from 'react'
import style, { layout } from "../style";
import Button from "./Button";
import FeatureCard from './FeatureCard';
import { features } from '../constants';

const Business = () => {
  return (
    <section id="features" className={`${layout.section} xl:px-0 sm:px-16 px-6`}>
    <div className={layout.sectionInfo}>
      <div className={`${style.heading2} mb-3`}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.
      </div>
      <div className={`${style.paragraph} max-w-[470px] mb-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </div>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} style={`${index !== features.length - 1 ? "mb-6" : "mb-0"} cursor-default`}/>
      ))}
    </div>
  </section>
  )
}

export default Business