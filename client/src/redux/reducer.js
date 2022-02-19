import { GET_POKEMONS, GET_POKEMONS_ID,GET_PAGES,
    SET_CURRENT, ORDER_NAME, ORDER_FUERZA, GET_TYPES, ORDER_TYPE, GET_POKEMONS_NAME } from "./actions";


const intialState = {
   pokemons: [],
   pokemonId:{},
   pokemonsOrderName:[],
   pokeTypes:[],
   tipoName: "",
   pages:[],
   current:0
}

const rootReducer = (state = intialState, action) =>{

switch (action.type) {
    case GET_POKEMONS:
        return{
            ...state,
            pokemons:action.payload,
            pokemonsOrderName:action.payload,
        }
        case GET_POKEMONS_ID:
            return{
                ...state,
                pokemonId:action.payload
            } 

        case GET_POKEMONS_NAME:
            return{
                ...state,
                pokemonsOrderName:action.payload
            }    
        
        case GET_TYPES:
            return {
                ...state,
                pokeTypes:action.payload
            } 
        case ORDER_TYPE:
         let tiposPo = [...state.pokemons]
         let filtro = tiposPo.filter((poke) => poke.types.includes(action.payload))
         
            return{
                ...state,
                tipoName:action.payload,
                pokemonsOrderName:filtro,
            }       

        case ORDER_NAME:
        let order = [...state.pokemons];
         order.sort((a,b) =>{
            if (a.name < b.name) {
               return action.payload === 'ascendente' ? -1 : 1
            }
            else if (a.name > b.name) {
                return action.payload === 'ascendente' ? 1 : -1
             }
            return 0;
         })       
        
       return{
        ...state,
        pokemonsOrderName: order
       }            
        
       case ORDER_FUERZA:
        let orderFuerza = [...state.pokemons];
         orderFuerza.sort((a,b) =>{
            if (a.fuerza > b.fuerza) {
               return action.payload === 'ascendente' ? -1 : 1
            }
            else if (a.fuerza < b.fuerza) {
                return action.payload === 'ascendente' ? 1 : -1
             }
            return 0;
         })       
        
       return{
        ...state,
        pokemonsOrderName: orderFuerza
       }            

        case GET_PAGES:
               
                let numPages = Math.ceil(state.pokemons.length / 12);
                let newPages =[];
                for (let i = 0; i < numPages; i++) {
                    newPages.push(state.pokemonsOrderName.slice(i*12,(i+1) * 12));
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