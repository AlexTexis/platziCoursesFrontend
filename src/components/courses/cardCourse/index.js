import React from 'react'
import { CardContainer,CoverCourse } from './style'
import Label from '../../general/labels/simple/index'

const CardCourse = ({name,tutor,level,description}={}) => (
  <CardContainer> 
    <CoverCourse>
      { name &&  <h3>{name.toUpperCase()}</h3> }
    </CoverCourse>
    <Label>
      Tutor : {tutor || 'sin tutor'}
    </Label>   
    <Label>
      Nivel : { level || 'sin nivel'}
    </Label>   
    <Label>
      Description : { description || 'sin descripcion'} 
    </Label>   
  </CardContainer>
)

export default CardCourse