const  axios  = require('axios');
const { Router } = require('express');
const { Type } = require('../db')
const router = Router();



router.get('/', async (req, res, next) =>{
    
    try {
  
    let tipos = await Type.findAll();
    if (tipos.length === 0) {
        let tiposApi = await axios.get('https://pokeapi.co/api/v2/type');

        tiposApi = tiposApi.data.results.map(t => {return{name:t.name}});
        
        tipos = await Type.bulkCreate(tiposApi);
    }
   return res.json(tipos)

 } catch (error) {
     next(error);
 }
})

/* router.post('/create', async (req, res, next) =>{
 try {
const { type } = req.body;
let nuevo = await Types.create({ name: type});
res.status(200).send(nuevo)
    
} catch (error) {
   next(error);    
}

Types.create({ name: type})
.then((nuevo) => {
    res.status(200).send(nuevo)
})
.catch((error) => {
    next(error);
} )

}) */

module.exports = router;
