import React,{useState,useContext} from 'react'
import { AuthServices } from '../../services/auth'
import { navigate } from '@reach/router'
import { AppContext } from '../../context'

export const useSignup = () => {
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)
  const { setAuth } = useContext(AppContext)

  const signup = async ({input}) => {
    setLoading(true)
    const { error,data } = await new AuthServices().signup(input)
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
    setSignup : signup
  }
}
