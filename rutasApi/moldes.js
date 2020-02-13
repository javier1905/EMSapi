const {Router} = require('express')

const router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    const consulta = new Request()
    consulta.query('select id as idMolde,id_pieza as idPieza, nombre as nombreMolde from moldes where estado = 1',(err,dato)=>{
        if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    })
})
router.get('/xpieza/:idPieza', async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {idPieza} = req.params
    const {Request} = require('mssql')
    const consulta = new Request()
    consulta.query('select id as idMolde, nombre as nombreMolde from moldes where estado = 1 and id_pieza = '+idPieza,(err,dato)=>{
        if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    })
})
module.exports = router
