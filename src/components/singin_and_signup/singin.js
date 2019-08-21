import React from 'react'

//components
import FormUser from '../general/formUser'

//hooks
import { useSignin } from '../../hooks/auth/useSignin'

const Signin = () => {
  const { error,loading,setSignin } =  useSignin()

  const handleSubmit = input => {
    setSignin({
      email : input.email,
      password : input.password
    })
  }
  
 return (
    <FormUser
      title='Inicia Sesión'
      btnTitle='Iniciar Sesión'
      questionAccount='¿No tienes una cuenta?¡Registrate!'
      routeLink='/signup'
      onSubmit={handleSubmit}
      isLoading={loading}
      isError={error}
  />
 )
}


export default Signin
