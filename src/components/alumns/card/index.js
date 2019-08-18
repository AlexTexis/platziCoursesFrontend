import React from 'react'
import { CardContainer,CoverStudent,NameStudent } from './style'
import Label from '../../general/labels/simple/index'

const CardStudent = ({name,surnames,description}={}) => (
  <CardContainer> 
    <CoverStudent>
      <NameStudent>{name.toUpperCase()} {surnames.toUpperCase()}</NameStudent> 
    </CoverStudent>
    <Label>
      Nombre : {name || 'sin nombre'}
    </Label>   
    <Label>
      Apellidos : {surnames || 'sin apellidos'}
    </Label>   
    <Label>
      Description : { description || 'sin descripcion'} 
    </Label>   
  </CardContainer>
)

export default CardStudent