const {Router} = require('express');
require('../conexiones/sqlServer')
const {Request} = require('mssql')

const router = Router();

router.get('/', (req,res)=>{

const consulta = new Request();

consulta.query('select * from maquinas m inner join tipos_maquina t on m.id_tipos_maquina=t.id',(err,dato)=>{
  !err ? res.json(dato.recordsets) : res.status(403).send(err.originalError.info.message)})
})

module.exports = router;