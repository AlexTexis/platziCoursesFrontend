import React from 'react'
import { WidgetContainer } from './style'
import { FaPlus } from 'react-icons/fa'

const Add = ({backgroundColor,onClick}={}) => {
  return (
    <WidgetContainer backgroundColor={backgroundColor} onClick={onClick}>
      <FaPlus size={32}/>
    </WidgetContainer>
  )
}

export default Add