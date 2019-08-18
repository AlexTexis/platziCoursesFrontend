import React from 'react'
import { Container } from './style'
import Add from '../widgets/add'

const Toolbar = ({onClickAdd}={}) => {

  return (
    <Container>
      <Add backgroundColor='#98CA3F' onClick={onClickAdd}/>
    </Container>
  )
}

export default Toolbar