const {Router} = require('express')
const router = Router()

router.get ( '/',async ( req , res ) => {
    const { abrirConexion , cerrarConexion } = require ('../conexiones/sqlServer')
    await abrirConexion (  )
    var {Request} = require ('mssql')
    var consulta = new Request (  )
    consulta.query(
        `select id as idOperacion, nombre as nombreOperacion
        from operaciones where estado = 1`,
        (err,dato) => {
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
} )
router.post ( 'insert' , async ( req , res ) => {
    const { nombreOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertOperacion' )
        const { Request , VarChar } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreOperacion' , VarChar , nombreOperacion )
        const query = `insert into operaciones ( nombre , estado )
        values
        ( @nombreOperacion , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Operacion insertada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/update', async ( req , res ) => {
    const { nombreOperacion , idOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateOperacion' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreOperacion' , VarChar , nombreOperacion )
        myRequest.input ( 'idOperacion' , Int , idOperacion )
        const query = `update operaciones
        set
        nombre = @nombreOperacion
        where id = @idOperacion`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Operacion actualizada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
    cerrarConexionPOOL ( )
    res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/delete', async ( req , res ) => {
    const { idOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteOperacion' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idOperacion' , Int , idOperacion )
        const query = `update operaciones
        set
        estado = 0
        where id = @idOperacion`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Operacion eliminada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

module.exports = router