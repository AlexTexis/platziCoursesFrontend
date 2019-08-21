import React from 'react'
import { Helmet } from 'react-helmet'

//components
import '../../styles/layout.css'
import Header from '../header/index'

const Layout = ({children,title,description}={}) => (
  <div className='layout'>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Header showBtnSession={false}/>
    <div style={{position : 'relative',gridArea :'form',padding : '1em'}}>
    {
      children
    }
    </div>
  </div>
)

export default Layout

