import React,{useState, useRef} from 'react'
import style from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  const [isHovered, setIsHovered] = useState(false)
  const btn = useRef(null);
  return (
    <div 
      ref={btn}
      className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer ${isHovered ? 'spin' : ''}`}
      onMouseEnter={() => {
        setIsHovered(true);
        console.log(btn);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}>
      <div className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${style.flexStart} flex-row`}>
          <p className='font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt="icon" className='w-[23px] h-[23px] object-contain'/>
        </div>
          <p className='font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  )
}



export default GetStarted