import React,{useState} from 'react'
import { CoursesServices } from '../../services/courses'

export const useCourseUpdate = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  const update = async({id,input,actionCreator}) => {
    setLoading(true)
    const { error,data } = await new CoursesServices().update(id,input)
    setLoading(false)
    if(error) return setError(error)
    setData(data.data)
    actionCreator(data.data)
  }

  return {
    error,
    loading,
    data,
    setUpdate : update
  }

}