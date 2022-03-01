import React from 'react'
import { Wavo } from '../css-componentes/NotFound'
import Not from '../assets/wobbuffet-pokemon.gif'
import { useDispatch } from 'react-redux'
import { get_pages, get_pokemons, page_name } from '../redux/actions'


const NotFound = () => {
 const dispatch = useDispatch()

const click = async ()=>{
  await dispatch(get_pokemons)
  dispatch(page_name())
  dispatch(get_pages())
}

  return (
   <Wavo>
      <img src={Not} alt="" />
      <h2>Not Found</h2>
      <button onClick={click}>volvamos</button>
   </Wavo>
  )
}

export default NotFound
