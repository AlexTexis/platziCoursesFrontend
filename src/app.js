import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { Router } from '@reach/router'

//PAGES
import Courses from './pages/courses'
import CourseAbout from './pages/courseAbout' 
import Alumns from './pages/alumns'
import AlumnAbout from './pages/alumnAbout'
import Classes from  './pages/classes'

const App = () => (
  <Provider store={store}>
      <Router basepath='/'>
        <Courses path='/'/>
        <CourseAbout path='/courses/:id'/>
        <Alumns path='/alumns'/>
        <AlumnAbout path='/alumns/:id'/>
        <Classes path='/classes'/>
      </Router>
  </Provider>
)

export default App