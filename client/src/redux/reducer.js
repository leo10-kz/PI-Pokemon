import { GET_POKEMONS, GET_POKEMONS_ID,GET_PAGES,SET_CURRENT } from "./actions";


const intialState = {
   pokemons: [],
   pokemonId:{},
   pages:[],
   current:0
}

const rootReducer = (state = intialState, action) =>{

switch (action.type) {
    case GET_POKEMONS:
        return{
            ...state,
            pokemons:action.payload
        }
    case GET_POKEMONS_ID:
        return{
            ...state,
            pokemonId:action.payload
        }    
    case GET_PAGES:
        let numPages = Math.ceil(state.pokemons.length / 12);
        let newPages =[];
        for (let i = 0; i < numPages; i++) {
            newPages.push(state.pokemons.slice(i*12,(i+1) * 12))
        }
       //0=                                     0     12 pag1
       //1=                                     12    24 pag2  
       //2=                                     24    36 pag3     
       //3=                                     36    48 pag4
       return{
           ...state,
           pages:newPages
       }  
       case SET_CURRENT:
           return{
               ...state,
               current:action.payload
           }                 
    default:
        return state;
}


}

export default rootReducer;