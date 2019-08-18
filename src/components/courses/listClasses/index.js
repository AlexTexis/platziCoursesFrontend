import React from 'react'

//styled components
import { GridList } from '../style'
import { H3 } from '../../general/titles/style'

//components
import CardClass from '../cardClass/index'

const ListClasses = ({classes,idCourse}={}) => {
  const render = () => {
    if(!classes.length) return <H3>!Hey no hay clases  🤷‍♂️‍,porque no registras una!</H3>
    return (
      <GridList>
        {
          classes.map( clase => 
            <CardClass 
              key={clase._id} 
              idClass={clase._id} 
              idCourse={idCourse} 
              textContent={`${clase.name}`}
            /> 
          )
        }
      </GridList>
    )
  }
  
  return render()
}

export default ListClasses