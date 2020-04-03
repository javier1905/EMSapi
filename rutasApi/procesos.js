const {Router} = require('express')
router = Router()

router.get('/',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select id as idTipoProceso, nombre as nombreTipoProceso
        from tipos_proceso
        where estado = 1`,
        (err,dato)=>{
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
})
router.post('/xmaquinapiezatipo',async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    const {idMaquina,idPieza,idTipoProceso} = req.body
    const {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select pro.id as idProceso, pro.descripcion as descripcionProceso
        from procesos pro
        where pro.estado = 1
        and pro.id_pieza = ${idPieza}
        and pro.id_maquina = ${idMaquina}
        and pro.id_tipos_proceso = ${idTipoProceso}`,
        (err,dato)=>{
            if(!err){res.json(dato.recordset); cerrarConexion() } else { res.json({mensaje:err.message}); cerrarConexion() }
        }
    )
})
router.get ('/list' , async ( req , res ) => {
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const conexion = await abrirConexionPOOL ( 'selectProcesos' )
    const { Transaction , Request } = require ( 'mssql' )
    const myTransaction = new Transaction ( conexion )
    myTransaction.begin ( async ( errorTransac ) => {
        if ( errorTransac ) {
            myTransaction.rollback (  )
            cerrarConexionPOOL (  )
            res.json ( { mensaje : errorTransac.message } )
        }
        try {
            var vecProcesos = [  ]
            const myRequest = new Request ( myTransaction )
            const myRequestPiezaXhs = new Request ( myTransaction )
            const query = `select p.id as idProceso , p.descripcion as descipcionProceso , p.id_pieza as idPieza ,
            pie.nombre as nombrePieza , p.id_maquina as idMaquina , maq.nombre as nombreMaquina ,
            p.id_tipos_proceso as idTipoProceso , tp.nombre as nombreTipoProceso
            from procesos p
            join piezas pie on p.id_pieza = pie.id
            join maquinas maq on p.id_maquina = maq.id
            join tipos_proceso tp on p.id_tipos_proceso = tp.id
            where p.estado = 1`
            const response = await myRequest.query ( query )
            if ( response ) {
                vecProcesos = response.recordset
                var idProcesos = ''
                if ( Array.isArray ( vecProcesos )  ) {
                    vecProcesos.forEach ( ( p , i ) => {
                        idProcesos += ` ${p.idProceso} ,`
                    } )
                }
                if (idProcesos === '' ) { idProcesos = null }
                else { idProcesos = idProcesos.trim (  ).substring ( 0 ,  idProcesos.length -2 ) }
                const queryPiezaXhs = `select pxh.id as idPiezasXhs , pxh.cantidad as cantidadPiezasXhs , pxh.fe_desde as desdePiezasXhs ,
                pxh.fe_hasta as hastaPiezasXhs , pxh.id_proceso as idProceso
                from piezas_x_hora pxh
                where pxh.id in (${idProcesos})`
                const resulrpzXhs = await myRequestPiezaXhs.query ( queryPiezaXhs )
                var vecPiezasXhora = [  ]
                if ( resulrpzXhs ) {
                    console.log ( vecPiezasXhora )
                    vecPiezasXhora = resulrpzXhs.recordset
                    vecProcesos.forEach ( ( p , i ) => {
                        p.vecPiezasXhora = [ ]
                        vecPiezasXhora.forEach ( ( pzXhs , index ) => {
                            if ( parseInt ( p.idProceso ) === parseInt ( pzXhs.idProceso ) ) {
                                vecProcesos.vecPiezasXhora.push ( pzXhs )
                            }
                        } )
                    } )
                    myTransaction.commit (  )
                    cerrarConexionPOOL (  )
                    res.json ( vecProcesos )
                }
            }
        }
        catch ( e ) {
            myTransaction.rollback (  )
            cerrarConexionPOOL (  )
            res.json ( { mensaje : e.message } )
        }
    } )
} )

router.post ( '/insert' , async ( req , res ) => {
    const { descripcionProceso , idPieza , idMaquina , idTiposProceso , vecPiezasXhora } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    try {
        const conexion = await abrirConexionPOOL ( 'insertProceso' )
        const  { Transaction , Request ,Date , Int , VarChar } = require ( 'mssql' )
        const myTransaction = new Transaction ( conexion )
        const myRequestProceso = new Request ( myTransaction )
        const asincrono = require ( 'async' )
        myTransaction.begin ( async ( errorTrasactions ) => {
            if ( errorTrasactions ) {
                myTransaction.rollback (  )
                cerrarConexionPOOL (  )
                res.json ( { mensaje : errorTrasactions.message } )
            }
            myRequestProceso.input ( 'descripcionProceso' , VarChar ,  descripcionProceso )
            myRequestProceso.input ( 'idPieza' , Int ,  idPieza )
            myRequestProceso.input ( 'idMaquina' , Int ,  idMaquina )
            myRequestProceso.input ( 'idTiposProceso' , Int ,  idTiposProceso )
            const queryProcesos = `insert into procesos ( descripcion , id_pieza , id_maquina , id_tipos_proceso , estado )
            values
            ( @descripcionProceso , @idPieza , @idMaquina , @idTiposProceso , 1 ) ;
            declare @idProceso int
            set @idProceso = ( select top 1 max ( id ) from procesos )
            select @idProceso as idProceso`
            const responseProcesos = await myRequestProceso.query ( queryProcesos )
            var idProceso
            if ( responseProcesos ) {
                idProceso = responseProcesos.recordsets[0][0].idProceso
                if ( Array.isArray ( vecPiezasXhora ) && vecPiezasXhora.length > 0 ) {
                    asincrono.eachSeries ( vecPiezasXhora , ( piezaXhs , callback ) => {
                        const myRequestPieXhs = new Request ( myTransaction )
                        myRequestPieXhs.input ( 'cantidadPiezasXhs' , Int , piezaXhs.cantidadPiezasXhs )
                        myRequestPieXhs.input ( 'desdePiezasXhs' , Date , piezaXhs.desdePiezasXhs )
                        myRequestPieXhs.input ( 'hastaPiezasXhs' , Date , piezaXhs.hastaPiezasXhs )
                        myRequestPieXhs.input ( 'idProceso' , Int , parseInt ( idProceso ) )
                        const queryPiexhs = `insert into piezas_x_hora ( cantidad , fe_desde , fe_hasta , id_proceso , estado )
                        values ( @cantidadPiezasXhs , @desdePiezasXhs , @hastaPiezasXhs , @idProceso , 1 )`
                        myRequestPieXhs.query ( queryPiexhs , ( error , result ) => {
                            if ( error ) {
                                callback ( error )
                            }
                            else {
                                callback (  )
                            }
                        } )
                    } , ( errorCalback ) => {
                        if ( errorCalback ) {
                            myTransaction.rollback (  )
                            cerrarConexionPOOL ( )
                            res.json ( { mensaje : errorCalback.message } )
                        }
                        else {
                            myTransaction.commit (  )
                            cerrarConexionPOOL (  )
                            res.json ( { mensaje : 'Proceso insertado correctamente' } )
                        }
                    } )
                }
            }
        } )
    }
    catch ( e ) {
        myTransaction.rollback (  )
        cerrarConexionPOOL (  )
        res.json ( { mensaje : e.message } )
    }
} )

module.exports = router