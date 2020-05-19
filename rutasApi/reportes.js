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
module.exports = router