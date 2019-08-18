import React from 'react'

//Components
import Layout from '../components/general/layoutAdm'
import Classes from '../components/classes/index'

const ClassesPage = () => {
   return ( 
   <Layout title='Classes' description='List of classes platzi courses'>
      <Classes/>
  </Layout>
  )
}

export default ClassesPage