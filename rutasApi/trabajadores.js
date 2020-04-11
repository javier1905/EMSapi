const {Router} = require('express')

const router = Router (  )

router.get ( '/' , async (req,res) => {
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    const {Request} =  require('mssql')
    await abrirConexion()
    var consulta = new Request()
    consulta.query(
        `select t.id as idTrabajador, t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador,
        t.f_nacimiento as nacimientoTrabajador, t.f_ingreso as ingresoTrabajador,
        t.id_puesto as idPuesto, p.nombre as nombrePuesto
        from trabajadores t
        join puestos p on t.id_puesto=p.id
        where t.estado = 1`,
        ( err , dato ) => {
            if(!err){res.json(dato.recordset);cerrarConexion()}
            else { res.json({mensaje:err.message});cerrarConexion()}
        }
    )
} )
router.post ( '/insert' , async ( req , res ) => {
    const { nombreTrabajador , apellidoTrabajador , nacimientoTrabajador , ingresoTrabajador , idPuesto } = req.body
    const Moment = require  ( 'moment' )
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertTrabajador' )
        const { Request , Int , Date , VarChar } = require ('mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreTrabajador' , VarChar , nombreTrabajador )
        myRequest.input ( 'apellidoTrabajador' , VarChar , apellidoTrabajador )
        myRequest.input ( 'nacimientoTrabajador' , Date ,  nacimientoTrabajador  )
        myRequest.input ( 'ingresoTrabajador' , Date ,  ingresoTrabajador  )
        myRequest.input ( 'idPuesto' , Int , idPuesto )
        const query = `set dateformat dmy ; insert into trabajadores ( nombre , apellido , f_nacimiento , f_ingreso , id_puesto , estado )
        values
        ( @nombreTrabajador , @apellidoTrabajador , @nacimientoTrabajador , @ingresoTrabajador , @idPuesto , 1 )`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Trabajador insertado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

router.put ( '/update' , async ( req , res ) => {
    const { idTrabajador , nombreTrabajador , apellidoTrabajador , nacimientoTrabajador , ingresoTrabajador , idPuesto } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'updateTrabajador' )
        const { Request , Int , Date , VarChar } = require ('mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'nombreTrabajador' , VarChar , nombreTrabajador )
        myRequest.input ( 'apellidoTrabajador' , VarChar , apellidoTrabajador )
        myRequest.input ( 'nacimientoTrabajador' , Date , nacimientoTrabajador )
        myRequest.input ( 'ingresoTrabajador' , Date ,  ingresoTrabajador )
        myRequest.input ( 'idPuesto' , Int , idPuesto )
        myRequest.input ( 'idTrabajador' , Int , idTrabajador )
        const query = `update trabajadores
                                    set
                                    nombre = @nombreTrabajador ,
                                    apellido = @apellidoTrabajador ,
                                    f_nacimiento = @nacimientoTrabajador ,
                                    f_ingreso = @ingresoTrabajador ,
                                    id_puesto = @idPuesto
                                    where id = @idTrabajador`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Trabajador actualizado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )
router.put ( '/delete' , async ( req , res ) =>{
    const { idTrabajador } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'deleteTrabajador' )
        const { Request , Int } = require ('mssql' )
        const myRequest = new Request ( conexion )
        myRequest.input ( 'idTrabajador' , Int , idTrabajador )
        const query = `update trabajadores
                                    set
                                    estado = 0
                                    where id = @idTrabajador`
        const result = await myRequest.query ( query )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : 'Trabajador eliminado correctamente' , status : 200 } )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message , status : 403 } )
    }
} )

module.exports = router
