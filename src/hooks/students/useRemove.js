import React,{ useState } from 'react'
import {AlumnsServices } from '../../services/alumns'

export const useStudentRemove = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  const remove = async({id,actionCreator}) => {
    setLoading(true)
    const { error,data } = await new AlumnsServices().remove(id)
    setLoading(false)
    if(error) return setError(error)
    setData(data.data)
    actionCreator(data.data)
  }

  return {
    error,
    loading,
    data,
    setRemove : remove
  }

}
