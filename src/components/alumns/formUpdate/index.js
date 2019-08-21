import React,{useState,useEffect,useContext,Fragment} from 'react'
import {  connect } from 'react-redux';

//redux
import * as actionsStudents from '../../../action/actionsStudents'
const { UPDATE_STUDENT } = actionsStudents

//style components
import { GridList } from '../../courses/style'
import { Button } from '../../general/button/style'
import { H3 } from '../../general/titles/style'
import { InputStyled,SelectStyled } from '../../general/input/style'
import { Spinner } from '../../general/spinner/style'

//components
import Error from '../../general/notifications/error'
//succes message
import Success from '../../general/notifications/success'
 
//hooks
import { useStudentUpdate } from '../../../hooks/students/useUpdate'

//Context
import { AppContext } from '../../../context'

const FormUpdate = ({idStudent,students,UPDATE_STUDENT}={}) => {

  const { auth } = useContext(AppContext)
  const [nameStudent,setName] = useState('')
  const [surnamesStudent,setSurnames] = useState('')
  const [descriptionStudent,setDescription] = useState('')
  const [twitterStudent,setTwitter] = useState('')
  const [interestStudent,setInterest] = useState('')
  const [emailStudent,setEmail] = useState('')

  const { error,loading,data,setUpdate } = useStudentUpdate()
  const [succesful,setSuccess] = useState(false)

  useEffect(() => {
    const { name,surnames,description,twitter,interest,email } = students[idStudent]
    setName(name)
    setSurnames(surnames)
    setDescription(description)
    setTwitter(twitter)
    setInterest(interest)
    setEmail(email)
  },[])

  useEffect(() => {
    const timer = () => setTimeout(() => setSuccess(false),1400)
    setSuccess(data)
    if(data) timer()
    
    return () => {
      clearTimeout(timer)
    }
  },[data])


  const handlerUpdate = () => {
    setUpdate({
      id : idStudent,
      input : { 
        name : nameStudent,
        surnames : surnamesStudent,
        description : descriptionStudent,
        twitter : twitterStudent,
        interest : interestStudent,
        email : emailStudent
      },
      actionCreator : UPDATE_STUDENT
    })
  }


  return (
    <Fragment>
      <GridList>
        <div>
          <H3>Nombre</H3>
          <InputStyled 
            value={nameStudent} 
            onChange={ e => setName(e.target.value)} 
            disabled={ auth ? false : true}/>
        </div>

        <div>
          <H3>Apellidos</H3>
          <InputStyled  
            value={surnamesStudent} 
            onChange={ e => setSurnames(e.target.value)} 
            disabled={ auth ? false : true}/>
        </div>

        <div>
          <H3>Descripcion</H3>
          <InputStyled 
            value={descriptionStudent} 
            onChange={ e => setDescription(e.target.value)} 
            disabled={ auth ? false : true}/>
        </div>

        <div>
          <H3>Usuario Twitter</H3>
          <InputStyled 
            value={twitterStudent} 
            onChange={ e => setTwitter(e.target.value)} 
            disabled={ auth ? false : true}/>
        </div>

        <div>
          <H3>Email</H3>
          <InputStyled 
            value={emailStudent} 
            onChange={ e => setEmail(e.target.value)} 
            disabled={ auth ? false : true}/>
        </div>

        <div>
        <H3>Interes</H3>
        <SelectStyled 
          value={interestStudent} 
          onChange={ e => setInterest(e.target.value)} 
          disabled={ auth  ? false : true}>
            <option value="Desarrollo frontend">Desarrollo frontend</option>
            <option value="Desarrollo backend">Desarrollo backend</option>
            <option value="Marketing">Marketing</option>
            <option value="Diseñador grafico">Diseñador grafico</option>
            <option value="Negocios">Negocios</option>
            <option value="Audiovisual">Audiovisual</option>
        </SelectStyled>
        </div>
      </GridList>
      { 
        auth &&
        <Button onClick={handlerUpdate} backgroundColor='#98CA3F'>{loading ? <Spinner/> : 'Guardar cambios'}</Button>
      }
      { error && <Error message={error}/> }
      { succesful && <Success message='Datos actualizados'/> }
    </Fragment>
  )
}

const mapStateToProps = ({studentsReducer}) => ({
  students : studentsReducer.students
})

const mapDispatchToProps = {
  UPDATE_STUDENT
}

export default connect(mapStateToProps,mapDispatchToProps)(FormUpdate)