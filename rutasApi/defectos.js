const {Router} = require('express')

const router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query('select d.id as idDefecto, d.nombre as nombreDefecto, d.id_operacion as idOperacion,o.nombre as nombreOperacion from defectos d join operaciones o on d.id_operacion=o.id where d.estado = 1',(err,dato)=>{
        if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
    })
})

router.post ( '/insert', async ( req , res ) => {
    const { nombreDefecto , idOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertDefecto' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreDefecto' , VarChar , nombreDefecto )
        myRequest.input ( 'idOperacion' , Int , idOperacion )
        const query = `insert into defectos ( nombre , id_operacion , estado )
        values
        ( @nombreDefecto , @idOperacion , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Defecto Insertado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/update', async ( req , res ) => {
    const { idDefecto , nombreDefecto , idOperacion } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateDefecto' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreDefecto' , VarChar , nombreDefecto )
        myRequest.input ( 'idOperacion' , Int , idOperacion )
        myRequest.input ( 'idDefecto' , Int , idDefecto )
        const query = `update defectos
        set
        nombre = @nombreDefecto ,
        id_operacion = @idOperacion
        where id = @idDefecto`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Defecto actualizado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/delete', async ( req , res ) => {
    const { idDefecto } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteDefecto' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idDefecto' , Int , idDefecto )
        const query = `update defectos
        set
        estado = 0
        where id = @idDefecto`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Defecto eliminado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})

module.exports = router