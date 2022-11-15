import React from 'react'
import {navLinks} from '../constants/'
import style from '../style'
import { close, logo, menu} from '../assets'
import { useState } from 'react'

const Navbar = ({isFixed}) => {
  const [toggleIcon, setToggleIcon] = useState(false)

  
  return (
    <nav className={`nav ${style.flexBetween} w-full py-6 ${isFixed ? 'fixed w-full top-0 left-0 xl:px-0 sm:px-16 px-6 z-[10] bg-black-gradient' : ''}`} >
      <div className={`logo w-[124px] h-[32px]`}><img src={logo} alt="logo" /></div>
      <div className="menu">
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((link, idx) => (
            <li 
              key={link.id} 
              className={ idx === navLinks.length - 1 ? 'mr-0' : 'mr-10'}>
                <a href={`#${link.id}`}>{link.title}</a> 
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggleIcon ? close : menu} 
            onClick={() => setToggleIcon((prevState) => !prevState)} 
            alt="icon" 
            className='w-[28px] h-[28px] object-contain'
          />

          <div className={`sidebar ${toggleIcon ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
            <ul className='w-full list-none flex flex-col items-center justify-end'>
              {navLinks.map((link, idx) => (
                <li 
                  key={link.id} 
                  className={ idx === navLinks.length - 1 ? 'mb-0' : 'mb-10'}>
                    <a 
                      href={`#${link.id}`}
                      onClick={() => setToggleIcon((prevState) => !prevState)} 
                    >{link.title}
                    </a>  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar