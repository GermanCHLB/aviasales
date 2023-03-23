import React from 'react'
import './TicketsList.scss'
import { useSelector } from 'react-redux'
import { Alert } from 'antd'

import Ticket from '../Ticket/Ticket'
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn'
import Loader from '../Loader/Loader'

const TicketsList = () => {
  const state = useSelector((state) => state)
  const isLoading = useSelector((state) => state.loading)
  const isStop = useSelector((state) => state.data.stop)
  const isError = useSelector((state) => state.error)

  const filterTickets = (state) => {
    return state.data.tickets.filter((el) => {
      if (state.sort.all) {
        return true
      } else {
        if (state.sort.noStops === true && (el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0)) {
          return true
        } else if (
          state.sort.oneStop === true &&
          (el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1)
        ) {
          return true
        } else if (
          state.sort.twoStops === true &&
          (el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2)
        ) {
          return true
        } else if (
          state.sort.threeStops === true &&
          (el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3)
        ) {
          return true
        }
      }
    })
  }

  const sortTickets = (state) => {
    const filteredTickets = filterTickets(state)
    return filteredTickets.sort((a, b) => {
      if (state.activeTab === 'Самый дешёвый') {
        return a.price - b.price
      } else if (state.activeTab === 'Самый быстрый') {
        return a.segments[0].duration - b.segments[0].duration
      } else {
        return a.price - b.price + (a.segments[0].duration - b.segments[0].duration) * 10
      }
    })
  }

  if (sortTickets(state).length !== 0) {
    return (
      <ul className="TicketsList">
        {sortTickets(state).map((el, index) => {
          return <Ticket key={index} data={el} />
        })}
        <li>
          {isError ? <Alert message="Ошибка, попробуйте ещё раз" type="error" style={{ marginBottom: '20px' }} /> : ''}
        </li>
        <li>{isLoading && !isError ? <Loader /> : ''}</li>
        <li>{(!isStop && !isLoading) || isError ? <ShowMoreBtn /> : ''}</li>
      </ul>
    )
  } else if (!isLoading) {
    return (
      <div>
        <Alert type="info" message="Рейсов, подходящих под заданные фильтры, не найдено" style={{ heigth: '50px' }} />
      </div>
    )
  } else {
    return <Loader />
  }
}

export default TicketsList
