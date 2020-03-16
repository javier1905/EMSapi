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

router.post('/eliminar', async (req, res) => {
  const {
    idPlanilla
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL('eliminaPlanilla');

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request(conexionAbierta);

  try {
    const result = await consulta.query(`update planillas_produccion
        set
        estado = 0
        where id = ${parseInt(idPlanilla)}`);
    cerrarConexionPOOL();
    res.json({
      mensaje: 'Eliminacion exitosa !'
    });
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
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

        if (listaIdPlanillasProduc === '') {
          listaIdPlanillasProduc = null;
        }

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

          if (listaIdTrabajadores === '') {
            listaIdTrabajadores = null;
          }

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

            if (listaIdRechazos === '') {
              listaIdRechazos = null;
            }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zUHJvY2Vzby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90cmFiYWphZG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHVybm9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0LW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbmV4aW9uIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJyZWQiLCJtc3NxbCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJ0aGVuIiwiX2Nvbm5lY3RlZCIsImJsdWUiLCJncmVlbiIsImNsb3NlIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiYXJncyIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJwZXJmaWwiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwiZW51bSIsInNldCIsIm1vZGVsIiwidXN1YXJpbyIsInVzZXJOYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIm5vbWJyZSIsImFwZWxsaWRvIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsIlVzdWFyaW8iLCJwb3N0IiwibmV4dCIsImZpbmQiLCJib2R5IiwidmVyaWZpY2FQYXNzIiwiY29tcGFyZVN5bmMiLCJtaVVzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiUmVxdWVzdCIsImNvbnN1bHRhIiwicXVlcnkiLCJlcnIiLCJkYXRvIiwicmVjb3Jkc2V0IiwibWVzc2FnZSIsImlkT3BlcmFjaW9uIiwicGFyYW1zIiwiaWRQaWV6YSIsImlkTWFxdWluYSIsIk1vbWVudCIsImNvbnZpZXJ0ZUhvcmEiLCJob3JhIiwiSG9ySW5pY2lvbk8iLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImlkUGxhbmlsbGEiLCJjb25leGlvbkFiaWVydGEiLCJyZXN1bHQiLCJwYXJzZUludCIsImZlY2hhRGVzZGVQcm9kdWNjaW9uIiwiZmVjaGFIYXN0YVByb2R1Y2Npb24iLCJmZWNoYURlc2RlRnVuZGljaW9uIiwiZmVjaGFIYXN0YUZ1bmRpY29uIiwiaWRNb2xkZSIsImlkVGlwb1Byb2Nlc28iLCJpZFRpcG9NYXF1aW5hIiwiVHJhbnNhY3Rpb24iLCJ0cmFuc2FjY2lvbiIsImJlZ2luIiwic3FsQ29uc3VsdGEiLCJjb25zdWx0YVBsYW5pbGxhIiwiY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEiLCJjb25zdWx0YVJlY2hhem9zIiwiY29uc3VsdGFab25hcyIsImNvbnN1bHRhUE0iLCJ2ZWNQbGFuaWxsYVByb2R1Y2Npb24iLCJ2ZWNUcmFiYWphZG9yZXMiLCJ2ZWNSZWNoYXpvcyIsInZlY1pvbmFzIiwidmVjUE0iLCJyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24iLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwicGxhIiwicGxhbmlsbGEiLCJmZWNoYUNhcmdhIiwiZmVjaGFQcm9kdWNjaW9uIiwiZmVjaGFGdW5kaWNpb24iLCJob3JhSW5pY2lvIiwiZm9ybWF0IiwiaG9yYUZpbiIsIm5vbWJyZU1hcXVpbmEiLCJub21icmVQaWV6YSIsIm5vbWJyZU1vbGRlIiwidGlwb1Byb2Nlc28iLCJpZFByb2Nlc28iLCJwdXNoIiwibGlzdGFJZFBsYW5pbGxhc1Byb2R1YyIsImluZGV4UGxhbmlsbGEiLCJsZW5ndGgiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJkaXJlcmVuY2lhRW5NaW51dG9zIiwiaF9pbmljaW8iLCJoX2ZpbiIsImhEZXNkZSIsImhIYXN0YSIsImxpc3RhWm9uYXMiLCJwbCIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwicG0iLCJwYXJhZGFNYXEiLCJpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEiLCJpZFBhcmFkYU1hcXVpbmEiLCJub21icmVQYXJhZGFNYXF1aW5hIiwiZGVzZGVQYXJhZGFNYXF1aW5hIiwiaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEiLCJoYXN0YVBhcmFkYU1hcXVpbmEiLCJob3JhRmluUGFyYWRhTWFxdWluYSIsImR1cmFjaW9uUGFyYWRhTWFxdWluYSIsInRpcG9QYXJhZGFNYXF1aW5hIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRPcGVyYXJpbyIsImlkVHJhYmFqYWRvciIsImlkVHVybm8iLCJub21icmVUcmFiYWphZG9yIiwiYXBlbGxpZG9UcmFiYWphZG9yIiwidHVybm9UcmFiYWphZG9yIiwicHJvZHVjY2lvbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInZlY1JlY2hhem8iLCJyZWNoIiwiaWRSZWNoYXpvIiwiaWREZWZlY3RvIiwibm9tYnJlUmVjaGF6byIsInRpcG8iLCJ0aXBvUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6b3MiLCJ6b24iLCJpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJ6b25hWHJlY2hhIiwiaWRab25hIiwibGV0cmEiLCJsZXRyYVpvbmEiLCJudW1lcm8iLCJudW1lcm9ab25hIiwiY2FudGlkYWQiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsIkhvcmFJbmljaW9Qcm9kdWNjaW9uIiwiSG9yYUZpblByb2R1Y2Npb24iLCJpZFBsYW5pbGxhUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbiIsImFzaW5jcm9ubyIsIm1ldG9kb1RyYW5zYWNjaW9uIiwiaW5wdXQiLCJUaW1lIiwiSW50IiwicHJlcGFyZSIsImRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIiwiZmVfcHJvZHVjY2lvbiIsImZlX2Z1bmRpY2lvbiIsImhvcmFfaW5pY2lvIiwiaG9yYV9maW4iLCJpZF90dXJubyIsImlkX21vbGRlIiwicmVzdWx0QzEiLCJleGVjdXRlIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsImlzTmFOIiwidmVjT3BlcmFyaW9zWHBsYW5pbGxhIiwib3BlcmFyaW8iLCJvcCIsInB6YV9wcm9kdWNpZGFzIiwiaWRfdHJhYmFqYWRvciIsImlkX3BsYW5pbGxhIiwiZWFjaFNlcmllcyIsInRyYWJhamFkb3IiLCJjYWxsYmFjayIsInBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSIsInZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSIsInJlY2hhem9aIiwiaWRfZGVmZWN0byIsInJlY2hhem8iLCJ2ZWNab25hc1hyZWNoYXpvIiwiem9uYSIsInpvbyIsInZlY1BhcmFkYXNEZU1hcXVpbmEiLCJwYXJhTUFDIiwiaWRfcGFyYWRhc19tYXF1aW5hIiwiUE0iLCJjYWxsYmFja1BNIiwiY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hIiwiRVIiLCJyZXN1bHRQTSIsImVycm9SIiwic2V0SGVhZGVyIiwibWVuc2FqZTIiLCJiY3J5cCIsIlBlcmZpbCIsInNlbmQiLCJsaXN0YVBlcmZpbGVzIiwibmV3UGVyZmlsIiwic2F2ZSIsImZpbmRCeUlkIiwiX2lkIiwiaWQiLCJoYXNoU3luYyIsIm5ld1VzZXIiLCJwdXQiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RUFBQ3lFLENBQUMsQ0FBQ2lDO0FBQVQsS0FBckIsQ0FBRixHQUNEMUIsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQmxCLElBQWhCLENBQXFCO0FBQUNtQixhQUFPLEVBQUM7QUFBVCxLQUFyQixDQURBO0FBRUgsR0FIRDtBQUlILENBUkQ7QUFVQWxHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjJGLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDekVBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbnJlcXVpcmUoJ2NvbG9ycycpXHJcbn1cclxuXHJcbnZhciBVUkk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgIFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbn1cclxuZWxzZXtcclxuICAgICBVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDo1MDAwOjI3MDE3L3VzdWFyaW9zRU1TJ1xyXG59XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFVSSSx7dXNlTmV3VXJsUGFyc2VyOnRydWUsdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSk7XHJcblxyXG52YXIgY29uZXhpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJyxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwnZXJyb3IgZGUgY29uZXhpb24nKSk7XHJcblxyXG5jb25leGlvbi5vbmNlKCdvcGVuJywoKT0+e1xyXG4gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicucmVkKVxyXG4gICAgIH0gXHJcbiAgICAgZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicpXHJcbiAgICAgfVxyXG59KVxyXG4iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUlNRTCxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMLFxyXG4gICAgICAgIHNlcnZlcjpwcm9jZXNzLmVudi5TRVJWRVJTUUwsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnREJqYXYnLCAvKiBEQmphdiBlbXNEQiAgKi9cclxuICAgICAgICBwYXNzd29yZDogJ2JlbGdyYW5vNDU1JyxcclxuICAgICAgICBkYXRhYmFzZTogJ0VNU19EQl9TUUwnLFxyXG4gICAgICAgIHBvcnQ6MTQzMyxcclxuICAgICAgICBzZXJ2ZXI6J0RFU0tUT1AtRzFJMDk3QycsIC8qIERFU0tUT1AtRzFJMDk3QyAgUEMyMzYwICovXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J2Vtcy1ub2RlLWFwaScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxudmFyIGNvbmV4aW9uXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4gICAgLnRoZW4ocG9vbD0+e1xyXG4gICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbiAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgIFxyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgcGVyZmlsID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdwZXJmaWwnLHBlcmZpbCkiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHVzdWFyaW8gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgICB1c2VyTmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgbm9tYnJlOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwZWxsaWRvOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3VzdWFyaW8nLHVzdWFyaW8pIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW47XHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpXHJcbn1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXF1aW5hcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tYXF1aW5hcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9BdXRlbnRpZmljYXNpb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BpZXphcycscmVxdWlyZSgnLi9ydXRhc0FwaS9waWV6YXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL21vbGRlcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tb2xkZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RlZmVjdG9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2RlZmVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9vcGVyYWNpb25lcycscmVxdWlyZSgnLi9ydXRhc0FwaS9vcGVyYWNpb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvY2Vzb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvY2Vzb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3R1cm5vcycscmVxdWlyZSgnLi9ydXRhc0FwaS90dXJub3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BhcmFkYXNNYXF1aW5hJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90cmFiYWphZG9yZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zUHJvY2VzbycscmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28nKSlcclxuXHJcbi8vU2V0dGluZ3Ncclxuc2Vydmlkb3Iuc2V0KCdwb3J0Jyxwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDApXHJcblxyXG5zZXJ2aWRvci5saXN0ZW4oc2Vydmlkb3IuZ2V0KCdwb3J0JyksKG0sZSk9PntcclxuICAgIGlmKGUpe2NvbnNvbGUubG9nKGUpfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycueWVsbG93LHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycsc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcblxyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidObyBlbnZpbyBlbCBUb2tlbiBlbiBlbCBoZWFkZXJzJ30pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm5hbWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID1yZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMsbmV4dCk9PntcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzdWFyaW8uZmluZCh7dXNlck5hbWU6cmVxLmJvZHkudXNlck5hbWV9KVxyXG4gICAgICAgIGlmKCF1c2VyWzBdKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J1VzdWFyaW8gSW5leGlzdGVudGUgISd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYVBhc3MgPSBhd2FpdCBiY3J5cHQuY29tcGFyZVN5bmMocmVxLmJvZHkucGFzc3dvcmQsdXNlclswXS5wYXNzd29yZClcclxuICAgICAgICAgICAgaWYoIXZlcmlmaWNhUGFzcyl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonUGFzc3dvcmQgSW5jb3JyZWN0YSd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaVVzdWFyaW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6dXNlclswXS51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDp1c2VyWzBdLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTp1c2VyWzBdLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkbzp1c2VyWzBdLmFwZWxsaWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmZpbDp1c2VyWzBdLnBlcmZpbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgand0LnNpZ24obWlVc3VhcmlvLHNlY3JldCx7ZXhwaXJlc0luOjE0NDAwfSwoZSx0b2tlbik9PntcclxuICAgICAgICAgICAgICAgICAgICBlPyByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbid9KTpcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG9rZW59KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtlfSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgZC5pZCBhcyBpZERlZmVjdG8sIGQubm9tYnJlIGFzIG5vbWJyZURlZmVjdG8sIGQuaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLG8ubm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvbiBmcm9tIGRlZmVjdG9zIGQgam9pbiBvcGVyYWNpb25lcyBvIG9uIGQuaWRfb3BlcmFjaW9uPW8uaWQgd2hlcmUgZC5lc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYSwgbS5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvbk1hcXVpbmFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxucm91dGVyLmdldCgnL3hvcGVyYWNpb24vOmlkT3BlcmFjaW9uJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGNvbnN0IHtpZE9wZXJhY2lvbn0gPSByZXEucGFyYW1zXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtIFxyXG4gICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG0uaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkIFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLGlkX3BpZXphIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVNb2xkZSBmcm9tIG1vbGRlcyB3aGVyZSBlc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRPcGVyYWNpb24sIG5vbWJyZSBhcyBub21icmVPcGVyYWNpb25cclxuICAgICAgICBmcm9tIG9wZXJhY2lvbmVzIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0bykgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHZhciB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmEsIHBtLmlkX2FyZWEgYXMgaWRBcmVhLCBhLm5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmEgcG1cclxuXHRcdGpvaW4gYXJlYXMgYSBvbiBwbS5pZF9hcmVhPWEuaWRcclxuICAgICAgICB3aGVyZSBwbS5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZSxkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZSl7Y2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oZGF0by5yZWNvcmRzZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSBuZXcgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICAnc2VsZWN0IGlkIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVQaWV6YSBmcm9tIHBpZXphcyB3aGVyZSBlc3RhZG8gPSAxJyxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2VsaW1pbmFyJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW5pbGxhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdlbGltaW5hUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29uc3VsdGEucXVlcnkoIGB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSAkeyBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSB9YFxyXG4gICAgICAgIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0VsaW1pbmFjaW9uIGV4aXRvc2EgIScgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCggJy9saXN0YWRvJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkVGlwb01hcXVpbmFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSBuZXcgVHJhbnNhY3Rpb24oY29uZXhpb25BYmllcnRhKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luKCBhc3luYyBlPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgIHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVGdW5kaWNpb259JyBhbmQgJyR7ZmVjaGFIYXN0YUZ1bmRpY29ufSdcclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAnJHtmZWNoYURlc2RlUHJvZHVjY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhUHJvZHVjY2lvbn0nXHJcbiAgICAgICAgYW5kICggJHsgaWRNYXF1aW5hIH0gaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gICR7IGlkTWFxdWluYSB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFBpZXphIH0gaXMgbnVsbCAgb3IgcC5pZF9waWV6YSA9ICAkeyBpZFBpZXphIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb1Byb2Nlc28gfSBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgJHsgaWRUaXBvUHJvY2VzbyB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFRpcG9NYXF1aW5hIH0gaXMgbnVsbCAgb3IgbWFxLmlkX3RpcG9zX21hcXVpbmEgPSAgJHsgaWRUaXBvTWFxdWluYSB9ICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID09PSAnJyApeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICxcclxuICAgICAgICAgICAgICAgIHR4cC5jYWxvcmlhcyBhcyBjYWxvcmlhcyAsIHR4cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgdHhwLmlkX3RyYWJhamFkb3IgYXMgaWRUcmFiYWphZG9yICwgdHhwLmlkX3R1cm5vIGFzIGlkVHVybm9cclxuICAgICAgICAgICAgICAgIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhIHR4cFxyXG4gICAgICAgICAgICAgICAgam9pbiB0cmFiYWphZG9yZXMgdCBvbiB0eHAuaWRfdHJhYmFqYWRvciA9IHQuaWRcclxuICAgICAgICAgICAgICAgIGpvaW4gdHVybm9zIHR1ciBvbiB0eHAuaWRfdHVybm8gPSB0dXIuaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHR4cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgdHhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgIDsgYFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFRyYWJhamFkb3JlcyA9PT0gJycgKSB7IGxpc3RhSWRUcmFiYWphZG9yZXMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRSZWNoYXpvcyA9PT0gJycgKSB7IGxpc3RhSWRSZWNoYXpvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlcmVuY2lhRW5NaW51dG9zID0gKGhvcmFJbmljaW8saG9yYUZpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaF9pbmljaW8gPSBuZXcgTW9tZW50ICggIGhvcmFJbmljaW8gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoX2ZpbiA9IG5ldyBNb21lbnQgKCAgaG9yYUZpbiAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhEZXNkZSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9pbmljaW99YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoSGFzdGEgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfZmlufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihoX2luaWNpbyA9PT0gJzA2OjAwJyAmJiBoX2ZpbiA9PT0gJzA2OjAwJyl7ICByZXR1cm4gMjQgKiA2MCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigoaEhhc3RhLWhEZXNkZSkvMTAwMCA8IDApeyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgKyAxNDQwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhWm9uYXMgPSBhd2FpdCBjb25zdWx0YVpvbmFzLnF1ZXJ5KCBzcWxDb25zdWx0YVpvbmFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxpc3RhWm9uYXMucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA9IGxpc3RhWm9uYXMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCggKHBsICwgaW5kZXhQbGFuaWxsYSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQTS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggcG0uaWRQbGFuaWxsYSApID09PSBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFkYU1hcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGE6IHBtLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hIDogcG0uaWRQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVQYXJhZGFNYXF1aW5hIDogcG0ubm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZGVQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzdGFQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYWNpb25QYXJhZGFNYXF1aW5hIDogZGlyZXJlbmNpYUVuTWludXRvcyggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCAgcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1BhcmFkYU1hcXVpbmEgOiBwbS50aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEucHVzaCggcGFyYWRhTWFxIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goICh0ciAsIGluZGV4VHJhYmFqYWRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggdHIuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYVhwbGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUcmFiYWphZG9yWHBsYW5pbGxhIDogdHIuaWRUcmFiYWphZG9yWHBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW8gOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVHJhYmFqYWRvciA6IHRyLmFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJub1RyYWJhamFkb3IgOiB0ci50dXJub1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCB0ci5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCB0ci5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjY2lvbiA6IHRyLnBpZXphc1Byb2R1Y2lkYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiB0ci5jYWxvcmlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvIDogWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB0cmFYcGxhLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApID09PSBwYXJzZUludCAoIHJlLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIDogcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem8gOiByZS5pZERlZmVjdG8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUmVjaGF6byA6IHJlLm5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbyA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6byA6IHJlLmNhbnRpZGFkUmVjaGF6b3MgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzLmZvckVhY2goIHpvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB6b24uaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhICkgPT09IHBhcnNlSW50KCByZWNoLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmFYcmVjaGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmEgOiB6b24uaWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uLmxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHpvbi5jYW50aWRhZFpvbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoLnZlY1pvbmFzLnB1c2goIHpvbmFYcmVjaGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYVhwbGEudmVjUmVjaGF6by5wdXNoKCByZWNoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zLnB1c2goIHRyYVhwbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAvLyBob2xhIG11bmRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiwgIGlkT3BlcmFjaW9uLCBpZE1hcXVpbmEsICBpZFBpZXphLCAgaWRNb2xkZSwgaWRUaXBvUHJvY2VzbyxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIHZhciAgaWRQbGFuaWxsYVByb2R1Y2Npb25cclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICdjb25zdWx0YXNhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCxQcmVwYXJlZFN0YXRlbWVudCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24oIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbihhc3luYyBmdW5jdGlvbiAoIGVyciApICB7XHJcbiAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9wcm9kdWNjaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9mdW5kaWNpb24nLG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2hvcmFfaW5pY2lvJyxtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2ZpbicsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaWRfbW9sZGUnLG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnByZXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZFByb2NlIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRQcm9jZSA9IChzZWxlY3QgdG9wIDEgaWQgZnJvbSBwcm9jZXNvcyBwICB3aGVyZSBwLmlkX21hcXVpbmEgPSAkeyBpZE1hcXVpbmEgfSBhbmQgcC5pZF9waWV6YSA9ICR7IGlkUGllemEgfSBhbmQgaWRfdGlwb3NfcHJvY2VzbyA9ICR7IGlkVGlwb1Byb2Nlc28gfSBhbmQgZXN0YWRvID0gMSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0IGludG8gcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBmZV9jYXJnYSAsIGZlX3Byb2R1Y2Npb24gLCBmZV9mdW5kaWNpb24gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfcHJvY2VzbyAsIGlkX21vbGRlICAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIEdFVERBVEUoKSAsIEBmZV9wcm9kdWNjaW9uICwgQGZlX2Z1bmRpY2lvbiAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZFByb2NlICwgQGlkX21vbGRlICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbjogZmVjaGFQcm9kdWNjaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFJbmljaW9Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFJbmljaW9Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFGaW5Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFGaW5Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGU6IHBhcnNlSW50KCBpZE1vbGRlIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEMxXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSggZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJlcGFyZWQgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24udW5wcmVwYXJlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiggdW5wcmVwYXJlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOidFcnJvciBJbnNlcmNpb25QbGFuaWxsYScueWVsbG93IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRDMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbi5xdWVyeSggYHNlbGVjdCBtYXgoIGlkICkgYXMgaWRQbGFuaWxsYSBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uYCApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICYmICEgaXNOYU4oIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2goIG9wZXJhcmlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhczogcGFyc2VJbnQoIG9wZXJhcmlvLmNhbG9yaWFzICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHphX3Byb2R1Y2lkYXM6IHBhcnNlSW50KCBvcGVyYXJpby5wcm9kdWNjaW9uICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhSW5pY2lvICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFJbmljaW99OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHJhYmFqYWRvcjogcGFyc2VJbnQoIG9wZXJhcmlvLmlkT3BlcmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBwYXJzZUludCggaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIG9wZXJhcmlvLmlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zWHBsYW5pbGxhLnB1c2goIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXModmVjT3BlcmFyaW9zWHBsYW5pbGxhLCggdHJhYmFqYWRvciwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2NhbG9yaWFzJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ3B6YV9wcm9kdWNpZGFzJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLnB6YV9wcm9kdWNpZGFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2lkX3R1cm5vJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLmlkX3R1cm5vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2hvcmFfaW5pY2lvJywgbXNzcWwuVGltZSwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdob3JhX2ZpbicsIG1zc3FsLlRpbWUsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0KCAnaWRfdHJhYmFqYWRvcicsIG1zc3FsLkludCwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2lkX3BsYW5pbGxhJywgbXNzcWwuSW50LCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG86IHJlLnRpcG8gPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfZGVmZWN0bzogcGFyc2VJbnQoIHJlLmlkUmVjaGF6byApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLnB1c2goIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoKCByZWNoYXpvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgaW5zZXJ0IGludG8gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHJlY2hhem8uY2FudGlkYWQgfSwgJHsgcmVjaGF6by50aXBvIH0gLCAkeyByZWNoYXpvLmlkX2RlZmVjdG8gfSAsIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNab25hc1hyZWNoYXpvID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50KCB6b25hLmNhbnRpZGFkICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYTogem9uYS5sZXRyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybzogcGFyc2VJbnQoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgIGluc2VydCBpbnRvIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIGxldHJhICwgbnVtZXJvICwgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyB6b25hLmNhbnRpZGFkIH0gLCAnJHsgem9uYS5sZXRyYSB9JyAsICR7IHpvbmEubnVtZXJvIH0gLCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCAxICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEucXVlcnkoIGNvbnN1bHRhLChlcnIscmVzdWx0KT0+eyBpZiggZXJyICkgeyAgY2FsbGJhY2soIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrKCkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwoIGVyciApPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggZXJyICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTplcnIubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYU1BQyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmRlc2RlUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5kZXNkZVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BhcmFkYXNfbWFxdWluYTogcGFyc2VJbnQoIHBtLmlkUGFyYWRhTWFxdWluYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoKHBhcmFNQUMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyh2ZWNQYXJhZGFzRGVNYXF1aW5hLChQTSxjYWxsYmFja1BNKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSA9ICBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQoICdob3JhX2luY2lvJyxtc3NxbC5UaW1lLFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUsUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQoICdpZF9wYXJhZGFzX21hcXVpbmEnLG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQoICdpZF9wbGFuaWxsYScsbXNzcWwuSW50LFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLnF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNKCBFUiApIH0gZWxzZSB7IGNhbGxiYWNrUE0oICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvUiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOmVycm9SLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoICdDb250ZW50LVR5cGUnLCAndGV4dC9ldmVudC1zdHJlYW0nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6J1RyYW5zYWNjaW9uIGV4aXRvc2EnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxucm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkVGlwb1Byb2Nlc28sIG5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gdGlwb3NfcHJvY2Vzb1xyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QoJy94bWFxdWluYXBpZXphdGlwbycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmEsaWRQaWV6YSxpZFRpcG9Qcm9jZXNvfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHByby5pZCBhcyBpZFByb2Nlc28sIHByby5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblByb2Nlc29cclxuICAgICAgICBmcm9tIHByb2Nlc29zIHByb1xyXG4gICAgICAgIHdoZXJlIHByby5lc3RhZG8gPSAxXHJcbiAgICAgICAgYW5kIHByby5pZF9waWV6YSA9ICR7aWRQaWV6YX1cclxuICAgICAgICBhbmQgcHJvLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX1cclxuICAgICAgICBhbmQgcHJvLmlkX3RpcG9zX3Byb2Nlc28gPSAke2lkVGlwb1Byb2Nlc299YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSAgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUcmFiYWphZG9yLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmZfbmFjaW1pZW50byBhcyBmZWNoYU5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBmZWNoYUluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvVHJhYmFqYWRvciwgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxucmVxdWlyZSgnLi4vY29uZXhpb25lcy9tb25nb0RiJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3QgUGVyZmlsID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hUm9sZXNVc3VhcmlvcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgYXdhaXQgVXN1YXJpby5maW5kKChlLGRhdG8pPT57XHJcbiAgICAgICAgZSA/IHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdFcnJvciBlbiBlbCByZXF1ZXN0JykgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdG8pXHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbiAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkKHtfaWQ6cmVxLnBhcmFtcy5pZH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcilcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbiAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1VzdWFyaW8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4gICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbiAgICB9KVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=