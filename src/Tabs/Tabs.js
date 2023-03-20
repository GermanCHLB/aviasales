import React from 'react'
import './Tabs.scss'
import { useDispatch, useSelector } from 'react-redux'

import { changeTabAction } from '../reducer'
const Tabs = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.activeTab)

  const setActiveTab = (value) => {
    dispatch(changeTabAction(value))
  }

  let cn1 = 'Tabs__label'
  let cn2 = 'Tabs__label'
  let cn3 = 'Tabs__label'

  if (activeTab === 'Самый дешёвый') {
    cn1 += ' active-tab'
  } else if (activeTab === 'Самый быстрый') {
    cn2 += ' active-tab'
  } else {
    cn3 += ' active-tab'
  }

  return (
    <div className="Tabs">
      <label className={cn1}>
        <input
          type="radio"
          name="tabs"
          value="Самый дешёвый"
          className="Tabs__input"
          onChange={(e) => setActiveTab(e.target.value)}
        />
        Самый дешёвый
      </label>
      <label className={cn2}>
        <input
          type="radio"
          name="tabs"
          value="Самый быстрый"
          className="Tabs__input"
          onChange={(e) => setActiveTab(e.target.value)}
        />
        Самый быстый
      </label>
      <label className={cn3}>
        <input
          type="radio"
          name="tabs"
          value="Оптимальный"
          className="Tabs__input"
          onChange={(e) => setActiveTab(e.target.value)}
        />
        Оптимальный
      </label>
    </div>
  )
}

export default Tabs
