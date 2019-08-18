import React,{ useState } from 'react'
import { CoursesServices } from '../../services/courses'

export const useRemoveStudent = () => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const remove = async ({id,idStudent,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new CoursesServices().removeStudent(id,idStudent)
    if(error) setError(error)
    setData(data.data)
    setLoading(false)
    actionCreator(data.data)
  }

  return {
    data,
    loading,
    error,
    setRemove : remove
  }
}