const {Router} = require('express')

const router = Router()

router.post('/', async (req,res)=>{
    
    var  idPlanillaProduccion
    const {abrirConexionPOOL, cerrarConexionPOOL} = require('../conexiones/sqlServer')
    const conexionAbierta = await abrirConexionPOOL('consultasa')
    const { Transaction } =  require('mssql')
    const mssql  = require('mssql')
    const { Request,PreparedStatement } = require('mssql')
    const transaccion =  await new Transaction( conexionAbierta )
    const ps_insercionPlanillaProduccion = await new PreparedStatement(transaccion)
    const consultaIDplanillaProduccion = await new Request(transaccion)
    const asincrono = require('async')
    transaccion.begin(async function ( err )  {
        if(!err){
            const metodoTransaccion =  async () => {
                try{
                    ps_insercionPlanillaProduccion.input( 'fe_produccion',mssql.Date )
                    ps_insercionPlanillaProduccion.input( 'fe_fundicion',mssql.Date )
                    ps_insercionPlanillaProduccion.input( 'hora_inicio',mssql.Time )
                    ps_insercionPlanillaProduccion.input( 'hora_fin',mssql.Time )
                    ps_insercionPlanillaProduccion.input( 'id_proceso',mssql.Int )
                    ps_insercionPlanillaProduccion.input( 'id_turno',mssql.Int )
                    await ps_insercionPlanillaProduccion.prepare(
                        `set dateformat dmy
                        insert into planillas_produccion
                        ( fe_carga , fe_produccion , fe_fundicion , hora_inicio , hora_fin , id_proceso , id_turno , estado )
                        values
                        ( GETDATE() , @fe_produccion , @fe_fundicion , @hora_inicio , @hora_fin , @id_proceso , @id_turno , 1 )`
                    )
                    const datosPlanillaProduccion = {
                        fe_produccion: new Date('2020-02-15T03:24:00'),
                        fe_fundicion: new Date('2020-02-27T03:24:00'),
                        hora_inicio: new Date('2020-02-15T11:18:00'),
                        hora_fin: new Date('2020-02-15T19:36:00'),
                        id_proceso: 1,
                        id_turno: 2
                    }
                    var resultC1
                    resultC1 = await ps_insercionPlanillaProduccion.execute(datosPlanillaProduccion)
                    const unprepared = await ps_insercionPlanillaProduccion.unprepare()
                    if(unprepared) {
                        transaccion.rollback()
                        cerrarConexionPOOL()
                        res.json({mensaje:'Error InsercionPlanilla'.yellow})
                    }
                    
                    if(resultC1){
                        idPlanillaProduccion = await consultaIDplanillaProduccion.query( `select max( id ) as idPlanilla from planillas_produccion` )
                    }
                    if(idPlanillaProduccion.recordset[0].idPlanilla && ! isNaN( idPlanillaProduccion.recordset[0].idPlanilla )){
                        var vecOperariosXplanilla = [
                            {
                                calorias: 5,
                                pza_producidas: 500,
                                hora_inicio: new Date('2020-02-15T11:18:00'),
                                hora_fin: new Date('2020-02-15T19:36:00'),
                                id_trabajador:1,
                                id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                            },
                            {
                                calorias: 6,
                                pza_producidas: 345,
                                hora_inicio: new Date('2020-02-15T11:18:00'),
                                hora_fin: new Date('2020-02-15T19:36:00'),
                                id_trabajador:2,
                                id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                            },
                            {
                                calorias: 8,
                                pza_producidas: 200,
                                hora_inicio: new Date('2020-02-15T11:18:00'),
                                hora_fin: new Date('2020-02-15T19:36:00'),
                                id_trabajador:3,
                                id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                            }
                        ]
                        asincrono.eachSeries(vecOperariosXplanilla,( trabajador, callback ) => {
                            const  ps_insercionTrabajadoresXPlanilla = new Request(transaccion)
                            ps_insercionTrabajadoresXPlanilla.input('calorias',mssql.Int, trabajador.calorias)
                            ps_insercionTrabajadoresXPlanilla.input('pza_producidas',mssql.Int, trabajador.pza_producidas)
                            ps_insercionTrabajadoresXPlanilla.input('hora_inicio',mssql.Time, trabajador.hora_inicio)
                            ps_insercionTrabajadoresXPlanilla.input('hora_fin',mssql.Time, trabajador.hora_fin)
                            ps_insercionTrabajadoresXPlanilla.input('id_trabajador',mssql.Int, trabajador.id_trabajador)
                            ps_insercionTrabajadoresXPlanilla.input('id_planilla',mssql.Int, trabajador.id_planilla)
                            var vecRechazosTrabajadorXplanilla = [
                                {
                                    cantidad:5,
                                    tipo:1,
                                    id_defecto:6
           
                                },
                                {
                                    cantidad:7,
                                    tipo:0,
                                    id_defecto:1
    
                                },
                                {
                                    cantidad:10,
                                    tipo:1,
                                    id_defecto:2
                                 
                                }
                            ]
                            var consulta = `insert into trabajador_x_planilla
                            (calorias , pza_producidas , hora_inicio , hora_fin , id_trabajador , id_planilla , estado)
                            values
                            (@calorias , @pza_producidas , @hora_inicio , @hora_fin , @id_trabajador , @id_planilla , 1) ;
                            declare @id_trabajador_x_planilla int ;
                            declare @id_rechazos_x_trabajador_y_planilla int ;
                            set @id_trabajador_x_planilla = ( select max( id ) as idTrabajadorXplanilla from trabajador_x_planilla ) ; `
                            vecRechazosTrabajadorXplanilla.forEach(rechazo => {
                                consulta += `insert into rechazos_x_trabajador_y_planilla
                                (cantidad , tipo , id_defecto , id_trabajador_x_planilla , estado)
                                values
                                ( ${rechazo.cantidad}, ${rechazo.tipo} , ${rechazo.id_defecto} , @id_trabajador_x_planilla ,1) ;
                                set @id_rechazos_x_trabajador_y_planilla = (select max(id) from rechazos_x_trabajador_y_planilla) ;`
                                var vecZonasXrechazo = [
                                    {
                                        cantidad: 4,
                                        letra: 'A',
                                        numero: 32
                                    },
                                    {
                                        cantidad: 10,
                                        letra: 'B',
                                        numero: 27
                                    },
                                    {
                                        cantidad: 15,
                                        letra: 'C',
                                        numero: 12
                                    }
                                ]
                                vecZonasXrechazo.forEach(zona => {
                                    consulta += ` insert into zonas_x_rechazo_x_planilla
                                    (cantidad , letra , numero , id_rechazos_x_trabajador_y_planilla , estado )
                                    values
                                    ( ${zona.cantidad} , '${zona.letra}' , ${zona.numero} , @id_rechazos_x_trabajador_y_planilla , 1 ) ; `
                                })
                            })
                            ps_insercionTrabajadoresXPlanilla.query( consulta,(err,result)=>{ if(err) {  callback( err ) } else { callback() } })
                        },(err)=>{
                            if(err){
                                transaccion.rollback()
                                cerrarConexionPOOL()
                                res.json({mensaje:err.message})
                            }
                            else{
                                var vecParadasDeMaquina = [
                                    {
                                        hora_inicio: new Date('2020-02-15T07:20:00'),
                                        hora_fin: new Date('2020-02-15T09:15:00'),
                                        id_paradas_maquina: 1,
                                        id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                                    },
                                    {
                                        hora_inicio: new Date('2020-02-15T11:18:00'),
                                        hora_fin: new Date('2020-02-15T23:15:00'),
                                        id_paradas_maquina: 2,
                                        id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                                    },
                                    {
                                        hora_inicio: new Date('2020-02-15T20:00:00'),
                                        hora_fin: new Date('2020-02-15T21:00:00'),
                                        id_paradas_maquina: 3,
                                        id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                                    }
                                ]
                                asincrono.eachSeries(vecParadasDeMaquina,(PM,callbackPM) => {
                                    const consultaInsercionParadasDeMaquina =  new Request(transaccion)
                                    consultaInsercionParadasDeMaquina.input('hora_incio',mssql.Time,PM.hora_inicio)
                                    consultaInsercionParadasDeMaquina.input('hora_fin',mssql.Time,PM.hora_fin)
                                    consultaInsercionParadasDeMaquina.input('id_paradas_maquina',mssql.Int,PM.id_paradas_maquina)
                                    consultaInsercionParadasDeMaquina.input('id_planilla',mssql.Int,PM.id_planilla)
                                    consultaInsercionParadasDeMaquina.query(
                                        `insert into paradas_maquinas_x_planilla
                                        ( hora_incio , hora_fin , id_paradas_maquina , id_planilla , estado )
                                        values
                                        ( @hora_incio , @hora_fin , @id_paradas_maquina , @id_planilla , 1 )`,(ER,resultPM) => {
                                        if( ER ) { callbackPM( ER ) } else { callbackPM(  ) }
                                    })
                                },erroR => {
                                    if ( erroR ) {
                                        transaccion.rollback()
                                        cerrarConexionPOOL()
                                        res.json({mensaje:erroR.message})
                                    }
                                    else {
                                        transaccion.commit()
                                        cerrarConexionPOOL()
                                        res.json({mensaje:'Transaccion exitosa'})
                                    }
                                })
                            }
                        }) // ! FIN FOR EACH
                    } //! FIN  IIF
                } //! FIN DEL TRY
                catch(e){
                    transaccion.rollback()
                    cerrarConexionPOOL()
                    res.json({mensaje:e.message,mensaje2:'Error catch FINAL'})
                }
            }
            metodoTransaccion()
        }
        else{
            console.log('err commit')
        }
    })
} )
module.exports = router