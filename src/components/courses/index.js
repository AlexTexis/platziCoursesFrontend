import React,{useEffect} from 'react'
import { connect } from 'react-redux'

//Components
import Card from './cardCourse/index'
import Toolbar from '../general/toolbarContainer/index'
import ModalAddCourse from '../modals/addCourse/index'

//actions redux
import * as actionsCourses from '../../action/actionsCourses'
const { LOAD_COURSES } = actionsCourses

//Styled components
import { CoursesContainer,GridCourses } from './style'
import { H1,H2,P } from '../general/titles/style'
import { Spinner } from '../general/spinner/style'
import { LinkRoute } from '../general/link/style'
import Error from '../general/notifications/error'

//hooks
import { useModal } from '../../hooks/useModal'
import { useGetCourses } from '../../hooks/courses/useGet'

const Courses = ({LOAD_COURSES,courses}={}) => {
  const modalAdd = useModal(false)
  const { error,loading,setCourses } = useGetCourses()

  useEffect(() => {
    if(!courses) setCourses({ 
      actionCreator : LOAD_COURSES
    })
  },[])


  const render = () => {
    if(error) return <Error message={error}/>
    if(loading || !courses) return <Spinner color='#24ADF3' height='28px' width='28px' center/>
    if(!Object.keys(courses).length) return <H2>!Hey no hay cursos  🤷‍♂️‍,se el primero en registrar uno!</H2>
    return ( 
      <GridCourses>
        {
          Object.keys(courses).map( idCourse => 
            <LinkRoute to={`/courses/${idCourse}`} key={idCourse}>
              <Card  {...courses[idCourse]}/>
            </LinkRoute> 
          )
        }
     </GridCourses>
    ) 
  }

  return (
    <CoursesContainer>
        <H1>Cursos</H1>
        <P>¡Compartenos que curso te gustaria ver en platzi!</P>
        <Toolbar onClickAdd={modalAdd.setShow}/> 
        { render() }
        { modalAdd.show &&
          <ModalAddCourse titleLabel='Añadir Curso' handlerCancel={modalAdd.setShow}/>
        }
    </CoursesContainer>
  )  
}

const mapStateToProps = ({coursesReducer}) => ({ courses : coursesReducer.courses})
const mapDispatchToProps = {
  LOAD_COURSES
}

export default connect(mapStateToProps,mapDispatchToProps)(Courses)