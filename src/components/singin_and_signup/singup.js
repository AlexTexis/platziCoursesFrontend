import React from 'react'

//components
import FormUser from '../general/formUser/index'

//hooks
import { useSignup } from '../../hooks/auth/useSignup'

const Signup = () => {
  const { error,loading,setSignup } = useSignup()

  const handleSubmit = input => {
    setSignup({
      input
    })
  }

 return (
    <FormUser
      title='Registrate'
      btnTitle='Registrarme'
      questionAccount='¿Ya tienes una cuenta?Inicia aqui!'
      routeLink='/signin'
      onSubmit={handleSubmit}
      isLoading={loading}
      isError={error}
  />
 )
}


export default Signup
