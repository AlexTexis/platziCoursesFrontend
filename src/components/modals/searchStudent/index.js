import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsCourses from '../../../action/actionsCourses'
const  { COURSE_STUDENT_ADD } = actionsCourses

//styled components
import { LinkRoute } from '../../general/link/style'
import { H4 } from '../../general/titles/style'
import { Button } from '../../general/button/style'
import { Spinner } from '../../general/spinner/style'

//components
import Success from '../../general/notifications/success'
import Error from '../../general/notifications/error'
import ModalContainer from '../../general/modalContainer/index'
import SelectPlacehold from '../../general/selectPlacehold/index' 

//hooks 
import { useAddStudent } from '../../../hooks/courses/useAddStudent'

import { AlumnsServices } from '../../../services/alumns'

const addStudent = ({titleLabel,handlerCancel,idCourse,COURSE_STUDENT_ADD}={}) => {
  const [selectedItem,setSelected] = useState(null)
  const { data,error,loading,setCreate } = useAddStudent()
  //message success
  const [succesful,setSucces] = useState(false)

  useEffect(() => {
    const timer = () => setTimeout(() => setSucces(false),1400)
    setSucces(data)
    if(data) timer()
    
    return () => {
      clearTimeout(timer)
    }
  },[data])

  const handleLoadOptions = async (inputValue,cbOptions) => {
    if(!inputValue) cbOptions([])
    const { error,data } = await new AlumnsServices().getAll({ name : inputValue })
    cbOptions(data.data)
  }

  const handleAddStudent = () => setCreate({
    id : idCourse,
    input : {
      _id : selectedItem['_id']
    },
    actionCreator : COURSE_STUDENT_ADD
  })


  return(
  <ModalContainer titleLabel={titleLabel} handlerCancel={handlerCancel}>
     <H4 color='#182C3F'>Busca tu nombre</H4>
    <SelectPlacehold
      loadOptions={handleLoadOptions}
      getOptionLabel={(props) => `${props.name} ${props.surnames}`}
      selectOption={(props)=> setSelected(props) }
      selectTitleLabel={['name','surnames']}
    />
     <LinkRoute to='/alumns'>
      <H4 color='#182C3F'>¿Aun no te registras? ¡Registrate ahora!</H4>
    </LinkRoute> 
    <Button backgroundColor='#98CA3F' onClick={handleAddStudent}>
      {
        loading ? 
        <Spinner/>
        :
        'Guardar'
      }
    </Button>
    {
      succesful && <Success message='Añadido al curso'/>
    }
    {
      error && <Error message={error}/>
    }
  </ModalContainer>
)
}

const mapDispatchToProps = {
  COURSE_STUDENT_ADD
}

export default connect(null,mapDispatchToProps)(addStudent)