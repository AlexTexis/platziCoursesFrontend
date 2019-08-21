import React,{ useState } from 'react'
import { CoursesServices } from '../../services/courses'

export const useRemoveClass = () => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const remove = async ({id,idClass,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new CoursesServices().removeClass(id,idClass)
    setLoading(false)
    if(error) return setError(error)
    setData(data.data)
    actionCreator(data.data)
  }

  return {
    data,
    loading,
    error,
    setRemove : remove
  }
}
