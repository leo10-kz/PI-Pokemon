const { default: axios } = require('axios');
const { Router } = require('express');
const { Type } = require('../db')
const router = Router();



router.get('/', async (req, res, next) =>{
    
    try {
     const types = await axios.get('https://pokeapi.co/api/v2/type')
     let tipoPokemon  = types.data.results;
     
     for( t of tipoPokemon) {
        const existe = await Type.findOne({where: { name: t.name }})
        if(existe) return res.json(await Type.findAll())
        await Type.create({ name: t.name})
    }

    res.json(await Type.findAll());

 } catch (error) {
     next(error);
 }
})

module.exports = router;
