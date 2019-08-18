import { ACTION_CLASS_ADD,ACTION_CLASS_REMOVE,ACTION_CLASS_LOADS } from './types'

export const LOAD_CLASSES = (data) => ({
  type : ACTION_CLASS_LOADS,
  payload :  data
})

export const CLASS_ADD = (data) => ({
  type : ACTION_CLASS_ADD,
  payload :  data
})

export const CLASS_REMOVE = (data) => ({
  type : ACTION_CLASS_REMOVE,
  payload :  data
})