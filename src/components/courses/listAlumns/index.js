import React from 'react'

//styled components
import { GridList } from '../style'
import { H3 } from '../../general/titles/style'

//components
import CardStudent from '../cardStudent/index'

const ListAlumns = ({alumns,idCourse}={}) => {
  const render = () => {
    if(!alumns.length) return <H3>!Hey no hay estudiantes  🤷‍♂️‍,se el primero en registrarte!</H3>
    return ( 
      <GridList>
        {
          alumns.map( alumn => 
            <CardStudent 
              key={alumn._id} 
              idStudent={alumn._id} 
              idCourse={idCourse} 
              textContent={`${alumn.name} ${alumn.surnames}`}
            /> 
          )
        }
      </GridList>
    )
  }
  return  render()
 }

export default ListAlumns