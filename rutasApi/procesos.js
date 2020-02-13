const {Router} = require('express')
router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select id as idTipoProceso, nombre as nombreTipoProceso
        from tipos_proceso
        where estado = 1`,
        (err,dato)=>{
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
})
router.post('/xmaquinapiezatipo',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {idMaquina,idPieza,idTipoProceso} = req.body
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select pro.id as idProceso, pro.descripcion as descripcionProceso
        from procesos pro
        where pro.estado = 1
        and pro.id_pieza = ${idPieza}
        and pro.id_maquina = ${idMaquina}
        and pro.id_tipos_proceso = ${idTipoProceso}`,
        (err,dato)=>{
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
})
module.exports = router