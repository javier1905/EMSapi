const { Router } = require ( 'express' )

const router = Router (  )

router.get ( '/' , async ( req , res ) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ('../conexiones/sqlServer')
    try {
        const conexion = await abrirConexionPOOL ( 'listaAreas' )
        const { Request } = new require ( 'mssql' )
        const myRequires = new Request ( conexion )
        const result = await myRequires.query (
            `select id as idArea , nombre as nombreArea
            from areas
            where estado = 1`
        )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( result.recordset )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )
router.post ( '/insert', async ( req , res ) => {
    const { nombreArea } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar  } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertArea' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreArea' , VarChar , nombreArea )
        const query = `insert into areas ( nombre , estado )
        values
        ( @nombreArea , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Area Insertado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/update', async ( req , res ) => {
    const { idArea , nombreArea  } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateArea' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreArea' , VarChar , nombreArea )
        myRequest.input ( 'idArea' , Int , idArea )
        const query = `update areas
        set
        nombre = @nombreArea
        where id = @idArea`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Area actualizada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/delete', async ( req , res ) => {
    const { idArea } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteArea' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idArea' , Int , idArea )
        const query = `update areas
        set
        estado = 0
        where id = @idArea`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Area eliminada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})

module.exports = router