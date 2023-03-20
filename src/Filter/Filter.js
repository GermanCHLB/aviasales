import React from 'react'
import './Filter.scss'
import { useDispatch, useSelector } from 'react-redux'

import { toggleFiltersAction } from '../reducer'

const Filter = () => {
  const dispatch = useDispatch()
  const filtersState = useSelector((state) => state.sort)

  const toggleFilters = (value) => {
    dispatch(toggleFiltersAction(value))
  }

  return (
    <form className="Filter">
      <h3 className="Filter__title">Количество пересадок</h3>
      <label className="Filter__label">
        <input
          type="checkbox"
          className="Filter__input"
          checked={filtersState['all']}
          onChange={() => toggleFilters('all')}
        />
        <span>Все</span>
      </label>
      <label className="Filter__label">
        <input
          type="checkbox"
          className="Filter__input"
          checked={filtersState['noStops']}
          onChange={() => toggleFilters('noStops')}
        />
        <span>Без пересадок</span>
      </label>
      <label className="Filter__label">
        <input
          type="checkbox"
          className="Filter__input"
          checked={filtersState['oneStop']}
          onChange={() => toggleFilters('oneStop')}
        />
        <span>1 пересадка</span>
      </label>
      <label className="Filter__label">
        <input
          type="checkbox"
          className="Filter__input"
          checked={filtersState['twoStops']}
          onChange={() => toggleFilters('twoStops')}
        />
        <span>2 пересадки</span>
      </label>
      <label className="Filter__label">
        <input
          type="checkbox"
          className="Filter__input"
          checked={filtersState['threeStops']}
          onChange={() => toggleFilters('threeStops')}
        />
        <span>3 пересадки</span>
      </label>
    </form>
  )
}

export default Filter
