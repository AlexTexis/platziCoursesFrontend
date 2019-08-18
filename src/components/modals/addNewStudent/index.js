import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';

//redux
import * as actionsStudents from '../../../action/actionsStudents'
const { ADD_STUDENT } = actionsStudents

//components
import ModalContainer from '../../general/modalContainer/index'
import  Error  from '../../general/notifications/error'
import  Success from '../../general/notifications/success'

//styled components
import { Input,Select } from '../../general/input/style'
import { H3 } from '../../general/titles/style'
import { Button } from '../../general/button/style'
import { Spinner } from '../../general/spinner/style'

//hooks
import { useInputValue } from '../../../hooks/useInputValue'
import { useCreateStudent } from '../../../hooks/students/useCreate'
 
const AddNewStudent = ({handlerCancel,titleLabel,ADD_STUDENT}) => {
  const name = useInputValue('')
  const surnames = useInputValue('')
  const interest = useInputValue('')
  const email = useInputValue('')
  const description = useInputValue('')
  const twitter = useInputValue('')

  const { data,loading,error,setCreate }  = useCreateStudent()
  //success message
  const [ succesful,setSuccess ] = useState(false)

  useEffect(() => {
    const timer = () => setTimeout(() => setSuccess(false),1400)
    setSuccess(data)
    if(data) timer()
    
    return () => {
      clearTimeout(timer)
    }
  },[data])

  const handleSubmit = e => {
    e.preventDefault()
    setCreate({
      input : {
        name :  name.value,
        surnames : surnames.value,
        interest : interest.value,
        email : email.value,
        description : description.value,
        twitter : twitter.value
      },
      actionCreator : ADD_STUDENT
    })
  }
  
  return (
    <ModalContainer handlerCancel={handlerCancel} titleLabel={titleLabel}>
      <form onSubmit={handleSubmit}>
      <H3>Nombre:</H3>
      <Input placeholder='Tu nombre' {...name}  type='text'/>

      <H3>Apellidos:</H3>
      <Input placeholder='Tus apellidos' {...surnames}  type='text'/>

      <H3>Email:</H3>
      <Input placeholder='Ingresa algun email' {...email}  type='email'/>

      <H3>Acerca de ti:</H3>
      <Input placeholder='Describe algo de ti' {...description}  type='text'/>

      <H3>Usuario twitter:</H3>
      <Input placeholder='Nombre de usuario twitter' {...twitter}  type='text'/>
      <H3> <a target='_blank' href={`https://twitter.com/${twitter.value}`}> https://twitter.com/{twitter.value} </a></H3>

      <H3>Interes:</H3>
      <Select  onChange={interest.onChange}>
        <option selected disabled hidden>Selecciona su interes</option>
        <option value="Desarrollo frontend">Desarrollo frontend</option>
        <option value="Desarrollo backend">Desarrollo backend</option>
        <option value="Marketing">Marketing</option>
        <option value="Diseñador grafico">Diseñador grafico</option>
        <option value="Negocios">Negocios</option>
        <option value="Audiovisual">Audiovisual</option>
      </Select>

      <Button backgroundColor='#98CA3F'
       type='submit' 
       disabled={ name.value && surnames.value && email.value && twitter.value && interest.value ? false : true }>
      {
        loading ? <Spinner/> : 'Guardar'
      }
      </Button>

      { error && <Error message={error}/>}
      { succesful && <Success message='Estudiante registrado'/>}

    </form>
    </ModalContainer>
  )
}

const mapDispatchToProps = {
  ADD_STUDENT
}

export default connect(null,mapDispatchToProps)(AddNewStudent)