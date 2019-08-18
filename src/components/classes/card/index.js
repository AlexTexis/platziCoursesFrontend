import React from 'react'
import { connect } from 'react-redux'

//redux
import * as actionsClasses from '../../../action/actionsClasses'
const { CLASS_REMOVE } = actionsClasses

// styled components
import { CardContainer,Label,IconRemove,ButtonsContainer } from "./style";
import { FaMinus} from 'react-icons/fa'
import { Spinner } from '../../general/spinner/style'

//hooks
import { useRemoveClass } from '../../../hooks/classes/useRemove'

const Card = ({textContent,label,idClass,CLASS_REMOVE}={}) => {
  const { error,loading,data,setRemove } = useRemoveClass()

  const handlerRemoveClass = () => {
    setRemove({
      id : idClass,
      actionCreator : CLASS_REMOVE
    })
  }
 
  return(
    <CardContainer>
      <p>
        { textContent } 
      </p>
      <ButtonsContainer>
        <Label>{label}</Label>
        <IconRemove onClick={handlerRemoveClass}>
          {
            loading ? <Spinner/> : <FaMinus size={22}/>
          }
        </IconRemove>
      </ButtonsContainer>
    </CardContainer>
    )
}

const mapDispatchToProps = {
  CLASS_REMOVE
}

export default connect(null,mapDispatchToProps)(Card)