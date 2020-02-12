const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
    require('../conexiones/sqlServer')
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query('select id as idDefecto, nombre as nombreDefecto from defectos where estado = 1',(err,dato)=>{
        !err ? res.json(dato.recordset[0]) : res.json({mensaje:err.message})
    })
})