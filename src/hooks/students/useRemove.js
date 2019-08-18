import React,{ useState } from 'react'
import {AlumnsServices } from '../../services/alumns'

export const useStudentRemove = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  const remove = async({id,actionCreator}) => {
    setLoading(true)
    const { error,data } = await new AlumnsServices().remove(id)
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
