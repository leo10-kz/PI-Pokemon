import axios from 'axios';

export const GET_POKEMONS = 'get_pokemons';
export const GET_POKEMONS_ID = 'get_pokemons_id';
export const GET_POKEMONS_NAME = 'get_pokemons_name'
export const GET_PAGES = 'get_pages';
export const SET_CURRENT = 'set_current'; 
export const FILTER_TYPE = 'filter_type'
export const GET_TYPES = 'get_types'
export const ORDER_CREATE_BY = 'order_create_by'; 
export const ADD_POKEMONS = 'add_pokemons';
export const PAGE_NAME = 'page_name'
export const ORDERING = 'ordering'

export const get_pokemons = () => async (dispatch) =>{

   try {
      let info = await axios.get('http://localhost:3001/pokemons')
        return dispatch({type:GET_POKEMONS, payload:info.data}); 
   } catch (error) {
      console.log(error);
   }
}

export const get_pokemons_id = (id) => async (dispatch) =>{

   try {
      let info = await axios.get(`http://localhost:3001/pokemons/${id}`)
      return dispatch({type:GET_POKEMONS_ID, payload:info.data})
      
   } catch (error) {
      console.log(error);
   }

}

export const get_types = () => async (dispatch) =>{

  try {
     let info = await axios.get('http://localhost:3001/types');
     return dispatch({type:GET_TYPES, payload:info.data})
     
  } catch (error) {
     console.log(error);
  }

}

export const get_pages = () =>{
 return{type:GET_PAGES};

}

export const set_current = (index) =>{
return{type:SET_CURRENT, payload:index};
}

export const ordering = (valor) =>{
   return({type:ORDERING, payload: valor})
}


export const filter_type = (arg) =>{
   return {type:FILTER_TYPE, payload:arg}
}

export const get_pokemons_name = (name) => async(dispatch) =>{

  try {
     let { data } = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
     return dispatch({type:GET_POKEMONS_NAME, payload:data})
     
  } catch (error) {
     console.log(error);
  }

}

export const order_create_by = (arg) =>{
   return ({type:ORDER_CREATE_BY, payload: arg})
}

export const add_pokemons = (pokemon) =>async (dispatch) => {

   try {
      const { name,vida, fuerza, defenza, velocidad, altura, peso, types } = pokemon;
      const { data } = await axios.post('http://localhost:3001/pokemons',{ name,vida, fuerza, defenza, velocidad, altura, peso, types })
      return dispatch({type:ADD_POKEMONS, payload:data})
      
   } catch (error) {
      console.log(error);
   }
}
export const page_name = (arg) =>{
   return({type:PAGE_NAME, payload:arg})
}


/* nombre: "",
vida:0,
fuerza:0,
defenza:0,
velocidad:0,
altura:0,
peso:0,
tipos:[], */