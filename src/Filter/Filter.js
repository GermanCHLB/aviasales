import React from 'react'
import './Filter.scss'

const Filter = () => {
  return (
    <form className="Filter">
      <h3 className="Filter__title">Количество пересадок</h3>
      <label className="Filter__label">
        <input type="checkbox" className="Filter__input" />
        <span>Все</span>
      </label>
      <label className="Filter__label">
        <input type="checkbox" className="Filter__input" />
        <span>Без пересадок</span>
      </label>
      <label className="Filter__label">
        <input type="checkbox" className="Filter__input" />
        <span>1 пересадка</span>
      </label>
      <label className="Filter__label">
        <input type="checkbox" className="Filter__input" />
        <span>2 пересадки</span>
      </label>
      <label className="Filter__label">
        <input type="checkbox" className="Filter__input" />
        <span>3 пересадки</span>
      </label>
    </form>
  )
}

export default Filter
