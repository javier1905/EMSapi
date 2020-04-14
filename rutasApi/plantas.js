const { Router } = require ( 'express' )
const router = Router (  )

router.get (  '/list' , async ( req , res ) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'listaPlantas' )
        const { Request } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        const query = `select p.id as idPlanta , p.nombre as nombrePlanta , p.barrio as barrioPlanta ,
        p.cp as codigoPostalPlanta , p.calle as callePlanta , p.altura_calle as alturaCallePlanta
        from plantas p
        where p.estado = 1`
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
    const { nombrePlanta , barrioPlanta , codigoPostalPlanta , callePlanta , alturaCallePlanta } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertPlanta' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombrePlanta' , VarChar , nombrePlanta )
        myRequest.input ( 'barrioPlanta' , VarChar , barrioPlanta )
        myRequest.input ( 'codigoPostalPlanta' , Int , codigoPostalPlanta )
        myRequest.input ( 'callePlanta' , VarChar , callePlanta )
        myRequest.input ( 'alturaCallePlanta' , Int , alturaCallePlanta )
        const query = `insert into plantas ( nombre , barrio , cp , calle , altura_calle , estado )
        values
        ( @nombrePlanta , @barrioPlanta , @codigoPostalPlanta , @callePlanta , @alturaCallePlanta , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Planta Insertada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/update', async ( req , res ) => {
    const { idPlanta , nombrePlanta , barrioPlanta , codigoPostalPlanta , callePlanta , alturaCallePlanta } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updatePlanta' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombrePlanta' , VarChar , nombrePlanta )
        myRequest.input ( 'barrioPlanta' , VarChar , barrioPlanta )
        myRequest.input ( 'codigoPostalPlanta' , Int , codigoPostalPlanta )
        myRequest.input ( 'callePlanta' , VarChar , callePlanta )
        myRequest.input ( 'alturaCallePlanta' , Int , alturaCallePlanta )
        myRequest.input ( 'idPlanta' , Int , idPlanta )
        const query = `update plantas
        set
        nombre = @nombrePlanta ,
        barrio = @barrioPlanta ,
        cp = @codigoPostalPlanta ,
        calle = @callePlanta ,
        altura_calle = @alturaCallePlanta
        where id = @idPlanta`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Planta actualizada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
    cerrarConexionPOOL ( )
    res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/delete', async ( req , res ) => {
    const { idPlanta } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deletePlanta' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idPlanta' , Int , idPlanta )
        const query = `update plantas
        set
        estado = 0
        where id = @idPlanta`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Planta eliminada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

module.exports = router