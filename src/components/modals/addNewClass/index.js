import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsClasses from '../../../action/actionsClasses'
const { CLASS_ADD } = actionsClasses

//hooks
import { useInputValue } from '../../../hooks/useInputValue'
import { usecreateClass } from '../../../hooks/classes/useCreate'

//styled components
import { Input } from '../../general/input/style'
import { H3 } from '../../general/titles/style'
import { Button } from '../../general/button/style'
import { Spinner } from '../../general/spinner/style'

//components
import Error  from '../../general/notifications/error'
import Success from '../../general/notifications/success'
import ModalContainer from '../../general/modalContainer/index'


const AddNewClass = ({handlerCancel,titleLabel,CLASS_ADD}) => {
  const name = useInputValue('')
  const label = useInputValue('')

  const { data,loading,error,unAuthorized,setCreate }  = usecreateClass()
  //success message
  const [succesful,setSucces] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setCreate({
      input : {
        name :  name.value,
        label : label.value
      },
      actionCreator : CLASS_ADD
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
    <ModalContainer handlerCancel={handlerCancel} titleLabel={titleLabel}>
      <form onSubmit={handleSubmit}>
        <H3>Nombre:</H3>
        <Input placeholder='Nombre de la clase' {...name}  type='text'/>

        <H3>Etiqueta:</H3>
        <Input placeholder='Asigna un etiqueta' {...label}  type='text'/>

        <Button 
        backgroundColor='#98CA3F' 
        type='submit' 
        disabled={ name.value && label.value ?  false : true }>
          {
            loading ? <Spinner/> : 'Guardar'
          }
        </Button>
        
        { error && <Error message={error}/> }
        { unAuthorized && <Error message='Inautorizado'/> }
        { succesful && <Success message='¡Clase creada!'/> }
     </form>
    </ModalContainer>
  )
}

const mapDispatchToProps = {
  CLASS_ADD
}

export default connect(null,mapDispatchToProps)(AddNewClass)