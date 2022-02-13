const { Router } = require('express');
const axios = require('axios')
const { Pokemon, Type } = require('../db')
const router = Router();


router.get('/', async (req, res,next) =>{

 try {
    let pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=40%22')
    let datos = pokeApi.data.results;
     let psj = []
    for(let  i = 0; i < datos.length; i++){
       let dato = await axios.get(datos[i].url);
       psj.push({
           id:dato.data.id,
           name:dato.data.name,
           image:dato.data.sprites.front_default,
           tipo:dato.data.types.map((t) => t.type.name)
       });
   } 
   let pokemonBd = await Pokemon.findAll({
       include:Type
   })
   
   Promise.all([psj, pokemonBd])
   .then(pokemones =>{
     const[psj, pokemonBd] = pokemones;
     let evolucion = [...psj, ...pokemonBd]
     res.json(evolucion);
   });
 } catch (error) {
     next(error);
 }
 
})



router.post('/',async (req, res) =>{
    let{nombre,vida, fuerza,defenza,velocidad,altura,peso} = req.body
    const pokedex = await Pokemon.create({
            nombre:nombre,
            vida:+vida,
            fuerza:+fuerza,
            defenza:+defenza,
            velocidad:+velocidad,
            altura:+altura,
            peso:+peso 
    });
    res.json(pokedex);

})


router.get('/:id', (req, res) =>{

})




module.exports = router;
