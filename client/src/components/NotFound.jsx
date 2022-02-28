import React from 'react'
import { Wavo } from '../css-componentes/NotFound'
import Not from '../assets/wobbuffet-pokemon.gif'


const NotFound = () => {
  return (
   <Wavo>
      <img src={Not} alt="" />
      <h2>Not Found</h2>
   </Wavo>
  )
}

export default NotFound
