import React, {  useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Created from "../assets/9da071b861b25e48cb28e270332c0234.png";
import { add_pokemons, get_pages, get_pokemons } from "../redux/actions";
import { Contenedor, Columna,  Div, Linkhome  } from "../css-componentes/Created";




const AddPokemon = () => {
  const tipos = useSelector((state) => state.pokeTypes);
  const pokemons = useSelector((state) => state.pokemonsOrder.map(p => p.name));
  const dispatch = useDispatch();
  
  
 
  const validation = (inputs) => {
   let errors = {};
   let reg = /^[a-zA-Z\s]*$/; 

    if (!inputs.name) {
      errors.name = "Este campo es obligatorio";
    }
    
     if(pokemons.indexOf(inputs.name) !== -1){
       errors.name = 'Ya existe un Pokemon con este nombre';
     }

     

     if (!reg.test(inputs.name)) {
       errors.name = 'No se  permiten numeros ni caracteres'
     }

     if (inputs.vida < 1 || inputs.vida > 150) {
       errors.vida = 'Sus valores de vida deben ir de 1 a 150'
     }

     if (inputs.fuerza < 1 || inputs.fuerza > 200) {
       errors.fuerza = 'Sus valores de fuerza deben ir de 1 a 200'
     }

     if (inputs.defenza < 1 || inputs.defenza > 200) {
       errors.defenza = 'Sus valores de defenza deben ir de 1 a 200'
     }

     if (inputs.velocidad < 1 || inputs.velocidad > 100) {
       errors.velocidad = 'Sus valores de velocidad deben ir de 1 a 100'
     }

     if (inputs.peso < 1 || inputs.peso > 1500) {
       errors.peso = 'Sus valores de peso debe ir de 1 a 1500'
     }
     
     if (inputs.altura < 1 || inputs.altura > 80) {
       errors.altura = 'Sus valore de altura deben ir de 1 a 80'
     }


      return errors
  };

  const [inputs, setInputs] = useState({
    name: "",
    vida: 0,
    fuerza: 0,
    defenza: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    types: [],
  });


  let [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    setErrors(validation({
      ...inputs,
      [e.target.name]: e.target.value,
    }))
  };

  const handleInputCheck = (e) => {
    if (e.target.checked === true) {
      inputs.types.push(e.target.value);
      setInputs({ ...inputs });
      console.log(e.target.checked);
    } else {
      setInputs({
        ...inputs,
        types: inputs.types.filter((t) => t !== e.target.value),
      });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
   await dispatch(add_pokemons(inputs));
   
   setInputs({
     name: "",
     vida: 0,
     fuerza: 0,
     defenza: 0,
     velocidad: 0,
     altura: 0,
     peso: 0,
     types:[] ,
    }) 
   await dispatch(get_pokemons())
    dispatch(get_pages())
    
  };

  const buttonSubmit = useMemo(() => {
    if(errors.name || inputs.name.length === 0 ) return true;
    return false;
  },[errors, inputs.name])



  return (
    <Div>
      <Linkhome to='/home'><input type="submit" value='volver' /></Linkhome>
      <img src={Created} alt="" />
      <form onSubmit={submit}>
        <Contenedor >
        <Columna  className="col_one">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
        />
         {errors.name && <p>{errors.name}</p>}
        <br />
        <label htmlFor="vida">Vida</label>
        <input
          type="number"
          name="vida"
          value={inputs.vida}
          onChange={handleInputChange}
        />
       {inputs.vida.length &&  errors.vida ? <p>{errors.vida}</p>:null}
        <br />
        <label htmlFor="fuerza">Fuerza</label>
        <input
          type="number"
          name="fuerza"
          value={inputs.fuerza}
          onChange={handleInputChange}
        />
        {inputs.fuerza.length && errors.fuerza ? <p>{errors.fuerza}</p>:null}
        <br />
        <label htmlFor="defenza">Defensa</label>
        <input
          type="number"
          name="defenza"
          value={inputs.defenza}
          onChange={handleInputChange}
        />
        {inputs.defenza.length &&  errors.defenza ? <p>{errors.defenza}</p>:null}
        <br />
        <label htmlFor="velocidad">Velocidad</label>
        <input
          type="number"
          name="velocidad"
          value={inputs.velocidad}
          onChange={handleInputChange}
        />
        {inputs.velocidad.length &&  errors.velocidad ? <p>{errors.velocidad}</p>:null}
        <br />
        <label htmlFor="altura">Altura</label>
        <input
          type="number"
          name="altura"
          value={inputs.altura}
          onChange={handleInputChange}
        />
        {inputs.altura.length &&  errors.altura ? <p>{errors.altura}</p>:null}
        <label htmlFor="peso">Peso</label>
        <input
          type="number"
          name="peso"
          value={inputs.peso}
          onChange={handleInputChange}
        />
        {inputs.peso.length &&  errors.peso ? <p>{errors.peso}</p>:null}
        <br />
        <button type="submit" disabled={buttonSubmit}>Crear</button>
        </Columna> 
        <Columna >
        <div className="col">
        
        {tipos.map((t) => (
          <p>
            {t.name}
            <input
              key={t.id}
              type="checkbox"
              name={t.name}
              value={t.id}
              onChange={(e)=>handleInputCheck(e)}
            />
          </p>
        ))}
         </div>
        </Columna> 
        </Contenedor>
      </form>
    </Div>
  );
};

export default AddPokemon;
