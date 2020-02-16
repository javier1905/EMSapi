const {Router} = require('express')

const router = Router()


router.get('/',async (req,res)=>{
    var {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    await abrirConexion()
    var {Request} = require('mssql')
    var consulta = new Request()
    consulta.query(
        `select id as idParadaMaquina, nombre as nombreParadaMaquina, tipo as tipoParadaMaquina, id_area as idArea 
        from paradas_maquina
        where estado = 1`,
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

module.exports = router