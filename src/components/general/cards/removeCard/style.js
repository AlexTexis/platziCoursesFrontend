import styled from 'styled-components'

export const CardContainer = styled.h4`
position:relative
height : 45px;
background-color:#fff;
border-left:5px solid #E5E5E5;
box-shadow: 0 0 1px 0 #E5E5E5;
padding : .4em;
border-radius:5px;
box-sizing:border-box;
color:#808080;
font-size:1em;
margin : 1em 0;
display:flex;
align-items:center;
`

export const IconRemove = styled.div`
position:absolute;
height : 40px;
width : 40px;
border-radius:50%;
background-color : #DD5145;
color : #fff;
top : -15px;
right :10px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
z-index:1;
`
export const IconView = styled.div`
position:absolute;
height : 40px;
width : 40px;
border-radius:50%;
background-color : #00A8C5;
color : #fff;
top : -15px;
right :60px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
z-index:1;
`