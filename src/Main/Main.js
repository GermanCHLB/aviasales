import React from 'react'

import './Main.scss'
import Filter from '../Filter/Filter'
import TicketsList from '../TicketsList/TicketsList'
import Tabs from '../Tabs/Tabs'
const Main = () => {
  return (
    <main className="Main">
      <Filter />
      <TicketsList />
      <Tabs />
    </main>
  )
}

export default Main
