import React,{useEffect,useContext} from 'react'
import  { connect } from 'react-redux'

//redux
import * as actionsClasses from '../../action/actionsClasses'
const { LOAD_CLASSES } = actionsClasses 

//styled components
import { ClassesContainer } from './style'
import { H1,H2,P } from '../general/titles/style'
import { GridClasses } from "./style"
import { Spinner } from '../general/spinner/style'

//components
import Toolbar from '../general/toolbarContainer/index'
import Card from './card/index'
import ModalAddClass from '../modals/addNewClass/index'
import Error from '../general/notifications/error'
  
//hooks
import { useGetClasses } from '../../hooks/classes/useGet'
import { useModal } from '../../hooks/useModal'

//context
import { AppContext } from '../../context'
 
const Classes = ({classes,LOAD_CLASSES}={}) => {
  const { auth } = useContext(AppContext)
  const { error,loading,setClasses } = useGetClasses()
  const modalClass = useModal(false)

  useEffect(() => {
    if(!classes) setClasses({
     actionCreator : LOAD_CLASSES
    })
  },[])

  const render = () => {
    if(error) return <Error message={error}/>
    if(loading || !classes ) return <Spinner color='#24ADF3' height='28px' width='28px' center/>
    if(!Object.keys(classes).length) return <H2>!Hey no hay clases  🤷‍♂️‍!¿Porque no registras una?</H2>
    return (
      <GridClasses>
        {
         Object.keys(classes).map( idClass =>
           <Card 
            key={idClass} 
            idClass={idClass} 
            label={classes[idClass].label} 
            textContent={classes[idClass].name}
          />
          )
        }
      </GridClasses>
    )
  }

  return (
    <ClassesContainer>
      <H1>Clases</H1>
      { auth ?
        <P>¡Compartenos que clases deberia tener tu curso!</P>
        :
        <P>¡Inicia sesion y compartenos que clases deberia tener tu curso!</P>
      }
      <Toolbar onClickAdd={modalClass.setShow} />   
      { 
        render() 
      }
      {modalClass.show &&
        <ModalAddClass titleLabel='Añadir clase' handlerCancel={modalClass.setShow}/>
      }
    </ClassesContainer>
  )
}

const mapStateToProps = ({classesReducer}={}) => ({ classes : classesReducer.classes})
const mapDispatchToProps = { 
  LOAD_CLASSES
}

export default connect(mapStateToProps,mapDispatchToProps)(Classes)