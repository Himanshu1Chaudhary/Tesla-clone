import React from 'react'
import './Menu.css'

function menu({title}) {
  return (
    <div className="header_menu">
   <p><a href="#">{title} </a></p>
   </div>
  )
}

export default menu