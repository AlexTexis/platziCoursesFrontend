import React from 'react'
import Layout from '../components/general/layout'
import Signin from '../components/singin_and_signup/singin'

const SigninPage = () => {
  return (
    <Layout title='Signin | Platzi Courses' description='Inicia sesion para poder compartir cursos'>
      <Signin/>
    </Layout>
  )
}

export default SigninPage