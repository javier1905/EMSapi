const {Router} = require('express')

const router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    const consulta = new Request()
    const query = `select m.id as idMolde , m.nombre as nombreMolde , m.id_pieza as idPieza , p.nombre as nombrePieza
    from moldes m
    join piezas p on m.id_pieza = p.id
    where m.estado = 1`
    consulta.query( query ,(err,dato)=>{
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


router.post ( '/insert', async ( req , res ) => {
    const { nombreMolde , idPieza } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertMolde' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreMolde' , VarChar , nombreMolde )
        myRequest.input ( 'idPieza' , Int , idPieza )
        const query = `insert into moldes ( nombre , id_pieza , estado )
        values
        ( @nombreMolde , @idPieza , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Molde Insertado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/update', async ( req , res ) => {
    const { idMolde , nombreMolde , idPieza } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateMolde' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreMolde' , VarChar , nombreMolde )
        myRequest.input ( 'idPieza' , Int , idPieza )
        myRequest.input ( 'idMolde' , Int , idMolde )
        const query = `update moldes
        set
        nombre = @nombreMolde ,
        id_pieza = @idPieza
        where id = @idMolde`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Molde actualizado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/delete', async ( req , res ) => {
    const { idMolde } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteMolde' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idMolde' , Int , idMolde )
        const query = `update moldes
        set
        estado = 0
        where id = @idMolde`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Molde eliminado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})

module.exports = router
