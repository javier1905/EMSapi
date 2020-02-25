const {Router} = require('express')

const router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query('select d.id as idDefecto, d.nombre as nombreDefecto, d.id_operacion as idOperacion,o.nombre as nombreOperacion from defectos d join operaciones o on d.id_operacion=o.id where d.estado = 1',(err,dato)=>{
        if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    })
})
module.exports = router