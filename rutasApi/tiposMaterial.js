const { Router } = require ('express')

const router = Router ( )


router.get ( '/list' , async  ( req , res ) => {
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'consultaListaClientes' )
        const { Request } = require ( 'mssql' )
        const myRequest = new Request ( conexion )
        const query = `select id as idTipoMaterial , nombre as nombreTipoMaterial
        from tipos_material
        where estado = 1`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( result.recordset )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
})

router.post ( '/insert' , async ( req , res ) => {
    const { nombreMaterial } = req.body
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'insertTipoMatrial' )
        const { Request , VarChar } = require ( 'mssql')
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreMaterial' , VarChar , nombreMaterial  )
        const query = `insert into tipos_material ( nombre , estado )
        values ( @nombreMaterial , 1 )  `
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Tipo de Material insertado correctamente ' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )
router.put ( '/update' , async ( req , res ) => {
    const { idTipoMaterial  ,  nombreTipoMaterial } = req.body
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'updateTipoMaterial' )
        const { Request , VarChar , Int } = require ( 'mssql')
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreTipoMaterial' , VarChar , nombreTipoMaterial  )
        myRequest.input ( 'idTipoMaterial' , Int , idTipoMaterial  )
        const query = `update tipos_material
        set
        nombre = @nombreTipoMaterial
        where id = @idTipoMaterial`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Tipo de Material actualizado correctamente ' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )
router.put ( '/delete' , async ( req , res ) => {
    const { idTipoMaterial } = req.body
    try {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion = await abrirConexionPOOL ( 'deletTipoMaterial' )
        const { Request , VarChar , Int } = require ( 'mssql')
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idTipoMaterial' , Int , idTipoMaterial  )
        const query = `update tipos_material
        set
        estado = 0
        where id = @idTipoMaterial`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Tipo de Material eliminado  correctamente ' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )

module.exports = router