const { Router } = require ( 'express' )

const router = Router (  )


router.post ( '/fundicion' , async ( req , res ) => {
    const { idMaquina , idPieza , idMolde , fechaFundicionDesde , fechaFundicionHasta } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const mssql = require ( 'mssql' )
        try {
            const conexion = await abrirConexionPOOL ( 'listaOEEfundicion' )
            const myReques = new  mssql.Request ( conexion )
            myReques.input ( 'idMaquina' , mssql.Int , idMaquina )
            myReques.input ( 'idPieza' , mssql.Int , idPieza )
            myReques.input ( 'idMolde' , mssql.Int , idMolde )
            myReques.input ( 'fechaFundicionDesde' , mssql.Date , fechaFundicionDesde )
            myReques.input ( 'fechaFundicionHasta' , mssql.Date , fechaFundicionHasta )
            const result = await myReques.execute ( 'pa_datosOEEfun' )
            if ( result ) {
                cerrarConexionPOOL (  )
                res.json ( result.recordset )
            }
        }
        catch ( e ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : e.message , status : 403 } )
        }
}  )

router.post ( '/granallado' , async ( req , res ) => {
    const { idMaquina , idPieza , idMolde , fechaProduccionDesde , fechaProduccionHasta } = req.body
    const { abrirConexionPOOL , cerrarConexionPOOL } = require ( '../conexiones/sqlServer' )
    const mssql = require ( 'mssql' )
        try {
            const conexion = await abrirConexionPOOL ( 'listaOEEgranallado' )
            const myReques = new  mssql.Request ( conexion )
            myReques.input ( 'idMaquina' , mssql.Int , idMaquina )
            myReques.input ( 'idPieza' , mssql.Int , idPieza )
            myReques.input ( 'idMolde' , mssql.Int , idMolde )
            myReques.input ( 'fechaProduccionDesde' , mssql.Date , fechaProduccionDesde )
            myReques.input ( 'fechaProduccionHasta' , mssql.Date , fechaProduccionHasta )
            const result = await myReques.execute ( 'pa_datosOEEgra' )
            if ( result ) {
                cerrarConexionPOOL (  )
                res.json ( result.recordset )
            }
        }
        catch ( e ) {
            cerrarConexionPOOL (  )
            res.json ( { mensaje : e.message , status : 403 } )
        }
}  )

module.exports = router