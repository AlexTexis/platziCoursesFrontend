import React,{useState,useEffect,Fragment,useContext} from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsCourses from '../../../action/actionsCourses'
const { COURSE_UPDATE } = actionsCourses

//hooks
import { useCourseUpdate } from '../../../hooks/courses/useUpdate'

//styled component
import { Button } from '../../general/button/style'
import { GridList } from '../style'
import { InputStyled,SelectStyled } from '../../general/input/style'
import { H3 } from '../../general/titles/style'
import { Spinner } from '../../general/spinner/style'

//components
import Success from '../../general/notifications/success'
import Error from '../../general/notifications/error'

//Context
import { AppContext } from '../../../context'

const FormUpdate = ({idCourse,courses,COURSE_UPDATE}={}) => {

const { auth } = useContext(AppContext)
const [nameCourse,setName] = useState('')
const [tutorCourse,setTutor] = useState('')
const [descriptionCourse,setDescription] = useState('')
const [levelCourse,setLevel] = useState('')
const { error,loading,data,setUpdate } = useCourseUpdate()
// success message
const [succesful,setSucces] = useState(false)

useEffect(() => {
  const { name,tutor,description,level } = courses[idCourse]
  setName(name)
  setTutor(tutor)
  setDescription(description)
  setLevel(level)
},[])

useEffect(() => {
  const timer = () => setTimeout(() => setSucces(false),1400)
  setSucces(data)
  if(data) timer()
  
  return () => {
    clearTimeout(timer)
  }
},[data])

const handlerUpdate = () => {
   setUpdate({
     id : idCourse,
     input : { 
      name : nameCourse ,
      tutor : tutorCourse,
      description  : descriptionCourse,
      level : levelCourse
     },
     actionCreator : COURSE_UPDATE
   })
}


return (
  <Fragment>
    <GridList>
      <div>
        <H3>Nombre</H3>
        <InputStyled value={nameCourse} onChange={(e) => setName(e.target.value)} disabled={ auth ? false : true}/>
      </div>

      <div>
        <H3>Tutor</H3>
        <InputStyled value={tutorCourse} onChange={e => setTutor(e.target.value)} disabled={ auth ? false : true}/>
      </div>

      <div>
        <H3>Descripcion</H3>
        <InputStyled value={descriptionCourse} onChange={e => setDescription(e.target.value)} disabled={ auth ? false : true}/>
      </div>

      <div>
        <H3>Nivel</H3>
        <SelectStyled value={levelCourse} onChange={e => setLevel(e.target.value)} disabled={ auth ? false : true}>
          <option value="Basico">Basico</option> 
          <option value="Intermedio">Intermedio</option> 
          <option value="Avanzado">Avanzado</option> 
        </SelectStyled>
      </div>
    </GridList>
    {
      auth &&
      <Button onClick={handlerUpdate} backgroundColor='#98CA3F'>
        {
          loading ? <Spinner/> : 'Guardar cambios'
        }
      </Button>
    }
    { error && <Error message={error}/> }
    { succesful && <Success message='Curso actualizado'/> }
  </Fragment>
)
}

const mapDispatchToProps = {
  COURSE_UPDATE
}

const mapStateToProps = ({coursesReducer}) => ({ courses : coursesReducer.courses})

export default connect(mapStateToProps,mapDispatchToProps)(FormUpdate)