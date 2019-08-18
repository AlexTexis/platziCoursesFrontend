import React from 'react'
import { connect } from 'react-redux'
import { navigate } from '@reach/router'

//redux
import * as actionsCourses from '../../../action/actionsCourses'
const { COURSE_STUDENT_REMOVE } = actionsCourses

// Components
import CardRemove from '../../general/cards/removeCard/index'

//hooks
import { useRemoveStudent } from '../../../hooks/courses/useRemoveStudent'

const CardStudent = ({idStudent,idCourse,textContent,COURSE_STUDENT_REMOVE}) => {
  const { error,data,loading,setRemove } = useRemoveStudent()
  
  const handlerRemove = () => setRemove({
    id : idCourse,
    idStudent,
    actionCreator : COURSE_STUDENT_REMOVE
  })

  const handlerRedirectStudent = () => navigate(`/alumns/${idStudent}`)

  return (
      <CardRemove 
        onClickRemove={handlerRemove} //click icon remove
        onClickView={handlerRedirectStudent} //click icon eye
        loading={loading} //state load request
        textContent={textContent} //contenido(nombre student) 
        isShowView //show or hide icon eye
      />
  )
}

const mapDispatchToProps = {
  COURSE_STUDENT_REMOVE
}

export default connect(null,mapDispatchToProps)(CardStudent)