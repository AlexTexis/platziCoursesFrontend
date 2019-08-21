import React,{useState,useContext} from 'react'
import { AuthServices } from '../../services/auth'
import { navigate } from '@reach/router'

//context
import { AppContext } from '../../context'

export const useSignin = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const { setAuth } = useContext(AppContext)

  const signin = async ({email,password}) => {
    setLoading(true)
    const { error,data } = await new AuthServices().signin({ email, password })
    setLoading(false)
    if(error) return setError(error)
    if(data && 'token' in data ) {
      setAuth(data.token)
      navigate('/')
    }
  }

  return {
    error,
    loading,
    setSignin : signin
  }
}
