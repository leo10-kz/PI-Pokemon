const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  
 let pokebd = await Pokemon.findAll({
    attributes: ["id", "name", "fuerza"],
    include: {
      model: Type,
     attributes: ["name"],
     through: { attributes: [] },
    },
  }); 
  let arrDb = []
  for (let i = 0; i < pokebd.length; i++) {
      arrDb.push({
        id:pokebd[i].id,
        name: pokebd[i].name,
        //image: pokebd.sprites.other.dream_world.front_default,
        types: pokebd[i].types.map((t) => t.name),
        fuerza: pokebd[i].fuerza,
      })
    
  }
   
   
 let pokeA = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40%22"
  );
  let datos =  pokeA.data.results;
  let arr =[];
  for (let i = 0; i < datos.length; i++) {
    let p = await axios.get(datos[i].url)
    arr.push({
      id: p.data.id,
      name: p.data.name,
      image: p.data.sprites.other.dream_world.front_default,
      types: p.data.types.map((t) => t.type.name),
      fuerza: p.data.stats[1].base_stat,
    })
  }
  let datosPoke = [...arrDb,...arr]
  if(name){
    res.json(datosPoke.filter(po =>po.name === name))
     
  }else{
       res.json(datosPoke)
  } 
   
});

router.post("/", async (req, res) => {
  const { name, vida, fuerza, defenza, velocidad, altura, peso, types } =
    req.body;
  const pokedex = await Pokemon.create({
    name: name,
    vida: +vida,
    fuerza: +fuerza,
    defenza: +defenza,
    velocidad: +velocidad,
    altura: +altura,
    peso: +peso
  });
  await pokedex.addType(types);
  res.status(200).json(pokedex);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id.length > 5) {
      const pokeBdId = await Pokemon.findByPk(id);
      res.status(200).json(pokeBdId);
    } else {
      const pokeId = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      let pokeIdInfo = {
        id: pokeId.data.id,
        name: pokeId.data.name,
        image: pokeId.data.sprites.other.dream_world.front_default,
        types: pokeId.data.types.map((t) => t.type.name),
        vida: pokeId.data.stats[0].base_stat,
        fuerza: pokeId.data.stats[1].base_stat,
        defenza: pokeId.data.stats[2].base_stat,
        velocidad: pokeId.data.stats[5].base_stat,
        altura: pokeId.data.height,
        peso: pokeId.data.weight,
      };
      return res.status(200).json(pokeIdInfo);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
