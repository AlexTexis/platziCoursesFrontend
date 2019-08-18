import React from 'react'
import { Sidebar,LinkRoute } from './style'
import { FaSchool,FaGraduationCap,FaChalkboardTeacher } from 'react-icons/fa'

const size = 32

const SidebarComponent = () => {
  return (
    <Sidebar>
      <LinkRoute to='/'>
         <FaSchool size={size}/>
      </LinkRoute>
      <LinkRoute to='/alumns'>
         <FaGraduationCap size={size}/>
      </LinkRoute>
      <LinkRoute to='/classes'>
         <FaChalkboardTeacher size={size}/>
      </LinkRoute>
    </Sidebar>
  )
}

export default SidebarComponent