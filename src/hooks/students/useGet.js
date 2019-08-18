import React,{useState} from 'react'
import { normalizeData } from '../normalizeData'
import {AlumnsServices } from '../../services/alumns'

export const useGetStudents = () => {
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)

  const get = async ({actionCreator}) => {
    setLoading(true)
    const { data,error } = await new AlumnsServices().getAll()
    if(error) setError(error)
    setLoading(false)
    actionCreator(normalizeData(data.data))
  }

  return {
    loading,
    error,
    setStudents : get
  }
}

