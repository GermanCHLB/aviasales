import React from 'react'
import './ShowMoreBtn.scss'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTickets } from '../asyncActions/tickets'

const ShowMoreBtn = () => {
  const searchId = useSelector((state) => state.searchId)
  const isError = useSelector((state) => state.error)
  const dispatch = useDispatch()

  return (
    <button className="ShowMoreBtn" onClick={() => dispatch(fetchTickets(searchId))}>
      {isError ? 'Попробовать ещё раз' : 'Показать ещё 500 билетов!'}
    </button>
  )
}

export default ShowMoreBtn
