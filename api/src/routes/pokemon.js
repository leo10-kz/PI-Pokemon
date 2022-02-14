const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  
    if (name) {
        try {
            let pokeNameBd = await Pokemon.findOne({ where: { nombre: name }, include:Type});
        if(pokeNameBd){
            let pokedb =[{
                id:pokeNameBd.id,
                nombre:pokeNameBd.nombre,
               
            }]
            res.status(200).json(pokedb)
            }else{
            let pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            let poke = [{
            id:pokeName.data.id,
            name:pokeName.data.name,
            image: pokeName.data.sprites.front_default,
            
        }]
         res.status(200).json(poke);
      }
        } catch (error) {
            res.status(400).json({info:'El pokemon que busca no existe'})     
        }

    } else {
      try {
        let pokeApi = await axios.get(
            "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40%22"
          );
          let datos = pokeApi.data.results;
          let psj = [];
          for (let i = 0; i < datos.length; i++) {
            let dato = await axios.get(datos[i].url);
            psj.push({
              id: dato.data.id,
              name: dato.data.name,
              image: dato.data.sprites.front_default,
              tipo: dato.data.types.map((t) => t.type.name),
            });
          }
          let pokemonBd = await Pokemon.findAll({include:Type});
    
          Promise.all([psj, pokemonBd]).then((pokemones) => {
            const [psj, pokemonBd] = pokemones;
            let evolucion = [...psj, ...pokemonBd];
            res.json(evolucion);
          });
      } catch (error) {
          next(error)
      }
    }
  
});

router.post("/", async (req, res) => {
  const { nombre, vida, fuerza, defenza, velocidad, altura, peso } = req.body;
  const pokedex = await Pokemon.create({
    nombre: nombre,
    vida: +vida,
    fuerza: +fuerza,
    defenza: +defenza,
    velocidad: +velocidad,
    altura: +altura,
    peso: +peso,
  });
  res.json(pokedex);
});

router.get("/:id",async (req, res, next) => {
  const{ id } =req.params;
  try {
      if (id.length > 5) {
          const pokeBdId = await Pokemon.findByPk(id)
          res.status(200).json(pokeBdId)
    }else{
    const pokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    let pokeIdInfo ={
        id:pokeId.data.id,
        name:pokeId.data.name,
        image:pokeId.data.sprites.front_default,
        tipos:pokeId.data.types.map((t)=>t.type.name),
        vida:pokeId.data.stats[0].base_stat,
        fuerza:pokeId.data.stats[1].base_stat,
        defenza:pokeId.data.stats[2].base_stat,
        velocidad:pokeId.data.stats[5].base_stat,
        altura:pokeId.data.height,
        peso:pokeId.data.weight
     }
     return res.status(200).json(pokeIdInfo)       
   }
  } catch (error) {
       next(error);   
  }
     
  
  

});

module.exports = router;
