import React from 'react'
import Layout from '../components/general/layout'
import Signup from '../components/singin_and_signup/singup'

const SignupPage = () => {
  return (
    <Layout title='Signin | Platzi Courses' description='Inicia sesion para poder compartir cursos'>
      <Signup/>
    </Layout>
  )
}

export default SignupPage