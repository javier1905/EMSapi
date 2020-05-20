select * from operaciones
select * from tipos_maquina
select * from maquinas
select * from tipos_proceso
select * from piezas
select * from procesos
select * from turnos
select * from defectos
select * from operaciones
select * from trabajadores
select * from areas
select * from procesos
select * from tipos_proceso
select id as idTipoProceso, nombre as nombreTipoProceso from tipos_proceso where estado = 1

select top 1 id from procesos p  where p.id_maquina = 8 and p.id_pieza = 1 and id_tipos_proceso = 1 and estado = 1 

select tp.id as idTipoProceso, tp.nombre as nombreTipoProceso from tipos_proceso tp
join procesos p on tp.id = p.id_tipos_proceso where p.id_maquina = 8 and p.id_pieza = 1 and tp.estado = 1

--LISTADO OPERACIONES
--select id as idOperacion, nombre as nombreOperacion from operaciones where estado = 1

-- MAQUINAS POR OPERACION 
--select m.id as idMaquina, m.nombre as nombreMaquina from maquinas m join tipos_maquina tm on m.id_tipos_maquina = tm.id where m.estado = 1 and tm.id_operacion = 1

--PIZAS SEGUN MAQUINA ELEJIDA
-- select p.id as idPieza, p.nombre as nombrePieza from piezas p join procesos pro on pro.id_pieza = p.id where p.estado = 1 and pro.id_maquina = 8

--LISTADO TIPOS DE PROCESOS
--select id as idTipoProceso, nombre as nombreTipoProceso from tipos_proceso where estado = 1

--PROCESO SEGUN MAQUINA PIEZA Y TIPO DE PROCESO
--select pro.id as idProceso, pro.descripcion as descripcionProceso from procesos pro where pro.estado = 1 and pro.id_pieza = 1 and pro.id_maquina = 8 and pro.id_tipos_proceso = 1

--OBTENER TURNOS
--select t.id as idTurno, t.descripcion as descripcionTurno,t.hs_inicio as hsInicioTurno ,t.hs_fin as hsFinTurno  from turnos t where estado = 1

--OBTENER LISTADOS DE DEFECTOS 

select d.id as idDefecto, d.nombre as nombreDefecto, d.id_operacion as idOperacion,o.nombre as nombreOperacion from defectos d join operaciones o on d.id_operacion=o.id where d.estado = 1

--OBTENET LISTA DE TRABAJADORES

select t.id as idTrabajador, t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador, t.f_nacimiento as fechaNacimientoTrabajador, t.f_ingreso as fechaIngresoTrabajador, t.id_puesto as idPuestoTrabajador, p.nombre as nombrePuesto from trabajadores t join puestos p on t.id_puesto=p.id where t.estado = 1

--OBTENER LISTADO PARADS DE MAQUINA 

select pm.id as idParadaMaquina, pm.nombre as nombreParadaMaquina, pm.tipo as tipoParadaMaquina, pm.id_area as idArea, a.nombre as nombreArea
        from paradas_maquina pm
		join areas a on pm.id_area=a.id
        where pm.estado = 1


        SELECT * FROM paradas_maquinas_x_planilla
select * from paradas_maquina
select * from planillas_produccion
select * from planillas_produccion
select * from procesos
select * from maquinas

select maq.nombre as nombreMaquina ,
pm.id as idParadaMaquina , 
pMaq.nombre as nombreParadaMAquina,
a.nombre as nombreArea ,
pm.hora_incio as horaInicio , 
pm.hora_fin as horaFin ,
IIF (DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin ) = 0 , 1440 , IIF( DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin ) < 0 , 
DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin ) + 1440  , 
DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin )) ) as Duracion
from planillas_produccion pp
join procesos pro on pp.id_proceso = pro.id
join maquinas maq on pro.id_maquina = maq.id
join paradas_maquinas_x_planilla pm on pm.id_planilla = pp.id
join paradas_maquina pMaq on pm.id_paradas_maquina = pMaq.id
join Areas a on pMaq.id_area = a.id
where pp.estado = 1
and pMaq.tipo = 1
and maq.id_tipos_maquina = 2


create procedure pa_reporteParadasMaquina
@idArea int, 
@fechaFundicionDesde date , 
@fechaFundicionHasta date 
as
select maq.nombre as nombreMaquina ,
sum (
IIF (DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin ) = 0 , 1440 , IIF( DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin ) < 0 , 
DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin ) + 1440  , 
DATEDIFF(MINUTE, pm.hora_incio , pm.hora_fin )) ) ) as Duracion
from planillas_produccion pp
join procesos pro on pp.id_proceso = pro.id
join maquinas maq on pro.id_maquina = maq.id
join paradas_maquinas_x_planilla pm on pm.id_planilla = pp.id
join paradas_maquina pMaq on pm.id_paradas_maquina = pMaq.id
join Areas a on pMaq.id_area = a.id
where pp.estado = 1
and pMaq.tipo = 1
and maq.id_tipos_maquina = 2
and ( @idArea is null or pMaq.id_area =  @idArea  )
and pp.fe_fundicion between @fechaFundicionDesde and @fechaFundicionHasta
group by maq.nombre

set dateformat dmy
exec pa_reporteParadasMaquina
@idArea = null , @fechaFundicionDesde = '01/01/2020' , @fechaFundicionHasta = '31/12/2020'