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
  consulta.query(`select m.id as idMaquina, m.nombre as nombreMaquina, m.descripcion as descripcionMaquina , id_tipos_maquina as idTipoMaquina
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

router.post('/delete', async (req, res) => {
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
router.post('/listar', async (req, res) => {
  const {
    fechaDesdeProduccion,
    fechaHastaProduccion,
    fechaDesdeFundicion,
    fechaHastaFundicon,
    idMaquina,
    idPieza,
    idMolde,
    idTipoProceso,
    idOperacion
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
        and ( ${idOperacion} is null  or tm.id_operacion =  ${idOperacion} ) `;
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
router.post('/update', async (req, res) => {
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
    vecParadasMaquinaSeleccionada,
    idPlanilla
  } = req.body;
  console.log(idPlanilla);

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL('updatePlanilla');

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
  const deleteZonasRechazosOperariosPm = await new Request(transaccion);

  const asincrono = __webpack_require__(/*! async */ "async");

  transaccion.begin(async function (err) {
    if (!err) {
      const metodoTransaccion = async () => {
        try {
          var idZonasDelete = '';
          var idRechazosDelete = '';
          var idOperariosDelete = '';
          var idPmDelete = '';
          vecParadasMaquinaSeleccionada.forEach((p, ip) => {
            if (vecParadasMaquinaSeleccionada.length - 1 === ip) {
              idPmDelete += ` ${parseInt(p.idParadaMaquinaXplanilla)}  `;
            } else {
              idPmDelete += ` ${parseInt(p.idParadaMaquinaXplanilla)} , `;
            }
          });
          vecOperarios.forEach((o, io) => {
            idOperariosDelete += ` ${parseInt(o.idTrabajadorXplanilla)} , `;
            o.vecRechazo.forEach((r, ir) => {
              idRechazosDelete += ` ${parseInt(r.idRechazoXtrabajadorYplanilla)} , `;
              r.vecZonas.forEach((z, iz) => {
                idZonasDelete += ` ${parseInt(z.idZona)} , `;
              });
            });
          });

          if (idOperariosDelete !== '') {
            idOperariosDelete = idOperariosDelete.trim().substring(0, idOperariosDelete.trim().length - 1);
          }

          if (idRechazosDelete !== '') {
            idRechazosDelete = idRechazosDelete.trim().substring(0, idRechazosDelete.trim().length - 1);
          }

          if (idZonasDelete !== '') {
            idZonasDelete = idZonasDelete.trim().substring(0, idZonasDelete.trim().length - 1);
          }

          const resultDelete = await deleteZonasRechazosOperariosPm.query(` delete zonas_x_rechazo_x_planilla where id in ( ${idZonasDelete === '' ? null : idZonasDelete} ) ;
                    delete rechazos_x_trabajador_y_planilla where id in ( ${idRechazosDelete === '' ? null : idRechazosDelete} ) ;
                    delete trabajador_x_planilla where id in ( ${idOperariosDelete === '' ? null : idOperariosDelete} ) ;
                    delete paradas_maquinas_x_planilla where id in ( ${idPmDelete === '' ? null : idPmDelete} ) ; `);

          if (resultDelete) {
            ps_insercionPlanillaProduccion.input('fe_produccion', mssql.Date);
            ps_insercionPlanillaProduccion.input('fe_fundicion', mssql.Date);
            ps_insercionPlanillaProduccion.input('hora_inicio', mssql.Time);
            ps_insercionPlanillaProduccion.input('hora_fin', mssql.Time);
            ps_insercionPlanillaProduccion.input('id_molde', mssql.Int);
            ps_insercionPlanillaProduccion.input('idPlanilla', mssql.Int);
            await ps_insercionPlanillaProduccion.prepare(`set dateformat dmy ;
                            declare @idProce int ;
                            set @idProce = (select top 1 id from procesos p  where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and id_tipos_proceso = ${idTipoProceso} ) ;
                            update planillas_produccion
                            set
                            fe_produccion = @fe_produccion ,
                            fe_fundicion = @fe_fundicion ,
                            hora_inicio = @hora_inicio ,
                            hora_fin = @hora_fin ,
                            id_proceso = @idProce ,
                            id_molde = @id_molde
                            where id = @idPlanilla`);
            const datosPlanillaProduccion = {
              fe_produccion: fechaProduccion,
              fe_fundicion: fechaFundicion,
              hora_inicio:  true ? convierteHora(HoraInicioProduccion) : undefined,
              hora_fin:  true ? convierteHora(HoraFinProduccion) : undefined,
              id_turno: parseInt(idTurno),
              id_molde: parseInt(idMolde),
              idPlanilla: parseInt(idPlanilla)
            };
            var resultC1;
            resultC1 = await ps_insercionPlanillaProduccion.execute(datosPlanillaProduccion);
            const unprepared = await ps_insercionPlanillaProduccion.unprepare();

            if (unprepared) {
              transaccion.rollback();
              cerrarConexionPOOL();
              res.json({
                mensaje: 'Error InsercionPlanilla'
              }).status(403);
            }

            if (resultC1) {
              var vecOperariosXplanilla = [];
              vecOperarios.forEach(operario => {
                var op = {
                  calorias: parseInt(operario.calorias),
                  pza_producidas: parseInt(operario.produccion),
                  hora_inicio:  true ? convierteHora(operario.horaInicio) : undefined,
                  hora_fin:  true ? convierteHora(operario.horaFin) : undefined,
                  id_trabajador: parseInt(operario.idOperario),
                  id_planilla: parseInt(idPlanilla),
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
                  }).status(403);
                } else {
                  var vecParadasDeMaquina = [];
                  vecParadasMaquinaSeleccionada.forEach(pm => {
                    var paraMAC = {
                      hora_inicio:  true ? convierteHora(pm.desdeParadaMaquina) : undefined,
                      hora_fin:  true ? convierteHora(pm.hastaParadaMaquina) : undefined,
                      id_paradas_maquina: parseInt(pm.idParadaMaquina),
                      id_planilla: idPlanilla
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
                      }).status(403);
                    } else {
                      transaccion.commit();
                      cerrarConexionPOOL();
                      res.setHeader('Content-Type', 'text/event-stream');
                      res.status(200).json({
                        mensaje: 'Actualizacion exitosa'
                      });
                    }
                  });
                }
              });
            }
          }
        } catch (e) {
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
router.post('/insert', async (req, res) => {
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
                      mensaje: 'Insercion exitora'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zUHJvY2Vzby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90cmFiYWphZG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHVybm9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0LW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbmV4aW9uIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJyZWQiLCJtc3NxbCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJ0aGVuIiwiX2Nvbm5lY3RlZCIsImJsdWUiLCJncmVlbiIsImNsb3NlIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiYXJncyIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJwZXJmaWwiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwiZW51bSIsInNldCIsIm1vZGVsIiwidXN1YXJpbyIsInVzZXJOYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIm5vbWJyZSIsImFwZWxsaWRvIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsIlVzdWFyaW8iLCJwb3N0IiwibmV4dCIsImZpbmQiLCJib2R5IiwidmVyaWZpY2FQYXNzIiwiY29tcGFyZVN5bmMiLCJtaVVzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiUmVxdWVzdCIsImNvbnN1bHRhIiwicXVlcnkiLCJlcnIiLCJkYXRvIiwicmVjb3Jkc2V0IiwibWVzc2FnZSIsImlkT3BlcmFjaW9uIiwicGFyYW1zIiwiaWRQaWV6YSIsImlkTWFxdWluYSIsIk1vbWVudCIsImNvbnZpZXJ0ZUhvcmEiLCJob3JhIiwiSG9ySW5pY2lvbk8iLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImlkUGxhbmlsbGEiLCJjb25leGlvbkFiaWVydGEiLCJyZXN1bHQiLCJwYXJzZUludCIsImZlY2hhRGVzZGVQcm9kdWNjaW9uIiwiZmVjaGFIYXN0YVByb2R1Y2Npb24iLCJmZWNoYURlc2RlRnVuZGljaW9uIiwiZmVjaGFIYXN0YUZ1bmRpY29uIiwiaWRNb2xkZSIsImlkVGlwb1Byb2Nlc28iLCJUcmFuc2FjdGlvbiIsInRyYW5zYWNjaW9uIiwiYmVnaW4iLCJzcWxDb25zdWx0YSIsImNvbnN1bHRhUGxhbmlsbGEiLCJjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsImNvbnN1bHRhUmVjaGF6b3MiLCJjb25zdWx0YVpvbmFzIiwiY29uc3VsdGFQTSIsInZlY1BsYW5pbGxhUHJvZHVjY2lvbiIsInZlY1RyYWJhamFkb3JlcyIsInZlY1JlY2hhem9zIiwidmVjWm9uYXMiLCJ2ZWNQTSIsInJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwbGEiLCJwbGFuaWxsYSIsImZlY2hhQ2FyZ2EiLCJmZWNoYVByb2R1Y2Npb24iLCJmZWNoYUZ1bmRpY2lvbiIsImhvcmFJbmljaW8iLCJmb3JtYXQiLCJob3JhRmluIiwibm9tYnJlTWFxdWluYSIsIm5vbWJyZVBpZXphIiwibm9tYnJlTW9sZGUiLCJ0aXBvUHJvY2VzbyIsImlkUHJvY2VzbyIsInB1c2giLCJsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIiwiaW5kZXhQbGFuaWxsYSIsImxlbmd0aCIsInNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFQTSIsInRyYWJhamFkb3Jlc1hwbGFuaWxsYSIsInJlY29yZHNldHMiLCJsaXN0YUlkVHJhYmFqYWRvcmVzIiwidCIsImkiLCJpZFRyYWJhamFkb3JYcGxhbmlsbGEiLCJzcWxDb25zdWx0YVJlY2hhem9zIiwicmVjaGF6b3MiLCJsaXN0YUlkUmVjaGF6b3MiLCJyZSIsImluZGV4UmVjaGF6byIsImlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIiwic3FsQ29uc3VsdGFab25hcyIsImRpcmVyZW5jaWFFbk1pbnV0b3MiLCJoX2luaWNpbyIsImhfZmluIiwiaERlc2RlIiwiaEhhc3RhIiwibGlzdGFab25hcyIsInBsIiwidmVjT3BlcmFyaW9zIiwidmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEiLCJwbSIsInBhcmFkYU1hcSIsImlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSIsImlkUGFyYWRhTWFxdWluYSIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJkZXNkZVBhcmFkYU1hcXVpbmEiLCJob3JhSW5pY2lvUGFyYWRhTWFxdWluYSIsImhhc3RhUGFyYWRhTWFxdWluYSIsImhvcmFGaW5QYXJhZGFNYXF1aW5hIiwiZHVyYWNpb25QYXJhZGFNYXF1aW5hIiwidGlwb1BhcmFkYU1hcXVpbmEiLCJ0ciIsImluZGV4VHJhYmFqYWRvciIsInRyYVhwbGEiLCJpZE9wZXJhcmlvIiwiaWRUcmFiYWphZG9yIiwiaWRUdXJubyIsIm5vbWJyZVRyYWJhamFkb3IiLCJhcGVsbGlkb1RyYWJhamFkb3IiLCJ0dXJub1RyYWJhamFkb3IiLCJwcm9kdWNjaW9uIiwicGllemFzUHJvZHVjaWRhcyIsImNhbG9yaWFzIiwidmVjUmVjaGF6byIsInJlY2giLCJpZFJlY2hhem8iLCJpZERlZmVjdG8iLCJub21icmVSZWNoYXpvIiwidGlwbyIsInRpcG9SZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvcyIsInpvbiIsImlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSIsInpvbmFYcmVjaGEiLCJpZFpvbmEiLCJsZXRyYSIsImxldHJhWm9uYSIsIm51bWVybyIsIm51bWVyb1pvbmEiLCJjYW50aWRhZCIsImNhbnRpZGFkWm9uYSIsImNvbW1pdCIsInJvbGxiYWNrIiwiSG9yYUluaWNpb1Byb2R1Y2Npb24iLCJIb3JhRmluUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtIiwiYXNpbmNyb25vIiwibWV0b2RvVHJhbnNhY2Npb24iLCJpZFpvbmFzRGVsZXRlIiwiaWRSZWNoYXpvc0RlbGV0ZSIsImlkT3BlcmFyaW9zRGVsZXRlIiwiaWRQbURlbGV0ZSIsInAiLCJpcCIsIm8iLCJpbyIsInIiLCJpciIsInoiLCJpeiIsInRyaW0iLCJzdWJzdHJpbmciLCJyZXN1bHREZWxldGUiLCJpbnB1dCIsIlRpbWUiLCJJbnQiLCJwcmVwYXJlIiwiZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24iLCJmZV9wcm9kdWNjaW9uIiwiZmVfZnVuZGljaW9uIiwiaG9yYV9pbmljaW8iLCJob3JhX2ZpbiIsImlkX3R1cm5vIiwiaWRfbW9sZGUiLCJyZXN1bHRDMSIsImV4ZWN1dGUiLCJ1bnByZXBhcmVkIiwidW5wcmVwYXJlIiwidmVjT3BlcmFyaW9zWHBsYW5pbGxhIiwib3BlcmFyaW8iLCJvcCIsInB6YV9wcm9kdWNpZGFzIiwiaWRfdHJhYmFqYWRvciIsImlkX3BsYW5pbGxhIiwiZWFjaFNlcmllcyIsInRyYWJhamFkb3IiLCJjYWxsYmFjayIsInBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSIsInZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSIsInJlY2hhem9aIiwiaWRfZGVmZWN0byIsInJlY2hhem8iLCJ2ZWNab25hc1hyZWNoYXpvIiwiem9uYSIsInpvbyIsInZlY1BhcmFkYXNEZU1hcXVpbmEiLCJwYXJhTUFDIiwiaWRfcGFyYWRhc19tYXF1aW5hIiwiUE0iLCJjYWxsYmFja1BNIiwiY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hIiwiRVIiLCJyZXN1bHRQTSIsImVycm9SIiwic2V0SGVhZGVyIiwibWVuc2FqZTIiLCJpZFBsYW5pbGxhUHJvZHVjY2lvbiIsImNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24iLCJpc05hTiIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsInB1dCIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7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SUFBakI7O0FBQ0EsTUFBR0EsSUFBSSxDQUFDdkYsUUFBUixFQUFpQjtBQUFDdUYsUUFBSSxDQUFDdkYsUUFBTCxHQUFnQm9TLEtBQUssQ0FBQ1MsUUFBTixDQUFldE4sSUFBSSxDQUFDdkYsUUFBcEIsQ0FBaEI7QUFBK0M7O0FBQ2pFbUYsU0FBTyxDQUFDNk4saUJBQVIsQ0FBMEI7QUFBQ0wsT0FBRyxFQUFDQztBQUFMLEdBQTFCLEVBQW1Dck4sSUFBbkMsRUFBd0MsQ0FBQ3JCLENBQUQsRUFBR2UsQ0FBSCxLQUFPO0FBQzNDZixLQUFDLEdBQUVPLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JsQixJQUFoQixDQUFxQjtBQUFDakUsV0FBSyxFQUFDeUUsQ0FBQyxDQUFDaUM7QUFBVCxLQUFyQixDQUFGLEdBQ0QxQixHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCbEIsSUFBaEIsQ0FBcUI7QUFBQ21CLGFBQU8sRUFBQztBQUFULEtBQXJCLENBREE7QUFFSCxHQUhEO0FBSUgsQ0FSRDtBQVVBbEcsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMkYsTUFBakIsQzs7Ozs7Ozs7Ozs7QUN6RUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VjcmV0OidqYXZpZXIxOTA1J1xyXG59IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxucmVxdWlyZSgnY29sb3JzJylcclxufVxyXG5cclxudmFyIFVSSTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICAgVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxufVxyXG5lbHNle1xyXG4gICAgIFVSSSA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjUwMDA6MjcwMTcvdXN1YXJpb3NFTVMnXHJcbn1cclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoVVJJLHt1c2VOZXdVcmxQYXJzZXI6dHJ1ZSx1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KTtcclxuXHJcbnZhciBjb25leGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG5jb25leGlvbi5vbignZXJyb3InLGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCdlcnJvciBkZSBjb25leGlvbicpKTtcclxuXHJcbmNvbmV4aW9uLm9uY2UoJ29wZW4nLCgpPT57XHJcbiAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJy5yZWQpXHJcbiAgICAgfSBcclxuICAgICBlbHNle1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJylcclxuICAgICB9XHJcbn0pXHJcbiIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpeyByZXF1aXJlKCdjb2xvcnMnKSB9XHJcblxyXG52YXIgVVJJXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5VU0VSU1FMLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwsXHJcbiAgICAgICAgc2VydmVyOnByb2Nlc3MuZW52LlNFUlZFUlNRTCxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdEQmphdicsIC8qIERCamF2IGVtc0RCICAqL1xyXG4gICAgICAgIHBhc3N3b3JkOiAnYmVsZ3Jhbm80NTUnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnRU1TX0RCX1NRTCcsXHJcbiAgICAgICAgcG9ydDoxNDMzLFxyXG4gICAgICAgIHNlcnZlcjonREVTS1RPUC1HMUkwOTdDJywgLyogREVTS1RPUC1HMUkwOTdDICBQQzIzNjAgKi9cclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgYXBwTmFtZTonZW1zLW5vZGUtYXBpJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG52YXIgY29uZXhpb25cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbiAgICAudGhlbihwb29sPT57XHJcbiAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgXHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICBcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBwZXJmaWwgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxuXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3BlcmZpbCcscGVyZmlsKSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgdXN1YXJpbyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG5cclxuICAgIHVzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBlbGxpZG86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgndXN1YXJpbycsdXN1YXJpbykiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhbjtcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSlcclxufVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL21hcXVpbmFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21hcXVpbmFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0ZW50aWZpY2FzaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGllemFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BpZXphcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbW9sZGVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21vbGRlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGVmZWN0b3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvZGVmZWN0b3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL29wZXJhY2lvbmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL29wZXJhY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9jZXNvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9wcm9jZXNvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHVybm9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3R1cm5vcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGFyYWRhc01hcXVpbmEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGFyYWRhc01hcXVpbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RyYWJhamFkb3JlcycscmVxdWlyZSgnLi9ydXRhc0FwaS90cmFiYWphZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NQcm9jZXNvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUHJvY2VzbycpKVxyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyxuZXh0KT0+e1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kKHt1c2VyTmFtZTpyZXEuYm9keS51c2VyTmFtZX0pXHJcbiAgICAgICAgaWYoIXVzZXJbMF0pe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonVXN1YXJpbyBJbmV4aXN0ZW50ZSAhJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCx1c2VyWzBdLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZighdmVyaWZpY2FQYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidQYXNzd29yZCBJbmNvcnJlY3RhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTp1c2VyWzBdLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXJbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnVzZXJbMF0ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvOnVzZXJbMF0uYXBlbGxpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyZmlsOnVzZXJbMF0ucGVyZmlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqd3Quc2lnbihtaVVzdWFyaW8sc2VjcmV0LHtleHBpcmVzSW46MTQ0MDB9LChlLHRva2VuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOidFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJ30pOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe2V9KTtcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hLCBtLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uTWFxdWluYSAsIGlkX3RpcG9zX21hcXVpbmEgYXMgaWRUaXBvTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveG9wZXJhY2lvbi86aWRPcGVyYWNpb24nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgY29uc3Qge2lkT3BlcmFjaW9ufSA9IHJlcS5wYXJhbXNcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLGlkX3BpZXphIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVNb2xkZSBmcm9tIG1vbGRlcyB3aGVyZSBlc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRPcGVyYWNpb24sIG5vbWJyZSBhcyBub21icmVPcGVyYWNpb25cclxuICAgICAgICBmcm9tIG9wZXJhY2lvbmVzIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0bykgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHZhciB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmEsIHBtLmlkX2FyZWEgYXMgaWRBcmVhLCBhLm5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmEgcG1cclxuXHRcdGpvaW4gYXJlYXMgYSBvbiBwbS5pZF9hcmVhPWEuaWRcclxuICAgICAgICB3aGVyZSBwbS5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZSxkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZSl7Y2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oZGF0by5yZWNvcmRzZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSBuZXcgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICAnc2VsZWN0IGlkIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVQaWV6YSBmcm9tIHBpZXphcyB3aGVyZSBlc3RhZG8gPSAxJyxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFuaWxsYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZWxpbWluYVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnN1bHRhLnF1ZXJ5KCBgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gJHsgcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgfWBcclxuICAgICAgICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFbGltaW5hY2lvbiBleGl0b3NhICEnIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QoICcvbGlzdGFyJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkT3BlcmFjaW9uXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgIHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVGdW5kaWNpb259JyBhbmQgJyR7ZmVjaGFIYXN0YUZ1bmRpY29ufSdcclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAnJHtmZWNoYURlc2RlUHJvZHVjY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhUHJvZHVjY2lvbn0nXHJcbiAgICAgICAgYW5kICggJHsgaWRNYXF1aW5hIH0gaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gICR7IGlkTWFxdWluYSB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFBpZXphIH0gaXMgbnVsbCAgb3IgcC5pZF9waWV6YSA9ICAkeyBpZFBpZXphIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb1Byb2Nlc28gfSBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgJHsgaWRUaXBvUHJvY2VzbyB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZE9wZXJhY2lvbiB9IGlzIG51bGwgIG9yIHRtLmlkX29wZXJhY2lvbiA9ICAkeyBpZE9wZXJhY2lvbiB9ICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID09PSAnJyApeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICxcclxuICAgICAgICAgICAgICAgIHR4cC5jYWxvcmlhcyBhcyBjYWxvcmlhcyAsIHR4cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgdHhwLmlkX3RyYWJhamFkb3IgYXMgaWRUcmFiYWphZG9yICwgdHhwLmlkX3R1cm5vIGFzIGlkVHVybm9cclxuICAgICAgICAgICAgICAgIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhIHR4cFxyXG4gICAgICAgICAgICAgICAgam9pbiB0cmFiYWphZG9yZXMgdCBvbiB0eHAuaWRfdHJhYmFqYWRvciA9IHQuaWRcclxuICAgICAgICAgICAgICAgIGpvaW4gdHVybm9zIHR1ciBvbiB0eHAuaWRfdHVybm8gPSB0dXIuaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHR4cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgdHhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgIDsgYFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFRyYWJhamFkb3JlcyA9PT0gJycgKSB7IGxpc3RhSWRUcmFiYWphZG9yZXMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRSZWNoYXpvcyA9PT0gJycgKSB7IGxpc3RhSWRSZWNoYXpvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlcmVuY2lhRW5NaW51dG9zID0gKGhvcmFJbmljaW8saG9yYUZpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaF9pbmljaW8gPSBuZXcgTW9tZW50ICggIGhvcmFJbmljaW8gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoX2ZpbiA9IG5ldyBNb21lbnQgKCAgaG9yYUZpbiAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhEZXNkZSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9pbmljaW99YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoSGFzdGEgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfZmlufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihoX2luaWNpbyA9PT0gJzA2OjAwJyAmJiBoX2ZpbiA9PT0gJzA2OjAwJyl7ICByZXR1cm4gMjQgKiA2MCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigoaEhhc3RhLWhEZXNkZSkvMTAwMCA8IDApeyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgKyAxNDQwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhWm9uYXMgPSBhd2FpdCBjb25zdWx0YVpvbmFzLnF1ZXJ5KCBzcWxDb25zdWx0YVpvbmFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxpc3RhWm9uYXMucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA9IGxpc3RhWm9uYXMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCggKHBsICwgaW5kZXhQbGFuaWxsYSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQTS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggcG0uaWRQbGFuaWxsYSApID09PSBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFkYU1hcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGE6IHBtLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hIDogcG0uaWRQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVQYXJhZGFNYXF1aW5hIDogcG0ubm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZGVQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzdGFQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYWNpb25QYXJhZGFNYXF1aW5hIDogZGlyZXJlbmNpYUVuTWludXRvcyggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCAgcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1BhcmFkYU1hcXVpbmEgOiBwbS50aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEucHVzaCggcGFyYWRhTWFxIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goICh0ciAsIGluZGV4VHJhYmFqYWRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggdHIuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYVhwbGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUcmFiYWphZG9yWHBsYW5pbGxhIDogdHIuaWRUcmFiYWphZG9yWHBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW8gOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVHJhYmFqYWRvciA6IHRyLmFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJub1RyYWJhamFkb3IgOiB0ci50dXJub1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCB0ci5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCB0ci5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjY2lvbiA6IHRyLnBpZXphc1Byb2R1Y2lkYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiB0ci5jYWxvcmlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvIDogWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB0cmFYcGxhLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApID09PSBwYXJzZUludCAoIHJlLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIDogcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem8gOiByZS5pZERlZmVjdG8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUmVjaGF6byA6IHJlLm5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbyA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6byA6IHJlLmNhbnRpZGFkUmVjaGF6b3MgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzLmZvckVhY2goIHpvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB6b24uaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhICkgPT09IHBhcnNlSW50KCByZWNoLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmFYcmVjaGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmEgOiB6b24uaWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uLmxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHpvbi5jYW50aWRhZFpvbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoLnZlY1pvbmFzLnB1c2goIHpvbmFYcmVjaGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYVhwbGEudmVjUmVjaGF6by5wdXNoKCByZWNoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zLnB1c2goIHRyYVhwbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAvLyBob2xhIG11bmRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiAsICBpZE9wZXJhY2lvbiAsIGlkTWFxdWluYSAsICBpZFBpZXphICwgIGlkTW9sZGUgLCBpZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MgLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSAsIGlkUGxhbmlsbGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc29sZS5sb2cgKCBpZFBsYW5pbGxhIClcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtID0gYXdhaXQgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiAoIGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZiAoICFlcnIgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICggICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRab25hc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUmVjaGF6b3NEZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZE9wZXJhcmlvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUG1EZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCAoIHAgLCBpcCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5sZW5ndGggLTEgKSAgPT09IGlwICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoICggbyAsIGlvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQoIG8uaWRUcmFiYWphZG9yWHBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnZlY1JlY2hhem8uZm9yRWFjaCAoICggciAsIGlyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCByLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZWNab25hcy5mb3JFYWNoICggKCB6ICwgaXogKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCB6LmlkWm9uYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRPcGVyYXJpb3NEZWxldGUgIT09ICcnICkgeyBpZE9wZXJhcmlvc0RlbGV0ZSA9ICBpZE9wZXJhcmlvc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFJlY2hhem9zRGVsZXRlICE9PSAnJyApIHsgaWRSZWNoYXpvc0RlbGV0ZSA9ICBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRSZWNoYXpvc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRab25hc0RlbGV0ZSAhPT0gJycgKSB7IGlkWm9uYXNEZWxldGUgPSAgaWRab25hc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkWm9uYXNEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHREZWxldGUgPSBhd2FpdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0ucXVlcnkgKCBgIGRlbGV0ZSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkWm9uYXNEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkWm9uYXNEZWxldGV9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUmVjaGF6b3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUmVjaGF6b3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRPcGVyYXJpb3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkT3BlcmFyaW9zRGVsZXRlIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUG1EZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUG1EZWxldGUgfSApIDsgYCApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHREZWxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9wcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfZnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkX21vbGRlJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZFBsYW5pbGxhJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb24gPSBAZmVfcHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb24gPSBAZmVfZnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvID0gQGhvcmFfaW5pY2lvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluID0gQGhvcmFfZmluICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3Byb2Nlc28gPSBAaWRQcm9jZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZSA9IEBpZF9tb2xkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFuaWxsYWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGFyc2VJbnQgKCBpZFBsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSAoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0QzEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2ggKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8uY2Fsb3JpYXMgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5wcm9kdWNjaW9uICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50ICggb3BlcmFyaW8uaWRPcGVyYXJpbyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCAoIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJywgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoICggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG8gOiBwYXJzZUludCAoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzIDogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uYS5sZXRyYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5ICggY29uc3VsdGEgLCAoIGVyciAsIHJlc3VsdCApID0+IHsgaWYgKCBlcnIgKSB7ICBjYWxsYmFjayAoIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrICggICkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCAsICggRVIgLCByZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0oIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvUi5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIgKCAnQ29udGVudC1UeXBlJyAsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKS5qc29uICggeyBtZW5zYWplIDogJ0FjdHVhbGl6YWNpb24gZXhpdG9zYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbnJvdXRlci5wb3N0KCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJywgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhOiB6b25hLmxldHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2ggKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNICggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNICggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyb1IubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnSW5zZXJjaW9uIGV4aXRvcmEnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIG1lbnNhamUyIDogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAoIHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkVGlwb1Byb2Nlc28sIG5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gd2hlcmUgZXN0YWRvID0gMSAnICwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIucG9zdCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEsIGlkTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoYHNlbGVjdCB0cC5pZCBhcyBpZFRpcG9Qcm9jZXNvLCB0cC5ub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc28gZnJvbSB0aXBvc19wcm9jZXNvIHRwXHJcbiAgICBqb2luIHByb2Nlc29zIHAgb24gdHAuaWQgPSBwLmlkX3RpcG9zX3Byb2Nlc28gd2hlcmUgcC5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9IGFuZCBwLmlkX3BpZXphID0gJHtpZFBpZXphfSBhbmQgdHAuZXN0YWRvID0gMWAsIChlLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gIHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHJhYmFqYWRvciwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgdC5mX25hY2ltaWVudG8gYXMgZmVjaGFOYWNpbWllbnRvVHJhYmFqYWRvciwgdC5mX2luZ3Jlc28gYXMgZmVjaGFJbmdyZXNvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmlkX3B1ZXN0byBhcyBpZFB1ZXN0b1RyYWJhamFkb3IsIHAubm9tYnJlIGFzIG5vbWJyZVB1ZXN0b1xyXG4gICAgICAgIGZyb20gdHJhYmFqYWRvcmVzIHRcclxuICAgICAgICBqb2luIHB1ZXN0b3MgcCBvbiB0LmlkX3B1ZXN0bz1wLmlkXHJcbiAgICAgICAgd2hlcmUgdC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTtjZXJyYXJDb25leGlvbigpfVxyXG4gICAgICAgICAgICBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTtjZXJyYXJDb25leGlvbigpfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHVybm8sIHQuZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25UdXJubyx0LmhzX2luaWNpbyBhcyBoc0luaWNpb1R1cm5vICx0LmhzX2ZpbiBhcyBoc0ZpblR1cm5vICBcclxuICAgICAgICBmcm9tIHR1cm5vcyB0XHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpXHJcbnJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvbW9uZ29EYicpXHJcbmNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IFBlcmZpbCA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVJvbGVzVXN1YXJpb3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGF3YWl0IFVzdWFyaW8uZmluZCgoZSxkYXRvKT0+e1xyXG4gICAgICAgIGUgPyByZXMuc3RhdHVzKDQwMykuc2VuZCgnRXJyb3IgZW4gZWwgcmVxdWVzdCcpIDpcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRvKVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgbGlzdGFQZXJmaWxlcyA9IGF3YWl0IFBlcmZpbC5maW5kKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihsaXN0YVBlcmZpbGVzKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvcGVyZmlsZXMnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHtwZXJmaWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBuZXdQZXJmaWwgPSBuZXcgUGVyZmlsKHtwZXJmaWx9KVxyXG4gICAgICAgIGF3YWl0IG5ld1BlcmZpbC5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonR3VhcmRhZG8gRXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5yb3V0ZXIuZ2V0KCcvOmlkJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kQnlJZCh7X2lkOnJlcS5wYXJhbXMuaWR9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHZhciB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIHBhc3N3b3JkID0gYXdhaXQgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpXHJcbiAgICAgICAgY29uc3QgbmV3VXNlcj0gbmV3IFVzdWFyaW8oe3VzZXJOYW1lLHBhc3N3b3JkLGVtYWlsLG5vbWJyZSxhcGVsbGlkbyxwZXJmaWx9KVxyXG4gICAgICAgIGNvbnN0IGRhdG8gPSBhd2FpdCBuZXdVc2VyLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidVc3VhcmlvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZSAhJ30pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucHV0KCcvOmlkJywocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcclxuICAgIGlmKGJvZHkucGFzc3dvcmQpe2JvZHkucGFzc3dvcmQgPSBiY3J5cC5oYXNoU3luYyhib2R5LnBhc3N3b3JkKSB9XHJcbiAgICBVc3VhcmlvLmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LGJvZHksKGUsZCk9PntcclxuICAgICAgICBlPyByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZS5tZXNzYWdlfSkgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidNb2RpZmljYWRvIGNvcnJlY3RhbWVudGUgISd9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzeW5jXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc3NxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9