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

module.exports = router