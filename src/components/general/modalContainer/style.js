import styled,{css,keyframes} from 'styled-components'

const keyframesModal = keyframes`
  0%{
    opacity : 0;
    transform : translate(-50%,-50%) scale(1.05);
  }
  100%{
    opacity : 1;
    transform : translate(-50%,-50%)  scale(1);
  }
`

const fadeIn = ({time='.2s'}={}) => css`
  animation : ${time} ${keyframesModal} ease;
` 

export const Container = styled.div`
position:fixed;
top : 50%;
left : 50%;
transform : translate(-50%,-50%);
width : 400px;
height : 420px;
border-radius : 5px;
background-color:#fff;
padding : 1em;
box-sizing:border-box;
box-shadow : 0 3px 15px -5px rgba(0,0,0,.2); 
z-index:1;
overflow:auto;
display : grid;
grid-template : 40px 1fr 40px / 1fr;
grid-template-areas : "labelTitle"
                      "content"
                      "buttons";
${fadeIn()};
@media screen and (max-width:420px) {
  width : 375px;
}
`

export const ButtonsContainer = styled.div`
grid-area : buttons;
width:100%;
height : auto;
text-align:right;
`
export const ChildrenContainer = styled.div`  
height : auto;
grid-area : content;
`
