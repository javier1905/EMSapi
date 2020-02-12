const express = require('express')
const router = express.Router()

router.get('/',async (req,res)=>{
    require('../conexiones/sqlServer')
    const {Request} = new require('mssql')
    const consulta = new Request()
    await consulta.query('select id as idPieza, nombre as nombrePieza from piezas where estado = 1',(err,dato)=>{
        !err ? res.json(dato.recordsets[0]) : res.json({mensaje:err.message})
    })
})
module.exports = router