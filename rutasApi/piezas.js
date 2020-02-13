const express = require('express')
const router = express.Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = new require('mssql')
    const consulta = new Request()
    consulta.query(
        'select id as idPieza, nombre as nombrePieza from piezas where estado = 1',
        (err,dato)=>{
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
})
router.get('/xmaquina/:idMaquina', async (req,res)=>{ // ! LISTADO DE PIEZAS SEGUN MAQUINA
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {idMaquina} = req.params
    var {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select p.id as idPieza, p.nombre as nombrePieza
        from piezas p
        join procesos pro
        on pro.id_pieza = p.id
        where p.estado = 1 and pro.id_maquina = ${idMaquina}`,
        (err,dato)=>{
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() } 
        }
    )
})
module.exports = router