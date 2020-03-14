/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CONFIG.js":
/*!*******************!*\
  !*** ./CONFIG.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  secret: 'javier1905'
};

/***/ }),

/***/ "./conexiones/mongoDb.js":
/*!*******************************!*\
  !*** ./conexiones/mongoDb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

if (true) {
  __webpack_require__(/*! colors */ "colors");
}

var URI;

if (false) {} else {
  URI = 'mongodb://localhost:5000:27017/usuariosEMS';
}

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var conexion = mongoose.connection;
conexion.on('error', console.error.bind(console, 'error de conexion'));
conexion.once('open', () => {
  if (true) {
    console.log('Conectado a MONGODB'.red);
  } else {}
});

/***/ }),

/***/ "./conexiones/sqlServer.js":
/*!*********************************!*\
  !*** ./conexiones/sqlServer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mssql = __webpack_require__(/*! mssql */ "mssql");

if (true) {
  __webpack_require__(/*! colors */ "colors");
}

var URI;

if (false) {} else {
  URI = {
    user: 'DBjav',

    /* DBjav emsDB  */
    password: 'belgrano455',
    database: 'EMS_DB_SQL',
    port: 1433,
    server: 'DESKTOP-G1I097C',

    /* DESKTOP-G1I097C  PC2360 */
    options: {
      appName: 'ems-node-api',
      enableArithAbort: true,
      encrypt: false
    },
    connectionTimeOut: 150000,
    driver: 'tedious',
    stream: false,
    pool: {
      max: 20,
      min: 0,
      idleTimeoutMillis: 30000
    }
  };
}

var ConexionSQL = {
  abrirConexion: undefined,
  cerrarConexion: undefined,
  abrirConexionPOOL: undefined,
  cerrarConexionPOOL: undefined
};
var conexion;

ConexionSQL.abrirConexion = async function () {
  await mssql.connect(URI).then(pool => {
    if (pool._connected) {
      if (true) {
        console.log('Conecion SQL SERVER'.blue, ' ABIERTA'.green);
        conexion = pool;
      }
    } else {
      console.log('Error de Conexion', pool._connected);
    }
  });
};

ConexionSQL.cerrarConexion = async function () {
  await conexion.close();

  if (true) {
    console.log('Conecion SQL SERVER'.blue, ' CERRADA'.green);
  }
};

const conexiones = {};

ConexionSQL.abrirConexionPOOL = async name => {
  if (!Object.prototype.hasOwnProperty.call(conexiones, name)) {
    const newConexion = new mssql.ConnectionPool(URI);
    const close = newConexion.close.bind(newConexion);

    newConexion.close = (...args) => {
      delete conexiones[name];
      return close(...args);
    };

    await newConexion.connect();
    conexiones[name] = newConexion;
    return conexiones[name];
  }
};

ConexionSQL.cerrarConexionPOOL = () => {
  return Promise.all(Object.values(conexiones).map(pool => {
    return pool.close();
  }));
};

module.exports = ConexionSQL;

/***/ }),

/***/ "./esquemasMongo/esquemaRolesUsuarios.js":
/*!***********************************************!*\
  !*** ./esquemasMongo/esquemaRolesUsuarios.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const perfil = new mongoose.Schema({
  perfil: {
    type: String,
    require: true,
    unique: true,
    enum: ['Admin', 'nivel-1', 'nivel-2', 'nivel-3', 'nivel-4', 'nivel-5']
  }
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('perfil', perfil);

/***/ }),

/***/ "./esquemasMongo/esquemaUsuarios.js":
/*!******************************************!*\
  !*** ./esquemasMongo/esquemaUsuarios.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const usuario = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  perfil: {
    type: String,
    required: true,
    enum: ['Admin', 'nivel-1', 'nivel-2', 'nivel-3', 'nivel-4', 'nivel-5']
  }
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('usuario', usuario);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const cors = __webpack_require__(/*! cors */ "cors");

var morgan;

if (true) {
  __webpack_require__(/*! colors */ "colors");

  morgan = __webpack_require__(/*! morgan */ "morgan");
}

console.log("development");
const servidor = express();
servidor.use(cors()); // middelware

servidor.use(express.json());
servidor.use(express.urlencoded({
  extended: true
}));

if (true) {
  servidor.use(morgan('dev'));
}

servidor.use('/api/maquinas', __webpack_require__(/*! ./rutasApi/maquinas */ "./rutasApi/maquinas.js"));
servidor.use('/api/usuarios', __webpack_require__(/*! ./rutasApi/usuarios */ "./rutasApi/usuarios.js"));
servidor.use('/api/logueo', __webpack_require__(/*! ./rutasApi/Logueo */ "./rutasApi/Logueo.js"));
servidor.use('/api/autentificasion', __webpack_require__(/*! ./rutasApi/Autentificasion */ "./rutasApi/Autentificasion.js"));
servidor.use('/api/piezas', __webpack_require__(/*! ./rutasApi/piezas */ "./rutasApi/piezas.js"));
servidor.use('/api/moldes', __webpack_require__(/*! ./rutasApi/moldes */ "./rutasApi/moldes.js"));
servidor.use('/api/defectos', __webpack_require__(/*! ./rutasApi/defectos */ "./rutasApi/defectos.js"));
servidor.use('/api/operaciones', __webpack_require__(/*! ./rutasApi/operaciones */ "./rutasApi/operaciones.js"));
servidor.use('/api/procesos', __webpack_require__(/*! ./rutasApi/procesos */ "./rutasApi/procesos.js"));
servidor.use('/api/turnos', __webpack_require__(/*! ./rutasApi/turnos */ "./rutasApi/turnos.js"));
servidor.use('/api/paradasMaquina', __webpack_require__(/*! ./rutasApi/paradasMaquina */ "./rutasApi/paradasMaquina.js"));
servidor.use('/api/trabajadores', __webpack_require__(/*! ./rutasApi/trabajadores */ "./rutasApi/trabajadores.js"));
servidor.use('/api/planillasProduccion', __webpack_require__(/*! ./rutasApi/planillasProduccion */ "./rutasApi/planillasProduccion.js"));
servidor.use('/api/tiposProceso', __webpack_require__(/*! ./rutasApi/tiposProceso */ "./rutasApi/tiposProceso.js")); //Settings

servidor.set('port', process.env.PORT || 5000);
servidor.listen(servidor.get('port'), (m, e) => {
  if (e) {
    console.log(e);
  } else {
    if (true) {
      console.log('Servidor corriendo en el PUERTO'.yellow, servidor.get('port'));
    } else {}
  }
});

/***/ }),

/***/ "./rutasApi/Autentificasion.js":
/*!*************************************!*\
  !*** ./rutasApi/Autentificasion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const CONFIG = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  if (!req.headers.authorization) {
    res.status(403).json({
      mensaje: 'No envio el Token en el headers'
    });
  } else {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, CONFIG.secret, (e, d) => {
      if (e) {
        res.status(403).json({
          mensaje: e.name
        });
      } else {
        res.status(200).json(d);
      }
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/Logueo.js":
/*!****************************!*\
  !*** ./rutasApi/Logueo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const bcrypt = __webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs");

const Usuario = __webpack_require__(/*! ../esquemasMongo/esquemaUsuarios */ "./esquemasMongo/esquemaUsuarios.js");

const {
  secret
} = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const router = Router();
router.post('/', async (req, res, next) => {
  try {
    const user = await Usuario.find({
      userName: req.body.userName
    });

    if (!user[0]) {
      res.status(403).json({
        mensaje: 'Usuario Inexistente !'
      });
    } else {
      const verificaPass = await bcrypt.compareSync(req.body.password, user[0].password);

      if (!verificaPass) {
        res.status(403).json({
          mensaje: 'Password Incorrecta'
        });
      } else {
        const miUsuario = {
          userName: user[0].userName,
          email: user[0].email,
          nombre: user[0].nombre,
          apellido: user[0].apellido,
          perfil: user[0].perfil
        };
        jwt.sign(miUsuario, secret, {
          expiresIn: 14400
        }, (e, token) => {
          e ? res.status(404).json({
            mensaje: 'Error al generar el token'
          }) : res.status(200).json({
            token
          });
        });
      }
    }
  } catch (e) {
    res.status(404).json({
      e
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/defectos.js":
/*!******************************!*\
  !*** ./rutasApi/defectos.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query('select d.id as idDefecto, d.nombre as nombreDefecto, d.id_operacion as idOperacion,o.nombre as nombreOperacion from defectos d join operaciones o on d.id_operacion=o.id where d.estado = 1', (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/maquinas.js":
/*!******************************!*\
  !*** ./rutasApi/maquinas.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query(`select m.id as idMaquina, m.nombre as nombreMaquina, m.descripcion as descripcionMaquina
    from maquinas m
    where m.estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/xoperacion/:idOperacion', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    idOperacion
  } = req.params;
  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query(`select m.id as idMaquina, m.nombre as nombreMaquina
    from maquinas m 
    join tipos_maquina tm on m.id_tipos_maquina = tm.id 
    where m.estado = 1 and tm.id_operacion = ${idOperacion}`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/moldes.js":
/*!****************************!*\
  !*** ./rutasApi/moldes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query('select id as idMolde,id_pieza as idPieza, nombre as nombreMolde from moldes where estado = 1', (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/xpieza/:idPieza', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    idPieza
  } = req.params;

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query('select id as idMolde, nombre as nombreMolde from moldes where estado = 1 and id_pieza = ' + idPieza, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/operaciones.js":
/*!*********************************!*\
  !*** ./rutasApi/operaciones.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select id as idOperacion, nombre as nombreOperacion
        from operaciones where estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/paradasMaquina.js":
/*!************************************!*\
  !*** ./rutasApi/paradasMaquina.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  var {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select pm.id as idParadaMaquina, pm.nombre as nombreParadaMaquina, pm.tipo as tipoParadaMaquina, pm.id_area as idArea, a.nombre as nombreArea
        from paradas_maquina pm
		join areas a on pm.id_area=a.id
        where pm.estado = 1`, (e, dato) => {
    if (!e) {
      cerrarConexion();
      res.json(dato.recordset);
    } else {
      cerrarConexion();
      res.json({
        mensaje: e.message
      });
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/piezas.js":
/*!****************************!*\
  !*** ./rutasApi/piezas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const router = express.Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    Request
  } = new __webpack_require__(/*! mssql */ "mssql");
  const consulta = new Request();
  consulta.query('select id as idPieza, nombre as nombrePieza from piezas where estado = 1', (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/xmaquina/:idMaquina', async (req, res) => {
  // ! LISTADO DE PIEZAS SEGUN MAQUINA
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    idMaquina
  } = req.params;

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select p.id as idPieza, p.nombre as nombrePieza
        from piezas p
        join procesos pro
        on pro.id_pieza = p.id
        where p.estado = 1 and pro.id_maquina = ${idMaquina}`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/planillasProduccion.js":
/*!*****************************************!*\
  !*** ./rutasApi/planillasProduccion.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const Moment = __webpack_require__(/*! moment */ "moment");

const router = Router();

const convierteHora = hora => {
  var HorInicionO = new Date(`2020-02-15T${hora}:00`);
  HorInicionO.setHours(HorInicionO.getHours() - 3);
  return HorInicionO;
};

router.post('/listado', async (req, res) => {
  const {
    fechaDesdeProduccion,
    fechaHastaProduccion,
    fechaDesdeFundicion,
    fechaHastaFundicon,
    idMaquina,
    idPieza,
    idMolde,
    idTipoProceso,
    idTipoMaquina
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL();

  const {
    Transaction
  } = __webpack_require__(/*! mssql */ "mssql");

  const transaccion = new Transaction(conexionAbierta);

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  transaccion.begin(async e => {
    if (e) {
      res.json({
        mensaje: e.message
      });
    }

    const sqlConsulta = ` set dateformat dmy ;
        select pl.id as idPlanilla, pl.fe_carga as fechaCarga, pl.fe_produccion as fechaProduccion, pl.fe_fundicion as fechaFundicion,
        pl.hora_inicio as horaInicio , pl.hora_fin as horaFin, tm.id_operacion as idOperacion, maq.id as idMaquina ,maq.nombre as nombreMaquina , pie.id as idPieza,
        pie.nombre as nombrePieza , mol.id as idMolde,  mol.nombre as nombreMolde , tp.id as idTipoProceso, tp.nombre as tipoProceso
        , pl.id_proceso as idProceso
        from planillas_produccion pl
        join moldes mol on pl.id_molde = mol.id
        join procesos p on pl.id_proceso = p.id
        join piezas pie on p.id_pieza = pie.id
        join maquinas maq on p.id_maquina = maq.id
        join tipos_proceso tp on p.id_tipos_proceso = tp.id
        join tipos_maquina tm on maq.id_tipos_maquina = tm.id
        where pl.estado = 1
        and  pl.fe_fundicion between '${fechaDesdeFundicion}' and '${fechaHastaFundicon}'
        and  pl.fe_produccion between '${fechaDesdeProduccion}' and '${fechaHastaProduccion}'
        and ( ${idMaquina} is null  or p.id_maquina =  ${idMaquina} )
        and ( ${idPieza} is null  or p.id_pieza =  ${idPieza} )
        and ( ${idMolde} is null  or pl.id_molde =  ${idMolde} )
        and ( ${idTipoProceso} is null  or p.id_tipos_proceso =  ${idTipoProceso} )
        and ( ${idTipoMaquina} is null  or maq.id_tipos_maquina =  ${idTipoMaquina} ) `;
    const consultaPlanilla = new Request(transaccion);
    const consultaOperariosXplanilla = new Request(transaccion);
    const consultaRechazos = new Request(transaccion);
    const consultaZonas = new Request(transaccion);
    const consultaPM = new Request(transaccion);
    var vecPlanillaProduccion = [];
    var vecTrabajadores;
    var vecRechazos;
    var vecZonas;
    var vecPM;

    try {
      var resultPlanillaProduccion = await consultaPlanilla.query(sqlConsulta);

      if (Array.isArray(resultPlanillaProduccion.recordset)) {
        resultPlanillaProduccion.recordset.forEach(pla => {
          var planilla = {
            idPlanilla: pla.idPlanilla,
            fechaCarga: pla.fechaCarga,
            fechaProduccion: pla.fechaProduccion,
            fechaFundicion: pla.fechaFundicion,
            horaInicio: new Moment(pla.horaInicio).format("HH:mm"),
            horaFin: new Moment(pla.horaFin).format("HH:mm"),
            idOperacion: pla.idOperacion,
            idMaquina: pla.idMaquina,
            nombreMaquina: pla.nombreMaquina,
            idPieza: pla.idPieza,
            nombrePieza: pla.nombrePieza,
            idMolde: pla.idMolde,
            nombreMolde: pla.nombreMolde,
            idTipoProceso: pla.idTipoProceso,
            tipoProceso: pla.tipoProceso,
            idProceso: pla.idProceso
          };
          vecPlanillaProduccion.push(planilla);
        });
        var listaIdPlanillasProduc = '';
        vecPlanillaProduccion.forEach((pla, indexPlanilla) => {
          if (indexPlanilla === resultPlanillaProduccion.recordset.length - 1) {
            listaIdPlanillasProduc += `${parseInt(pla.idPlanilla)} `;
          } else {
            listaIdPlanillasProduc += `${parseInt(pla.idPlanilla)} ,`;
          }
        });
        var sqlConsultaOperariosXplanilla = `select txp.id as idTrabajadorXplanilla , t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador, tur.descripcion  as turnoTrabajador ,
                txp.hora_inicio as horaInicio , txp.hora_fin as horaFin,  txp.pza_producidas as piezasProducidas ,
                txp.calorias as calorias , txp.id_planilla as idPlanilla , txp.id_trabajador as idTrabajador , txp.id_turno as idTurno
                from trabajador_x_planilla txp
                join trabajadores t on txp.id_trabajador = t.id
                join turnos tur on txp.id_turno = tur.id
                where txp.estado = 1
                and txp.id_planilla in ( ${listaIdPlanillasProduc} )  ; `;
        var sqlConsultaPM = ` select pmxp.id as idParadaMaquinaXplanilla , pm.id as idParadaMaquina , pm.nombre as nombreParadaMaquina ,
                pmxp.hora_incio as horaInicioParadaMaquina , pmxp.hora_fin as horaFinParadaMaquina , pmxp.id_planilla as idPlanilla , pm.tipo as tipoParadaMaquina
                from paradas_maquinas_x_planilla pmxp
                join paradas_maquina pm on pmxp.id_paradas_maquina = pm.id
                where pmxp.estado = 1
                and pmxp.id_planilla in ( ${listaIdPlanillasProduc} ) ; `;
        const trabajadoresXplanilla = await consultaOperariosXplanilla.query(sqlConsultaOperariosXplanilla + sqlConsultaPM);

        if (trabajadoresXplanilla.recordsets[0] && trabajadoresXplanilla.recordsets[1]) {
          vecTrabajadores = trabajadoresXplanilla.recordsets[0];
          vecPM = trabajadoresXplanilla.recordsets[1];
          var listaIdTrabajadores = '';
          vecTrabajadores.forEach((t, i) => {
            if (i === vecTrabajadores.length - 1) {
              listaIdTrabajadores += `${parseInt(t.idTrabajadorXplanilla)} `;
            } else {
              listaIdTrabajadores += `${parseInt(t.idTrabajadorXplanilla)} ,`;
            }
          });
          var sqlConsultaRechazos = ` select rxtyp.id as idRechazoXtrabajadorYplanilla , d.nombre as nombreRechazo ,
                    rxtyp.tipo as tipoRechazo , rxtyp.cantidad as cantidadRechazos , rxtyp.id_trabajador_x_planilla as idTrabajadorXplanilla , rxtyp.id_defecto as idDefecto
                    from rechazos_x_trabajador_y_planilla rxtyp
                    join defectos d on rxtyp.id_defecto = d.id
                    where rxtyp.estado = 1
                    and rxtyp.id_trabajador_x_planilla in ( ${listaIdTrabajadores} ) ; `;
          const rechazos = await consultaRechazos.query(sqlConsultaRechazos);

          if (rechazos.recordset) {
            vecRechazos = rechazos.recordset;
            var listaIdRechazos = '';
            vecRechazos.forEach((re, indexRechazo) => {
              if (indexRechazo === vecRechazos.length - 1) {
                listaIdRechazos += `${parseInt(re.idRechazoXtrabajadorYplanilla)} `;
              } else {
                listaIdRechazos += `${parseInt(re.idRechazoXtrabajadorYplanilla)} ,`;
              }
            });
            const sqlConsultaZonas = ` select zxryp.id as idZona , zxryp.letra as letraZona ,
                        zxryp.numero as numeroZona , zxryp.cantidad as cantidadZona ,
                        zxryp.id_rechazos_x_trabajador_y_planilla as idRechazosXtrabajadorYplanilla
                        from zonas_x_rechazo_x_planilla zxryp
                        where zxryp.estado = 1
                        and zxryp.id_rechazos_x_trabajador_y_planilla in ( ${listaIdRechazos} ) ; `;

            var direrenciaEnMinutos = (horaInicio, horaFin) => {
              const h_inicio = new Moment(horaInicio).format("HH:mm");
              var h_fin = new Moment(horaFin).format("HH:mm");
              var hDesde = new Date(`1995-12-17T03:${h_inicio}`);
              var hHasta = new Date(`1995-12-17T03:${h_fin}`);

              if (h_inicio === '06:00' && h_fin === '06:00') {
                return 24 * 60;
              } else if ((hHasta - hDesde) / 1000 < 0) {
                return (hHasta - hDesde) / 1000 + 1440;
              } else {
                return (hHasta - hDesde) / 1000;
              }
            };

            var listaZonas = await consultaZonas.query(sqlConsultaZonas);

            if (listaZonas.recordset) {
              vecZonas = listaZonas.recordset;
              vecPlanillaProduccion.forEach((pl, indexPlanilla) => {
                pl.vecOperarios = [];
                pl.vecParadasMaquinaSeleccionada = [];
                vecPM.forEach(pm => {
                  if (parseInt(pm.idPlanilla) === parseInt(pl.idPlanilla)) {
                    var paradaMaq = {
                      idParadaMaquinaXplanilla: pm.idParadaMaquinaXplanilla,
                      idParadaMaquina: pm.idParadaMaquina,
                      nombreParadaMaquina: pm.nombreParadaMaquina,
                      desdeParadaMaquina: new Moment(pm.horaInicioParadaMaquina).format("HH:mm"),
                      hastaParadaMaquina: new Moment(pm.horaFinParadaMaquina).format("HH:mm"),
                      duracionParadaMaquina: direrenciaEnMinutos(pm.horaInicioParadaMaquina, pm.horaFinParadaMaquina),
                      tipoParadaMaquina: pm.tipoParadaMaquina
                    };
                    pl.vecParadasMaquinaSeleccionada.push(paradaMaq);
                  }
                });
                vecTrabajadores.forEach((tr, indexTrabajador) => {
                  if (parseInt(pl.idPlanilla) === parseInt(tr.idPlanilla)) {
                    var traXpla = {
                      idTrabajadorXplanilla: tr.idTrabajadorXplanilla,
                      idOperario: tr.idTrabajador,
                      idTurno: tr.idTurno,
                      nombreTrabajador: tr.nombreTrabajador,
                      nombre: tr.idTrabajador,
                      apellidoTrabajador: tr.apellidoTrabajador,
                      turnoTrabajador: tr.turnoTrabajador,
                      horaInicio: new Moment(tr.horaInicio).format("HH:mm"),
                      horaFin: new Moment(tr.horaFin).format("HH:mm"),
                      produccion: tr.piezasProducidas,
                      calorias: tr.calorias,
                      vecRechazo: []
                    };
                    vecRechazos.forEach(re => {
                      if (parseInt(traXpla.idTrabajadorXplanilla) === parseInt(re.idTrabajadorXplanilla)) {
                        var rech = {
                          idRechazoXtrabajadorYplanilla: re.idRechazoXtrabajadorYplanilla,
                          idRechazo: re.idDefecto,
                          nombreRechazo: re.nombreRechazo,
                          tipo: re.tipoRechazo,
                          cantidadRechazo: re.cantidadRechazos,
                          vecZonas: []
                        };
                        vecZonas.forEach(zon => {
                          if (parseInt(zon.idRechazosXtrabajadorYplanilla) === parseInt(rech.idRechazoXtrabajadorYplanilla)) {
                            var zonaXrecha = {
                              idZona: zon.idZona,
                              letra: zon.letraZona,
                              numero: zon.numeroZona,
                              cantidad: zon.cantidadZona
                            };
                            rech.vecZonas.push(zonaXrecha);
                          }
                        });
                        traXpla.vecRechazo.push(rech);
                      }
                    });
                    pl.vecOperarios.push(traXpla);
                  }
                });
              }); // hola mundo 

              transaccion.commit();
              cerrarConexionPOOL();
              res.json(vecPlanillaProduccion);
            }
          }
        }
      }
    } catch (e) {
      transaccion.rollback();
      cerrarConexionPOOL();
      res.json({
        mensaje: e.message
      });
    }
  });
});
router.post('/', async (req, res) => {
  var {
    fechaProduccion,
    fechaFundicion,
    idTurno,
    HoraInicioProduccion,
    HoraFinProduccion,
    idOperacion,
    idMaquina,
    idPieza,
    idMolde,
    idTipoProceso,
    vecOperarios,
    vecParadasMaquinaSeleccionada
  } = req.body;
  var idPlanillaProduccion;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL('consultasa');

  const {
    Transaction
  } = __webpack_require__(/*! mssql */ "mssql");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  const {
    Request,
    PreparedStatement
  } = __webpack_require__(/*! mssql */ "mssql");

  const transaccion = await new Transaction(conexionAbierta);
  const ps_insercionPlanillaProduccion = await new PreparedStatement(transaccion);
  const consultaIDplanillaProduccion = await new Request(transaccion);

  const asincrono = __webpack_require__(/*! async */ "async");

  transaccion.begin(async function (err) {
    if (!err) {
      const metodoTransaccion = async () => {
        try {
          ps_insercionPlanillaProduccion.input('fe_produccion', mssql.Date);
          ps_insercionPlanillaProduccion.input('fe_fundicion', mssql.Date);
          ps_insercionPlanillaProduccion.input('hora_inicio', mssql.Time);
          ps_insercionPlanillaProduccion.input('hora_fin', mssql.Time);
          ps_insercionPlanillaProduccion.input('id_molde', mssql.Int);
          await ps_insercionPlanillaProduccion.prepare(`set dateformat dmy ;
                        declare @idProce int ;
                        set @idProce = (select top 1 id from procesos p  where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and id_tipos_proceso = ${idTipoProceso} and estado = 1 ) ;
                        insert into planillas_produccion
                        ( fe_carga , fe_produccion , fe_fundicion , hora_inicio , hora_fin , id_proceso , id_molde  , estado )
                        values
                        ( GETDATE() , @fe_produccion , @fe_fundicion , @hora_inicio , @hora_fin , @idProce , @id_molde , 1 )`);
          const datosPlanillaProduccion = {
            fe_produccion: fechaProduccion,
            fe_fundicion: fechaFundicion,
            hora_inicio:  true ? convierteHora(HoraInicioProduccion) : undefined,
            hora_fin:  true ? convierteHora(HoraFinProduccion) : undefined,
            id_turno: parseInt(idTurno),
            id_molde: parseInt(idMolde)
          };
          var resultC1;
          resultC1 = await ps_insercionPlanillaProduccion.execute(datosPlanillaProduccion);
          const unprepared = await ps_insercionPlanillaProduccion.unprepare();

          if (unprepared) {
            transaccion.rollback();
            cerrarConexionPOOL();
            res.json({
              mensaje: 'Error InsercionPlanilla'.yellow
            });
          }

          if (resultC1) {
            idPlanillaProduccion = await consultaIDplanillaProduccion.query(`select max( id ) as idPlanilla from planillas_produccion`);
          }

          if (idPlanillaProduccion.recordset[0].idPlanilla && !isNaN(idPlanillaProduccion.recordset[0].idPlanilla)) {
            var vecOperariosXplanilla = [];
            vecOperarios.forEach(operario => {
              var op = {
                calorias: parseInt(operario.calorias),
                pza_producidas: parseInt(operario.produccion),
                hora_inicio:  true ? convierteHora(operario.horaInicio) : undefined,
                hora_fin:  true ? convierteHora(operario.horaFin) : undefined,
                id_trabajador: parseInt(operario.idOperario),
                id_planilla: parseInt(idPlanillaProduccion.recordset[0].idPlanilla),
                id_turno: parseInt(operario.idTurno),
                vecRechazos: operario.vecRechazo
              };
              vecOperariosXplanilla.push(op);
            });
            asincrono.eachSeries(vecOperariosXplanilla, (trabajador, callback) => {
              const ps_insercionTrabajadoresXPlanilla = new Request(transaccion);
              ps_insercionTrabajadoresXPlanilla.input('calorias', mssql.Int, trabajador.calorias);
              ps_insercionTrabajadoresXPlanilla.input('pza_producidas', mssql.Int, trabajador.pza_producidas);
              ps_insercionTrabajadoresXPlanilla.input('id_turno', mssql.Int, trabajador.id_turno);
              ps_insercionTrabajadoresXPlanilla.input('hora_inicio', mssql.Time, trabajador.hora_inicio);
              ps_insercionTrabajadoresXPlanilla.input('hora_fin', mssql.Time, trabajador.hora_fin);
              ps_insercionTrabajadoresXPlanilla.input('id_trabajador', mssql.Int, trabajador.id_trabajador);
              ps_insercionTrabajadoresXPlanilla.input('id_planilla', mssql.Int, trabajador.id_planilla);
              var vecRechazosTrabajadorXplanilla = [];
              trabajador.vecRechazos.forEach(re => {
                var rechazoZ = {
                  cantidad: parseInt(re.cantidadRechazo),
                  tipo: re.tipo ? 1 : 0,
                  id_defecto: parseInt(re.idRechazo),
                  vecZonas: re.vecZonas
                };
                vecRechazosTrabajadorXplanilla.push(rechazoZ);
              });
              var consulta = `insert into trabajador_x_planilla
                            (calorias , pza_producidas, id_turno , hora_inicio , hora_fin , id_trabajador , id_planilla , estado)
                            values
                            (@calorias , @pza_producidas , @id_turno , @hora_inicio , @hora_fin , @id_trabajador , @id_planilla , 1) ;
                            declare @id_trabajador_x_planilla int ;
                            declare @id_rechazos_x_trabajador_y_planilla int ;
                            set @id_trabajador_x_planilla = ( select max( id ) as idTrabajadorXplanilla from trabajador_x_planilla ) ; `;
              vecRechazosTrabajadorXplanilla.forEach(rechazo => {
                consulta += `insert into rechazos_x_trabajador_y_planilla
                                (cantidad , tipo , id_defecto , id_trabajador_x_planilla , estado)
                                values
                                ( ${rechazo.cantidad}, ${rechazo.tipo} , ${rechazo.id_defecto} , @id_trabajador_x_planilla ,1) ;
                                set @id_rechazos_x_trabajador_y_planilla = (select max(id) from rechazos_x_trabajador_y_planilla) ; `;
                var vecZonasXrechazo = [];
                rechazo.vecZonas.forEach(zona => {
                  var zoo = {
                    cantidad: parseInt(zona.cantidad),
                    letra: zona.letra,
                    numero: parseInt(zona.numero)
                  };
                  vecZonasXrechazo.push(zoo);
                });
                vecZonasXrechazo.forEach(zona => {
                  consulta += ` insert into zonas_x_rechazo_x_planilla
                                    (cantidad , letra , numero , id_rechazos_x_trabajador_y_planilla , estado )
                                    values
                                    ( ${zona.cantidad} , '${zona.letra}' , ${zona.numero} , @id_rechazos_x_trabajador_y_planilla , 1 ) ; `;
                });
              });
              ps_insercionTrabajadoresXPlanilla.query(consulta, (err, result) => {
                if (err) {
                  callback(err);
                } else {
                  callback();
                }
              });
            }, err => {
              if (err) {
                transaccion.rollback();
                cerrarConexionPOOL();
                res.json({
                  mensaje: err.message
                });
              } else {
                var vecParadasDeMaquina = [];
                vecParadasMaquinaSeleccionada.forEach(pm => {
                  var paraMAC = {
                    hora_inicio:  true ? convierteHora(pm.desdeParadaMaquina) : undefined,
                    hora_fin:  true ? convierteHora(pm.hastaParadaMaquina) : undefined,
                    id_paradas_maquina: parseInt(pm.idParadaMaquina),
                    id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                  };
                  vecParadasDeMaquina.push(paraMAC);
                });
                asincrono.eachSeries(vecParadasDeMaquina, (PM, callbackPM) => {
                  const consultaInsercionParadasDeMaquina = new Request(transaccion);
                  consultaInsercionParadasDeMaquina.input('hora_incio', mssql.Time, PM.hora_inicio);
                  consultaInsercionParadasDeMaquina.input('hora_fin', mssql.Time, PM.hora_fin);
                  consultaInsercionParadasDeMaquina.input('id_paradas_maquina', mssql.Int, PM.id_paradas_maquina);
                  consultaInsercionParadasDeMaquina.input('id_planilla', mssql.Int, PM.id_planilla);
                  consultaInsercionParadasDeMaquina.query(`insert into paradas_maquinas_x_planilla
                                        ( hora_incio , hora_fin , id_paradas_maquina , id_planilla , estado )
                                        values
                                        ( @hora_incio , @hora_fin , @id_paradas_maquina , @id_planilla , 1 )`, (ER, resultPM) => {
                    if (ER) {
                      callbackPM(ER);
                    } else {
                      callbackPM();
                    }
                  });
                }, erroR => {
                  if (erroR) {
                    transaccion.rollback();
                    cerrarConexionPOOL();
                    res.json({
                      mensaje: erroR.message
                    });
                  } else {
                    transaccion.commit();
                    cerrarConexionPOOL();
                    res.setHeader('Content-Type', 'text/event-stream');
                    res.json({
                      mensaje: 'Transaccion exitosa'
                    });
                  }
                });
              }
            }); // ! FIN FOR EACH
          } //! FIN  IIF

        } //! FIN DEL TRY
        catch (e) {
          transaccion.rollback();
          cerrarConexionPOOL();
          res.json({
            mensaje: e.message,
            mensaje2: 'Error catch FINAL'
          });
        }
      };

      metodoTransaccion();
    } else {
      console.log('err commit');
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/procesos.js":
/*!******************************!*\
  !*** ./rutasApi/procesos.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select id as idTipoProceso, nombre as nombreTipoProceso
        from tipos_proceso
        where estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/xmaquinapiezatipo', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    idMaquina,
    idPieza,
    idTipoProceso
  } = req.body;

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select pro.id as idProceso, pro.descripcion as descripcionProceso
        from procesos pro
        where pro.estado = 1
        and pro.id_pieza = ${idPieza}
        and pro.id_maquina = ${idMaquina}
        and pro.id_tipos_proceso = ${idTipoProceso}`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposProceso.js":
/*!**********************************!*\
  !*** ./rutasApi/tiposProceso.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query('select id as idTipoProceso, nombre as nombreTipoProceso from tipos_proceso where estado = 1 ', (e, result) => {
    if (e) {
      cerrarConexion();
      res.json({
        mensaje: e.message
      });
    } else {
      cerrarConexion();
      res.json(result.recordset);
    }
  });
});
router.post('/', async (req, res) => {
  const {
    idPieza,
    idMaquina
  } = req.body;

  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query(`select tp.id as idTipoProceso, tp.nombre as nombreTipoProceso from tipos_proceso tp
    join procesos p on tp.id = p.id_tipos_proceso where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and tp.estado = 1`, (e, result) => {
    if (e) {
      cerrarConexion();
      res.json({
        mensaje: e.message
      });
    } else {
      cerrarConexion();
      res.json(result.recordset);
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/trabajadores.js":
/*!**********************************!*\
  !*** ./rutasApi/trabajadores.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  await abrirConexion();
  var consulta = new Request();
  consulta.query(`select t.id as idTrabajador, t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador,
        t.f_nacimiento as fechaNacimientoTrabajador, t.f_ingreso as fechaIngresoTrabajador,
        t.id_puesto as idPuestoTrabajador, p.nombre as nombrePuesto
        from trabajadores t
        join puestos p on t.id_puesto=p.id
        where t.estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/turnos.js":
/*!****************************!*\
  !*** ./rutasApi/turnos.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select t.id as idTurno, t.descripcion as descripcionTurno,t.hs_inicio as hsInicioTurno ,t.hs_fin as hsFinTurno  
        from turnos t
        where estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/usuarios.js":
/*!******************************!*\
  !*** ./rutasApi/usuarios.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const bcryp = __webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs");

__webpack_require__(/*! ../conexiones/mongoDb */ "./conexiones/mongoDb.js");

const Usuario = __webpack_require__(/*! ../esquemasMongo/esquemaUsuarios */ "./esquemasMongo/esquemaUsuarios.js");

const Perfil = __webpack_require__(/*! ../esquemasMongo/esquemaRolesUsuarios */ "./esquemasMongo/esquemaRolesUsuarios.js");

const router = Router();
router.get('/', async (req, res) => {
  await Usuario.find((e, dato) => {
    e ? res.status(403).send('Error en el request') : res.status(200).send(dato);
  });
});
router.get('/perfiles', async (req, res) => {
  try {
    const listaPerfiles = await Perfil.find();
    res.status(200).json(listaPerfiles);
  } catch (e) {
    res.status(404).json({
      mensaje: e.message
    });
  }
});
router.post('/perfiles', async (req, res) => {
  try {
    const {
      perfil
    } = req.body;
    const newPerfil = new Perfil({
      perfil
    });
    await newPerfil.save();
    res.status(200).json({
      mensaje: 'Guardado Exitosamente !'
    });
  } catch (e) {
    res.status(403).json({
      mensaje: e.message
    });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const user = await Usuario.findById({
      _id: req.params.id
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(403).json({
      mensaje: e.message
    });
  }
});
router.post('/', async (req, res) => {
  try {
    var {
      userName,
      password,
      email,
      nombre,
      apellido,
      perfil
    } = req.body;
    password = await bcryp.hashSync(password);
    const newUser = new Usuario({
      userName,
      password,
      email,
      nombre,
      apellido,
      perfil
    });
    const dato = await newUser.save();
    res.status(200).json({
      mensaje: 'Usuario guardado exitosamente !'
    });
  } catch (err) {
    res.status(403).json({
      error: err.message
    });
  }
});
router.put('/:id', (req, res) => {
  const {
    id
  } = req.params;
  const body = req.body;

  if (body.password) {
    body.password = bcryp.hashSync(body.password);
  }

  Usuario.findByIdAndUpdate({
    _id: id
  }, body, (e, d) => {
    e ? res.status(403).json({
      error: e.message
    }) : res.status(200).json({
      mensaje: 'Modificado correctamente !'
    });
  });
});
module.exports = router;

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mssql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zUHJvY2Vzby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90cmFiYWphZG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHVybm9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0LW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbmV4aW9uIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJyZWQiLCJtc3NxbCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJ0aGVuIiwiX2Nvbm5lY3RlZCIsImJsdWUiLCJncmVlbiIsImNsb3NlIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiYXJncyIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJwZXJmaWwiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwiZW51bSIsInNldCIsIm1vZGVsIiwidXN1YXJpbyIsInVzZXJOYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIm5vbWJyZSIsImFwZWxsaWRvIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsIlVzdWFyaW8iLCJwb3N0IiwibmV4dCIsImZpbmQiLCJib2R5IiwidmVyaWZpY2FQYXNzIiwiY29tcGFyZVN5bmMiLCJtaVVzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiUmVxdWVzdCIsImNvbnN1bHRhIiwicXVlcnkiLCJlcnIiLCJkYXRvIiwicmVjb3Jkc2V0IiwibWVzc2FnZSIsImlkT3BlcmFjaW9uIiwicGFyYW1zIiwiaWRQaWV6YSIsImlkTWFxdWluYSIsIk1vbWVudCIsImNvbnZpZXJ0ZUhvcmEiLCJob3JhIiwiSG9ySW5pY2lvbk8iLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImZlY2hhRGVzZGVQcm9kdWNjaW9uIiwiZmVjaGFIYXN0YVByb2R1Y2Npb24iLCJmZWNoYURlc2RlRnVuZGljaW9uIiwiZmVjaGFIYXN0YUZ1bmRpY29uIiwiaWRNb2xkZSIsImlkVGlwb1Byb2Nlc28iLCJpZFRpcG9NYXF1aW5hIiwiY29uZXhpb25BYmllcnRhIiwiVHJhbnNhY3Rpb24iLCJ0cmFuc2FjY2lvbiIsImJlZ2luIiwic3FsQ29uc3VsdGEiLCJjb25zdWx0YVBsYW5pbGxhIiwiY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEiLCJjb25zdWx0YVJlY2hhem9zIiwiY29uc3VsdGFab25hcyIsImNvbnN1bHRhUE0iLCJ2ZWNQbGFuaWxsYVByb2R1Y2Npb24iLCJ2ZWNUcmFiYWphZG9yZXMiLCJ2ZWNSZWNoYXpvcyIsInZlY1pvbmFzIiwidmVjUE0iLCJyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24iLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwicGxhIiwicGxhbmlsbGEiLCJpZFBsYW5pbGxhIiwiZmVjaGFDYXJnYSIsImZlY2hhUHJvZHVjY2lvbiIsImZlY2hhRnVuZGljaW9uIiwiaG9yYUluaWNpbyIsImZvcm1hdCIsImhvcmFGaW4iLCJub21icmVNYXF1aW5hIiwibm9tYnJlUGllemEiLCJub21icmVNb2xkZSIsInRpcG9Qcm9jZXNvIiwiaWRQcm9jZXNvIiwicHVzaCIsImxpc3RhSWRQbGFuaWxsYXNQcm9kdWMiLCJpbmRleFBsYW5pbGxhIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJkaXJlcmVuY2lhRW5NaW51dG9zIiwiaF9pbmljaW8iLCJoX2ZpbiIsImhEZXNkZSIsImhIYXN0YSIsImxpc3RhWm9uYXMiLCJwbCIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwicG0iLCJwYXJhZGFNYXEiLCJpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEiLCJpZFBhcmFkYU1hcXVpbmEiLCJub21icmVQYXJhZGFNYXF1aW5hIiwiZGVzZGVQYXJhZGFNYXF1aW5hIiwiaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEiLCJoYXN0YVBhcmFkYU1hcXVpbmEiLCJob3JhRmluUGFyYWRhTWFxdWluYSIsImR1cmFjaW9uUGFyYWRhTWFxdWluYSIsInRpcG9QYXJhZGFNYXF1aW5hIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRPcGVyYXJpbyIsImlkVHJhYmFqYWRvciIsImlkVHVybm8iLCJub21icmVUcmFiYWphZG9yIiwiYXBlbGxpZG9UcmFiYWphZG9yIiwidHVybm9UcmFiYWphZG9yIiwicHJvZHVjY2lvbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInZlY1JlY2hhem8iLCJyZWNoIiwiaWRSZWNoYXpvIiwiaWREZWZlY3RvIiwibm9tYnJlUmVjaGF6byIsInRpcG8iLCJ0aXBvUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6b3MiLCJ6b24iLCJpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJ6b25hWHJlY2hhIiwiaWRab25hIiwibGV0cmEiLCJsZXRyYVpvbmEiLCJudW1lcm8iLCJudW1lcm9ab25hIiwiY2FudGlkYWQiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsIkhvcmFJbmljaW9Qcm9kdWNjaW9uIiwiSG9yYUZpblByb2R1Y2Npb24iLCJpZFBsYW5pbGxhUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbiIsImFzaW5jcm9ubyIsIm1ldG9kb1RyYW5zYWNjaW9uIiwiaW5wdXQiLCJUaW1lIiwiSW50IiwicHJlcGFyZSIsImRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIiwiZmVfcHJvZHVjY2lvbiIsImZlX2Z1bmRpY2lvbiIsImhvcmFfaW5pY2lvIiwiaG9yYV9maW4iLCJpZF90dXJubyIsImlkX21vbGRlIiwicmVzdWx0QzEiLCJleGVjdXRlIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsImlzTmFOIiwidmVjT3BlcmFyaW9zWHBsYW5pbGxhIiwib3BlcmFyaW8iLCJvcCIsInB6YV9wcm9kdWNpZGFzIiwiaWRfdHJhYmFqYWRvciIsImlkX3BsYW5pbGxhIiwiZWFjaFNlcmllcyIsInRyYWJhamFkb3IiLCJjYWxsYmFjayIsInBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSIsInZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSIsInJlY2hhem9aIiwiaWRfZGVmZWN0byIsInJlY2hhem8iLCJ2ZWNab25hc1hyZWNoYXpvIiwiem9uYSIsInpvbyIsInJlc3VsdCIsInZlY1BhcmFkYXNEZU1hcXVpbmEiLCJwYXJhTUFDIiwiaWRfcGFyYWRhc19tYXF1aW5hIiwiUE0iLCJjYWxsYmFja1BNIiwiY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hIiwiRVIiLCJyZXN1bHRQTSIsImVycm9SIiwic2V0SGVhZGVyIiwibWVuc2FqZTIiLCJiY3J5cCIsIlBlcmZpbCIsInNlbmQiLCJsaXN0YVBlcmZpbGVzIiwibmV3UGVyZmlsIiwic2F2ZSIsImZpbmRCeUlkIiwiX2lkIiwiaWQiLCJoYXNoU3luYyIsIm5ld1VzZXIiLCJwdXQiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RUFBZ0JsQixJQUFoQixDQUFxQjtBQUFDakUsV0FBSyxFQUFDeUUsQ0FBQyxDQUFDaUM7QUFBVCxLQUFyQixDQUFGLEdBQ0QxQixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCbEIsSUFBaEIsQ0FBcUI7QUFBQ21CLGFBQU8sRUFBQztBQUFULEtBQXJCLENBREE7QUFFSCxHQUhEO0FBSUgsQ0FSRDtBQVVBbEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMkYsTUFBakIsQzs7Ozs7Ozs7Ozs7QUN6RUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VjcmV0OidqYXZpZXIxOTA1J1xyXG59IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxucmVxdWlyZSgnY29sb3JzJylcclxufVxyXG5cclxudmFyIFVSSTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICAgVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxufVxyXG5lbHNle1xyXG4gICAgIFVSSSA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjUwMDA6MjcwMTcvdXN1YXJpb3NFTVMnXHJcbn1cclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoVVJJLHt1c2VOZXdVcmxQYXJzZXI6dHJ1ZSx1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KTtcclxuXHJcbnZhciBjb25leGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG5jb25leGlvbi5vbignZXJyb3InLGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCdlcnJvciBkZSBjb25leGlvbicpKTtcclxuXHJcbmNvbmV4aW9uLm9uY2UoJ29wZW4nLCgpPT57XHJcbiAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJy5yZWQpXHJcbiAgICAgfSBcclxuICAgICBlbHNle1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJylcclxuICAgICB9XHJcbn0pXHJcbiIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpeyByZXF1aXJlKCdjb2xvcnMnKSB9XHJcblxyXG52YXIgVVJJXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5VU0VSU1FMLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwsXHJcbiAgICAgICAgc2VydmVyOnByb2Nlc3MuZW52LlNFUlZFUlNRTCxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdEQmphdicsIC8qIERCamF2IGVtc0RCICAqL1xyXG4gICAgICAgIHBhc3N3b3JkOiAnYmVsZ3Jhbm80NTUnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnRU1TX0RCX1NRTCcsXHJcbiAgICAgICAgcG9ydDoxNDMzLFxyXG4gICAgICAgIHNlcnZlcjonREVTS1RPUC1HMUkwOTdDJywgLyogREVTS1RPUC1HMUkwOTdDICBQQzIzNjAgKi9cclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgYXBwTmFtZTonZW1zLW5vZGUtYXBpJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG52YXIgY29uZXhpb25cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbiAgICAudGhlbihwb29sPT57XHJcbiAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgXHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICBcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBwZXJmaWwgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxuXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3BlcmZpbCcscGVyZmlsKSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgdXN1YXJpbyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG5cclxuICAgIHVzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBlbGxpZG86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgndXN1YXJpbycsdXN1YXJpbykiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhbjtcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSlcclxufVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL21hcXVpbmFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21hcXVpbmFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0ZW50aWZpY2FzaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGllemFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BpZXphcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbW9sZGVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21vbGRlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGVmZWN0b3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvZGVmZWN0b3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL29wZXJhY2lvbmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL29wZXJhY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9jZXNvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9wcm9jZXNvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHVybm9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3R1cm5vcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGFyYWRhc01hcXVpbmEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGFyYWRhc01hcXVpbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RyYWJhamFkb3JlcycscmVxdWlyZSgnLi9ydXRhc0FwaS90cmFiYWphZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NQcm9jZXNvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUHJvY2VzbycpKVxyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyxuZXh0KT0+e1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kKHt1c2VyTmFtZTpyZXEuYm9keS51c2VyTmFtZX0pXHJcbiAgICAgICAgaWYoIXVzZXJbMF0pe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonVXN1YXJpbyBJbmV4aXN0ZW50ZSAhJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCx1c2VyWzBdLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZighdmVyaWZpY2FQYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidQYXNzd29yZCBJbmNvcnJlY3RhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTp1c2VyWzBdLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXJbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnVzZXJbMF0ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvOnVzZXJbMF0uYXBlbGxpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyZmlsOnVzZXJbMF0ucGVyZmlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqd3Quc2lnbihtaVVzdWFyaW8sc2VjcmV0LHtleHBpcmVzSW46MTQ0MDB9LChlLHRva2VuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOidFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJ30pOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe2V9KTtcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hLCBtLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveG9wZXJhY2lvbi86aWRPcGVyYWNpb24nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgY29uc3Qge2lkT3BlcmFjaW9ufSA9IHJlcS5wYXJhbXNcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG0gXHJcbiAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbS5pZF90aXBvc19tYXF1aW5hID0gdG0uaWQgXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDEgYW5kIHRtLmlkX29wZXJhY2lvbiA9ICR7aWRPcGVyYWNpb259YCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkTW9sZGUsaWRfcGllemEgYXMgaWRQaWV6YSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveHBpZXphLzppZFBpZXphJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZFBpZXphfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLCBub21icmUgYXMgbm9tYnJlTW9sZGUgZnJvbSBtb2xkZXMgd2hlcmUgZXN0YWRvID0gMSBhbmQgaWRfcGllemEgPSAnK2lkUGllemEsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZE9wZXJhY2lvbiwgbm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gb3BlcmFjaW9uZXMgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdmFyIHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSwgcG0udGlwbyBhcyB0aXBvUGFyYWRhTWFxdWluYSwgcG0uaWRfYXJlYSBhcyBpZEFyZWEsIGEubm9tYnJlIGFzIG5vbWJyZUFyZWFcclxuICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYSBwbVxyXG5cdFx0am9pbiBhcmVhcyBhIG9uIHBtLmlkX2FyZWE9YS5pZFxyXG4gICAgICAgIHdoZXJlIHBtLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlKXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihkYXRvLnJlY29yZHNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle2NlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IG5ldyByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgICdzZWxlY3QgaWQgYXMgaWRQaWV6YSwgbm9tYnJlIGFzIG5vbWJyZVBpZXphIGZyb20gcGllemFzIHdoZXJlIGVzdGFkbyA9IDEnLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCgnL3htYXF1aW5hLzppZE1hcXVpbmEnLCBhc3luYyAocmVxLHJlcyk9PnsgLy8gISBMSVNUQURPIERFIFBJRVpBUyBTRUdVTiBNQVFVSU5BXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmF9ID0gcmVxLnBhcmFtc1xyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIHByb2Nlc29zIHByb1xyXG4gICAgICAgIG9uIHByby5pZF9waWV6YSA9IHAuaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDEgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH0gXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IE1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuY29uc3QgY29udmllcnRlSG9yYSA9ICggaG9yYSApID0+IHtcclxuICAgIHZhciBIb3JJbmljaW9uTyA9IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7aG9yYX06MDBgKVxyXG4gICAgSG9ySW5pY2lvbk8uc2V0SG91cnMoIEhvckluaWNpb25PLmdldEhvdXJzKCkgLSAzIClcclxuICAgIHJldHVybiBIb3JJbmljaW9uT1xyXG59XHJcblxyXG5yb3V0ZXIucG9zdCggJy9saXN0YWRvJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgZmVjaGFEZXNkZVByb2R1Y2Npb24gLCBmZWNoYUhhc3RhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlRnVuZGljaW9uICwgZmVjaGFIYXN0YUZ1bmRpY29uICwgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgLGlkVGlwb1Byb2Nlc28gLCBpZFRpcG9NYXF1aW5hXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSlcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiggYXN5bmMgZT0+e1xyXG5cclxuICAgICAgICBpZiggZSApIHsgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9ICkgIH1cclxuICAgICAgICBjb25zdCBzcWxDb25zdWx0YSA9IGAgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICBzZWxlY3QgcGwuaWQgYXMgaWRQbGFuaWxsYSwgcGwuZmVfY2FyZ2EgYXMgZmVjaGFDYXJnYSwgcGwuZmVfcHJvZHVjY2lvbiBhcyBmZWNoYVByb2R1Y2Npb24sIHBsLmZlX2Z1bmRpY2lvbiBhcyBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICBwbC5ob3JhX2luaWNpbyBhcyBob3JhSW5pY2lvICwgcGwuaG9yYV9maW4gYXMgaG9yYUZpbiwgdG0uaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLCBtYXEuaWQgYXMgaWRNYXF1aW5hICxtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBwaWUuaWQgYXMgaWRQaWV6YSxcclxuICAgICAgICBwaWUubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgbW9sLmlkIGFzIGlkTW9sZGUsICBtb2wubm9tYnJlIGFzIG5vbWJyZU1vbGRlICwgdHAuaWQgYXMgaWRUaXBvUHJvY2VzbywgdHAubm9tYnJlIGFzIHRpcG9Qcm9jZXNvXHJcbiAgICAgICAgLCBwbC5pZF9wcm9jZXNvIGFzIGlkUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gcGxhbmlsbGFzX3Byb2R1Y2Npb24gcGxcclxuICAgICAgICBqb2luIG1vbGRlcyBtb2wgb24gcGwuaWRfbW9sZGUgPSBtb2wuaWRcclxuICAgICAgICBqb2luIHByb2Nlc29zIHAgb24gcGwuaWRfcHJvY2VzbyA9IHAuaWRcclxuICAgICAgICBqb2luIHBpZXphcyBwaWUgb24gcC5pZF9waWV6YSA9IHBpZS5pZFxyXG4gICAgICAgIGpvaW4gbWFxdWluYXMgbWFxIG9uIHAuaWRfbWFxdWluYSA9IG1hcS5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtYXEuaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcGwuZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCAgcGwuZmVfZnVuZGljaW9uIGJldHdlZW4gJyR7ZmVjaGFEZXNkZUZ1bmRpY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhRnVuZGljb259J1xyXG4gICAgICAgIGFuZCAgcGwuZmVfcHJvZHVjY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVQcm9kdWNjaW9ufScgYW5kICcke2ZlY2hhSGFzdGFQcm9kdWNjaW9ufSdcclxuICAgICAgICBhbmQgKCAkeyBpZE1hcXVpbmEgfSBpcyBudWxsICBvciBwLmlkX21hcXVpbmEgPSAgJHsgaWRNYXF1aW5hIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkUGllemEgfSBpcyBudWxsICBvciBwLmlkX3BpZXphID0gICR7IGlkUGllemEgfSApXHJcbiAgICAgICAgYW5kICggJHsgaWRNb2xkZSB9IGlzIG51bGwgIG9yIHBsLmlkX21vbGRlID0gICR7IGlkTW9sZGUgfSApXHJcbiAgICAgICAgYW5kICggJHsgaWRUaXBvUHJvY2VzbyB9IGlzIG51bGwgIG9yIHAuaWRfdGlwb3NfcHJvY2VzbyA9ICAkeyBpZFRpcG9Qcm9jZXNvIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb01hcXVpbmEgfSBpcyBudWxsICBvciBtYXEuaWRfdGlwb3NfbWFxdWluYSA9ICAkeyBpZFRpcG9NYXF1aW5hIH0gKSBgXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSA9IGBzZWxlY3QgdHhwLmlkIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSAsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLCB0dXIuZGVzY3JpcGNpb24gIGFzIHR1cm5vVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICB0eHAuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHR4cC5ob3JhX2ZpbiBhcyBob3JhRmluLCAgdHhwLnB6YV9wcm9kdWNpZGFzIGFzIHBpZXphc1Byb2R1Y2lkYXMgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmNhbG9yaWFzIGFzIGNhbG9yaWFzICwgdHhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCB0eHAuaWRfdHJhYmFqYWRvciBhcyBpZFRyYWJhamFkb3IgLCB0eHAuaWRfdHVybm8gYXMgaWRUdXJub1xyXG4gICAgICAgICAgICAgICAgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdHhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHRyYWJhamFkb3JlcyB0IG9uIHR4cC5pZF90cmFiYWphZG9yID0gdC5pZFxyXG4gICAgICAgICAgICAgICAgam9pbiB0dXJub3MgdHVyIG9uIHR4cC5pZF90dXJubyA9IHR1ci5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgdHhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCB0eHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSAgOyBgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhYmFqYWRvcmVzWHBsYW5pbGxhID0gYXdhaXQgIGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhLnF1ZXJ5KCBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSArIHNxbENvbnN1bHRhUE0gKVxyXG4gICAgICAgICAgICAgICAgaWYodHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF0gJiYgdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3JlcyA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUE0gPSB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkVHJhYmFqYWRvcmVzID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMuZm9yRWFjaCgoIHQgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggaSA9PT0gKCB2ZWNUcmFiYWphZG9yZXMubGVuZ3RoIC0gMSkpeyBsaXN0YUlkVHJhYmFqYWRvcmVzICs9IGAke3BhcnNlSW50KHQuaWRUcmFiYWphZG9yWHBsYW5pbGxhKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2hhem9zID0gYXdhaXQgY29uc3VsdGFSZWNoYXpvcy5xdWVyeSggc3FsQ29uc3VsdGFSZWNoYXpvcyApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlY2hhem9zLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcyA9IHJlY2hhem9zLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFJlY2hhem9zID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggKCByZSAsICBpbmRleFJlY2hhem8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhSZWNoYXpvID09PSAoIHZlY1JlY2hhem9zLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFJlY2hhem9zICs9IGAke3BhcnNlSW50KCByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSApfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludChyZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxbENvbnN1bHRhWm9uYXMgPSBgIHNlbGVjdCB6eHJ5cC5pZCBhcyBpZFpvbmEgLCB6eHJ5cC5sZXRyYSBhcyBsZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5udW1lcm8gYXMgbnVtZXJvWm9uYSAsIHp4cnlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGFzIGlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHp4cnlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHp4cnlwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFJlY2hhem9zIH0gKSA7IGBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZXJlbmNpYUVuTWludXRvcyA9IChob3JhSW5pY2lvLGhvcmFGaW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhfaW5pY2lvID0gbmV3IE1vbWVudCAoICBob3JhSW5pY2lvICApLmZvcm1hdCAoIFwiSEg6bW1cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaF9maW4gPSBuZXcgTW9tZW50ICggIGhvcmFGaW4gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoRGVzZGUgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfaW5pY2lvfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaEhhc3RhID0gbmV3IERhdGUoYDE5OTUtMTItMTdUMDM6JHtoX2Zpbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaF9pbmljaW8gPT09ICcwNjowMCcgJiYgaF9maW4gPT09ICcwNjowMCcpeyAgcmV0dXJuIDI0ICogNjAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoKGhIYXN0YS1oRGVzZGUpLzEwMDAgPCAwKXsgcmV0dXJuIChoSGFzdGEtaERlc2RlKS8xMDAwICsgMTQ0MCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YVpvbmFzID0gYXdhaXQgY29uc3VsdGFab25hcy5xdWVyeSggc3FsQ29uc3VsdGFab25hcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBsaXN0YVpvbmFzLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMgPSBsaXN0YVpvbmFzLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goIChwbCAsIGluZGV4UGxhbmlsbGEgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUE0uZm9yRWFjaCggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHBtLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhZGFNYXEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhOiBwbS5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYSA6IHBtLmlkUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGFyYWRhTWFxdWluYSA6IHBtLm5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2RlUGFyYWRhTWFxdWluYSA6IG5ldyBNb21lbnQgKCBwbS5ob3JhSW5pY2lvUGFyYWRhTWFxdWluYSApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc3RhUGFyYWRhTWFxdWluYSA6IG5ldyBNb21lbnQgKCBwbS5ob3JhRmluUGFyYWRhTWFxdWluYSApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmFjaW9uUGFyYWRhTWFxdWluYSA6IGRpcmVyZW5jaWFFbk1pbnV0b3MoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9QYXJhZGFNYXF1aW5hIDogcG0udGlwb1BhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLnB1c2goIHBhcmFkYU1hcSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCAodHIgLCBpbmRleFRyYWJhamFkb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApID09PSBwYXJzZUludCAoIHRyLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFYcGxhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHJhYmFqYWRvclhwbGFuaWxsYSA6IHRyLmlkVHJhYmFqYWRvclhwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvIDogdHIuaWRUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFR1cm5vIDogdHIuaWRUdXJubyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVHJhYmFqYWRvciA6IHRyLm5vbWJyZVRyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlIDogdHIuaWRUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb1RyYWJhamFkb3IgOiB0ci5hcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybm9UcmFiYWphZG9yIDogdHIudHVybm9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiBuZXcgTW9tZW50ICggdHIuaG9yYUluaWNpbyApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggdHIuaG9yYUZpbiApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y2Npb24gOiB0ci5waWV6YXNQcm9kdWNpZGFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzIDogdHIuY2Fsb3JpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6byA6IFsgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggdHJhWHBsYS5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQgKCByZS5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSA6IHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvIDogcmUuaWREZWZlY3RvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVJlY2hhem8gOiByZS5ub21icmVSZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG8gOiByZS50aXBvUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZFJlY2hhem8gOiByZS5jYW50aWRhZFJlY2hhem9zICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcy5mb3JFYWNoKCB6b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggem9uLmlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSApID09PSBwYXJzZUludCggcmVjaC5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSAgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b25hWHJlY2hhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hIDogem9uLmlkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYSA6IHpvbi5sZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogem9uLm51bWVyb1pvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiB6b24uY2FudGlkYWRab25hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaC52ZWNab25hcy5wdXNoKCB6b25hWHJlY2hhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFYcGxhLnZlY1JlY2hhem8ucHVzaCggcmVjaCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY09wZXJhcmlvcy5wdXNoKCB0cmFYcGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgLy8gaG9sYSBtdW5kbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLmpzb24oeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiwgIGlkT3BlcmFjaW9uLCBpZE1hcXVpbmEsICBpZFBpZXphLCAgaWRNb2xkZSwgaWRUaXBvUHJvY2VzbyxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIHZhciAgaWRQbGFuaWxsYVByb2R1Y2Npb25cclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICdjb25zdWx0YXNhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCxQcmVwYXJlZFN0YXRlbWVudCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24oIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbihhc3luYyBmdW5jdGlvbiAoIGVyciApICB7XHJcbiAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9wcm9kdWNjaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9mdW5kaWNpb24nLG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2hvcmFfaW5pY2lvJyxtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2ZpbicsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaWRfbW9sZGUnLG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnByZXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZFByb2NlIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRQcm9jZSA9IChzZWxlY3QgdG9wIDEgaWQgZnJvbSBwcm9jZXNvcyBwICB3aGVyZSBwLmlkX21hcXVpbmEgPSAkeyBpZE1hcXVpbmEgfSBhbmQgcC5pZF9waWV6YSA9ICR7IGlkUGllemEgfSBhbmQgaWRfdGlwb3NfcHJvY2VzbyA9ICR7IGlkVGlwb1Byb2Nlc28gfSBhbmQgZXN0YWRvID0gMSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0IGludG8gcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBmZV9jYXJnYSAsIGZlX3Byb2R1Y2Npb24gLCBmZV9mdW5kaWNpb24gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfcHJvY2VzbyAsIGlkX21vbGRlICAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIEdFVERBVEUoKSAsIEBmZV9wcm9kdWNjaW9uICwgQGZlX2Z1bmRpY2lvbiAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZFByb2NlICwgQGlkX21vbGRlICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbjogZmVjaGFQcm9kdWNjaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFJbmljaW9Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFJbmljaW9Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFGaW5Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFGaW5Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGU6IHBhcnNlSW50KCBpZE1vbGRlIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEMxXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSggZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJlcGFyZWQgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24udW5wcmVwYXJlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiggdW5wcmVwYXJlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOidFcnJvciBJbnNlcmNpb25QbGFuaWxsYScueWVsbG93IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRDMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbi5xdWVyeSggYHNlbGVjdCBtYXgoIGlkICkgYXMgaWRQbGFuaWxsYSBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uYCApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICYmICEgaXNOYU4oIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2goIG9wZXJhcmlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhczogcGFyc2VJbnQoIG9wZXJhcmlvLmNhbG9yaWFzICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHphX3Byb2R1Y2lkYXM6IHBhcnNlSW50KCBvcGVyYXJpby5wcm9kdWNjaW9uICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhSW5pY2lvICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFJbmljaW99OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHJhYmFqYWRvcjogcGFyc2VJbnQoIG9wZXJhcmlvLmlkT3BlcmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBwYXJzZUludCggaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIG9wZXJhcmlvLmlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zWHBsYW5pbGxhLnB1c2goIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXModmVjT3BlcmFyaW9zWHBsYW5pbGxhLCggdHJhYmFqYWRvciwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2NhbG9yaWFzJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ3B6YV9wcm9kdWNpZGFzJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLnB6YV9wcm9kdWNpZGFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2lkX3R1cm5vJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLmlkX3R1cm5vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2hvcmFfaW5pY2lvJywgbXNzcWwuVGltZSwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdob3JhX2ZpbicsIG1zc3FsLlRpbWUsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0KCAnaWRfdHJhYmFqYWRvcicsIG1zc3FsLkludCwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2lkX3BsYW5pbGxhJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG86IHJlLnRpcG8gPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfZGVmZWN0bzogcGFyc2VJbnQoIHJlLmlkUmVjaGF6byApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLnB1c2goIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoKCByZWNoYXpvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgaW5zZXJ0IGludG8gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHJlY2hhem8uY2FudGlkYWQgfSwgJHsgcmVjaGF6by50aXBvIH0gLCAkeyByZWNoYXpvLmlkX2RlZmVjdG8gfSAsIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNab25hc1hyZWNoYXpvID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50KCB6b25hLmNhbnRpZGFkICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYTogem9uYS5sZXRyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybzogcGFyc2VJbnQoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgIGluc2VydCBpbnRvIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIGxldHJhICwgbnVtZXJvICwgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyB6b25hLmNhbnRpZGFkIH0gLCAnJHsgem9uYS5sZXRyYSB9JyAsICR7IHpvbmEubnVtZXJvIH0gLCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCAxICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEucXVlcnkoIGNvbnN1bHRhLChlcnIscmVzdWx0KT0+eyBpZiggZXJyICkgeyAgY2FsbGJhY2soIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrKCkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwoIGVyciApPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggZXJyICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTplcnIubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYU1BQyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmRlc2RlUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5kZXNkZVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BhcmFkYXNfbWFxdWluYTogcGFyc2VJbnQoIHBtLmlkUGFyYWRhTWFxdWluYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoKHBhcmFNQUMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyh2ZWNQYXJhZGFzRGVNYXF1aW5hLChQTSxjYWxsYmFja1BNKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSA9ICBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQoICdob3JhX2luY2lvJyxtc3NxbC5UaW1lLFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUsUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQoICdpZF9wYXJhZGFzX21hcXVpbmEnLG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQoICdpZF9wbGFuaWxsYScsbXNzcWwuSW50LFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLnF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNKCBFUiApIH0gZWxzZSB7IGNhbGxiYWNrUE0oICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvUiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOmVycm9SLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoICdDb250ZW50LVR5cGUnLCAndGV4dC9ldmVudC1zdHJlYW0nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6J1RyYW5zYWNjaW9uIGV4aXRvc2EnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxucm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkVGlwb1Byb2Nlc28sIG5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gdGlwb3NfcHJvY2Vzb1xyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QoJy94bWFxdWluYXBpZXphdGlwbycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmEsaWRQaWV6YSxpZFRpcG9Qcm9jZXNvfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHByby5pZCBhcyBpZFByb2Nlc28sIHByby5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblByb2Nlc29cclxuICAgICAgICBmcm9tIHByb2Nlc29zIHByb1xyXG4gICAgICAgIHdoZXJlIHByby5lc3RhZG8gPSAxXHJcbiAgICAgICAgYW5kIHByby5pZF9waWV6YSA9ICR7aWRQaWV6YX1cclxuICAgICAgICBhbmQgcHJvLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX1cclxuICAgICAgICBhbmQgcHJvLmlkX3RpcG9zX3Byb2Nlc28gPSAke2lkVGlwb1Byb2Nlc299YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSAgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUcmFiYWphZG9yLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmZfbmFjaW1pZW50byBhcyBmZWNoYU5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBmZWNoYUluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvVHJhYmFqYWRvciwgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxucmVxdWlyZSgnLi4vY29uZXhpb25lcy9tb25nb0RiJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3QgUGVyZmlsID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hUm9sZXNVc3VhcmlvcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgYXdhaXQgVXN1YXJpby5maW5kKChlLGRhdG8pPT57XHJcbiAgICAgICAgZSA/IHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdFcnJvciBlbiBlbCByZXF1ZXN0JykgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdG8pXHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbiAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkKHtfaWQ6cmVxLnBhcmFtcy5pZH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcilcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbiAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1VzdWFyaW8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4gICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbiAgICB9KVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=