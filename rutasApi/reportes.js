const { Router } = require ( 'express' )
const router = Router (  )

router.post ( '/rechazosPrimeraVuelta'  , async ( req, res ) =>{
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const { fechaFundicionDesde , fechaFundicionHasta , idMaquina , idPieza , idMolde } = req.body
    try {
        const mssql = require ( 'mssql' )
        const conexion = await abrirConexionPOOL ( 'consultaReporteRechazos' )
        const myRequest = new mssql.Request ( conexion )
        myRequest.input ( 'fechaFundicionDesde' , mssql.Date , fechaFundicionDesde )
        myRequest.input ( 'fechaFundicionHasta' , mssql.Date , fechaFundicionHasta )
        myRequest.input ( 'idMaquina' , mssql.Int , idMaquina )
        myRequest.input ( 'idPieza' , mssql.Int , idPieza )
        myRequest.input ( 'idMolde' , mssql.Int , idMolde )
        const result = await myRequest.execute ( 'pa_rechazosTotales' )
        if ( result ) {
            cerrarConexionPOOL (  )
            res.json ( result.recordset )
        }
    }
    catch ( e ) {
        cerrarConexionPOOL (  )
        res.json ( { status : 403 , mensaje : e.message } )
    }
} )
router.post ('/paradasMaquina', async (req, res) => {
    const {idArea , fechaFundicionDesde , fechaFundicionHasta} = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    try {
        const mssql = require('mssql')
        const conexion = await abrirConexionPOOL('reporteParadasMaquina')
        const myRequest = new mssql.Request(conexion)
        myRequest.input('idArea' , mssql.Int , idArea)
        myRequest.input('fechaFundicionDesde' , mssql.Date , fechaFundicionDesde)
        myRequest.input('fechaFundicionHasta' , mssql.Date , fechaFundicionHasta)
        const result = await myRequest.execute('pa_reporteParadasMaquina')
        if(result) {
            cerrarConexionPOOL()
            res.json(result.recordset)
        }
    }
    catch(e) {
        cerrarConexionPOOL()
        res.json({mensaje : e.message})
    }
} )

router.post ('/detalleParaMaquinaXmaquina' , async (req,res) => {
    const {abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    const { fechaDesdeFundicion , fechaHastaFundicion , nombreMaquina, idArea } = req.body
    try {
        const mssql = require('mssql')
        const conexion = await abrirConexionPOOL('consultaDetallePardaMaquina')
        const myRequest = new mssql.Request(conexion)
        myRequest.input('fechaDesdeFundicion' , mssql.Date , fechaDesdeFundicion )
        myRequest.input('fechaHastaFundicion' , mssql.Date , fechaHastaFundicion )
        myRequest.input('nombreMaquina' , mssql.VarChar , nombreMaquina )
        myRequest.input('idArea' , mssql.Int , idArea )
        const result = await myRequest.execute ('pa_detalleParadaMaquina')
        if (result) {
            cerrarConexionPOOL ()
            res.json(result.recordset)
        }
    }
    catch(e) {
        cerrarConexionPOOL()
        res.json({status : 403 , mensaje : e.message})
    }
})
router.post ('/paradasMaquinaXpm' , async (req,res) => {
    const {abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    const { fechaDesdeFundicion , fechaHastaFundicion  } = req.body
    try {
        const mssql = require('mssql')
        const conexion = await abrirConexionPOOL('consultaPardaMaquinaXpm')
        const myRequest = new mssql.Request(conexion)
        myRequest.input('fechaDesdeFundicion' , mssql.Date , fechaDesdeFundicion )
        myRequest.input('fechaHastaFundicion' , mssql.Date , fechaHastaFundicion )
        const result = await myRequest.execute ('pa_reportePM')
        if (result) {
            cerrarConexionPOOL ()
            res.json(result.recordset)
        }
    }
    catch(e) {
        cerrarConexionPOOL()
        res.json({status : 403 , mensaje : e.message})
    }
})
router.post ('/detalleParaMaquinaXpm' , async (req,res) => {
    const {abrirConexionPOOL , cerrarConexionPOOL } = require('../conexiones/sqlServer')
    const { fechaDesdeFundicion , fechaHastaFundicion , nombreParadaMaquina } = req.body
    try {
        const mssql = require('mssql')
        const conexion = await abrirConexionPOOL('consultaDetallePardaMaquinaXpm2')
        const myRequest = new mssql.Request(conexion)
        myRequest.input('fechaDesdeFundicion' , mssql.Date , fechaDesdeFundicion )
        myRequest.input('fechaHastaFundicion' , mssql.Date , fechaHastaFundicion )
        myRequest.input('nombreParadaMaquina' , mssql.VarChar , nombreParadaMaquina )
        const result = await myRequest.execute ('pa_detalleParadaMaquina2')
        if (result) {
            cerrarConexionPOOL ()
            res.json(result.recordset)
        }
    }
    catch(e) {
        cerrarConexionPOOL()
        res.json({status : 403 , mensaje : e.message})
    }
})
module.exports = router