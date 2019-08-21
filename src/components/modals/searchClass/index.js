import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsCourses from '../../../action/actionsCourses'
const  { COURSE_CLASS_ADD } = actionsCourses

//components
import Success from '../../general/notifications/success'
import Error from '../../general/notifications/error'
import ModalContainer from '../../general/modalContainer/index'
import SelectPlacehold from '../../general/selectPlacehold/index'

// styled components
import { LinkRoute } from '../../general/link/style'
import { H4 } from '../../general/titles/style'
import { Button } from '../../general/button/style'
import { Spinner } from '../../general/spinner/style'

//hooks 
import { useAddClass } from '../../../hooks/courses/useAddClass'
import { ClassesServices } from '../../../services/classes'

const addStudent = ({titleLabel,handlerCancel,idCourse,COURSE_CLASS_ADD}={}) => { 
  const [selectedItem,setSelected] = useState(null)
  const { error,data,loading,setCreate } = useAddClass()
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
    const { error,data } = await new ClassesServices().getAll({ name : inputValue })
    cbOptions(data.data)
  }

  const handleAddClass = () => setCreate({
    id : idCourse,
    input : {
      _id : selectedItem['_id']
    },
    actionCreator : COURSE_CLASS_ADD
  })

    return(
    <ModalContainer titleLabel={titleLabel} handlerCancel={handlerCancel}>
      <H4 color='#182C3F'>Busca nombre de la clase</H4>
      <SelectPlacehold 
        loadOptions={handleLoadOptions}
        getOptionLabel={(props) => `${props.name}`}
        selectOption={(props) => setSelected(props) }
        selectTitleLabel={['name']}
      />
      <LinkRoute to='/classes'>
        <H4 color='#182C3F'>¿Aun no hay clases? ¡Registra una ahora!</H4>
      </LinkRoute> 

      <Button onClick={handleAddClass} backgroundColor='#98CA3F'>
        {
          loading ? 
          <Spinner/>
          :
          'Guardar'
        }
      </Button>
      { succesful &&  <Success message='Clase añadida'/> }
      { error && <Error message={error}/> }
    </ModalContainer>
    )
}

const mapDispatchToProps = {
  COURSE_CLASS_ADD
}

export default connect(null,mapDispatchToProps)(addStudent)