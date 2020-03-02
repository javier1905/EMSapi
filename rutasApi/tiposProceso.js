const { Router } = require('express')
const router = Router()

router.get('/', async ( req, res ) => {
    const { abrirConexion,cerrarConexion } = require('../conexiones/sqlServer')
    await abrirConexion()
    const { Request } = require('mssql')
    const consulta = new Request()
    consulta.query('select id as idTipoProceso, nombre as nombreTipoProceso from tipos_proceso where estado = 1 ' , (e,result)=>{
        if(e){
            cerrarConexion()
            res.json({mensaje:e.message})
        }
        else{
            cerrarConexion()
            res.json(result.recordset)
        }
    })
})
router.post('/', async ( req, res ) => {
    const { idPieza, idMaquina } = req.body
    const { abrirConexion,cerrarConexion } = require('../conexiones/sqlServer')
    await abrirConexion()
    const { Request } = require('mssql')
    const consulta = new Request()
    consulta.query(`select tp.id as idTipoProceso, tp.nombre as nombreTipoProceso from tipos_proceso tp
    join procesos p on tp.id = p.id_tipos_proceso where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and tp.estado = 1`, (e,result)=>{
        if(e){
            cerrarConexion()
            res.json({mensaje:e.message})
        }
        else{
            cerrarConexion()
            res.json(result.recordset)
        }
    })
})


module.exports = router