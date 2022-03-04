
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_pages, order_create_by, filter_type, ordering } from '../redux/actions';
import { Main } from '../css-componentes/Filters';


const Filters = () => {
   const dispatch = useDispatch()
  const tipos = useSelector(state => state.pokeTypes) 
  const [origenTipo, setOrigenTipo] = useState({
     tipo:'all',
     origen:'all'
  })

 

  const handleSort = (e) =>{
    dispatch(ordering(e.target.value));
       dispatch(get_pages())
  }


 const handleFilterTypes = (e) =>{ 
    setOrigenTipo({
      ...origenTipo,
      tipo:e.target.value
    })
    dispatch(filter_type({
      origen:origenTipo.origen,
      tipo:e.target.value
    }))
    dispatch(get_pages())
 }

const handleFilterOrigen = (e) =>{
  setOrigenTipo({
    ...origenTipo,
    origen:e.target.value
  })
 dispatch(order_create_by({
   tipo:origenTipo.tipo,
   origen:e.target.value
 }));
 dispatch(get_pages())
}
 
  return (
  
    <Main>
      <select name="orderName" onChange={(e) => handleSort(e)}>
          <option value="all">Por defecto</option>
          <option value="ascendente"> A - Z</option>
          <option value="descendente">Z - A</option>
          <option value="maximo">Fuerza (+)</option>
          <option value="minimo">Fuerza (-)</option>
      </select>
      
       
      <select name="orderTipos"  onChange={(e) => handleFilterTypes(e)}>
        <option value="all">Todos los Tipos</option>
        {tipos.map((t, i) => (<option key={i}>{t.name}</option>))}
      </select>


      <select name="orderCreate"  onChange={(e) => handleFilterOrigen(e)}>
          <option value="all">Todos </option>
          <option value="existe"> Api </option>
          <option value="creado"> Creados </option>
      </select>
    </Main>
  )
}

export default Filters

