const {Router} = require('express')
const router = Router()

router.get('/',async (req,res) => {
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    var {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select t.id as idTurno, t.descripcion as descripcionTurno,t.hs_inicio as hsInicioTurno ,t.hs_fin as hsFinTurno  
        from turnos t
        where estado = 1`,
        (err,dato) => {
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
})

module.exports = router