import styled from 'styled-components'

export const GridAlumns =  styled.div`
  display:grid;
  grid-template-columns : repeat(auto-fill,minmax(250px,250px));
  justify-content:center;
  grid-gap:1em;
`

export const StudentsContainer = styled.section`
 width:90%;
 padding : 1em 0 0 0;
 box-sizing:border-box;
 margin:0 auto;
 @media screen and (max-width:420px){
  font-size : .9em;
}
` 