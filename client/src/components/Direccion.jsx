import React from 'react'
import { Linked, Conteiner } from '../css-componentes/Direccion'
import { useDispatch } from 'react-redux'
import { get_pages, get_pokemons, page_name } from '../redux/actions';

const Direccion = () => {

const dispatch = useDispatch();

const click = async () =>{
   await dispatch(get_pokemons())
    dispatch(page_name())
    dispatch(get_pages())
}

  return (
   <Conteiner>
      <Linked to='/add'>Crear</Linked>
      <input type="submit" value='Refrescar' onClick={click}/>
   </Conteiner>
  )
}

export default Direccion
