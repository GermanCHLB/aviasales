import React from 'react'

import './TicketsList.scss'
import Ticket from '../Ticket/Ticket'
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn'
const TicketsList = () => {
  return (
    <ul className="TicketsList">
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <li>
        <ShowMoreBtn />
      </li>
    </ul>
  )
}

export default TicketsList
