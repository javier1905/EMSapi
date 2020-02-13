const {Router} = require('express')

const router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query('select id as idDefecto, nombre as nombreDefecto from defectos where estado = 1',(err,dato)=>{
        if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    })
})
module.exports = router