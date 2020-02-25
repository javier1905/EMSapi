const {Router} = require('express')

const router = Router()

router.get('/', async (req,res)=>{
    const {abrirConexion,cerrarConexion} = require('../conexiones/sqlServer')
    const {Request} =  require('mssql')
    await abrirConexion()
    var consulta = new Request()
    consulta.query(
        `select t.id as idTrabajador, t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador,
        t.f_nacimiento as fechaNacimientoTrabajador, t.f_ingreso as fechaIngresoTrabajador,
        t.id_puesto as idPuestoTrabajador, p.nombre as nombrePuesto
        from trabajadores t
        join puestos p on t.id_puesto=p.id
        where t.estado = 1`,
        (err,dato)=>{
            if(!err){res.json(dato.recordset);cerrarConexion()}
            else { res.json({mensaje:err.message});cerrarConexion()}
        }
    )
})

module.exports = router
