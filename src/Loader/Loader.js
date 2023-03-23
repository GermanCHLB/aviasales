import React from 'react'
import { Spin } from 'antd'
import './Loader.scss'

const Loader = () => {
  return (
    <div className="Loader">
      <Spin />
    </div>
  )
}

export default Loader
