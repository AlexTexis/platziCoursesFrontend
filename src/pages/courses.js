import React from 'react'

//Components
import Layout from '../components/general/layoutAdm'
import Courses from '../components/courses/index'

const CoursesPage = () => {
   return ( 
   <Layout title='Courses' description='Tus cursos compartidos'>
      <Courses/>
  </Layout>
  )
}

export default CoursesPage