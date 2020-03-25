const { Router } = require ( 'express' )

const router = Router (  )

router.get ( '/list' , async ( req , res ) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const conexion = await abrirConexionPOOL ( 'consultaClientes' )
    const { Request } = require ( 'mssql' )
    const myRequest = new Request ( conexion )
    const query = ` select c.id as idCliente , c.nombre as nombreCliente , c.razon_social as razonSocialCliente
    from clientes c
    where c.estado = 1`
    try {
        const result = await myRequest.query ( query )
        cerrarConexionPOOL (  )
        res.json ( result.recordset )
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )

router.put ( '/delete' , async ( req , res ) => {
        const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
        const conexion2 = await abrirConexionPOOL ( 'deleteCliente' )
        const { Request , Int } = require ( 'mssql' )
        const myRequest2 = new Request ( conexion2  )
        myRequest2.input ( 'idCliente' , Int , parseInt ( req.body.idCliente ) )
        const query = `update clientes set estado = 0 where id = @idCliente`
        try {
            const result = await myRequest2.query ( query )
            if ( result ) {
                cerrarConexionPOOL (  )
                res.json ( { mensaje : 'Cliente Eliminado Correctamente' } )
            }
        }
        catch ( e ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : e.message } )
        }
} )
router.put ( '/update' , async (  req , res ) => {
    const { nombreCliente ,  razonSocialCliente , idCliente } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const conexion = await abrirConexionPOOL ( 'updateCliente' )
    const { Request , Int , VarChar } = require ( 'mssql' )
    const myRequest = new Request ( conexion )
    myRequest.input ( 'nombreCliente' , VarChar ,  nombreCliente )
    myRequest.input ( 'razonSocialCliente' , VarChar ,  razonSocialCliente )
    myRequest.input ( 'idCliente' , Int ,  idCliente )
    const query = ` update clientes
    set
    nombre = @nombreCliente ,
    razon_social = @razonSocialCliente
    where id = @idCliente`
    try {
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Cliente Actualizado Correctamente ' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
})
router.post ( '/insert' ,  async ( req , res ) => {
    const { nombreCliente ,  razonSocialCliente  } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar } = require ( 'mssql' )
    const conexion = await abrirConexionPOOL ( 'insertCliente' )
    const myRequest = new Request (  conexion )
    myRequest.input ( 'nombreCliente' , VarChar , nombreCliente )
    myRequest.input ( 'razonSocialCliente' , VarChar , razonSocialCliente )
    const query = `insert into clientes ( nombre , razon_social , estado  ) values  ( @nombreCliente , @razonSocialCliente , 1 )`
    try {
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Cliente Insertado correctamente' } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )

module.exports = router