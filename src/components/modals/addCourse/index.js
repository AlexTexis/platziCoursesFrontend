import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsCourses from '../../../action/actionsCourses'
const { COURSE_ADD } = actionsCourses

//hooks
import { useInputValue } from '../../../hooks/useInputValue'
import { useCreateCourse } from "../../../hooks/courses/useCreate";

//styled components
import { Input,Select } from '../../general/input/style'
import { H3 } from '../../general/titles/style'
import { Button } from '../../general/button/style'
import { Spinner } from '../../general/spinner/style'

//components
import  Error  from '../../general/notifications/error'
import  Success from '../../general/notifications/success'
import  ModalContainer from '../../general/modalContainer/index'
 
const ModalAdd = ({titleLabel,handlerCancel,COURSE_ADD}={}) => { 

  const name = useInputValue('')
  const level = useInputValue('')
  const tutor = useInputValue('')
  const description = useInputValue('')
  const {data,error,loading,setCreate } = useCreateCourse()
  //success message
  const [successful,setSucces] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreate({
      input : {
        name : name.value,
        tutor : tutor.value,
        description : description.value,
        level : level.value,
        alumns : [],
        class : [] 
      },
      actionCreator : COURSE_ADD
    })
  }

  useEffect(() => {
    const timer = () => setTimeout(() => setSucces(false),1400)
    setSucces(data)
    if(data) timer()
    
    return () => {
      clearTimeout(timer)
    }
  },[data])

  return (
    <ModalContainer titleLabel={titleLabel} handlerCancel={handlerCancel} >
      <form onSubmit={handleSubmit}>
        <H3>Curso:</H3>
        <Input placeholder='Nombre del curso' {...name} type='text'/>

        <H3>Tutor:</H3>
        <Input placeholder='Ingresa tutor' {...tutor} type='text'/>

        <H3>Description:</H3>
        <Input placeholder='Ingresa tutor' {...description} type='text'/>

        <H3>Nivel:</H3>
        <Select onChange={level.onChange}>
          <option selected disabled hidden>Selecciona nivel</option>
          <option value="Basico">Basico</option>
          <option value="Intermedio">Intermedio</option>
          <option value="Avanzado">Avanzado</option>
        </Select>

        <Button 
          type='submit' 
          backgroundColor='#98CA3F' 
          disabled={ name.value && tutor.value && description.value && level.value ? false : true}>
        { loading ? <Spinner/> : 'Guardar'}
        </Button>

        {error && <Error message={error}/>}
        {successful && <Success message='Curso agregado'/>}
      </form>
    </ModalContainer>
  )
}

const mapDispatchToProps = {
  COURSE_ADD
}

export default connect(null,mapDispatchToProps)(ModalAdd)