import React,{useState} from 'react'

export const useInputValue = (initalValue) => {
  const [value,setValue] = useState(initalValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}
