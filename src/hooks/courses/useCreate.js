import React,{useState} from 'react'
import { CoursesServices } from '../../services/courses'

export const useCreateCourse = () => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const create = async ({input,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new CoursesServices().create(input)
    if(error) setError(error)
    setData(data.data)
    actionCreator(data.data)
    setLoading(false)
  }

  return {
    data,
    loading,
    error,
    setCreate : create
  }
}