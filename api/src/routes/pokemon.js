const { Router } = require("express");
const axios = require("axios");
const { Pokemon, Type } = require("../db");
const router = Router();

/* router.get("/", async (req, res, next) => {
  const { name } = req.query;
  
 let pokebd = await Pokemon.findAll({
    attributes: ["id", "name", "fuerza"],
    include: {
      model: Type,
     attributes: ["name"],
     through: { attributes: [] },
    },
  })
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
    //res.json(datosPoke.filter(po =>po.name === name))
    const pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let datos = {
      id: pokeName.data.id,
      name: pokeName.data.name,
      image: pokeName.data.sprites.other.dream_world.front_default,
      types: pokeName.data.types.map((t) => t.type.name),
      fuerza: pokeName.data.stats[1].base_stat,
    }
     if (datos) {
       return res.status(200).send([datos]);
     }else{
       const pokeNamedb = pokebd.filter(po => po.name === name );
       return pokeNamedb.length ? res.status(200).send([pokeNamedb]) : res.status(400).send('Pokemon not found');
     }
     
  }else{
       res.json(datosPoke)
  } 
   
}); */


router.get('/', async (req,res,next)=>{
 const { name } = req.query;

 if (name) {
   try {
     const pokeDb = await Pokemon.findOne({
       where:{name : name},
       include:Type
     })
     if (!pokeDb) {
       const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
       const datos = {
        id: pokeApi.data.id,
        name: pokeApi.data.name,
        image: pokeApi.data.sprites.other.dream_world.front_default,
        types: pokeApi.data.types.map((t) => t.type.name),
        fuerza: pokeApi.data.stats[1].base_stat,
       }
      return res.status(200).send(datos)
     }
     const pokeYa = {
       id:pokeDb.id,
       name:pokeDb.name,
       image:pokeDb.image,
       types: pokeDb.types.map((t) => t.name),
       fuerza: pokeDb.fuerza,
     }
     return res.status(200).send(pokeYa);
     
   } catch (error) {
    return res.status(400).send('No se encontro el  pokemon: '+ error)
   }

  }else{

   try {
    const pokeInfo = await Pokemon.findAll({include:Type});
    const pokemonInfo = pokeInfo.map(p =>{
      return{
      id: p.id,
      name: p.name,
      image: p.image,
      types: p.types.map((t) => t.name),
      fuerza: p.fuerza,
      }
    }); 
    
    const todoApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${Math.ceil(Math.random()*(300 - 0)+0)}&limit=40%22`);
    let pokeUrl = todoApi.data.results.map(u =>{
      return axios.get(u.url);
    });

    const resultado = await Promise.all(pokeUrl);
    const pokemones = resultado.map(po =>{
     return{
      id: po.data.id,
      name: po.data.name,
      image: po.data.sprites.other.dream_world.front_default,
      types: po.data.types.map((t) => t.type.name),
      fuerza: po.data.stats[1].base_stat,
     }
    });

    const atrapado = [...pokemonInfo, ...pokemones]
   return res.status(200).send(atrapado);
   } catch (error) {
     next(error)
   }
 }

})

router.post("/", async (req, res) => {
  const { name, vida, fuerza, defenza, velocidad, altura, peso, types, image } =
    req.body;
   

    try {
      if (!image) {
        let pokedex = await Pokemon.create({
          name: name.toLowerCase(),
          vida: +vida,
          fuerza: +fuerza,
          defenza: +defenza,
          velocidad: +velocidad,
          altura: +altura,
          peso: +peso,
          image:"https://i.pinimg.com/originals/19/9c/60/199c60ed816a26a988ec57b66c1be828.png"
        });
        await pokedex.addType(types);
      return res.status(200).send('pokemon creado');
      }else{
      let pokedex = await Pokemon.create({
        name: name.toLowerCase(),
        vida: +vida,
        fuerza: +fuerza,
        defenza: +defenza,
        velocidad: +velocidad,
        altura: +altura,
        peso: +peso,
        image:image
      });
      await pokedex.addType(types);
      return res.status(200).send('pokemon creado');
    }
    } catch (error) {
      return res.status(400).send('Su pokemon no fue creado debido:' + error)
    }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id.length > 5) {
      
      const pokeBdId = await Pokemon.findOne(
        {
          where:{id:id},
          include: {
           model: Type,//[{name:bug},{name:algo}] [algo, bug]
           attributes: ["name"],
           through: { attributes: [] }
          }, 
        },
      );
     let obj = {
        id:pokeBdId.id,
        name: pokeBdId.name,
        image: pokeBdId.image,
        types: pokeBdId.types.map((t) => t.name),
        fuerza: pokeBdId.fuerza,
        vida:pokeBdId.vida,
        defenza:pokeBdId.defenza,
        velocidad:pokeBdId.velocidad,
        altura:pokeBdId.altura,
        peso:pokeBdId.peso,
      }
        
      
      res.status(200).json(obj);
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
