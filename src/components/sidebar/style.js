import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Sidebar = styled.section`
  grid-area:sidebar; 
  height :auto;
  width : 60px;
  background-image:linear-gradient(180deg, #1c3643 0, #273b47 25%, #1e5372);
  padding: 4em 0 1em 0;
  box-sizing:border-box;
  box-shadow: 2px 0 15px -6px rgba(0,0,0,.1);
`

export const LinkRoute = styled(LinkRouter)`
  color : #E5E5E5;
  display:block;
  width:40px;
  height : 40px;
  margin:0 auto;
  margin-bottom :.5em;
  text-align:center;
  &[aria-current] {
    color : #98CA3F;
  }
`