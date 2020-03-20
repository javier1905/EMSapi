const {Router} = require('express')

const router = Router()

router.get('/', async (req,res)=>{
  const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
  await abrirConexion()
  const {Request} = require('mssql')
  const consulta = new Request()
  consulta.query(
    `select m.id as idMaquina, m.nombre as nombreMaquina, m.descripcion as descripcionMaquina , id_tipos_maquina as idTipoMaquina
    from maquinas m
    where m.estado = 1`,
    (err,dato)=>{
      if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    }
  )
})
router.get('/xoperacion/:idOperacion', async (req,res)=>{
  const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
  const {idOperacion} = req.params
  await abrirConexion()
  const {Request} = require('mssql')
  const consulta = new Request()
  consulta.query(
    `select m.id as idMaquina, m.nombre as nombreMaquina
    from maquinas m
    join tipos_maquina tm on m.id_tipos_maquina = tm.id
    where m.estado = 1 and tm.id_operacion = ${idOperacion}`,
    (err,dato)=>{
      if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    }
  )
})

module.exports = router