const {Router} = require('express')

const router = Router()


router.get('/',async (req,res)=>{
    var {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    var {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select pm.id as idParadaMaquina, pm.nombre as nombreParadaMaquina, pm.tipo as tipoParadaMaquina, pm.id_area as idArea, a.nombre as nombreArea
        from paradas_maquina pm
		join areas a on pm.id_area=a.id
        where pm.estado = 1`,
        (e,dato)=>{
            if(!e){cerrarConexion()
                res.json(dato.recordset)
            }
            else{cerrarConexion()
                res.json({mensaje:e.message})
            }
        }
    )
})

router.post ( '/insert', async ( req , res ) => {
    const { nombreParadaMaquina , tipoParadaMaquina , idArea } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int , Bit } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertParadaMaquina' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreParadaMaquina' , VarChar , nombreParadaMaquina )
        myRequest.input ( 'tipoParadaMaquina' , Bit , tipoParadaMaquina )
        myRequest.input ( 'idArea' , Int , idArea )
        const query = `insert into paradas_maquina ( nombre , tipo , id_area , estado )
        values
        ( @nombreParadaMaquina , @tipoParadaMaquina , @idArea , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Parada de Maquina Insertado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/update', async ( req , res ) => {
    const { idParadaMaquina , nombreParadaMaquina , tipoParadaMaquina , idArea } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , VarChar , Int , Bit } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateParadaMaquina' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreParadaMaquina' , VarChar , nombreParadaMaquina )
        myRequest.input ( 'tipoParadaMaquina' , Bit , tipoParadaMaquina )
        myRequest.input ( 'idArea' , Int , idArea )
        myRequest.input ( 'idParadaMaquina' , Int , idParadaMaquina )
        const query = `update paradas_maquina
        set
        nombre = @nombreParadaMaquina ,
        tipo = @tipoParadaMaquina ,
        id_area = @idArea
        where id = @idParadaMaquina`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Parada de maquina actualizada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})
router.put ( '/delete', async ( req , res ) => {
    const { idParadaMaquina } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { Request , Int } = require ( 'mssql' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteParadaMaquina' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idParadaMaquina' , Int , idParadaMaquina )
        const query = `update paradas_maquina
        set
        estado = 0
        where id = @idParadaMaquina`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Paradas de Maquina eliminada correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL ( )
        res.json ( { mensaje : e.message , status : 403 } )
    }
})

module.exports = router