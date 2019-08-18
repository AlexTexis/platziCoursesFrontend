import React,{useState} from 'react'
import { CoursesServices } from '../../services/courses'

export const useAddStudent = () => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const create = async ({id,input,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new CoursesServices().addStudent(id,input)
    if(error) setError(error)
    setData(data.data)
    setLoading(false)
    actionCreator(data.data)
  }

  return {
    data,
    loading,
    error,
    setCreate : create
  }
}