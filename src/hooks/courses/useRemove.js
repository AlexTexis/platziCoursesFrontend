import React,{ useState } from 'react'
import { CoursesServices } from '../../services/courses'

export const useCourseRemove = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  const remove = async({id,actionCreator}) => {
    setLoading(true)
    const { error,data } = await new CoursesServices().remove(id)
    if(error) setError(error)
    setData(data.data)
    setLoading(false)
    actionCreator(data.data)
  }

  return {
    error,
    loading,
    data,
    setRemove : remove
  }

}
