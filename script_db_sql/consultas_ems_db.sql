select * from operaciones
select * from tipos_maquina
select * from maquinas
select * from tipos_proceso
select * from piezas
select * from procesos
select * from turnos

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

