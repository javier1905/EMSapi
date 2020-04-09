const {Router} = require('express')

const router = Router()

router.get('/', async (req,res)=>{
  const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
  await abrirConexion()
  const {Request} = require('mssql')
  const consulta = new Request()
  consulta.query(
    `select m.id as idMaquina , m.nombre as nombreMaquina , m.descripcion as descripcionMaquina ,
    m.id_tipos_maquina as idTipoMaquina , tm.nombre as nombreTipoMaquina , m.id_planta as idPlanta , p.nombre as nombrePlanta
    from maquinas m
    join tipos_maquina tm on m.id_tipos_maquina = tm.id
    join plantas p on m.id_planta = p.id
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
} )
router.post ( '/insert', async ( req , res ) => {
  const { nombreMaquina , descripcionMaquina , idTipoMaquina , idPlanta } = req.body
  const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
  const { Request , VarChar , Int } = require ( 'mssql' )
  try {
    const conexion = await abrirConexionPOOL ( 'insertMaquina' )
    const myRequest = new Request ( conexion )
    myRequest.input ( 'nombreMaquina' , VarChar , nombreMaquina )
    myRequest.input ( 'descripcionMaquina' , VarChar , descripcionMaquina )
    myRequest.input ( 'idTipoMaquina' , Int , idTipoMaquina )
    myRequest.input ( 'idPlanta' , Int , idPlanta )
    const query = `insert into maquinas ( nombre , descripcion , id_tipo_maquina , id_planta , estado )
    values
    ( @nombreMaquina , @descripcionMaquina , @idTipoMaquina , @idPlanta , 1 )`
    const result = await myRequest.query ( query )
    if ( result ) {
      cerrarConexionPOOL (  )
      res.json ( { mensaje : 'Maquina Insertada correctamente' , status : 200 } )
    }
  }
  catch ( e ) {
    cerrarConexionPOOL ( )
    res.json ( { mensaje : e.message , status : 403 } )
  }
})
router.put ( '/update', async ( req , res ) => {
  const { idMaquina , nombreMaquina , descripcionMaquina , idTipoMaquina , idPlanta } = req.body
  const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
  const { Request , VarChar , Int } = require ( 'mssql' )
  try {
    const conexion = await abrirConexionPOOL ( 'updateMaquina' )
    const myRequest = new Request ( conexion )
    myRequest.input ( 'nombreMaquina' , VarChar , nombreMaquina )
    myRequest.input ( 'descripcionMaquina' , VarChar , descripcionMaquina )
    myRequest.input ( 'idTipoMaquina' , Int , idTipoMaquina )
    myRequest.input ( 'idPlanta' , Int , idPlanta )
    myRequest.input ( 'idMaquina' , Int , idMaquina )
    const query = `update maquinas
    set
    nombre = @nombreMaquina ,
    descripcion = @descripcionMaquina ,
    id_tipos_maquina = @idTipoMaquina ,
    id_planta = @idPlanta
    where id = @idMaquina`
    const result = await myRequest.query ( query )
    if ( result ) {
      cerrarConexionPOOL (  )
      res.json ( { mensaje : 'Maquina actualizada correctamente' , status : 200 } )
    }
  }
  catch ( e ) {
    cerrarConexionPOOL ( )
    res.json ( { mensaje : e.message , status : 403 } )
  }
} )
router.put ( '/delete', async ( req , res ) => {
  const { idMaquina } = req.body
  const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
  const { Request , Int } = require ( 'mssql' )
  try {
    const conexion = await abrirConexionPOOL ( 'deleteMaquina' )
    const myRequest = new Request ( conexion )
    myRequest.input ( 'idMaquina' , Int , idMaquina )
    const query = `update maquinas
    set
    estado = 0
    where id = @idMaquina`
    const result = await myRequest.query ( query )
    if ( result ) {
      cerrarConexionPOOL (  )
      res.json ( { mensaje : 'Maquina eliminada correctamente' , status : 200 } )
    }
  }
  catch ( e ) {
    cerrarConexionPOOL ( )
    res.json ( { mensaje : e.message , status : 403 } )
  }
})

module.exports = router