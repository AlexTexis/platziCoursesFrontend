import React from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsCourses from '../../../action/actionsCourses';
const { COURSE_CLASS_REMOVE } = actionsCourses

// Components
import CardRemove from '../../general/cards/removeCard/index'

//hooks
import { useRemoveClass } from '../../../hooks/courses/useRemoveClass'

const CardClass = ({idClass,idCourse,textContent,COURSE_CLASS_REMOVE}) => {
  const { error,data,loading,setRemove } = useRemoveClass()

  const handlerRemove = () => setRemove({
    id : idCourse,
    idClass,
    actionCreator : COURSE_CLASS_REMOVE
  })

  return (
    <CardRemove 
      onClickRemove={handlerRemove} // click icon remove
      loading={loading} // state load request
      textContent={textContent} //content(name class)
    />
  )
}

const mapDispatchToProps = {
  COURSE_CLASS_REMOVE
}

export default connect(null,mapDispatchToProps)(CardClass)