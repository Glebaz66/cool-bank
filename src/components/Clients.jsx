import React from 'react'
import style, {layout} from '../style'
import {clients} from '../constants'

const Clients = () => {
  return (
    <section className={`${style.flexBetween} ${style.marginX} my-4`}>
    <div className={`${style.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${style.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  )
}

export default Clients