import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Created from "../assets/crated.png";
import { add_pokemons, get_pages } from "../redux/actions";

const AddPokemon = () => {
  const tipos = useSelector((state) => state.pokeTypes);
  const dispatch = useDispatch();
 
  const validation = (inputs) => {
   let errors = {};

    if (!inputs.name) {
      errors.name = "Es necesario un nombre";
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
    setErrors(validation(inputs))
  };

  const handleInputCheck = (e) => {
    if (e.target.checked === true) {
      inputs.types.push(e.target.value);
      setInputs({ ...inputs });
    } else {
      setInputs({
        ...inputs,
        tipos: inputs.types.filter((t) => t !== e.target.value),
      });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(add_pokemons(inputs));
    dispatch(get_pages());
  };


  return (
    <div>
      <form onSubmit={submit}>
        <img src={Created} alt="" />

        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleInputChange}
        />
         {errors.name && <p>{errors.name}</p>}
        
        <label htmlFor="vida">Vida:</label>
        <input
          type="number"
          name="vida"
          value={inputs.vida}
          onChange={handleInputChange}
        />
        {errors.vida && <p>{errors.vida}</p> }
        <label htmlFor="fuerza">Fuerza:</label>
        <input
          type="number"
          name="fuerza"
          value={inputs.fuerza}
          onChange={handleInputChange}
        />

        <label htmlFor="defenza">Defenza</label>
        <input
          type="number"
          name="defenza"
          value={inputs.defenza}
          onChange={handleInputChange}
        />
        <label htmlFor="velocidad">Velocidad</label>
        <input
          type="number"
          name="velocidad"
          value={inputs.velocidad}
          onChange={handleInputChange}
        />
        <label htmlFor="altura">Altura</label>
        <input
          type="number"
          name="altura"
          value={inputs.altura}
          onChange={handleInputChange}
        />
        <label htmlFor="peso">Peso</label>
        <input
          type="number"
          name="peso"
          value={inputs.peso}
          onChange={handleInputChange}
        />
        <label htmlFor="tipos">Types:</label>
        {tipos.map((t) => (
          <p>
            {t.name}{" "}
            <input
              key={t.id}
              type="checkbox"
              name={t.name}
              value={t.id}
              onChange={handleInputCheck}
            />
          </p>
        ))}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default AddPokemon;
