const express = require('express')
const router = express.Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = new require('mssql')
    const consulta = new Request()
    consulta.query(
        `select p.id as idPieza, p.nombre as nombrePieza , p.id_cliente as idCliente , c.nombre as nombreCliente ,
        p.id_tipos_material as idTipoMaterial , tm.nombre as nombreTipoMaterial
        from piezas p
        join clientes c on p.id_cliente = c.id
        join tipos_material tm on p.id_tipos_material = tm.id
        where p.estado = 1`,
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
router.post ( '/insert' , async ( req, res) => {
    const { nombrePieza , idCliente , idTipoMaterial } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertPieza' )
        const { Request , Int , VarChar } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombrePieza' , VarChar , nombrePieza )
        myRequest.input ( 'idCliente' , Int , idCliente )
        myRequest.input ( 'idTipoMaterial' , Int , idTipoMaterial )
        const query = `insert into piezas ( nombre , id_cliente , id_tipos_material , estado )
        values ( @nombrePieza , @idCliente , @idTipoMaterial , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Pieza insertada correctamente' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )
router.put ( '/update' , async ( req, res) => {
    const { idPieza , nombrePieza , idCliente , idTipoMaterial } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'updatePieza' )
        const { Request , Int , VarChar } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idPieza' , Int , idPieza )
        myRequest.input ( 'nombrePieza' , VarChar , nombrePieza )
        myRequest.input ( 'idCliente' , Int , idCliente )
        myRequest.input ( 'idTipoMaterial' , Int , idTipoMaterial )
        const query = `update piezas
        set
        nombre = @nombrePieza ,
        id_cliente = @idCliente ,
        id_tipos_material = @idTipoMaterial
        where id = @idPieza`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Pieza actualizada correctamente' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )
router.put ( '/delete' , async ( req, res) => {
    const { idPieza } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'deletePieza' )
        const { Request , Int  } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idPieza' , Int , idPieza )
        const query = `update piezas
        set
        estado = 0
        where id = @idPieza`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Pieza eliminada correctamente' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )

module.exports = router