const {Router} = require('express')

const router = Router()

const convierteHora = ( hora ) => { 
    var HorInicionO = new Date(`2020-02-15T${hora}:00`)
    HorInicionO.setHours( HorInicionO.getHours() - 3 )
    return HorInicionO
}
router.post( '/', async ( req , res ) => {
    var { fechaProduccion, fechaFundicion, idTurno, HoraInicioProduccion,
        HoraFinProduccion,  idOperacion, idMaquina,  idPieza,  idMolde, idTipoProceso,
        vecOperarios, vecParadasMaquinaSeleccionada
    } = req.body
    var  idPlanillaProduccion
    const {abrirConexionPOOL, cerrarConexionPOOL} = require( '../conexiones/sqlServer' )
    const conexionAbierta = await abrirConexionPOOL( 'consultasa' )
    const { Transaction } =  require( 'mssql' )
    const mssql  = require( 'mssql' )
    const { Request,PreparedStatement } = require( 'mssql' )
    const transaccion =  await new Transaction( conexionAbierta )
    const ps_insercionPlanillaProduccion = await new PreparedStatement( transaccion )
    const consultaIDplanillaProduccion = await new Request( transaccion )
    const asincrono = require( 'async' )
    transaccion.begin(async function ( err )  {
        if(!err){
            const metodoTransaccion =  async () => {
                try{
                    ps_insercionPlanillaProduccion.input( 'fe_produccion',mssql.Date )
                    ps_insercionPlanillaProduccion.input( 'fe_fundicion',mssql.Date )
                    ps_insercionPlanillaProduccion.input( 'hora_inicio',mssql.Time )
                    ps_insercionPlanillaProduccion.input( 'hora_fin',mssql.Time )
                    ps_insercionPlanillaProduccion.input( 'id_turno',mssql.Int )
                    await ps_insercionPlanillaProduccion.prepare(
                        `set dateformat dmy ;
                        declare @idProce int ;
                        set @idProce = (select top 1 id from procesos p  where p.id_maquina = ${ idMaquina } and p.id_pieza = ${ idPieza } and id_tipos_proceso = ${ idTipoProceso } and estado = 1 ) ;
                        insert into planillas_produccion
                        ( fe_carga , fe_produccion , fe_fundicion , hora_inicio , hora_fin , id_proceso , id_turno , estado )
                        values
                        ( GETDATE() , @fe_produccion , @fe_fundicion , @hora_inicio , @hora_fin ,  1 , @id_turno , 1 )`
                    )
                    const datosPlanillaProduccion = {
                        fe_produccion: fechaProduccion,
                        fe_fundicion: fechaFundicion,
                        hora_inicio: convierteHora( HoraInicioProduccion ),
                        hora_fin: convierteHora( HoraFinProduccion ) ,
                        id_turno: parseInt( idTurno )
                    }
                    var resultC1
                    resultC1 = await ps_insercionPlanillaProduccion.execute( datosPlanillaProduccion )
                    const unprepared = await ps_insercionPlanillaProduccion.unprepare()
                    if( unprepared ) {
                        transaccion.rollback()
                        cerrarConexionPOOL()
                        res.json( { mensaje:'Error InsercionPlanilla'.yellow } )
                    }
                    if(resultC1){
                        idPlanillaProduccion = await consultaIDplanillaProduccion.query( `select max( id ) as idPlanilla from planillas_produccion` )
                    }
                    if(idPlanillaProduccion.recordset[0].idPlanilla && ! isNaN( idPlanillaProduccion.recordset[0].idPlanilla )){
                        var vecOperariosXplanilla = []
                        vecOperarios.forEach( operario => {
                            var op = {
                                calorias: parseInt( operario.calorias ),
                                pza_producidas: parseInt( operario.produccion ),
                                hora_inicio: convierteHora( operario.horaInicio ),
                                hora_fin: convierteHora( operario.horaFin ),
                                id_trabajador: parseInt( operario.idOperario),
                                id_planilla: parseInt( idPlanillaProduccion.recordset[0].idPlanilla ),
                                vecRechazos: operario.vecRechazo
                            }
                            vecOperariosXplanilla.push( op )
                        })
                        asincrono.eachSeries(vecOperariosXplanilla,( trabajador, callback ) => {
                            const  ps_insercionTrabajadoresXPlanilla = new Request(transaccion)
                            ps_insercionTrabajadoresXPlanilla.input( 'calorias',mssql.Int, trabajador.calorias )
                            ps_insercionTrabajadoresXPlanilla.input( 'pza_producidas',mssql.Int, trabajador.pza_producidas )
                            ps_insercionTrabajadoresXPlanilla.input( 'hora_inicio',mssql.Time, trabajador.hora_inicio )
                            ps_insercionTrabajadoresXPlanilla.input( 'hora_fin',mssql.Time, trabajador.hora_fin )
                            ps_insercionTrabajadoresXPlanilla.input( 'id_trabajador',mssql.Int, trabajador.id_trabajador )
                            ps_insercionTrabajadoresXPlanilla.input( 'id_planilla',mssql.Int, trabajador.id_planilla )
                            var vecRechazosTrabajadorXplanilla = [  ]
                            trabajador.vecRechazos.forEach( re => {
                                var rechazoZ = {
                                    cantidad: parseInt( re.cantidadRechazo ),
                                    tipo: re.tipo ? 1 : 0,
                                    id_defecto: parseInt( re.idRechazo ),
                                    vecZonas: re.vecZonas
                                }
                                vecRechazosTrabajadorXplanilla.push( rechazoZ )
                            })
                            var consulta = `insert into trabajador_x_planilla
                            (calorias , pza_producidas , hora_inicio , hora_fin , id_trabajador , id_planilla , estado)
                            values
                            (@calorias , @pza_producidas , @hora_inicio , @hora_fin , @id_trabajador , @id_planilla , 1) ;
                            declare @id_trabajador_x_planilla int ;
                            declare @id_rechazos_x_trabajador_y_planilla int ;
                            set @id_trabajador_x_planilla = ( select max( id ) as idTrabajadorXplanilla from trabajador_x_planilla ) ; `
                            vecRechazosTrabajadorXplanilla.forEach( rechazo => {
                                consulta += `insert into rechazos_x_trabajador_y_planilla
                                (cantidad , tipo , id_defecto , id_trabajador_x_planilla , estado)
                                values
                                ( ${ rechazo.cantidad }, ${ rechazo.tipo } , ${ rechazo.id_defecto } , @id_trabajador_x_planilla ,1) ;
                                set @id_rechazos_x_trabajador_y_planilla = (select max(id) from rechazos_x_trabajador_y_planilla) ; `
                                var vecZonasXrechazo = []
                                rechazo.vecZonas.forEach( zona => {
                                    var zoo = {
                                        cantidad: parseInt( zona.cantidad ),
                                        letra: zona.letra,
                                        numero: parseInt( zona.numero )
                                    }
                                    vecZonasXrechazo.push( zoo )
                                })
                                vecZonasXrechazo.forEach( zona => {
                                    consulta += ` insert into zonas_x_rechazo_x_planilla
                                    (cantidad , letra , numero , id_rechazos_x_trabajador_y_planilla , estado )
                                    values
                                    ( ${ zona.cantidad } , '${ zona.letra }' , ${ zona.numero } , @id_rechazos_x_trabajador_y_planilla , 1 ) ; `
                                })
                            })
                            ps_insercionTrabajadoresXPlanilla.query( consulta,(err,result)=>{ if( err ) {  callback( err ) } else { callback() } } )
                        },( err )=>{
                            if( err ){
                                transaccion.rollback()
                                cerrarConexionPOOL()
                                res.json( { mensaje:err.message } )
                            }
                            else{
                                var vecParadasDeMaquina = [ ]
                                vecParadasMaquinaSeleccionada.forEach( pm => {
                                        var paraMAC = {
                                            hora_inicio: convierteHora( pm.desdeParadaMaquina ),
                                            hora_fin: convierteHora( pm.hastaParadaMaquina ),
                                            id_paradas_maquina: parseInt( pm.idParadaMaquina ),
                                            id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                                        }
                                        vecParadasDeMaquina.push(paraMAC)
                                })
                                asincrono.eachSeries(vecParadasDeMaquina,(PM,callbackPM) => {
                                    const consultaInsercionParadasDeMaquina =  new Request( transaccion )
                                    consultaInsercionParadasDeMaquina.input( 'hora_incio',mssql.Time,PM.hora_inicio )
                                    consultaInsercionParadasDeMaquina.input( 'hora_fin',mssql.Time,PM.hora_fin )
                                    consultaInsercionParadasDeMaquina.input( 'id_paradas_maquina',mssql.Int,PM.id_paradas_maquina )
                                    consultaInsercionParadasDeMaquina.input( 'id_planilla',mssql.Int,PM.id_planilla )
                                    consultaInsercionParadasDeMaquina.query(
                                        `insert into paradas_maquinas_x_planilla
                                        ( hora_incio , hora_fin , id_paradas_maquina , id_planilla , estado )
                                        values
                                        ( @hora_incio , @hora_fin , @id_paradas_maquina , @id_planilla , 1 )`,( ER,resultPM ) => {
                                        if( ER ) { callbackPM( ER ) } else { callbackPM(  ) }
                                    })
                                },erroR => {
                                    if ( erroR ) {
                                        transaccion.rollback()
                                        cerrarConexionPOOL()
                                        res.json( { mensaje:erroR.message } )
                                    }
                                    else {
                                        transaccion.commit()
                                        cerrarConexionPOOL()
                                        res.setHeader( 'Content-Type', 'text/event-stream' )
                                        res.json( { mensaje:'Transaccion exitosa' } )
                                    }
                                })
                            }
                        }) // ! FIN FOR EACH
                    } //! FIN  IIF
                } //! FIN DEL TRY
                catch(e){
                    transaccion.rollback()
                    cerrarConexionPOOL()
                    res.json( { mensaje: e.message , mensaje2: 'Error catch FINAL' } )
                }
            }
            metodoTransaccion()
        }
        else{
            console.log( 'err commit' )
        }
    })
} )
module.exports = router