import React,{useState} from 'react'
import  { ClassesServices } from '../../services/classes'

export const useRemoveClass = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  const remove = async ({id,actionCreator}) => {
    setLoading(true)
    const { data,error } = await new ClassesServices().remove(id)
    if(error) setError(error)
    setData(data.data)
    setLoading(false)
    actionCreator(data.data)
  }

  return  {
    error,
    loading,
    data,
    setRemove : remove
  }

}