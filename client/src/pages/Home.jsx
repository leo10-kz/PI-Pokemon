import React from 'react'
import { useSelector } from 'react-redux'
import PaginationBar from '../components/PaginationBar'
import Pokemons from '../components/Pokemons'

const Home = () => {
   const pages = useSelector(state => state.pages)

  return (
    <div>
      { pages.length ? <PaginationBar />: <p>Cargando...</p> }  
        <Pokemons />
    </div>
  )
}

export default Home
