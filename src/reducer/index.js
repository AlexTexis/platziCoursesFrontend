import { combineReducers } from 'redux'
import coursesReducer from './coursesReducer'
import studentsReducer from './studentsReducer'
import classesReducer from './classesReducer'

export const rootReducer = combineReducers({
  coursesReducer,
  studentsReducer,
  classesReducer
})