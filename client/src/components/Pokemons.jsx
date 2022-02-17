import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import Gift from '.././assets/spin.gif'

const Pokemons = () => {

   // const pokemones = useSelector(state => state.pokemons);
   const pages = useSelector(state => state.pages);
   const current = useSelector(state =>state.current)
  return (
    <div>
       { (!pages.length)?
         <div><img src={Gift} alt="" /></div>: 
         pages[current].map(po =>{
           return(<div key={po.id}>
               <PokemonCard
               id={po.id}
               name={po.name}
               image={po.image}
               tipo={po.tipo}
               />
           </div>)
       })}
    </div>
  )
}

export default Pokemons;

