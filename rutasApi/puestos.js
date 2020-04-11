const { Router } = require ( 'express' )

const router = Router (  )

router.get ( '/list' , async ( req , res ) => {
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'listarPuestos' )
        const { Request } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        const query = `select id as idPuesto , nombre as nombrePuesto from puestos where estado = 1`
        const result = await myRequest.query ( query )
        if (  result ) {
            cerrarConexionPOOL (  )
            res.json ( result.recordset )
        }
    }
    catch ( e ) {
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.post ( '/insert' , async ( req , res ) =>{
    const { nombrePuesto } = req.body
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'insertPuesto' )
        const { Request , VarChar } = require ('mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombrePuesto' , VarChar , nombrePuesto )
        const query = `insert into puestos ( nombre , estado )
        values
        ( @nombrePuesto , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Puesto insertado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

router.put ( '/update' , async ( req , res ) =>{
    const { idPuesto , nombrePuesto } = req.body
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'updatePuesto' )
        const { Request , Int , Date , VarChar } = require ('mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombrePuesto' , VarChar , nombrePuesto )
        myRequest.input ( 'idPuesto' , Int , idPuesto )
        const query = `update puestos
                                    set
                                    nombre = @nombrePuesto
                                    where id = @idPuesto`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Puesto actualizado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/delete' , async ( req , res ) =>{
    const { idPuesto } = req.body
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'deletePuesto' )
        const { Request , Int } = require ('mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idPuesto' , Int , idPuesto )
        const query = `update puestos
                                    set
                                    estado = 0
                                    where id = @idPuesto`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Puesto eliminado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

module.exports = router