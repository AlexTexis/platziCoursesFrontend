import React,{useEffect,Fragment} from 'react'
import { connect } from 'react-redux'
import { Redirect } from '@reach/router'

//redux
import * as actionsStudent from '../../action/actionsStudents'
const { LOAD_STUDENTS,REMOVE_STUDENT } = actionsStudent

///styled components
import { StudentsContainer } from './style'
import { ContainerSplit } from '../courses/style'
import { LinkRoute,LinkRouteBtn } from '../general/link/style'
import { H1 } from '../general/titles/style'
import { Button } from '../general/button/style'
import { Spinner } from '../general/spinner/style'

//components
import FormUpdate from './formUpdate/index'
import Error from '../general/notifications/error'

//hooks
import { useGetStudents } from '../../hooks/students/useGet'
import { useStudentRemove } from '../../hooks/students/useRemove'

const About = ({id,students,LOAD_STUDENTS,REMOVE_STUDENT}={}) => {
  const { loading,error,setStudents } = useGetStudents()
  const hookStudentRemove = useStudentRemove()

  useEffect(() => {
    if(!students) setStudents({
     actionCreator : LOAD_STUDENTS
    })
  },[])

  const handlerRemoveStudent = () => hookStudentRemove.setRemove({
    id,
    actionCreator : REMOVE_STUDENT
  })

  const render = () => {
    if(error) return <Error message={error}/>
    if(loading || !students ) return <Spinner color='#24ADF3' height='28px' width='28px' center/>
    if(!students[id]) return <h3>No existe este estudiante</h3>
    return (
      <Fragment>
          <ContainerSplit center>
            <H1 fontSize='3.4em' color='#182C3F'>{students[id].name.toUpperCase()} {students[id].surnames.toUpperCase()}</H1>
            <a href={`https://twitter.com/${students[id].twitter}`} target='_blank'>https://twitter.com/{students[id].twitter}</a>
            <p>{students[id].description}</p>
            <p>{students[id].email}</p>
            <p>{students[id].interest}</p>
          </ContainerSplit>

          <ContainerSplit>
            <FormUpdate idStudent={id}/>
          </ContainerSplit>

          <Button onClick={handlerRemoveStudent} backgroundColor='#98CA3F'>
            {
              hookStudentRemove.loading ? <Spinner/>  : 'Removerme'
            }
          </Button>

          { hookStudentRemove.error && <Error message={studentRemove.error}/>}
          { hookStudentRemove.data && <Redirect noThrow to='/alumns'/>}
      </Fragment>
    )
  }


  return ( 
    <StudentsContainer>
      <LinkRouteBtn to='/alumns'>Regresar</LinkRouteBtn>
      <H1>INFORMACION DEL ALUMNO</H1>
      { 
        render()
      }
    </StudentsContainer>
  )
}

const mapStateToProps = ({studentsReducer}) => ({students : studentsReducer.students})
const mapDispatchToProps = {
  LOAD_STUDENTS,
  REMOVE_STUDENT
}

export default connect(mapStateToProps,mapDispatchToProps)(About)