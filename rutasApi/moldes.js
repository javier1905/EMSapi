const {Router} = require('express')

const router = Router()

router.get('/',(req,res)=>{
    require('../conexiones/sqlServer')
    const {Request} = require('mssql')
    const consulta = new Request()
    consulta.query('select id as idMolde,id_pieza as idPieza, nombre as nombreMolde from moldes where estado = 1',(err,dato)=>{
        !err ? res.json(dato.recordsets[0]) : res.json({mensaje:err.message})
    })
})
router.get('/:idPieza',(req,res)=>{
    const {idPieza} = req.params
    require('../conexiones/sqlServer')
    const {Request} = require('mssql')
    const consulta = new Request()
    consulta.query('select id as idMolde, nombre as nombreMolde from moldes where estado = 1 and id_pieza = '+idPieza,(err,dato)=>{
        !err ? res.json(dato.recordsets[0]) : res.json({mensaje:err.message})   
    })
})
module.exports = router
