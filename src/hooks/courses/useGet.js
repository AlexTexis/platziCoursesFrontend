import React,{ useState } from 'react'
import { CoursesServices } from '../../services/courses'
import { normalizeData } from '../normalizeData'

export const useGetCourses = () => {
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const get = async ({actionCreator}) => {
    setLoading(true)
    const { data,error } = await new CoursesServices().getAll()
    if(error) setError(error)
    setLoading(false)
    actionCreator(normalizeData(data.data))
  }

  return {
    loading,
    error,
    setCourses : get
  }
}
