import {
   ACTION_STUDENT_ADD,
   ACTION_STUDENT_REMOVE,
   ACTION_STUDENT_UPDATE,
   ACTION_LOAD_STUDENTS
} from './types'

export const LOAD_STUDENTS = (data) => ({
  type : ACTION_LOAD_STUDENTS,
  payload : data
})

export const ADD_STUDENT = (data) => ({
  type : ACTION_STUDENT_ADD,
  payload : data
})

export const REMOVE_STUDENT = (data) => ({
  type : ACTION_STUDENT_REMOVE,
  payload : data
})

export const UPDATE_STUDENT = (data) => ({
  type : ACTION_STUDENT_UPDATE,
  payload : data
})