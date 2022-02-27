import React from 'react'
import Gift from '../assets/1604090_a14a5.gif'
import { Cargando, Imagen } from '../css-componentes/Loading'

const Loading = () => {
  return (
    <Cargando>
        <Imagen src={Gift} alt="" />
    </Cargando>
  )
}

export default Loading

