const { Router } = require ( 'express' )
const router = Router (  )

router.get (  '/list' , async ( req , res ) => {
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'listaTiposMaquina' )
        const { Request } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        const query = `select tm.id as idTipoMaquina , tm.nombre as nombreTipoMaquina , tm.id_operacion as idOperacion ,
        o.nombre as nombreOperacion
        from tipos_maquina tm
        join operaciones o on tm.id_operacion = o.id
        where tm.estado = 1`
        const response = await myRequest.query ( query )
        if ( response ) {
            cerrarConexionPOOL (  )
            res.json ( response.recordset )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )
router.post ( '/insert', async ( req , res ) => {
    const { nombreTipoMaquina  , idOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertTipoMaquina' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreTipoMaquina' , VarChar , nombreTipoMaquina )
        myRequest.input ( 'idOperacion' , Int , idOperacion )
        const query = `insert into tipos_maquina ( nombre , id_operacion , estado )
        values
        ( @nombreTipoMaquina , @idOperacion , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Tipo de maquina Insertada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/update', async ( req , res ) => {
    const { idTipoMaquina , nombreTipoMaquina , idOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateTipoMaquina' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreTipoMaquina' , VarChar , nombreTipoMaquina )
        myRequest.input ( 'descripcionMaquina' , VarChar , descripcionMaquina )
        myRequest.input ( 'idOperacion' , Int , idOperacion )
        myRequest.input ( 'idTipoMaquina' , Int , idTipoMaquina )
        const query = `update tipos_maquina
        set
        nombre = @nombreTipoMaquina ,
        id_operacion = @idOperacion
        where id = @idTipoMaquina`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Tipo de maquina actualizada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
    cerrarConexionPOOL ( )
    res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/delete', async ( req , res ) => {
    const { idTipoMaquina } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteTipoMaquina' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idTipoMaquina' , Int , idTipoMaquina )
        const query = `update tipos_maquina
        set
        estado = 0
        where id = @idTipoMaquina`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Tipo de maquina eliminada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

module.exports = router