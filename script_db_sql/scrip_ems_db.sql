create database EMS_DB_SQL
go
use EMS_DB_SQL 
go
create table paises
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_paises primary key (id)
)
go
create table provincias
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	id_pais int,
	estado bit not null
	constraint pk_provincias primary key (id),
	constraint fk_provincias_paises foreign key (id_pais) references paises(id)
)
go
create table localidades
(
	id int identity(1,1),
	nombre varchar(50) not null,
	id_provincia int,
	estado bit not null
	constraint pk_localidades primary key (id),
	constraint fk_localidades_provincias foreign key (id_provincia) references provincias(id)
)
go
create table clientes
(
	id int identity(1,1),
	nombre varchar(50) not null,
	razon_social varchar(50),
	estado bit
	constraint pk_clientes primary key (id),
)
go
create table direciones
(
	id int identity(1,1),
	id_cliente int,
	id_localidad int,
	barrio varchar(50) not null,
	cp int not null,
	calle varchar(50) not null,
	altura_calle int,
	estado bit not null
	constraint pk_direciones primary key (id),
	constraint fk_direciones_clientes foreign key(id_cliente) references clientes(id),
	constraint fk_direciones_localidades foreign key(id_localidad) references localidades(id),
)
go
create table plantas
(
	id int identity(1,1),
	nombre varchar(50),
	barrio varchar(50) not null,
	cp int not null,
	calle varchar(50) not null,
	altura_calle int,
	estado bit not null
	constraint pk_plantas primary key (id)
)
go
create table tipos_material
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_tipos_material primary key (id)
)
go
create table piezas
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	id_cliente int,
	id_tipos_material int,
	estado bit not null
	constraint pk_piezas primary key (id),
	constraint fk_piezas_tipos_material foreign key(id_tipos_material) references tipos_material(id),
	constraint fk_piezas_clientes foreign key (id_cliente) references  clientes(id)
)
go
create table pesos
(
	id int identity(1,1),
	peso real not null,
	desde date not null,
	hasta date not null,
	unidad varchar(50),
	id_pieza int,
	tipo bit not null, --  0 sin colada 1 con colada
	estado bit not null
	constraint pk_pesos primary key (id),
	constraint fk_pesos_piezas foreign key(id_pieza) references piezas(id)
)
go
create table moldes
(
	id int identity(1,1),
	nombre varchar(50) not null,
	id_pieza int,
	estado bit not null,
	constraint pk_moldes primary key (id),
	constraint fk_moldes_piezas foreign key(id_pieza) references piezas(id),
)
go
create table turnos
(
	id int identity(1,1),
	descripcion varchar(50) not null unique,
	hs_inicio time(0) not null,
	hs_fin time(0) not null,
	estado bit not null
	constraint pk_turnos primary key (id)
)
go
create table operaciones
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_operaciones primary key (id)
)
go
create table tipos_maquina
(
	id int identity(1,1),
	nombre varchar(50),
	id_operacion int,
	estado bit not null
	constraint pk_tipos_maquina primary key (id),
	constraint fk_tipos_maquina_operaciones foreign key(id_operacion) references operaciones(id)
)
go
create table maquinas
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	descripcion varchar(50),
	id_tipos_maquina int,
	id_planta int,
	estado bit not null
	constraint pk_maquinas primary key (id),
	constraint fk_maquinas_tipos_maquina foreign key(id_tipos_maquina) references tipos_maquina(id),
	constraint fk_maquinas_plantas foreign key(id_planta) references plantas(id)
)
go
create table areas
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_areas primary key (id)
)
go
create table puestos
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_puestos primary key (id)
)
go
create table trabajadores
(
	id int identity(1,1),
	nombre varchar(50) not null,
	apellido varchar(50),
	f_nacimiento date,	
	f_ingreso date,	
	id_puesto int,
	estado bit not null
	constraint pk_trabajadores primary key (id),
	constraint fk_trabajadores_puestos foreign key(id_puesto) references puestos(id)
)
go 
create table trabajadores_x_area
(
id int identity(1,1),
id_trabajador int,
id_area int,
estado bit not null
constraint pk_trabajadores_x_area primary key (id),
constraint fk_trabajadores_x_area_trabajadores foreign key(id_trabajador) references trabajadores(id),
constraint fk_trabajadores_x_area_areas foreign key(id_area) references areas(id)
)
go
create table componentes
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_componentes primary key (id)
)
go
create table tipos_matriz
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_tipos_matriz primary key (id)
)
go
create table matrizes
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	serie varchar(50),
	fe_inicio date,
	id_tipos_matriz int,
	estado bit not null
	constraint pk_matrizes primary key (id),
	constraint fk_matrizes_tipos_matriz foreign key(id_tipos_matriz) references tipos_matriz(id)
)
go
create table maquinas_x_matrizes
(
	id int identity(1,1),
	id_maquina int,
	id_matriz int,
	estado bit not null
	constraint pk_maquinas_x_matrizes primary key (id),
	constraint fk_maquinas_x_matrizes_maquinas foreign key(id_maquina) references maquinas(id),
	constraint fk_maquinas_x_matrizes_matrizes foreign key(id_matriz) references matrizes(id)
)
go
create table paradas_maquina
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	tipo bit not null,  --0 programada 1 no programada
	id_area int,
	estado bit not null
	constraint pk_paradas_maquina primary key (id),
	constraint fk_paradas_maquina_areas foreign key(id_area) references areas(id)
)
go
create table componentes_x_maquina
(
	id int identity(1,1),
	id_maquina int,
	id_componente int,
	estado bit not null
	constraint pk_componentes_x_maquina primary key (id),
	constraint fk_componentes_x_maquina_maquinas foreign key(id_maquina) references maquinas(id),
	constraint fk_componentes_x_maquina_componentes foreign key(id_componente) references componentes(id)
)
go
create table defectos
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	id_operacion int,
	estado bit not null
	constraint pk_defectos primary key (id),
	constraint fk_defectos_operaciones foreign key(id_operacion) references operaciones(id)
)
go
create table tipos_proceso
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_tipos_proceso primary key (id)
)
go
create table procesos
(
	id int identity(1,1),
	descripcion varchar(50),
	id_pieza int,
	id_maquina int,
	id_tipos_proceso int,
	estado bit not null
	constraint pk_proceso primary key (id),
	constraint fk_procesos_piezas foreign key(id_pieza) references piezas(id),
	constraint fk_procesos_maquinas foreign key(id_maquina) references maquinas(id),
	constraint fk_procesos_tipos_proceso foreign key(id_tipos_proceso) references tipos_proceso(id)
)
go
create table piezas_x_hora
(
	id int identity(1,1),
	cantidad int not null,
	fe_desde date not null,
	fe_hasta date not null,
	id_proceso int,
	estado bit not null
	constraint pk_piezas_x_hora primary key (id),
	constraint fk_piezas_x_hora_procesos foreign key(id_proceso) references procesos(id)
)
go
create table planillas_produccion
(
	id int identity(1,1),
	fe_carga date default getdate(),
	fe_produccion date not null,
	fe_fundicion date not null,
	hora_inicio time(0) not null,
	hora_fin time(0) not null,
	id_proceso int,	
	id_molde int,
	estado bit not null
	constraint pk_planillas_produccion primary key (id),
	constraint fk_planillas_produccion_procesos foreign key(id_proceso) references procesos(id),	
	constraint fk_planillas_produccion_moldes foreign key(id_molde) references moldes(id)
)
go
create table trabajador_x_planilla
(
	id int identity(1,1),
	calorias int default 0,
	pza_producidas int default 0,
	hora_inicio time(0) not null,
	hora_fin time(0) not null,
	id_trabajador int,
	id_planilla int,
	id_turno int,
	estado bit not null
	constraint pk_trabajador_x_planilla primary key (id),
	constraint fk_trabajador_x_planilla_trabajadores foreign key(id_trabajador) references trabajadores(id),
	constraint fk_trabajador_x_planilla_planillas_produccion foreign key(id_planilla) references planillas_produccion(id),
	constraint fk_trabajador_x_planilla_turnos foreign key(id_turno) references turnos(id)
)
go
create table rechazos_x_trabajador_y_planilla
(
	id int identity(1,1),
	cantidad int default 0,
	tipo bit not null, -- 0 recuperable / 1 scrap
	id_defecto int,
	id_trabajador_x_planilla int,
	estado bit not null
	constraint pk_rechazos_x_planilla primary key (id),
	constraint fk_rechazos_x_planilla_defectos foreign key(id_defecto) references defectos(id),
	constraint fk_rechazos_x_planilla_trabajador_x_planilla foreign key(id_trabajador_x_planilla) references trabajador_x_planilla(id)
)
go
create table zonas_x_rechazo_x_planilla
(
	id int identity(1,1),
	cantidad int default 0,
	letra char(1),
	numero int,
	id_rechazos_x_trabajador_y_planilla int,
	estado bit not null
	constraint pk_zonas_x_rechazo_x_planilla primary key (id),
	constraint fk_zonas_x_rechazo_x_planilla_rechazos_x_planilla foreign key(id_rechazos_x_trabajador_y_planilla) references rechazos_x_trabajador_y_planilla(id)
)
go
create table paradas_maquinas_x_planilla
(
	id int identity(1,1),
	hora_incio time(0) not null,
	hora_fin time(0) not null,
	id_paradas_maquina int,
	id_planilla int,
	estado bit not null
	constraint pk_paradas_maquinas_x_planilla primary key (id),
	constraint fk_paradas_maquinas_x_planilla_paradas_maquina foreign key(id_paradas_maquina) references paradas_maquina(id),
	constraint fk_paradas_maquinas_x_planilla_planillas_produccion foreign key(id_planilla) references planillas_produccion(id)
)
go
create table tipos_almacen
(
	id int identity(1,1),
	nombre varchar(50) unique not null,
	estado bit not null
	constraint pk_tipos_almacen primary key (id)
)
go
create table almacenes
(
	id int identity(1,1),
	nombre varchar(50) unique not null,	
	id_planta int,
	id_tipos_almacen int,
	estado bit not null
	constraint pk_almacenes primary key (id),
	constraint fk_almacenes_plantas foreign key(id_planta) references plantas(id),
	constraint fk_almacenes_tipos_almacen foreign key(id_tipos_almacen) references tipos_almacen(id)
)
go
insert into plantas (nombre,barrio,cp,calle,altura_calle,estado) values 
('PLANTA 1','ARTIGAS',5016,'AV. VELEZ SARFIELD',4100,1),
('PLANTA 2','FERREYRA',5000,'PARQUE INDUSTRIAL',200,1)
go
insert into operaciones (nombre,estado) values
('FUNDICION',1),
('GRANALLADO',1),
('MECANIZADO',1),
('PH',1)
go
insert into tipos_maquina (nombre,id_operacion,estado) values
('GRANALLADORA',2,1),
('INYECTORA',1,1),
('PRUEBAS HIDRAULIAS',4,1),
('CENTRO DE MECANIZADO',3,1)
go
select * from plantas
go
SELECT TM.ID AS 'ID TIPO MAQUINA' ,TM.NOMBRE AS 'TIPO DE MAQUINA',O.NOMBRE AS 'OPERACION' FROM TIPOS_MAQUINA TM INNER JOIN OPERACIONES O ON TM.ID_OPERACION=O.ID
go
insert into maquinas (nombre,descripcion,id_tipos_maquina,id_planta,estado)
values
('IN15','INYECTORA PESADA',2,1,1),
('IN16','INYECTORA PESADA',2,1,1),
('IN18','INYECTORA LIVIANA',2,1,1),
('IN19','INYECTORA PESADA',2,1,1),
('IN20','INYECTORA LIVIANA',2,1,1),
('IN22','INYECTORA PESADA',2,1,1),
('GR01','GRANALLADORA CHICA',1,2,1),
('GR02','GRANALLADORA GRANDE',1,2,1),
('GR03','GRANALLADORA GRANDE',1,2,1),
('GR04','GRANALLADORA GRANDE',1,2,1),
('GR05','GRANALLADORA GRANDE',1,2,1),
('CM01','CENTRO MECANIZADO HAST',4,2,1),
('CM02','CENTRO MECANIZADO HAST',4,2,1),
('CM03','CENTRO MECANIZADO HAST',4,2,1),
('CM04','CENTRO MECANIZADO HAST',4,2,1),
('CM05','CENTRO MECANIZADO HAST',4,2,1),
('CM06','CENTRO MECANIZADO HAST',4,2,1),
('CM07','CENTRO MECANIZADO HAST',4,2,1),
('EE22','MAQUINA PH',3,2,1),
('EE28','MAQUINA PH',3,2,1)
go
select * from maquinas m inner join tipos_maquina t on m.id_tipos_maquina=t.id
go
select * from tipos_material
go
insert into tipos_material (nombre, estado) values
('ALUMINIO',1)
go
insert into clientes (nombre, razon_social,estado) values
('VOLSWAGEN','SA',1),
('MERSEDEZ BENZ','SA',1),
('ZF','SA',1),
('PEUGEOT','SA',1)

go
insert into piezas (nombre,id_cliente,id_tipos_material,estado) values
('107MQB',1,1,1),
('107AG',1,1,1),
('107B',1,1,1),
('103CA',1,1,1),
('040',3,1,1),
('043',3,1,1),
('046',3,1,1),
('4504',2,1,1),
('4604',2,1,1),
('5880',4,1,1)
go
insert into tipos_proceso (nombre,estado) values
('PRIMERA VUELTA',1),
('RECUPERADO',1),
('RETRABAJO',1)
go
SELECT * FROM procesos
go
insert into procesos (descripcion,id_pieza,id_maquina,id_tipos_proceso,estado) values
('GRANALLADO 107MQB GR02',1,8,1,1)
go
insert into moldes (id_pieza,nombre,estado) values
(1,'1R1',1),
(1,'2R1',1),
(1,'3R1',1),
(1,'4R1',1),
(2,'9',1),
(3,'12R1',1)
go
insert into puestos (nombre,estado) values
('OPERARIO',1),
('GERENTE',1),
('SUPERVISOR',1),
('ADMINISTRATIVO',1)
go
set dateformat dmy
insert into trabajadores (nombre,apellido,f_nacimiento,f_ingreso,id_puesto,estado) values
('JOSE','PEREYRA','25/01/1975','12/05/1995',1,1),
('FRANCISCO','RODRIGUEZ','21/02/1975','12/01/1995',1,1),
('ALDO','CORTEZ','11/04/1975','01/03/1997',1,1),
('SERGIO','ESCALADA','03/07/1966','12/05/1998',1,1),
('JORGE','VILLARUEL','26/01/1988','12/05/1999',1,1),
('DANTE','CORTEZ','08/01/1981','12/05/2000',1,1)
go
insert into areas(nombre,estado) values 
('MATRICERIA',1),
('MANTENIMIENTO',1),
('PRODUCCION',1),
('COMPRAS',1),
('LOGISTICA',1),
('COMERCIAL',1),
('PAÑOL',1)
go
insert into trabajadores_x_area (id_trabajador,id_area,estado) values
(1,3,1),
(2,3,1),
(3,3,1),
(4,3,1),
(5,3,1),
(6,3,1)
go
insert into defectos (nombre,id_operacion,estado) values
('ARANQUE',1,1),
('TACO BAJO',1,1),
('PLIEGUES',1,1),
('FIZURAS',1,1),
('POROS',1,1),
('MAL MECANIZADA STURAM',3,1),
('MAL MECANIZADA TERCERO',3,1),
('AGARRE',1,1),
('GOLPE',1,1),
('QUEMADA POR GRANALLA',2,1),
('QUEMADA EN FUNDICION',1,1),
('MANCHADA',1,1),
('FALTA MATERIAL',1,1),
('SOBREMATERIAL',1,1),
('EXPLULSOR UNDIDO',1,1),
('EXPULSOR ALTO',1,1),
('PEGADA',1,1),
('PERDIDA EXTANQUEIDAD',1,1),
('ROTA',1,1),
('PROBLEMAS DE NOYO',1,1),
('AMPOLLA',1,1),
('PROBLEMAS DIMENCIONAL',1,1),
('TESTIGO',1,1),
('RECHUPE',1,1)
go
insert into paradas_maquina (nombre,tipo,id_area,estado) values
('PULIR MOLDE',1,1,1),
('PROBLEMAS CARRO',1,1,1),
('PROBLEMAS DE ACERO',1,1,1)
go
insert into turnos (descripcion,hs_inicio,hs_fin,estado) values
('MAÑANA','06:00','14:18',1),
('TARDE','14:18','22:36',1),
('NOCHE','22:36','06:00',1)
go