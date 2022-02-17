import axios from 'axios';

export const GET_POKEMONS = 'get_pokemons';
export const GET_POKEMONS_ID = 'get_pokemons_id';
export const GET_PAGES = 'get_pages';
export const SET_CURRENT = 'set_current'


export const get_pokemons = () => async (dispatch) =>{
 let info = await axios.get('http://localhost:3001/pokemons')
   return dispatch({type:GET_POKEMONS, payload:info.data});
}

export const get_pokemons_id = (id) => async (dispatch) =>{
   let info = await axios.get(`http://localhost:3001/pokemons/${id}`)
   return dispatch({type:GET_POKEMONS_ID, payload:info.data})
}


export const get_pages = () =>{
 return{type:GET_PAGES}

}


export const set_current = (index) =>{
return{type:SET_CURRENT, payload:index}
}


