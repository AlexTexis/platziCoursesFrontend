import React,{useEffect,useContext,Fragment} from 'react'
import { connect } from 'react-redux'
import { Redirect } from '@reach/router'

//actions redux
import * as actionsCourses from '../../action/actionsCourses'
const { LOAD_COURSES,COURSE_REMOVE } = actionsCourses

//hooks
import { useModal } from '../../hooks/useModal'
import { useGetCourses  } from '../../hooks/courses/useGet'
import { useCourseRemove } from '../../hooks/courses/useRemove'

//styled components
import { CoursesContainer,ContainerSplit,P } from './style'
import { H1,H2 } from '../general/titles/style'
import { Button } from '../general/button/style'
import { Spinner } from '../general/spinner/style'
import { LinkRouteBtn } from '../general/link/style'
import Error  from '../general/notifications/error'

//Components
import Toolbar from '../general/toolbarContainer/index'
import ListAlumns from './listAlumns/index'
import ListClasses from './listClasses/index'
import ModalAddStudent from '../modals/searchStudent/index'
import ModalAddClass from '../modals/searchClass/index'
import FormUpdate from './formUpdate/index'

//Context
import { AppContext } from '../../context'

const CourseAbout = ({idCourse,courses,LOAD_COURSES,COURSE_REMOVE}={}) => {
 
  const { auth } = useContext(AppContext)
  const { error,loading,setCourses } = useGetCourses()
  const hookCourseRemove = useCourseRemove()
  const modalAddStudent = useModal(false)
  const modalAddClass = useModal(false)

  const handlerRemoveCourse = () => hookCourseRemove.setRemove({
    id: idCourse,
    actionCreator : COURSE_REMOVE
  })

  useEffect(() => {
    if(!courses) setCourses({
      actionCreator : LOAD_COURSES
    }) 
  })

  const render = () => {
    if(error) return <Error message={error}/>
    if(loading || !courses) return <Spinner color='#24ADF3' height='28px' width='28px' center/>
    if(!courses[idCourse]) return <H2>!No encontramos este curso 😢!</H2> //verificar que el id del grupo exista en el reducer(objeto)
    
    return (
      <Fragment> 
        <ContainerSplit center >
          <H1 fontSize='3.4em' color='#182C3F'>{courses[idCourse].name.toUpperCase()}</H1> 
          <p>{courses[idCourse].description}</p>
          <p>ID : {idCourse}</p>
        </ContainerSplit>
 
        <ContainerSplit>
          <H2>Datos del curso :</H2>
          <FormUpdate idCourse={idCourse}/>
        </ContainerSplit>

        <ContainerSplit>
          <H2>Estudiantes :</H2>
          <P>Aqui puedes agregar estudiantes(debes registarlo)</P>
          <Toolbar onClickAdd={modalAddStudent.setShow}/>
          <ListAlumns alumns={courses[idCourse].alumns} idCourse={idCourse}/>
        </ContainerSplit>

        <ContainerSplit>
          <H2>Clases :</H2>
          <P >Aqui puedes agregar clases(debes registrarla)</P>
          <Toolbar onClickAdd={modalAddClass.setShow}/>
          <ListClasses classes={courses[idCourse].class} idCourse={idCourse}/>
        </ContainerSplit>
          {
            auth &&
            <Button onClick={handlerRemoveCourse} backgroundColor='#98CA3F'>
              {
                hookCourseRemove.loading ? <Spinner/> : 'Remover curso'
              }
            </Button>
          }
        { hookCourseRemove.error && <Error message={hookCourseRemove.error}/> }
        { hookCourseRemove.data && <Redirect noThrow to='/'/> }
      </Fragment> 
    )
  }


  return(
  <CoursesContainer>
     <LinkRouteBtn to='/'>Regresar</LinkRouteBtn>
      <H1>INFORMACIÓN DEL CURSO :</H1>
      {
         render() 
      }
      { modalAddStudent.show && 
        <ModalAddStudent 
          idCourse={idCourse}
          titleLabel='Añadir estudiante' 
          handlerCancel={modalAddStudent.setShow}/>
      }
      {
       modalAddClass.show &&
       <ModalAddClass 
          idCourse={idCourse}
          titleLabel='Añadir clase' 
          handlerCancel={modalAddClass.setShow}/>
      }
  </CoursesContainer>
  )  
}

const mapStateToProps = ({coursesReducer}) => ({ courses : coursesReducer.courses})

const mapDispatchToProps = {
  LOAD_COURSES,
  COURSE_REMOVE
}

export default connect(mapStateToProps,mapDispatchToProps)(CourseAbout)