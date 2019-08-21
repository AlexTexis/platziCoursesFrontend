import React,{ useState } from 'react'
import {AlumnsServices } from '../../services/alumns'

export const useStudentUpdate = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  const update = async({id,input,actionCreator}) => {
    setLoading(true)
    const { error,data } = await new AlumnsServices().update(id,input)
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
