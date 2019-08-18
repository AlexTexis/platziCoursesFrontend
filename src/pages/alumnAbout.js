import React from 'react'
//Components
import Layout from '../components/general/layoutAdm'
import AlumnsAbout from '../components/alumns/about'

const AlumnsAboutPage = ({id}={}) => {

   return ( 
   <Layout title={`Student about | ${id}`} description={`About course ${id}`}>
      <AlumnsAbout id={id}/>
  </Layout>
  )
}

export default AlumnsAboutPage