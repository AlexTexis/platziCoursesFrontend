import { 
  ACTION_LOAD_COURSES,
  ACTION_COURSE_ADD,
  ACTION_COURSE_REMOVE,
  ACTION_COURSE_UPDATE,
  ACTION_COURSE_STUDENT_ADD,
  ACTION_COURSE_STUDENT_REMOVE,
  ACTION_COURSE_ADD_CLASS,
  ACTION_COURSE_REMOVE_CLASS
 } from './types'

export const LOAD_COURSES = (data) => ({
  type : ACTION_LOAD_COURSES,
  payload :  data
})

export const COURSE_ADD = (course) => ({
  type : ACTION_COURSE_ADD,
  payload :  course
})

export const COURSE_REMOVE = (course) => ({
  type : ACTION_COURSE_REMOVE,
  payload :  course
})

export const COURSE_UPDATE = (courseUpdated) => ({
  type : ACTION_COURSE_UPDATE,
  payload :  courseUpdated
})

export const COURSE_STUDENT_ADD = (courseUpdated) => ({
  type : ACTION_COURSE_STUDENT_ADD,
  payload :  courseUpdated
})

export const COURSE_STUDENT_REMOVE = (courseDeleted) => ({
  type : ACTION_COURSE_STUDENT_REMOVE,
  payload :  courseDeleted
})

export const COURSE_CLASS_ADD = (clase) => ({
  type : ACTION_COURSE_ADD_CLASS,
  payload : clase
})
export const COURSE_CLASS_REMOVE = (claseRemoved) => ({
  type : ACTION_COURSE_REMOVE_CLASS,
  payload : claseRemoved
})