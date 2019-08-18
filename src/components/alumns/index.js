import React,{useEffect} from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsStudent from '../../action/actionsStudents'
const { LOAD_STUDENTS } = actionsStudent

//components
import Toolbar from '../general/toolbarContainer/index'
import ModalAddStudent from '../modals/addNewStudent/index'
import Card from './card/index'

//style components
import { StudentsContainer,GridAlumns } from './style'
import { H1,H2,P } from '../general/titles/style'
import { LinkRoute } from '../general/link/style'
import { Spinner } from '../general/spinner/style'
import Error from '../general/notifications/error'

//hooks
import { useModal } from '../../hooks/useModal'
import { useGetStudents } from '../../hooks/students/useGet'


const Alumns = ({students,LOAD_STUDENTS}={}) => {
  const modalAdd = useModal(false) 
  const { loading,error,setStudents } = useGetStudents()

  useEffect(() => {
    if(!students) setStudents({
     actionCreator : LOAD_STUDENTS
    })
  },[])

  const render = () => {
    if(error) return <Error message={error}/>
    if(loading || !students) return <Spinner color='#24ADF3' height='28px' width='28px' center/>
    if(!Object.keys(students).length) return <H2>!Hey no hay estudiantes  🤷‍♂️‍,se el primero en registrarte!</H2>
    return (
       <GridAlumns>
        {
          Object.keys(students).map( id =>
            <LinkRoute key={id} to={`/alumns/${id}`}>
              <Card  {...students[id]}/>
          </LinkRoute> 
          )
        }
      </GridAlumns>
    )
  }

  return (
    <StudentsContainer>
      <H1>Estudiantes</H1>
      <P>¡Registrate para poder añadirte en un curso!</P>
      <Toolbar onClickAdd={modalAdd.setShow}/>
      { render() }
      {modalAdd.show &&
        <ModalAddStudent handlerCancel={modalAdd.setShow} titleLabel='Añadir estudiante'/> 
      }
    </StudentsContainer>
  )
}

const mapStateToProps = ({studentsReducer}) => ({students : studentsReducer.students})

const mapDispatchToProps = {
  LOAD_STUDENTS
}

export default connect(mapStateToProps,mapDispatchToProps)(Alumns)