import React from 'react'

//Components
import Layout from '../components/general/layoutAdm'
import Alumns from '../components/alumns/index'

const AlumnsPage = () => {
   return ( 
   <Layout title='Students' description='Students platzi courses'>
      <Alumns/>
  </Layout>
  )
}

export default AlumnsPage
