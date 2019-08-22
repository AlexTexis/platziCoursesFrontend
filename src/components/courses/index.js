import React,{useEffect,useContext} from 'react'
import { connect } from 'react-redux'

//Components
import Card from './cardCourse/index'
import Toolbar from '../general/toolbarContainer/index'
import ModalAddCourse from '../modals/addCourse/index'
import MasonryLayout from '../general/masonryLayout/index'

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

//context
import { AppContext } from '../../context'


const Courses = ({LOAD_COURSES,courses}={}) => {
  const { auth } = useContext(AppContext)
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
      <MasonryLayout>
        {
          Object.keys(courses).map( idCourse => 
            <LinkRoute to={`/courses/${idCourse}`} key={idCourse}>
              <Card  {...courses[idCourse]}/>
            </LinkRoute> 
          )
        }
     </MasonryLayout>
    ) 
  }

  return (
    <CoursesContainer>
        <H1>Cursos</H1>
        { auth ?
           <P>¡Compartenos que curso te gustaria ver en platzi!</P> 
           :
           <P>¡Inicia sesion y compartenos que curso te gustaria ver en platzi!</P> 
        }
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