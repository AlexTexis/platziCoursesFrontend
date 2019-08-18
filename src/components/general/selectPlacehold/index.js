import React,{useState,Fragment,useEffect} from 'react'
import { Input,Span,Options,Option } from './style'

const SelectPlacehold = ({loadOptions,selectOption,getOptionLabel,selectTitleLabel}) => {
  const [value,setValue] = useState('')
  const [options,setOptions] = useState([])
  const [item,setItem] = useState(null)

  useEffect(() =>{
    loadOptions(value,(options) => {
      setOptions(options)
    })
  },[value])
  
  useEffect(() => {
    selectOption(item)
  },[item])
  

  const handleOnChange = e => {
    setValue(e.target.value)
  }

  const handleSelectOption = (props) => {
    setItem(props)
    setValue('')
  }

  const handleSelectTitleLabel = item => {
    let strs = []
    selectTitleLabel.forEach( attr => {
      strs = [...strs,item[attr]]
    })

    return strs.join(' ')
  }

  const renderOptions = () => {
    if(!options.length) return false
    return (
      <Options>
        {
          options.map( element => 
            <Option key={element['_id']} onClick={() => handleSelectOption(element)}>
            {
              getOptionLabel(element)
            }
            </Option>  
          )
        }
      </Options>
    )
  }
  
  return (
    <Fragment>
      <div style={{position:'relative'}}>
        <Input type="text" value={value} onChange={handleOnChange}/>
        <Span>{item && !value ? handleSelectTitleLabel(item) : false}</Span>
        {
          renderOptions()
        }
      </div>

    </Fragment>
  )
}

export default SelectPlacehold