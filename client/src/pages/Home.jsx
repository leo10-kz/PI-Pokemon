import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Filters from '../components/Filters'
import NavBar from '../components/NavBar'
import PaginationBar from '../components/PaginationBar'
import Pokemons from '../components/Pokemons'
import { get_types } from '../redux/actions'

const Home = () => {
   const pages = useSelector(state => state.pages)
   const dispatch = useDispatch()
   useEffect(()=>{
     dispatch(get_types())
   })

  return (
    <div>
      <NavBar/>
      { pages.length ? <PaginationBar />: <p>Cargando...</p> }  
        <Filters/>
        <Pokemons />
    </div>
  )
}

export default Home
