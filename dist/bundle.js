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

    const sqlConsulta = `set dateformat dmy ;
        select pl.id as idPlanilla, pl.fe_carga as fechaCarga, pl.fe_produccion as fechaProduccion, pl.fe_fundicion as fechaFundicion, 
        pl.hora_inicio as horaInicio , pl.hora_fin as horaFin,maq.nombre as nombreMaquina , pie.nombre as nombrePieza , 
        mol.nombre, tp.nombre as nombreTipoProceso , pl.id_molde as idMolde , pl.id_proceso as idProceso
        from planillas_produccion pl
        join moldes mol on pl.id_molde = mol.id
        join procesos p on pl.id_proceso = p.id
        join piezas pie on p.id_pieza = pie.id
        join maquinas maq on p.id_maquina = maq.id
        join tipos_proceso tp on p.id_tipos_proceso = tp.id
        where pl.estado = 1
        and pl.fe_fundicion between '${fechaDesdeFundicion}' and '${fechaHastaFundicon}'
        and pl.fe_produccion between '${fechaDesdeProduccion}' and '${fechaHastaProduccion}'
        and ( ${idMaquina} is null  or p.id_maquina =  ${idMaquina})
        and ( ${idPieza} is null  or p.id_pieza =  ${idPieza})
        and ( ${idMolde} is null  or pl.id_molde =  ${idMolde})
        and ( ${idTipoProceso} is null  or p.id_tipos_proceso =  ${idTipoProceso})
        and ( ${idTipoMaquina} is null  or maq.id_tipos_maquina =  ${idTipoMaquina})`;
    const consultaPlanilla = new Request(transaccion);
    const consultaOperariosXplanilla = new Request(transaccion);
    const consultaRechazos = new Request(transaccion);
    const consultaZonas = new Request(transaccion);
    const consultaPM = new Request(transaccion);
    var vecPlanillaProduccion;
    var vecTrabajadores;
    var vecRechazos;
    var vecZonas;
    var vecPM;

    try {
      var resultPlanillaProduccion = await consultaPlanilla.query(sqlConsulta);

      if (Array.isArray(resultPlanillaProduccion.recordset)) {
        vecPlanillaProduccion = resultPlanillaProduccion.recordset;
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
                and txp.id_planilla in ( ${listaIdPlanillasProduc} )  ;`;
        var sqlConsultaPM = ` select pmxp.id as idParadaMaquinaXplanilla , pm.id as idParadaMaquina , pm.nombre as nombreParadaMaquina , 
                pmxp.hora_incio as horaInicioParadaMaquina , pmxp.hora_fin as horaFinParadaMaquina , pmxp.id_planilla as idPlanilla
                from paradas_maquinas_x_planilla pmxp
                join paradas_maquina pm on pmxp.id_paradas_maquina = pm.id
                where pmxp.estado = 1
                and pmxp.id_planilla in ( ${listaIdPlanillasProduc} ) ;`;
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
                    and rxtyp.id_trabajador_x_planilla in ( ${listaIdTrabajadores} )`;
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
                        and zxryp.id_rechazos_x_trabajador_y_planilla in ( ${listaIdRechazos} )`;
            var listaZonas = await consultaZonas.query(sqlConsultaZonas);

            if (listaZonas.recordset) {
              vecZonas = listaZonas.recordset;
              vecPlanillaProduccion.forEach((pl, indexPlanilla) => {
                pl.vecTrabajadores = [];
                pl.vecParadasMaquina = [];
                vecPM.forEach(pm => {
                  if (parseInt(pm.idPlanilla) === parseInt(pl.idPlanilla)) {
                    var paradaMaq = {
                      idParadaMaquinaXplanilla: pm.idParadaMaquinaXplanilla,
                      idParadaMaquina: pm.idParadaMaquina,
                      nombreParadaMaquina: pm.nombreParadaMaquina,
                      horaInicioParadaMaquina: pm.horaInicioParadaMaquina,
                      horaFinParadaMaquina: pm.horaFinParadaMaquina
                    };
                    pl.vecParadasMaquina.push(paradaMaq);
                  }
                });
                vecTrabajadores.forEach((tr, indexTrabajador) => {
                  if (parseInt(pl.idPlanilla) === parseInt(tr.idPlanilla)) {
                    var traXpla = {
                      idTrabajadorXplanilla: tr.idTrabajadorXplanilla,
                      idTrabajador: tr.idTrabajador,
                      idTurno: tr.idTurno,
                      nombreTrabajador: tr.nombreTrabajador,
                      apellidoTrabajador: tr.apellidoTrabajador,
                      turnoTrabajador: tr.turnoTrabajador,
                      horaInicio: tr.horaInicio,
                      horaFin: tr.horaFin,
                      piezasProducidas: tr.piezasProducidas,
                      calorias: tr.calorias,
                      vecRechazos: []
                    };
                    vecRechazos.forEach(re => {
                      if (parseInt(traXpla.idTrabajadorXplanilla) === parseInt(re.idTrabajadorXplanilla)) {
                        var rech = {
                          idRechazoXtrabajadorYplanilla: re.idRechazoXtrabajadorYplanilla,
                          idDefecto: re.idDefecto,
                          nombreRechazo: re.nombreRechazo,
                          tipoRechazo: re.tipoRechazo,
                          cantidadRechazos: re.cantidadRechazos,
                          vecZonas: []
                        };
                        vecZonas.forEach(zon => {
                          if (parseInt(zon.idRechazosXtrabajadorYplanilla) === parseInt(rech.idRechazoXtrabajadorYplanilla)) {
                            var zonaXrecha = {
                              idZona: zon.idZona,
                              letraZona: zon.letraZona,
                              numeroZona: zon.numeroZona,
                              cantidadZona: zon.cantidadZona
                            };
                            rech.vecZonas.push(zonaXrecha);
                          }
                        });
                        traXpla.vecRechazos.push(rech);
                      }
                    });
                    pl.vecTrabajadores.push(traXpla);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zUHJvY2Vzby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90cmFiYWphZG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHVybm9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0LW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbmV4aW9uIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJyZWQiLCJtc3NxbCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJ0aGVuIiwiX2Nvbm5lY3RlZCIsImJsdWUiLCJncmVlbiIsImNsb3NlIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiYXJncyIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJwZXJmaWwiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwiZW51bSIsInNldCIsIm1vZGVsIiwidXN1YXJpbyIsInVzZXJOYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIm5vbWJyZSIsImFwZWxsaWRvIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsIlVzdWFyaW8iLCJwb3N0IiwibmV4dCIsImZpbmQiLCJib2R5IiwidmVyaWZpY2FQYXNzIiwiY29tcGFyZVN5bmMiLCJtaVVzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiUmVxdWVzdCIsImNvbnN1bHRhIiwicXVlcnkiLCJlcnIiLCJkYXRvIiwicmVjb3Jkc2V0IiwibWVzc2FnZSIsImlkT3BlcmFjaW9uIiwicGFyYW1zIiwiaWRQaWV6YSIsImlkTWFxdWluYSIsImNvbnZpZXJ0ZUhvcmEiLCJob3JhIiwiSG9ySW5pY2lvbk8iLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImZlY2hhRGVzZGVQcm9kdWNjaW9uIiwiZmVjaGFIYXN0YVByb2R1Y2Npb24iLCJmZWNoYURlc2RlRnVuZGljaW9uIiwiZmVjaGFIYXN0YUZ1bmRpY29uIiwiaWRNb2xkZSIsImlkVGlwb1Byb2Nlc28iLCJpZFRpcG9NYXF1aW5hIiwiY29uZXhpb25BYmllcnRhIiwiVHJhbnNhY3Rpb24iLCJ0cmFuc2FjY2lvbiIsImJlZ2luIiwic3FsQ29uc3VsdGEiLCJjb25zdWx0YVBsYW5pbGxhIiwiY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEiLCJjb25zdWx0YVJlY2hhem9zIiwiY29uc3VsdGFab25hcyIsImNvbnN1bHRhUE0iLCJ2ZWNQbGFuaWxsYVByb2R1Y2Npb24iLCJ2ZWNUcmFiYWphZG9yZXMiLCJ2ZWNSZWNoYXpvcyIsInZlY1pvbmFzIiwidmVjUE0iLCJyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24iLCJBcnJheSIsImlzQXJyYXkiLCJsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIiwiZm9yRWFjaCIsInBsYSIsImluZGV4UGxhbmlsbGEiLCJsZW5ndGgiLCJwYXJzZUludCIsImlkUGxhbmlsbGEiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJsaXN0YVpvbmFzIiwicGwiLCJ2ZWNQYXJhZGFzTWFxdWluYSIsInBtIiwicGFyYWRhTWFxIiwiaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhIiwiaWRQYXJhZGFNYXF1aW5hIiwibm9tYnJlUGFyYWRhTWFxdWluYSIsImhvcmFJbmljaW9QYXJhZGFNYXF1aW5hIiwiaG9yYUZpblBhcmFkYU1hcXVpbmEiLCJwdXNoIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRUcmFiYWphZG9yIiwiaWRUdXJubyIsIm5vbWJyZVRyYWJhamFkb3IiLCJhcGVsbGlkb1RyYWJhamFkb3IiLCJ0dXJub1RyYWJhamFkb3IiLCJob3JhSW5pY2lvIiwiaG9yYUZpbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInJlY2giLCJpZERlZmVjdG8iLCJub21icmVSZWNoYXpvIiwidGlwb1JlY2hhem8iLCJjYW50aWRhZFJlY2hhem9zIiwiem9uIiwiaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhIiwiem9uYVhyZWNoYSIsImlkWm9uYSIsImxldHJhWm9uYSIsIm51bWVyb1pvbmEiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsImZlY2hhUHJvZHVjY2lvbiIsImZlY2hhRnVuZGljaW9uIiwiSG9yYUluaWNpb1Byb2R1Y2Npb24iLCJIb3JhRmluUHJvZHVjY2lvbiIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwiaWRQbGFuaWxsYVByb2R1Y2Npb24iLCJQcmVwYXJlZFN0YXRlbWVudCIsInBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiIsImNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24iLCJhc2luY3Jvbm8iLCJtZXRvZG9UcmFuc2FjY2lvbiIsImlucHV0IiwiVGltZSIsIkludCIsInByZXBhcmUiLCJkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiIsImZlX3Byb2R1Y2Npb24iLCJmZV9mdW5kaWNpb24iLCJob3JhX2luaWNpbyIsImhvcmFfZmluIiwiaWRfdHVybm8iLCJpZF9tb2xkZSIsInJlc3VsdEMxIiwiZXhlY3V0ZSIsInVucHJlcGFyZWQiLCJ1bnByZXBhcmUiLCJpc05hTiIsInZlY09wZXJhcmlvc1hwbGFuaWxsYSIsIm9wZXJhcmlvIiwib3AiLCJwemFfcHJvZHVjaWRhcyIsInByb2R1Y2Npb24iLCJpZF90cmFiYWphZG9yIiwiaWRPcGVyYXJpbyIsImlkX3BsYW5pbGxhIiwidmVjUmVjaGF6byIsImVhY2hTZXJpZXMiLCJ0cmFiYWphZG9yIiwiY2FsbGJhY2siLCJwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEiLCJ2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEiLCJyZWNoYXpvWiIsImNhbnRpZGFkIiwiY2FudGlkYWRSZWNoYXpvIiwidGlwbyIsImlkX2RlZmVjdG8iLCJpZFJlY2hhem8iLCJyZWNoYXpvIiwidmVjWm9uYXNYcmVjaGF6byIsInpvbmEiLCJ6b28iLCJsZXRyYSIsIm51bWVybyIsInJlc3VsdCIsInZlY1BhcmFkYXNEZU1hcXVpbmEiLCJwYXJhTUFDIiwiZGVzZGVQYXJhZGFNYXF1aW5hIiwiaGFzdGFQYXJhZGFNYXF1aW5hIiwiaWRfcGFyYWRhc19tYXF1aW5hIiwiUE0iLCJjYWxsYmFja1BNIiwiY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hIiwiRVIiLCJyZXN1bHRQTSIsImVycm9SIiwic2V0SGVhZGVyIiwibWVuc2FqZTIiLCJiY3J5cCIsIlBlcmZpbCIsInNlbmQiLCJsaXN0YVBlcmZpbGVzIiwibmV3UGVyZmlsIiwic2F2ZSIsImZpbmRCeUlkIiwiX2lkIiwiaWQiLCJoYXNoU3luYyIsIm5ld1VzZXIiLCJwdXQiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7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Ozs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbnJlcXVpcmUoJ2NvbG9ycycpXHJcbn1cclxuXHJcbnZhciBVUkk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgIFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbn1cclxuZWxzZXtcclxuICAgICBVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDo1MDAwOjI3MDE3L3VzdWFyaW9zRU1TJ1xyXG59XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFVSSSx7dXNlTmV3VXJsUGFyc2VyOnRydWUsdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSk7XHJcblxyXG52YXIgY29uZXhpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJyxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwnZXJyb3IgZGUgY29uZXhpb24nKSk7XHJcblxyXG5jb25leGlvbi5vbmNlKCdvcGVuJywoKT0+e1xyXG4gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicucmVkKVxyXG4gICAgIH0gXHJcbiAgICAgZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicpXHJcbiAgICAgfVxyXG59KVxyXG4iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUlNRTCxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMLFxyXG4gICAgICAgIHNlcnZlcjpwcm9jZXNzLmVudi5TRVJWRVJTUUwsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnREJqYXYnLCAvKiBEQmphdiBlbXNEQiAgKi9cclxuICAgICAgICBwYXNzd29yZDogJ2JlbGdyYW5vNDU1JyxcclxuICAgICAgICBkYXRhYmFzZTogJ0VNU19EQl9TUUwnLFxyXG4gICAgICAgIHBvcnQ6MTQzMyxcclxuICAgICAgICBzZXJ2ZXI6J0RFU0tUT1AtRzFJMDk3QycsIC8qIERFU0tUT1AtRzFJMDk3QyAgUEMyMzYwICovXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J2Vtcy1ub2RlLWFwaScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxudmFyIGNvbmV4aW9uXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4gICAgLnRoZW4ocG9vbD0+e1xyXG4gICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbiAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgIFxyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgcGVyZmlsID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdwZXJmaWwnLHBlcmZpbCkiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHVzdWFyaW8gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgICB1c2VyTmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgbm9tYnJlOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwZWxsaWRvOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3VzdWFyaW8nLHVzdWFyaW8pIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW47XHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpXHJcbn1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXF1aW5hcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tYXF1aW5hcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9BdXRlbnRpZmljYXNpb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BpZXphcycscmVxdWlyZSgnLi9ydXRhc0FwaS9waWV6YXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL21vbGRlcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tb2xkZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RlZmVjdG9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2RlZmVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9vcGVyYWNpb25lcycscmVxdWlyZSgnLi9ydXRhc0FwaS9vcGVyYWNpb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvY2Vzb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvY2Vzb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3R1cm5vcycscmVxdWlyZSgnLi9ydXRhc0FwaS90dXJub3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BhcmFkYXNNYXF1aW5hJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90cmFiYWphZG9yZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zUHJvY2VzbycscmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28nKSlcclxuXHJcbi8vU2V0dGluZ3Ncclxuc2Vydmlkb3Iuc2V0KCdwb3J0Jyxwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDApXHJcblxyXG5zZXJ2aWRvci5saXN0ZW4oc2Vydmlkb3IuZ2V0KCdwb3J0JyksKG0sZSk9PntcclxuICAgIGlmKGUpe2NvbnNvbGUubG9nKGUpfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycueWVsbG93LHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycsc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcblxyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidObyBlbnZpbyBlbCBUb2tlbiBlbiBlbCBoZWFkZXJzJ30pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm5hbWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID1yZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMsbmV4dCk9PntcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzdWFyaW8uZmluZCh7dXNlck5hbWU6cmVxLmJvZHkudXNlck5hbWV9KVxyXG4gICAgICAgIGlmKCF1c2VyWzBdKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J1VzdWFyaW8gSW5leGlzdGVudGUgISd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYVBhc3MgPSBhd2FpdCBiY3J5cHQuY29tcGFyZVN5bmMocmVxLmJvZHkucGFzc3dvcmQsdXNlclswXS5wYXNzd29yZClcclxuICAgICAgICAgICAgaWYoIXZlcmlmaWNhUGFzcyl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonUGFzc3dvcmQgSW5jb3JyZWN0YSd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaVVzdWFyaW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6dXNlclswXS51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDp1c2VyWzBdLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTp1c2VyWzBdLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkbzp1c2VyWzBdLmFwZWxsaWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmZpbDp1c2VyWzBdLnBlcmZpbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgand0LnNpZ24obWlVc3VhcmlvLHNlY3JldCx7ZXhwaXJlc0luOjE0NDAwfSwoZSx0b2tlbik9PntcclxuICAgICAgICAgICAgICAgICAgICBlPyByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbid9KTpcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG9rZW59KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtlfSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgZC5pZCBhcyBpZERlZmVjdG8sIGQubm9tYnJlIGFzIG5vbWJyZURlZmVjdG8sIGQuaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLG8ubm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvbiBmcm9tIGRlZmVjdG9zIGQgam9pbiBvcGVyYWNpb25lcyBvIG9uIGQuaWRfb3BlcmFjaW9uPW8uaWQgd2hlcmUgZC5lc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYSwgbS5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvbk1hcXVpbmFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxucm91dGVyLmdldCgnL3hvcGVyYWNpb24vOmlkT3BlcmFjaW9uJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGNvbnN0IHtpZE9wZXJhY2lvbn0gPSByZXEucGFyYW1zXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtIFxyXG4gICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG0uaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkIFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLGlkX3BpZXphIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVNb2xkZSBmcm9tIG1vbGRlcyB3aGVyZSBlc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRPcGVyYWNpb24sIG5vbWJyZSBhcyBub21icmVPcGVyYWNpb25cclxuICAgICAgICBmcm9tIG9wZXJhY2lvbmVzIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0bykgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHZhciB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmEsIHBtLmlkX2FyZWEgYXMgaWRBcmVhLCBhLm5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmEgcG1cclxuXHRcdGpvaW4gYXJlYXMgYSBvbiBwbS5pZF9hcmVhPWEuaWRcclxuICAgICAgICB3aGVyZSBwbS5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZSxkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZSl7Y2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oZGF0by5yZWNvcmRzZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSBuZXcgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICAnc2VsZWN0IGlkIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVQaWV6YSBmcm9tIHBpZXphcyB3aGVyZSBlc3RhZG8gPSAxJyxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbmNvbnN0IGNvbnZpZXJ0ZUhvcmEgPSAoIGhvcmEgKSA9PiB7XHJcbiAgICB2YXIgSG9ySW5pY2lvbk8gPSBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke2hvcmF9OjAwYClcclxuICAgIEhvckluaWNpb25PLnNldEhvdXJzKCBIb3JJbmljaW9uTy5nZXRIb3VycygpIC0gMyApXHJcbiAgICByZXR1cm4gSG9ySW5pY2lvbk9cclxufVxyXG5cclxucm91dGVyLnBvc3QoICcvbGlzdGFkbycsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVQcm9kdWNjaW9uICwgZmVjaGFIYXN0YVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNvbiAsIGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICxpZFRpcG9Qcm9jZXNvICwgaWRUaXBvTWFxdWluYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgpXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9IG5ldyBUcmFuc2FjdGlvbihjb25leGlvbkFiaWVydGEpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luKCBhc3luYyBlPT57XHJcblxyXG4gICAgICAgIGlmKCBlICkgeyAgcmVzLmpzb24oeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSkgIH1cclxuICAgICAgICBjb25zdCBzcWxDb25zdWx0YSA9IGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgIHNlbGVjdCBwbC5pZCBhcyBpZFBsYW5pbGxhLCBwbC5mZV9jYXJnYSBhcyBmZWNoYUNhcmdhLCBwbC5mZV9wcm9kdWNjaW9uIGFzIGZlY2hhUHJvZHVjY2lvbiwgcGwuZmVfZnVuZGljaW9uIGFzIGZlY2hhRnVuZGljaW9uLCBcclxuICAgICAgICBwbC5ob3JhX2luaWNpbyBhcyBob3JhSW5pY2lvICwgcGwuaG9yYV9maW4gYXMgaG9yYUZpbixtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBwaWUubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgXHJcbiAgICAgICAgbW9sLm5vbWJyZSwgdHAubm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvICwgcGwuaWRfbW9sZGUgYXMgaWRNb2xkZSAsIHBsLmlkX3Byb2Nlc28gYXMgaWRQcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbiBwbFxyXG4gICAgICAgIGpvaW4gbW9sZGVzIG1vbCBvbiBwbC5pZF9tb2xkZSA9IG1vbC5pZFxyXG4gICAgICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiBwbC5pZF9wcm9jZXNvID0gcC5pZFxyXG4gICAgICAgIGpvaW4gcGllemFzIHBpZSBvbiBwLmlkX3BpZXphID0gcGllLmlkXHJcbiAgICAgICAgam9pbiBtYXF1aW5hcyBtYXEgb24gcC5pZF9tYXF1aW5hID0gbWFxLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19wcm9jZXNvIHRwIG9uIHAuaWRfdGlwb3NfcHJvY2VzbyA9IHRwLmlkXHJcbiAgICAgICAgd2hlcmUgcGwuZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwbC5mZV9mdW5kaWNpb24gYmV0d2VlbiAnJHsgZmVjaGFEZXNkZUZ1bmRpY2lvbiB9JyBhbmQgJyR7IGZlY2hhSGFzdGFGdW5kaWNvbiB9J1xyXG4gICAgICAgIGFuZCBwbC5mZV9wcm9kdWNjaW9uIGJldHdlZW4gJyR7IGZlY2hhRGVzZGVQcm9kdWNjaW9uIH0nIGFuZCAnJHsgZmVjaGFIYXN0YVByb2R1Y2Npb24gfSdcclxuICAgICAgICBhbmQgKCAkeyBpZE1hcXVpbmEgfSBpcyBudWxsICBvciBwLmlkX21hcXVpbmEgPSAgJHsgaWRNYXF1aW5hIH0pXHJcbiAgICAgICAgYW5kICggJHsgaWRQaWV6YSB9IGlzIG51bGwgIG9yIHAuaWRfcGllemEgPSAgJHsgaWRQaWV6YSB9KVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0pXHJcbiAgICAgICAgYW5kICggJHsgaWRUaXBvUHJvY2VzbyB9IGlzIG51bGwgIG9yIHAuaWRfdGlwb3NfcHJvY2VzbyA9ICAkeyBpZFRpcG9Qcm9jZXNvIH0pXHJcbiAgICAgICAgYW5kICggJHsgaWRUaXBvTWFxdWluYSB9IGlzIG51bGwgIG9yIG1hcS5pZF90aXBvc19tYXF1aW5hID0gICR7IGlkVGlwb01hcXVpbmEgfSlgXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUmVjaGF6b3MgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhWm9uYXMgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUE0gPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG5cclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICAgICAgdmFyIHZlY1RyYWJhamFkb3Jlc1xyXG4gICAgICAgIHZhciB2ZWNSZWNoYXpvc1xyXG4gICAgICAgIHZhciB2ZWNab25hc1xyXG4gICAgICAgIHZhciB2ZWNQTVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhUGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhIClcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0KSl7XHJcbiAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gPSByZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9ICcnXHJcbiAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCgocGxhLGluZGV4UGxhbmlsbGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhQbGFuaWxsYSA9PT0gKHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQubGVuZ3RoIC0gMSkpeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyArPSBgJHtwYXJzZUludChwbGEuaWRQbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICwgXHJcbiAgICAgICAgICAgICAgICB0eHAuY2Fsb3JpYXMgYXMgY2Fsb3JpYXMgLCB0eHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYSAsIHR4cC5pZF90cmFiYWphZG9yIGFzIGlkVHJhYmFqYWRvciAsIHR4cC5pZF90dXJubyBhcyBpZFR1cm5vXHJcbiAgICAgICAgICAgICAgICBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSB0eHBcclxuICAgICAgICAgICAgICAgIGpvaW4gdHJhYmFqYWRvcmVzIHQgb24gdHhwLmlkX3RyYWJhamFkb3IgPSB0LmlkXHJcbiAgICAgICAgICAgICAgICBqb2luIHR1cm5vcyB0dXIgb24gdHhwLmlkX3R1cm5vID0gdHVyLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSB0eHAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgYW5kIHR4cC5pZF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgfSApICA7YFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVBNID0gYCBzZWxlY3QgcG14cC5pZCBhcyBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLCBwbS5pZCBhcyBpZFBhcmFkYU1hcXVpbmEgLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSAsIFxyXG4gICAgICAgICAgICAgICAgcG14cC5ob3JhX2luY2lvIGFzIGhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgcG14cC5ob3JhX2ZpbiBhcyBob3JhRmluUGFyYWRhTWFxdWluYSAsIHBteHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGEgcG14cFxyXG4gICAgICAgICAgICAgICAgam9pbiBwYXJhZGFzX21hcXVpbmEgcG0gb24gcG14cC5pZF9wYXJhZGFzX21hcXVpbmEgPSBwbS5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgcG14cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgcG14cC5pZF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgfSApIDtgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVJlY2hhem9zID0gYCBzZWxlY3Qgcnh0eXAuaWQgYXMgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgLCBkLm5vbWJyZSBhcyBub21icmVSZWNoYXpvICwgXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKWBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9IClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YVpvbmFzID0gYXdhaXQgY29uc3VsdGFab25hcy5xdWVyeSggc3FsQ29uc3VsdGFab25hcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBsaXN0YVpvbmFzLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMgPSBsaXN0YVpvbmFzLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goIChwbCAsIGluZGV4UGxhbmlsbGEgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjVHJhYmFqYWRvcmVzID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUE0uZm9yRWFjaCggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHBtLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhZGFNYXEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhOiBwbS5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYSA6IHBtLmlkUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGFyYWRhTWFxdWluYSA6IHBtLm5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW9QYXJhZGFNYXF1aW5hIDogcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW5QYXJhZGFNYXF1aW5hIDogcG0uaG9yYUZpblBhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hLnB1c2goIHBhcmFkYU1hcSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCAodHIgLCBpbmRleFRyYWJhamFkb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApID09PSBwYXJzZUludCAoIHRyLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFYcGxhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHJhYmFqYWRvclhwbGFuaWxsYSA6IHRyLmlkVHJhYmFqYWRvclhwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFRyYWJhamFkb3IgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb1RyYWJhamFkb3IgOiB0ci5hcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybm9UcmFiYWphZG9yIDogdHIudHVybm9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiB0ci5ob3JhSW5pY2lvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiB0ci5ob3JhRmluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZXphc1Byb2R1Y2lkYXMgOiB0ci5waWV6YXNQcm9kdWNpZGFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzIDogdHIuY2Fsb3JpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgOiBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHRyYVhwbGEuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggcmUuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgOiByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkRGVmZWN0byA6IHJlLmlkRGVmZWN0byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVSZWNoYXpvIDogcmUubm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvUmVjaGF6byA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6b3MgOiByZS5jYW50aWRhZFJlY2hhem9zICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcy5mb3JFYWNoKCB6b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggem9uLmlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSApID09PSBwYXJzZUludCggcmVjaC5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSAgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b25hWHJlY2hhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hIDogem9uLmlkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYVpvbmEgOiB6b24ubGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyb1pvbmEgOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZFpvbmEgOiB6b24uY2FudGlkYWRab25hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaC52ZWNab25hcy5wdXNoKCB6b25hWHJlY2hhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFYcGxhLnZlY1JlY2hhem9zLnB1c2goIHJlY2ggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNUcmFiYWphZG9yZXMucHVzaCggdHJhWHBsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgIC8vIGhvbGEgbXVuZG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHsgbWVuc2FqZTogZS5tZXNzYWdlIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCAnLycsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzKHZlY09wZXJhcmlvc1hwbGFuaWxsYSwoIHRyYWJhamFkb3IsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdjYWxvcmlhcycsIG1zc3FsLkludCwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdwemFfcHJvZHVjaWRhcycsIG1zc3FsLkludCwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdpZF90dXJubycsIG1zc3FsLkludCwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdob3JhX2luaWNpbycsIG1zc3FsLlRpbWUsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0KCAnaG9yYV9maW4nLCBtc3NxbC5UaW1lLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCggJ2lkX3RyYWJhamFkb3InLCBtc3NxbC5JbnQsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQoICdpZF9wbGFuaWxsYScsIG1zc3FsLkludCwgdHJhYmFqYWRvci5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2hhem9aID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZDogcGFyc2VJbnQoIHJlLmNhbnRpZGFkUmVjaGF6byApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IHJlLnZlY1pvbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5wdXNoKCByZWNoYXpvWiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnN1bHRhID0gYGluc2VydCBpbnRvIHRyYWJhamFkb3JfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbG9yaWFzICwgcHphX3Byb2R1Y2lkYXMsIGlkX3R1cm5vICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3RyYWJhamFkb3IgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEBjYWxvcmlhcyAsIEBwemFfcHJvZHVjaWRhcyAsIEBpZF90dXJubyAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZF90cmFiYWphZG9yICwgQGlkX3BsYW5pbGxhICwgMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgPSAoIHNlbGVjdCBtYXgoIGlkICkgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEuZm9yRWFjaCggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggem9uYS5jYW50aWRhZCApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmE6IHpvbmEubGV0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm86IHBhcnNlSW50KCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5wdXNoKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sKCBlcnIgKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGVyciApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5kZXNkZVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uZGVzZGVQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uaGFzdGFQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmhhc3RhUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNEZU1hcXVpbmEucHVzaChwYXJhTUFDKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXModmVjUGFyYWRhc0RlTWFxdWluYSwoUE0sY2FsbGJhY2tQTSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0KCAnaG9yYV9pbmNpbycsbXNzcWwuVGltZSxQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCggJ2hvcmFfZmluJyxtc3NxbC5UaW1lLFBNLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0KCAnaWRfcGFyYWRhc19tYXF1aW5hJyxtc3NxbC5JbnQsUE0uaWRfcGFyYWRhc19tYXF1aW5hIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0KCAnaWRfcGxhbmlsbGEnLG1zc3FsLkludCxQTS5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbnNlcnQgaW50byBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIEBob3JhX2luY2lvICwgQGhvcmFfZmluICwgQGlkX3BhcmFkYXNfbWFxdWluYSAsIEBpZF9wbGFuaWxsYSAsIDEgKWAsKCBFUixyZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBFUiApIHsgY2FsbGJhY2tQTSggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNKCAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxlcnJvUiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTplcnJvUi5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCAnQ29udGVudC1UeXBlJywgJ3RleHQvZXZlbnQtc3RyZWFtJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOidUcmFuc2FjY2lvbiBleGl0b3NhJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIC8vICEgRklOIEZPUiBFQUNIXHJcbiAgICAgICAgICAgICAgICAgICAgfSAvLyEgRklOICBJSUZcclxuICAgICAgICAgICAgICAgIH0gLy8hIEZJTiBERUwgVFJZXHJcbiAgICAgICAgICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgLCBtZW5zYWplMjogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAoIHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkVGlwb1Byb2Nlc28sIG5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gd2hlcmUgZXN0YWRvID0gMSAnICwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIucG9zdCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEsIGlkTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoYHNlbGVjdCB0cC5pZCBhcyBpZFRpcG9Qcm9jZXNvLCB0cC5ub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc28gZnJvbSB0aXBvc19wcm9jZXNvIHRwXHJcbiAgICBqb2luIHByb2Nlc29zIHAgb24gdHAuaWQgPSBwLmlkX3RpcG9zX3Byb2Nlc28gd2hlcmUgcC5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9IGFuZCBwLmlkX3BpZXphID0gJHtpZFBpZXphfSBhbmQgdHAuZXN0YWRvID0gMWAsIChlLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gIHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHJhYmFqYWRvciwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgdC5mX25hY2ltaWVudG8gYXMgZmVjaGFOYWNpbWllbnRvVHJhYmFqYWRvciwgdC5mX2luZ3Jlc28gYXMgZmVjaGFJbmdyZXNvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmlkX3B1ZXN0byBhcyBpZFB1ZXN0b1RyYWJhamFkb3IsIHAubm9tYnJlIGFzIG5vbWJyZVB1ZXN0b1xyXG4gICAgICAgIGZyb20gdHJhYmFqYWRvcmVzIHRcclxuICAgICAgICBqb2luIHB1ZXN0b3MgcCBvbiB0LmlkX3B1ZXN0bz1wLmlkXHJcbiAgICAgICAgd2hlcmUgdC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTtjZXJyYXJDb25leGlvbigpfVxyXG4gICAgICAgICAgICBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTtjZXJyYXJDb25leGlvbigpfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHVybm8sIHQuZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25UdXJubyx0LmhzX2luaWNpbyBhcyBoc0luaWNpb1R1cm5vICx0LmhzX2ZpbiBhcyBoc0ZpblR1cm5vICBcclxuICAgICAgICBmcm9tIHR1cm5vcyB0XHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpXHJcbnJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvbW9uZ29EYicpXHJcbmNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IFBlcmZpbCA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVJvbGVzVXN1YXJpb3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGF3YWl0IFVzdWFyaW8uZmluZCgoZSxkYXRvKT0+e1xyXG4gICAgICAgIGUgPyByZXMuc3RhdHVzKDQwMykuc2VuZCgnRXJyb3IgZW4gZWwgcmVxdWVzdCcpIDpcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRvKVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgbGlzdGFQZXJmaWxlcyA9IGF3YWl0IFBlcmZpbC5maW5kKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihsaXN0YVBlcmZpbGVzKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvcGVyZmlsZXMnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHtwZXJmaWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBuZXdQZXJmaWwgPSBuZXcgUGVyZmlsKHtwZXJmaWx9KVxyXG4gICAgICAgIGF3YWl0IG5ld1BlcmZpbC5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonR3VhcmRhZG8gRXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5yb3V0ZXIuZ2V0KCcvOmlkJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kQnlJZCh7X2lkOnJlcS5wYXJhbXMuaWR9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHZhciB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIHBhc3N3b3JkID0gYXdhaXQgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpXHJcbiAgICAgICAgY29uc3QgbmV3VXNlcj0gbmV3IFVzdWFyaW8oe3VzZXJOYW1lLHBhc3N3b3JkLGVtYWlsLG5vbWJyZSxhcGVsbGlkbyxwZXJmaWx9KVxyXG4gICAgICAgIGNvbnN0IGRhdG8gPSBhd2FpdCBuZXdVc2VyLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidVc3VhcmlvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZSAhJ30pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucHV0KCcvOmlkJywocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcclxuICAgIGlmKGJvZHkucGFzc3dvcmQpe2JvZHkucGFzc3dvcmQgPSBiY3J5cC5oYXNoU3luYyhib2R5LnBhc3N3b3JkKSB9XHJcbiAgICBVc3VhcmlvLmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LGJvZHksKGUsZCk9PntcclxuICAgICAgICBlPyByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZS5tZXNzYWdlfSkgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidNb2RpZmljYWRvIGNvcnJlY3RhbWVudGUgISd9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzeW5jXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=