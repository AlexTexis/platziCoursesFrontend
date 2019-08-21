import React,{createContext,Fragment,useState} from 'react'
import { navigate } from '@reach/router'

export const AppContext = createContext()

const ContextProvider = ({children}={}) => {
  const [auth,setAuth] = useState(() => sessionStorage.getItem('token'))

  const value = {
    auth,
    setAuth : (token) => {
      sessionStorage.setItem('token',token)
      setAuth(true)
    },
    closeSession : () => {
      sessionStorage.removeItem('token')
      setAuth(false)
      navigate('/')
    }
  }

  return (
    <Fragment>
      <AppContext.Provider value={value}>
        {
          children
        }
      </AppContext.Provider>
    </Fragment>
  )
}

export default ContextProvider