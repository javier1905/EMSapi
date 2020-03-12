const {Router} = require('express')

const router = Router()

const convierteHora = ( hora ) => {
    var HorInicionO = new Date(`2020-02-15T${hora}:00`)
    HorInicionO.setHours( HorInicionO.getHours() - 3 )
    return HorInicionO
}

router.post( '/listado', async ( req , res ) => {

    const {
                fechaDesdeProduccion , fechaHastaProduccion ,
                fechaDesdeFundicion , fechaHastaFundicon , idMaquina , idPieza , idMolde ,idTipoProceso , idTipoMaquina
    } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    const conexionAbierta = await abrirConexionPOOL()
    const { Transaction } = require('mssql')
    const transaccion = new Transaction(conexionAbierta)
    const { Request } = require('mssql')
    transaccion.begin( async e=>{

        if( e ) {  res.json({ mensaje: e.message })  }
        const sqlConsulta = `set dateformat dmy ;
        select pl.id as idPlanilla, pl.fe_carga as fechaCarga, pl.fe_produccion as fechaProduccion, pl.fe_fundicion as fechaFundicion, 
        pl.hora_inicio as horaInicio , pl.hora_fin as horaFin,maq.nombre as nombreMaquina , pie.nombre as nombrePieza , 
        mol.nombre, tp.nombre as nombreTipoProceso , pl.id_molde as idMolde , pl.id_proceso as idProceso
        from planillas_produccion pl
        join moldes mol on pl.id_molde = mol.id
        join procesos p on pl.id_proceso = p.id
        join piezas pie on p.id_pieza = pie.id
        join maquinas maq on p.id_maquina = maq.id
        join tipos_proceso tp on p.id_tipos_proceso = tp.id
        where pl.estado = 1
        and pl.fe_fundicion between '${ fechaDesdeFundicion }' and '${ fechaHastaFundicon }'
        and pl.fe_produccion between '${ fechaDesdeProduccion }' and '${ fechaHastaProduccion }'
        and ( ${ idMaquina } is null  or p.id_maquina =  ${ idMaquina })
        and ( ${ idPieza } is null  or p.id_pieza =  ${ idPieza })
        and ( ${ idMolde } is null  or pl.id_molde =  ${ idMolde })
        and ( ${ idTipoProceso } is null  or p.id_tipos_proceso =  ${ idTipoProceso })
        and ( ${ idTipoMaquina } is null  or maq.id_tipos_maquina =  ${ idTipoMaquina })`
        const consultaPlanilla = new Request( transaccion )
        const consultaOperariosXplanilla = new Request( transaccion )
        const consultaRechazos = new Request( transaccion )
        const consultaZonas = new Request( transaccion )
        const consultaPM = new Request( transaccion )

        var vecPlanillaProduccion
        var vecTrabajadores
        var vecRechazos
        var vecZonas
        var vecPM
        
        try{
            var resultPlanillaProduccion = await consultaPlanilla.query( sqlConsulta )
            if(Array.isArray(resultPlanillaProduccion.recordset)){
                vecPlanillaProduccion = resultPlanillaProduccion.recordset
                var listaIdPlanillasProduc = ''
                vecPlanillaProduccion.forEach((pla,indexPlanilla) => {
                    if( indexPlanilla === (resultPlanillaProduccion.recordset.length - 1)){ listaIdPlanillasProduc += `${parseInt(pla.idPlanilla)} ` }
                    else{ listaIdPlanillasProduc += `${parseInt(pla.idPlanilla)} ,` }
                })
                var sqlConsultaOperariosXplanilla = `select txp.id as idTrabajadorXplanilla , t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador, tur.descripcion  as turnoTrabajador ,
                txp.hora_inicio as horaInicio , txp.hora_fin as horaFin,  txp.pza_producidas as piezasProducidas , 
                txp.calorias as calorias , txp.id_planilla as idPlanilla , txp.id_trabajador as idTrabajador , txp.id_turno as idTurno
                from trabajador_x_planilla txp
                join trabajadores t on txp.id_trabajador = t.id
                join turnos tur on txp.id_turno = tur.id
                where txp.estado = 1
                and txp.id_planilla in ( ${ listaIdPlanillasProduc } )  ;`

                var sqlConsultaPM = ` select pmxp.id as idParadaMaquinaXplanilla , pm.id as idParadaMaquina , pm.nombre as nombreParadaMaquina , 
                pmxp.hora_incio as horaInicioParadaMaquina , pmxp.hora_fin as horaFinParadaMaquina , pmxp.id_planilla as idPlanilla
                from paradas_maquinas_x_planilla pmxp
                join paradas_maquina pm on pmxp.id_paradas_maquina = pm.id
                where pmxp.estado = 1
                and pmxp.id_planilla in ( ${ listaIdPlanillasProduc } ) ;`
                const trabajadoresXplanilla = await  consultaOperariosXplanilla.query( sqlConsultaOperariosXplanilla + sqlConsultaPM )
                if(trabajadoresXplanilla.recordsets[0] && trabajadoresXplanilla.recordsets[1]){
                    vecTrabajadores = trabajadoresXplanilla.recordsets[0]
                    vecPM = trabajadoresXplanilla.recordsets[1]
                    var listaIdTrabajadores = ''
                    vecTrabajadores.forEach(( t , i ) => {
                        if( i === ( vecTrabajadores.length - 1)){ listaIdTrabajadores += `${parseInt(t.idTrabajadorXplanilla)} ` }
                        else{ listaIdTrabajadores += `${parseInt(t.idTrabajadorXplanilla)} ,` }
                    })
                    var sqlConsultaRechazos = ` select rxtyp.id as idRechazoXtrabajadorYplanilla , d.nombre as nombreRechazo , 
                    rxtyp.tipo as tipoRechazo , rxtyp.cantidad as cantidadRechazos , rxtyp.id_trabajador_x_planilla as idTrabajadorXplanilla , rxtyp.id_defecto as idDefecto
                    from rechazos_x_trabajador_y_planilla rxtyp
                    join defectos d on rxtyp.id_defecto = d.id
                    where rxtyp.estado = 1
                    and rxtyp.id_trabajador_x_planilla in ( ${ listaIdTrabajadores } )`
                    const rechazos = await consultaRechazos.query( sqlConsultaRechazos )
                    if( rechazos.recordset ){
                        vecRechazos = rechazos.recordset
                        var listaIdRechazos = ''
                        vecRechazos.forEach( ( re ,  indexRechazo ) => {
                            if( indexRechazo === ( vecRechazos.length - 1)){ listaIdRechazos += `${parseInt( re.idRechazoXtrabajadorYplanilla )} ` }
                            else{ listaIdRechazos += `${parseInt(re.idRechazoXtrabajadorYplanilla)} ,` }
                        } )
                        const sqlConsultaZonas = ` select zxryp.id as idZona , zxryp.letra as letraZona ,
                        zxryp.numero as numeroZona , zxryp.cantidad as cantidadZona ,
                        zxryp.id_rechazos_x_trabajador_y_planilla as idRechazosXtrabajadorYplanilla
                        from zonas_x_rechazo_x_planilla zxryp
                        where zxryp.estado = 1
                        and zxryp.id_rechazos_x_trabajador_y_planilla in ( ${ listaIdRechazos } )`
                        var listaZonas = await consultaZonas.query( sqlConsultaZonas )
                        if( listaZonas.recordset ){
                            vecZonas = listaZonas.recordset
                            vecPlanillaProduccion.forEach( (pl , indexPlanilla ) => {
                                pl.vecTrabajadores = []
                                pl.vecParadasMaquina = []
                                vecPM.forEach( pm => {
                                    if( parseInt( pm.idPlanilla ) === parseInt( pl.idPlanilla ) ) {
                                        var paradaMaq = {
                                            idParadaMaquinaXplanilla: pm.idParadaMaquinaXplanilla ,
                                            idParadaMaquina : pm.idParadaMaquina ,
                                            nombreParadaMaquina : pm.nombreParadaMaquina ,
                                            horaInicioParadaMaquina : pm.horaInicioParadaMaquina ,
                                            horaFinParadaMaquina : pm.horaFinParadaMaquina
                                        }
                                        pl.vecParadasMaquina.push( paradaMaq )
                                    }
                                })
                                vecTrabajadores.forEach( (tr , indexTrabajador) => {
                                    if ( parseInt( pl.idPlanilla ) === parseInt ( tr.idPlanilla ) ) {
                                        var traXpla = {
                                            idTrabajadorXplanilla : tr.idTrabajadorXplanilla,
                                            idTrabajador : tr.idTrabajador ,
                                            idTurno : tr.idTurno ,
                                            nombreTrabajador : tr.nombreTrabajador,
                                            apellidoTrabajador : tr.apellidoTrabajador,
                                            turnoTrabajador : tr.turnoTrabajador,
                                            horaInicio : tr.horaInicio,
                                            horaFin : tr.horaFin,
                                            piezasProducidas : tr.piezasProducidas,
                                            calorias : tr.calorias,
                                            vecRechazos : [ ]
                                        }
                                        vecRechazos.forEach( re => {
                                            if( parseInt( traXpla.idTrabajadorXplanilla ) === parseInt ( re.idTrabajadorXplanilla ) ) {
                                                var rech = {
                                                    idRechazoXtrabajadorYplanilla : re.idRechazoXtrabajadorYplanilla,
                                                    idDefecto : re.idDefecto ,
                                                    nombreRechazo : re.nombreRechazo ,
                                                    tipoRechazo : re.tipoRechazo ,
                                                    cantidadRechazos : re.cantidadRechazos ,
                                                    vecZonas: []
                                                }
                                                    vecZonas.forEach( zon => {
                                                        if( parseInt( zon.idRechazosXtrabajadorYplanilla ) === parseInt( rech.idRechazoXtrabajadorYplanilla  )){
                                                            var zonaXrecha = {
                                                                idZona : zon.idZona ,
                                                                letraZona : zon.letraZona ,
                                                                numeroZona : zon.numeroZona ,
                                                                cantidadZona : zon.cantidadZona
                                                            }
                                                            rech.vecZonas.push( zonaXrecha )
                                                        }
                                                    })
                                                traXpla.vecRechazos.push( rech )
                                            }
                                        })
                                        pl.vecTrabajadores.push( traXpla )
                                    }
                                })
                            })
                           
                            transaccion.commit()
                            cerrarConexionPOOL()
                            res.json( vecPlanillaProduccion )
                        }
                    }
                }
            }
        }
        catch(e){
            transaccion.rollback()
            cerrarConexionPOOL()
            res.json({ mensaje: e.message })
        }
    })
})

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
                    ps_insercionPlanillaProduccion.input( 'id_molde',mssql.Int )
                    await ps_insercionPlanillaProduccion.prepare(
                        `set dateformat dmy ;
                        declare @idProce int ;
                        set @idProce = (select top 1 id from procesos p  where p.id_maquina = ${ idMaquina } and p.id_pieza = ${ idPieza } and id_tipos_proceso = ${ idTipoProceso } and estado = 1 ) ;
                        insert into planillas_produccion
                        ( fe_carga , fe_produccion , fe_fundicion , hora_inicio , hora_fin , id_proceso , id_molde  , estado )
                        values
                        ( GETDATE() , @fe_produccion , @fe_fundicion , @hora_inicio , @hora_fin , @idProce , @id_molde , 1 )`
                    )
                    const datosPlanillaProduccion = {
                        fe_produccion: fechaProduccion,
                        fe_fundicion: fechaFundicion,
                        hora_inicio: process.env.NODE_ENV === 'development'? convierteHora( HoraInicioProduccion ) : new Date(`2020-02-15T${HoraInicioProduccion}:00`),
                        hora_fin: process.env.NODE_ENV === 'development'? convierteHora( HoraFinProduccion ) : new Date(`2020-02-15T${HoraFinProduccion}:00`),
                        id_turno: parseInt( idTurno ),
                        id_molde: parseInt( idMolde )
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
                                hora_inicio: process.env.NODE_ENV === 'development'? convierteHora( operario.horaInicio ) : new Date(`2020-02-15T${operario.horaInicio}:00`),
                                hora_fin: process.env.NODE_ENV === 'development'? convierteHora( operario.horaFin ) : new Date(`2020-02-15T${operario.horaFin}:00`),
                                id_trabajador: parseInt( operario.idOperario),
                                id_planilla: parseInt( idPlanillaProduccion.recordset[0].idPlanilla ),
                                id_turno: parseInt( operario.idTurno ),
                                vecRechazos: operario.vecRechazo
                            }
                            vecOperariosXplanilla.push( op )
                        })
                        asincrono.eachSeries(vecOperariosXplanilla,( trabajador, callback ) => {
                            const  ps_insercionTrabajadoresXPlanilla = new Request( transaccion )
                            ps_insercionTrabajadoresXPlanilla.input( 'calorias', mssql.Int, trabajador.calorias )
                            ps_insercionTrabajadoresXPlanilla.input( 'pza_producidas', mssql.Int, trabajador.pza_producidas )
                            ps_insercionTrabajadoresXPlanilla.input( 'id_turno', mssql.Int, trabajador.id_turno )
                            ps_insercionTrabajadoresXPlanilla.input( 'hora_inicio', mssql.Time, trabajador.hora_inicio )
                            ps_insercionTrabajadoresXPlanilla.input( 'hora_fin', mssql.Time, trabajador.hora_fin )
                            ps_insercionTrabajadoresXPlanilla.input( 'id_trabajador', mssql.Int, trabajador.id_trabajador )
                            ps_insercionTrabajadoresXPlanilla.input( 'id_planilla', mssql.Int, trabajador.id_planilla )
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
                            (calorias , pza_producidas, id_turno , hora_inicio , hora_fin , id_trabajador , id_planilla , estado)
                            values
                            (@calorias , @pza_producidas , @id_turno , @hora_inicio , @hora_fin , @id_trabajador , @id_planilla , 1) ;
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
                                            hora_inicio: process.env.NODE_ENV === 'development'? convierteHora( pm.desdeParadaMaquina ) : new Date(`2020-02-15T${pm.desdeParadaMaquina}:00`),
                                            hora_fin: process.env.NODE_ENV === 'development'? convierteHora( pm.hastaParadaMaquina ) : new Date(`2020-02-15T${pm.hastaParadaMaquina}:00`),
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