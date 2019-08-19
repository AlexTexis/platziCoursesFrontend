import React from 'react'
import { Sidebar,LinkRoute } from './style'
import { FaSchool,FaGraduationCap,FaChalkboardTeacher } from 'react-icons/fa'

const size = 32
const style = {
  height : '100%',
  verticalAlign : 'top'
}

const SidebarComponent = () => {
  return (
    <Sidebar>
      <LinkRoute to='/'>
         <FaSchool size={size} style={style}/>
      </LinkRoute>
      <LinkRoute to='/alumns'>
         <FaGraduationCap size={size} style={style}/>
      </LinkRoute>
      <LinkRoute to='/classes'>
         <FaChalkboardTeacher size={size} style={style}/>
      </LinkRoute>
    </Sidebar>
  )
}

export default SidebarComponent