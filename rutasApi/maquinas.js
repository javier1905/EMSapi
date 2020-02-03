const {Router} = require('express');
require('../conexiones/sqlServer')
const {Request} = require('mssql')

const router = Router();

router.get('/', (req,res)=>{

const consulta = new Request();

consulta.query('select * from cliente',(err,dato)=>{ 
  !err ? res.json(dato.recordsets) : res.status(403).send(err.originalError.info.message)})
})

module.exports = router;