const initalState = {
  courses : null
}

import { 
ACTION_LOAD_COURSES,
ACTION_COURSE_ADD,
ACTION_COURSE_UPDATE,
ACTION_COURSE_REMOVE,
ACTION_COURSE_STUDENT_ADD,
ACTION_COURSE_STUDENT_REMOVE,
ACTION_COURSE_ADD_CLASS,
ACTION_COURSE_REMOVE_CLASS
} from '../action/types'


const updatedStudentsAdd = (action,state) => {
  let coursesUpd = { ...state.courses }

  Object.keys(coursesUpd).map( id => {
    if(id === action.payload._id)
    coursesUpd[id]['alumns'] = [...coursesUpd[id]['alumns'],action.payload.saved]
  })

  return coursesUpd
}

const updatedClassAdd = (action,state) => {
  let coursesUpd = { ...state.courses }

  Object.keys(coursesUpd).map( id => {
    if(id === action.payload._id)
    coursesUpd[id]['class'] = [...coursesUpd[id]['class'],action.payload.saved]
  })

  return coursesUpd
}

const updatedClassDel = (action,state) => {
  let coursesUpd = { ...state.courses }

  Object.keys(coursesUpd).map( id => {
    if(id === action.payload._id)
    coursesUpd[id]['class'] =  coursesUpd[id]['class'].filter( student => student._id !== action.payload.removed)
  })

  return coursesUpd
}

const updatedStudentsDel = (action,state) => {
  let coursesUpd = { ...state.courses }

  Object.keys(coursesUpd).map( id => {
    if(id === action.payload._id)
    coursesUpd[id]['alumns'] =  coursesUpd[id]['alumns'].filter( student => student._id !== action.payload.removed)
  })

  return coursesUpd
}

const removeCourse = (action,state) => {
  let coursesUpd = { ...state.courses }
  delete coursesUpd[action.payload.courseRemoved]
  
  return coursesUpd
}


export default function(state=initalState,action)
{
  switch(action.type)
  { 
   case ACTION_LOAD_COURSES:
     return {
       ...state,
       courses : action.payload
     }

   case ACTION_COURSE_ADD:
     const newCourse = action.payload
     return {
       ...state,
       courses : {
         ...state.courses,
         [newCourse._id] : {...newCourse}
       }
     }

   case ACTION_COURSE_REMOVE:
     const coursesUpdated = removeCourse(action,state)
     return {
       ...state,
       courses  : coursesUpdated
     }

   case ACTION_COURSE_UPDATE:
     return {
       ...state,
       courses : {
         ...state.courses,
        [action.payload._id] : action.payload
       }
     }

   case ACTION_COURSE_STUDENT_ADD:
    let updatedCourse = updatedStudentsAdd(action,state) //-> return key courses actualizados
    return {
      ...state,
      courses : updatedCourse

    }

   case ACTION_COURSE_STUDENT_REMOVE:
     let updateDelCourse = updatedStudentsDel(action,state)//-> return key courses actualizados
    return {
      ...state,
      courses : updateDelCourse
    }

    case ACTION_COURSE_ADD_CLASS:
      let updateCourseClass = updatedClassAdd(action,state)//-> return key courses actualizados
      return {
        ...state,
        courses : updateCourseClass
      }

    case ACTION_COURSE_REMOVE_CLASS:
      let updateCourseClassRemove = updatedClassDel(action,state)//-> return key courses actualizados
      return {
        ...state,
        courses : updateCourseClassRemove
      }

   default : 
    return state
   
  }
}