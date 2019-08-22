import React from 'react'
import Masonry from 'react-masonry-component'
import './style.css'

const MasonryLayout = ({children}={}) => {
  const options = {
    fitWidth : true,
    transitionDuration : 0
  }

  return (
    <Masonry
      className={'masonry_layout'}
      options={options}
    >
      {
        children
      }
    </Masonry>
  )
}

export default MasonryLayout