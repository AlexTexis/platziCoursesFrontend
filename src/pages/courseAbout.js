import React from 'react'

//Components
import Layout from '../components/general/layoutAdm'
import CourseAbout from '../components/courses/about'

const CourseAboutPage = ({id}={}) => {
   return ( 
   <Layout title={`Course About | ${id}`} description={`Course ${id}`}>
      <CourseAbout idCourse={id}/>
  </Layout>
  )
}

export default CourseAboutPage