import React,{useState} from 'react'

export const useModal = (initalValue) => {
  const [show,setShow] = useState(initalValue)

  const handleToggle = () => setShow(!show)

  return {
    show,
    setShow : handleToggle
  }
}