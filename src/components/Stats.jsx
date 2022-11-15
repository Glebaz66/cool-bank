import React from 'react'
import { stats } from '../constants'

const Stats = () => {
 

  return (
    <div className='flex flex-col md:flex-row sm:items-center'>
      {stats.map((stat,idx) => (
        <div key={stat.id} className='item flex flex-1 xl:px-0 sm:px-16 px-6 xs:justify-between items-center'>
          <div className='item__inner flex flex-1 items-center justify-center sm:justify-start w-full'>
            <div className="item__inner-value mr-2 text-[30px] font-semibold">{stat.value}</div>
            <div className="item__inner-title text-gradient text-[16px] sm:text-[18px] uppercase">{stat.title}</div>
            {/* <div className={idx === stats.lenght - 1 ? 'd' : 'line'}>|</div> */}
          </div>

        </div>
      ))}
    </div>
  )
}

export default Stats