import React,{useState} from 'react'
import  { ClassesServices } from '../../services/classes'

export const usecreateClass = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(false)

  const create = async ({input,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new ClassesServices().create(input)
    setLoading(false)
    if(error) return setError(error)
    setData(data.data)
    actionCreator(data.data)
  }

  return  {
    error,
    loading,
    data,
    setCreate : create
  }

}