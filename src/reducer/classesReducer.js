const initialState = {
  classes : null
}

import { ACTION_CLASS_LOADS,ACTION_CLASS_ADD,ACTION_CLASS_REMOVE } from '../action/types'


const removeClass = (action,state) => {
  let classesUpd = { ...state.classes }
  delete classesUpd[action.payload.classRemoved]
  
   return classesUpd
}

export default function(state=initialState,action)
{
  switch(action.type)
  {
    case ACTION_CLASS_LOADS :
    return {
      ...state,
      classes : action.payload
    }

    case ACTION_CLASS_ADD :
    return {
      ...state,
      classes : {
        ...state.classes,
        [action.payload._id] : {...action.payload }
      }
    }

    case ACTION_CLASS_REMOVE :
      let updateClassRemove = removeClass(action,state)
    return {
      ...state,
      classes : updateClassRemove
    }

    default :
    return state
  }
}