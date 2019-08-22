import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { 
  CardContainer,
  CoverCourse,CourseTitle,
  ClassTitle,TitleInfo,
  ClassContainer 
} from './style'

const CardCourse = ({name,class:classes,alumns}={}) => (
  <CardContainer> 
    <CoverCourse>
      { name &&  <CourseTitle>{name.toUpperCase()}</CourseTitle> }
    </CoverCourse>
    <div>
      <TitleInfo>Estudiantes : {alumns.length}</TitleInfo>
      <TitleInfo>Clases : {classes.length}</TitleInfo>
      {
        classes.length ?
        classes.map( clase => 
          <ClassContainer key={clase._id}>
            <ClassTitle>{ clase.name }</ClassTitle>
            <FaCheckCircle style={{color : '#98CA3F'}}/>
          </ClassContainer>
         )
        :
        <ClassContainer>
          <ClassTitle>Sin clases registradas 😮</ClassTitle>
        </ClassContainer>
      }
    </div>
  </CardContainer>
)

export default CardCourse