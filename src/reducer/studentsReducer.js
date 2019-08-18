const initialState = {
 students : null
}

import {
   ACTION_STUDENT_ADD,
  ACTION_STUDENT_REMOVE,
  ACTION_STUDENT_UPDATE,
  ACTION_LOAD_STUDENTS
} from '../action/types'

const removeStudent = (action,state) => {
  let studentsUpd = { ...state.students }
  delete studentsUpd[action.payload.studentRemoved ]
  
   return studentsUpd
}


export default function (state=initialState,action)
{
  switch(action.type)
  {
    case ACTION_LOAD_STUDENTS :
      return {
        ...state,
        students : action.payload
      }

    case ACTION_STUDENT_ADD :
    return {
      ...state,
      students : {
        ...state.students,
        [action.payload._id] : { ...action.payload }
      }
    } 

    case ACTION_STUDENT_REMOVE :
      let studentsUpdateRemove = removeStudent(action,state)
      return {
      ...state,
      students : studentsUpdateRemove
      }

    case ACTION_STUDENT_UPDATE :
      return {
        ...state,
        students : {
          ...state.students,
          [action.payload._id] : action.payload
        }
    }

    default :
    return state
  }
}