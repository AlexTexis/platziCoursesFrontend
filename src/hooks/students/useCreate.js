import React,{useState} from 'react'
import {AlumnsServices } from '../../services/alumns'

export const useCreateStudent = () => {
  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const create = async ({input,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new AlumnsServices().create(input)
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
