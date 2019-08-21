import React from 'react'
import { Helmet } from 'react-helmet'

//components
import Sidebar from '../sidebar/index'
import Header from '../header/index'
import '../../styles/layout.css'

const Layout = ({children,title,description}={}) => (
  <div className='layout_adm'>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    <Sidebar/>
    <Header showBtnSession/>
    <div style={{gridArea : 'content',overflow : 'auto'}}>
    {
      children
    }
    </div>
  </div>
)

export default Layout

//LAYOUT STUCTURE
// -------------------------------------
//|     |         Header                |
//|     |-------------------------------|                                    
//|  S  |                               |
//|  i  |                               |
//|  d  |                               |
//|  e  |                               |
//|  b  |                               |
//|  a  |                               |
//|  r  |          Children             |
//|     |                               |
//|     |                               |
//|     |                               |
//|     |                               |
//|     |                               |
//|     |                               |
//|     |                               |
//***************************************