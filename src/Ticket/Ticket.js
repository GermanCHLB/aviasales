import React from 'react'
import './Ticket.scss'
import { addMinutes } from 'date-fns'

const Ticket = ({ data }) => {
  const date1 = new Date(data.segments[0].date)
  const date2 = new Date(data.segments[1].date)
  const stops1 = data.segments[0].stops
  const stops2 = data.segments[1].stops
  const time1 = `${Math.floor(data.segments[0].duration / 60)}ч ${data.segments[0].duration % 60}м`
  const time2 = `${Math.floor(data.segments[1].duration / 60)}ч ${data.segments[1].duration % 60}м`

  const dateFormatter = (date, duration) => {
    let startHours = date.getHours()
    let startMinutes = date.getMinutes()
    let endHours = addMinutes(date, duration).getHours()
    let endMinutes = addMinutes(date, duration).getMinutes()

    startHours = String(startHours)
    startMinutes = String(startMinutes)
    endHours = String(endHours)
    endMinutes = String(endMinutes)

    if (startHours.length === 1) {
      startHours = '0' + startHours
    }

    if (startMinutes.length === 1) {
      startMinutes = '0' + startMinutes
    }

    if (endHours.length === 1) {
      endHours = '0' + endHours
    }

    if (endMinutes.length === 1) {
      endMinutes = '0' + endMinutes
    }

    return `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`
  }

  const priceFormatter = (price) => {
    return String(price).slice(0, -3) + ' ' + String(price).slice(-3)
  }

  const stopsText = (stops) => {
    if (stops.length === 0) {
      return 'Без пересадок'
    } else if (stops.length === 1) {
      return '1 пересадка'
    } else {
      return `${stops.length} пересадки`
    }
  }

  return (
    <li className="Ticket">
      <div className="Ticket__header">
        <div className="price">{priceFormatter(data.price)} Р</div>

        <img src={`https://pics.avs.io/99/36/${data.carrier}.png`} alt="" className="logo" />
      </div>
      <div className="Ticket__body">
        <div className="first-line">
          <div className="route">
            <span className="header">
              {data.segments[0].origin} - {data.segments[0].destination}
            </span>
            <span className="body">{dateFormatter(date1, data.segments[0].duration)}</span>
          </div>

          <div className="length">
            <span className="header">В пути</span>
            <span className="body">{time1}</span>
          </div>

          <div className="stops">
            <span className="header">{stopsText(stops1)}</span>
            <span className="body">{stops1.join(', ')}</span>
          </div>
        </div>
        <div className="second-line">
          <div className="route">
            <span className="header">
              {data.segments[1].origin} - {data.segments[1].destination}
            </span>
            <span className="body">{dateFormatter(date2, data.segments[1].duration)}</span>
          </div>

          <div className="length">
            <span className="header">В пути</span>
            <span className="body">{time2}</span>
          </div>

          <div className="stops">
            <span className="header">{stopsText(stops2)}</span>
            <span className="body">{stops2.join(', ')}</span>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Ticket
