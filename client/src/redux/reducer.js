import {
  GET_POKEMONS,
  GET_POKEMONS_ID,
  GET_PAGES,
  SET_CURRENT,
  GET_TYPES,
  FILTER_TYPE,
  GET_POKEMONS_NAME,
  ORDER_CREATE_BY,
  ADD_POKEMONS,
  PAGE_NAME,
  ORDERING,
} from "./actions";

const intialState = {
  pokemons: [],
  pokemonId: {},
  pokemonsOrder: [],
  pokeTypes: [],
  tipoName: "",
  pages: [],
  current: 0,
  
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pokemonsOrder: action.payload,
        
      };

    case GET_POKEMONS_ID:
      return {
        ...state,
        pokemonId: action.payload,
      };

    case GET_POKEMONS_NAME:
      return {
        ...state,
        pokemonsOrder: [action.payload],
        current: 0,
      };

    case PAGE_NAME:
      let all = [...state.pokemons];
      return {
        ...state,
        pokemonsOrder: all,
      };

    case GET_TYPES:
      return {
        ...state,
        pokeTypes: action.payload,
      };

    case FILTER_TYPE:
      let tiposPo = [...state.pokemons];
      //let filtro = tiposPo.filter((poke) =>poke.types.includes(action.payload));
      let filtro = action.payload === 'all' ? tiposPo : tiposPo.filter(p => p.types.includes(action.payload))
      return {
        ...state,
        tipoName: action.payload,
        pokemonsOrder: filtro.length ? filtro : 0, 
        current:0
      };

    
    case ORDER_CREATE_BY:
    let diferent = [...state.pokemons]
    let filter = diferent.filter((po) => action.payload === "creado"? po.id.length > 5: typeof po.id === "number" );

      return {
        ...state,
        pokemonsOrder: action.payload === 'all' ? diferent : filter.length ? filter : 0,
        current:0
      };

    case ORDERING:
        let orderPokemons;

        if(action.payload === 'ascendente'){
          orderPokemons = state.pokemonsOrder.sort((a,b) =>{
              if (a.name > b.name) {
                  return 1;
              }
              if (b.name > a.name) {
                  return -1;
              }
              return 0
          })
        }

        if (action.payload === 'descendente') {
            orderPokemons = state.pokemonsOrder.sort((a,b) =>{
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
        }

        if (action.payload === 'maximo') {
            orderPokemons =  state.pokemonsOrder.sort((a,b) =>{
                if (a.fuerza > b.fuerza) {
                    return -1;
                }
                if (b.fuerza > a.fuerza) {
                    return 1;
                }
                return 0;
            })
        }

        if (action.payload === 'minimo') {
            orderPokemons = state.pokemonsOrder.sort((a,b) =>{
                if (a.fuerza > b.fuerza) {
                    return 1;
                }
                if (b.fuerza > a.fuerza) {
                    return -1;
                }
                return 0;
            })
        }

        if (action.payload === 'all') {
          let pokeMio = state.pokemonsOrder.filter(p => p.id.length > 5 );
          let pokeApi = state.pokemons.filter(p => typeof p.id === 'number');
          let orderDefault = pokeApi.sort((a,b) =>{
             if (a.id > b.id) {
               return 1;
             }
             if(b.id > a.id){
               return -1;
             }
             return 0;
          })
            orderPokemons = [...pokeMio,  ...orderDefault]
        }
       
     return{
        ...state,
        pokemonsOrder:orderPokemons
     }

    case ADD_POKEMONS:
      return {
        ...state,
       // pokemonsOrder: [...state.pokemonsOrder, action.payload],
      };

    case GET_PAGES:
      let numPages = Math.ceil(state.pokemonsOrder.length / 12);
      let newPages = [];
      for (let i = 0; i < numPages; i++) {
        newPages.push(state.pokemonsOrder.slice(i * 12, (i + 1) * 12));
      }
      //0=                                     0     12 pag1
      //1=                                     12    24 pag2
      //2=                                     24    36 pag3
      //3=                                     36    48 pag4
      return {
        ...state,
        pages: newPages,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
