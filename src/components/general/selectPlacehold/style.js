import styled from 'styled-components'

export const Input = styled.input`
  width:100%;
  height : 35px;
  margin-bottom:1em;
  padding: 0 1em;
  box-sizing:border-box;
  border:none;
  box-shadow: 0 0 0 1px #E5E5E5;
  border-radius : 50px;
  background-color: transparent;
  position:relative;
  z-index:1;
`

export const Span = styled.span`
  position : absolute;
  top:0;
  left : 14px;
  line-height : 35px;
`

export const Options = styled.ul`
  position:absolute;
  width:100%;
  top :30px;
  left :0;
  max-height : 150px;
  overflow:auto;
  background-color : #fff;
  box-shadow : 0 2px 10px -4px rgba(0,0,0,.3);
  padding :.5em;
  margin-bottom:.5em;
  box-sizing:border-box;
  list-style:none;
`

export const Option = styled.li`
  height : 30px;
  line-height : 30px;
  cursor:default;
  box-shadow : 0 .5px 0 0 rgba(0,0,0,.1)
`