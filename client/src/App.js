import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { get_pages, get_pokemons } from './redux/actions';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LandingPage from './pages/LandingPage.jsx'
import AddPokemon from './pages/AddPokemon';
import PokemonDetail from './components/PokemonDetail';
import './App.css';

function App() {
 
  const dispatch = useDispatch();
  //en mi  use effect creo una funcion asyncrona 
  //para poder depachar primero get pokemons y que luego de que se cumpla mi   primera promeza 
  // se ejecute mi armado  de paginas

  useEffect(() =>{
    let dispachar = async () =>{
      await dispatch(get_pokemons())
     dispatch(get_pages())
    }
    dispachar();
  },[dispatch])
 

  return (
    <div className="App">
      <Routes>
      <Route path='/'element={<LandingPage />}/>
      <Route path='/home'element={<Home />}/>
      <Route path='/pokemon/:id'element={<PokemonDetail />}/>
      <Route path='/add'element={<AddPokemon />}/>
      </Routes>
    </div>
  );
}

export default App;
