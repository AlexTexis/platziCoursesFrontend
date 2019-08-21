import React from 'react'
import ReactDom,{ render } from 'react-dom'
import './styles/styles.css'

import App from './app'
import ContextProvider from './context'

render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
  document.getElementById('root')
)