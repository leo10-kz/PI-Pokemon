import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import { Conteiner } from '../css-componentes/Conteiner'
import Loading from './Loading'

const Pokemons = () => {

   
   const pages = useSelector(state => state.pages);
   const current = useSelector(state =>state.current)
  
  return (
    <Conteiner>
       { (!pages.length)?
         <Loading /> :
         pages[current].map(po =>{
           return(<div key={po.id}>
               <PokemonCard
               id={po.id}
               name={po.name}
               image={po.image}
               types={po.types}
               fuerza={po.fuerza}
               />
           </div>)
       })}
    </Conteiner>
  )
}

export default Pokemons;

