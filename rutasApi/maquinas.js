const {Router} = require('express');
require('../conexiones/sqlServer')
// const {Request} = require('mssql')

const router = Router();

router.get('/', (req,res)=>{

// const consulta = new Request();

// consulta.query('select id as idMaquina,nombre as nombreMaquina from maquinas where estado=1',(err,dato)=>{
//   !err ? res.json(dato.recordsets) : res.status(403).send(err.originalError.info.message)}) 
})

module.exports = router;