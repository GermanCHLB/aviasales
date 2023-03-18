import React from 'react'

import './Ticket.scss'
import logo from '../img/S7 Logo.svg'

const Ticket = () => {
  return (
    <li className="Ticket">
      <div className="Ticket__header">
        <div className="price">13 400 Р</div>

        <img src={logo} alt="" className="logo" />
      </div>
      <div className="Ticket__body">
        <div className="first-line">
          <div className="route">
            <span className="header">MOW - HKT</span>
            <span className="body">10:45 - 08:00</span>
          </div>

          <div className="length">
            <span className="header">В пути</span>
            <span className="body">21ч 15м</span>
          </div>

          <div className="stops">
            <span className="header">2 пересадки</span>
            <span className="body">HKG, JNB</span>
          </div>
        </div>
        <div className="second-line">
          <div className="route">
            <span className="header">MOW - HKT</span>
            <span className="body">11:20 - 00:50</span>
          </div>

          <div className="length">
            <span className="header">В пути</span>
            <span className="body">13ч 30м</span>
          </div>

          <div className="stops">
            <span className="header">1 пересадка</span>
            <span className="body">HKG</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
