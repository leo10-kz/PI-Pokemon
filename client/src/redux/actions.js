import axios from 'axios';

export const GET_POKEMONS = 'get_pokemons';
export const GET_POKEMONS_ID = 'get_pokemons_id';
export const GET_POKEMONS_NAME = 'get_pokemons_name'
export const GET_PAGES = 'get_pages';
export const SET_CURRENT = 'set_current';
export const ORDER_NAME = 'order_name';
export const ORDER_FUERZA = 'order_fuerza'; 
export const ORDER_TYPE = 'order_type'
export const GET_TYPES = 'get_types'

export const get_pokemons = () => async (dispatch) =>{
 let info = await axios.get('http://localhost:3001/pokemons')
   return dispatch({type:GET_POKEMONS, payload:info.data});
}

export const get_pokemons_id = (id) => async (dispatch) =>{
   let info = await axios.get(`http://localhost:3001/pokemons/${id}`)
   return dispatch({type:GET_POKEMONS_ID, payload:info.data})
}

export const get_types = () => async (dispatch) =>{
  let info = await axios.get('http://localhost:3001/types');
  return dispatch({type:GET_TYPES, payload:info.data})
}

export const get_pages = () =>{
 return{type:GET_PAGES};

}

export const set_current = (index) =>{
return{type:SET_CURRENT, payload:index};
}


export const order_name = (valor) =>{
   return {type:ORDER_NAME, payload:valor};
}

export const order_fuerza = (valor) =>{
   return {type:ORDER_FUERZA, payload:valor};
}

export const order_type = (arg) =>{
   return {type:ORDER_TYPE, payload:arg}
}

export const get_pokemons_name = (name) => async(dispatch) =>{
   let { data } = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
   return dispatch({type:GET_POKEMONS_NAME, payload:data})
}