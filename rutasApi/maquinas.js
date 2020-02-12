const {Router} = require('express')
require('../conexiones/sqlServer')
const {Request} = require('mssql')

const router = Router()

router.get('/', (req,res)=>{

const consulta = new Request()

consulta.query('select m.id as idMaquina, m.nombre as nombreMaquina, m.descripcion as descripcionMaquina from maquinas m where m.estado = 1',(err,dato)=>{
  !err ? res.json(dato.recordsets[0]) : res.status(403).send(err.originalError.info.message)})
})

module.exports = router