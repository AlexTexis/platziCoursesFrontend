import React,{useState} from 'react'
import { normalizeData } from '../normalizeData'
import  { ClassesServices } from '../../services/classes'

export const useGetClasses = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  const get = async ({actionCreator}) => {
    setLoading(true)
    const { data,error } = await new ClassesServices().getAll()
    if(error) setError(error)
    setLoading(false)
    actionCreator(normalizeData(data.data))
  }

  return  {
    error,
    loading,
    setClasses : get
  }

}