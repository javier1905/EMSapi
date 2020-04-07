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
servidor.use('/api/tiposProceso', __webpack_require__(/*! ./rutasApi/tiposProceso */ "./rutasApi/tiposProceso.js"));
servidor.use('/api/clientes', __webpack_require__(/*! ./rutasApi/clientes */ "./rutasApi/clientes.js"));
servidor.use('/api/tiposMaterial', __webpack_require__(/*! ./rutasApi/tiposMaterial */ "./rutasApi/tiposMaterial.js")); //Settings

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

/***/ "./rutasApi/clientes.js":
/*!******************************!*\
  !*** ./rutasApi/clientes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion = await abrirConexionPOOL('consultaClientes');

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const myRequest = new Request(conexion);
  const query = ` select c.id as idCliente , c.nombre as nombreCliente , c.razon_social as razonSocialCliente
    from clientes c
    where c.estado = 1`;

  try {
    const result = await myRequest.query(query);
    cerrarConexionPOOL();
    res.json(result.recordset);
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion2 = await abrirConexionPOOL('deleteCliente');

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  const myRequest2 = new Request(conexion2);
  myRequest2.input('idCliente', Int, parseInt(req.body.idCliente));
  const query = `update clientes set estado = 0 where id = @idCliente`;

  try {
    const result = await myRequest2.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Cliente Eliminado Correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    nombreCliente,
    razonSocialCliente,
    idCliente
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion = await abrirConexionPOOL('updateCliente');

  const {
    Request,
    Int,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  const myRequest = new Request(conexion);
  myRequest.input('nombreCliente', VarChar, nombreCliente);
  myRequest.input('razonSocialCliente', VarChar, razonSocialCliente);
  myRequest.input('idCliente', Int, idCliente);
  const query = ` update clientes
    set
    nombre = @nombreCliente ,
    razon_social = @razonSocialCliente
    where id = @idCliente`;

  try {
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Cliente Actualizado Correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombreCliente,
    razonSocialCliente
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  const conexion = await abrirConexionPOOL('insertCliente');
  const myRequest = new Request(conexion);
  myRequest.input('nombreCliente', VarChar, nombreCliente);
  myRequest.input('razonSocialCliente', VarChar, razonSocialCliente);
  const query = `insert into clientes ( nombre , razon_social , estado  ) values  ( @nombreCliente , @razonSocialCliente , 1 )`;

  try {
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Cliente Insertado correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
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
  consulta.query(`select p.id as idPieza, p.nombre as nombrePieza , p.id_cliente as idCliente , c.nombre as nombreCliente ,
        p.id_tipos_material as idTipoMaterial , tm.nombre as nombreTipoMaterial
        from piezas p
        join clientes c on p.id_cliente = c.id
        join tipos_material tm on p.id_tipos_material = tm.id
        where p.estado = 1`, (err, dato) => {
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
router.post('/insert', async (req, res) => {
  const {
    nombrePieza,
    idCliente,
    idTipoMaterial
  } = req.body;

  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('insertPieza');

    const {
      Request,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombrePieza', VarChar, nombrePieza);
    myRequest.input('idCliente', Int, idCliente);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `insert into piezas ( nombre , id_cliente , id_tipos_material , estado )
        values ( @nombrePieza , @idCliente , @idTipoMaterial , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Pieza insertada correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idPieza,
    nombrePieza,
    idCliente,
    idTipoMaterial
  } = req.body;

  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('updatePieza');

    const {
      Request,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idPieza', Int, idPieza);
    myRequest.input('nombrePieza', VarChar, nombrePieza);
    myRequest.input('idCliente', Int, idCliente);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `update piezas
        set
        nombre = @nombrePieza ,
        id_cliente = @idCliente ,
        id_tipos_material = @idTipoMaterial
        where id = @idPieza`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Pieza actualizada correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idPieza
  } = req.body;

  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('deletePieza');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idPieza', Int, idPieza);
    const query = `update piezas
        set
        estado = 0
        where id = @idPieza`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Pieza eliminada correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
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
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion = await abrirConexionPOOL('selectProcesos');

  const {
    Transaction,
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const myTransaction = new Transaction(conexion);
  myTransaction.begin(async errorTransac => {
    if (errorTransac) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.json({
        mensaje: errorTransac.message
      });
    }

    try {
      var vecProcesos = [];
      const myRequest = new Request(myTransaction);
      const myRequestPiezaXhs = new Request(myTransaction);
      const query = `select p.id as idProceso , p.descripcion as descipcionProceso , p.id_pieza as idPieza ,
            pie.nombre as nombrePieza , p.id_maquina as idMaquina , maq.nombre as nombreMaquina ,
            p.id_tipos_proceso as idTipoProceso , tp.nombre as nombreTipoProceso
            from procesos p
            join piezas pie on p.id_pieza = pie.id
            join maquinas maq on p.id_maquina = maq.id
            join tipos_proceso tp on p.id_tipos_proceso = tp.id
            where p.estado = 1`;
      const response = await myRequest.query(query);

      if (response) {
        vecProcesos = response.recordset;
        var idProcesos = '';

        if (Array.isArray(vecProcesos)) {
          vecProcesos.forEach((p, i) => {
            idProcesos += ` ${p.idProceso} ,`;
          });
        }

        if (idProcesos === '') {
          idProcesos = null;
        } else {
          idProcesos = idProcesos.trim().substring(0, idProcesos.length - 2);
        }

        console.log(idProcesos);
        const queryPiezaXhs = `select pxh.id as idPiezasXhs , pxh.cantidad as cantidadPiezasXhs , pxh.fe_desde as desdePiezasXhs ,
                pxh.fe_hasta as hastaPiezasXhs , pxh.id_proceso as idProceso
                from piezas_x_hora pxh
                where pxh.id_proceso in (${idProcesos})`;
        const resulrpzXhs = await myRequestPiezaXhs.query(queryPiezaXhs);
        var vecPiezasXhora = [];

        if (resulrpzXhs) {
          console.log(vecPiezasXhora);
          vecPiezasXhora = resulrpzXhs.recordset;
          console.log(resulrpzXhs.recordset);
          vecProcesos.forEach((p, i) => {
            p.vecPiezasXhora = [];
            vecPiezasXhora.forEach((pzXhs, index) => {
              if (parseInt(p.idProceso) === parseInt(pzXhs.idProceso)) {
                p.vecPiezasXhora.push(pzXhs);
              }
            });
          });
          myTransaction.commit();
          cerrarConexionPOOL();
          res.json(vecProcesos);
        }
      }
    } catch (e) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.json({
        mensaje: e.message
      });
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    descripcionProceso,
    idPieza,
    idMaquina,
    idTiposProceso,
    vecPiezasXhora
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertProceso');

    const {
      Transaction,
      Request,
      Date,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myTransaction = new Transaction(conexion);
    const myRequestProceso = new Request(myTransaction);

    const asincrono = __webpack_require__(/*! async */ "async");

    myTransaction.begin(async errorTrasactions => {
      if (errorTrasactions) {
        myTransaction.rollback();
        cerrarConexionPOOL();
        res.json({
          mensaje: errorTrasactions.message
        });
      }

      myRequestProceso.input('descripcionProceso', VarChar, descripcionProceso);
      myRequestProceso.input('idPieza', Int, idPieza);
      myRequestProceso.input('idMaquina', Int, idMaquina);
      myRequestProceso.input('idTiposProceso', Int, idTiposProceso);
      const queryProcesos = `insert into procesos ( descripcion , id_pieza , id_maquina , id_tipos_proceso , estado )
            values
            ( @descripcionProceso , @idPieza , @idMaquina , @idTiposProceso , 1 ) ;
            declare @idProceso int
            set @idProceso = ( select top 1 max ( id ) from procesos )
            select @idProceso as idProceso`;
      const responseProcesos = await myRequestProceso.query(queryProcesos);
      var idProceso;

      if (responseProcesos) {
        idProceso = responseProcesos.recordsets[0][0].idProceso;

        if (Array.isArray(vecPiezasXhora) && vecPiezasXhora.length > 0) {
          asincrono.eachSeries(vecPiezasXhora, (piezaXhs, callback) => {
            const myRequestPieXhs = new Request(myTransaction);
            myRequestPieXhs.input('cantidadPiezasXhs', Int, piezaXhs.cantidadPiezasXhs);
            myRequestPieXhs.input('desdePiezasXhs', Date, piezaXhs.desdePiezasXhs);
            myRequestPieXhs.input('hastaPiezasXhs', Date, piezaXhs.hastaPiezasXhs);
            myRequestPieXhs.input('idProceso', Int, parseInt(idProceso));
            const queryPiexhs = `insert into piezas_x_hora ( cantidad , fe_desde , fe_hasta , id_proceso , estado )
                        values ( @cantidadPiezasXhs , @desdePiezasXhs , @hastaPiezasXhs , @idProceso , 1 )`;
            myRequestPieXhs.query(queryPiexhs, (error, result) => {
              if (error) {
                callback(error);
              } else {
                callback();
              }
            });
          }, errorCalback => {
            if (errorCalback) {
              myTransaction.rollback();
              cerrarConexionPOOL();
              res.json({
                mensaje: errorCalback.message
              });
            } else {
              myTransaction.commit();
              cerrarConexionPOOL();
              res.json({
                mensaje: 'Proceso insertado correctamente'
              });
            }
          });
        }
      }
    });
  } catch (e) {
    myTransaction.rollback();
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idProceso,
    descripcionProceso,
    idPieza,
    idMaquina,
    idTiposProceso,
    vecPiezasXhora
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertProceso');

    const {
      Transaction,
      Request,
      Date,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myTransaction = new Transaction(conexion);
    const myRequestProceso = new Request(myTransaction);

    const asincrono = __webpack_require__(/*! async */ "async");

    myTransaction.begin(async errorTrasactions => {
      if (errorTrasactions) {
        myTransaction.rollback();
        cerrarConexionPOOL();
        res.json({
          mensaje: errorTrasactions.message
        });
      }

      myRequestProceso.input('descripcionProceso', VarChar, descripcionProceso);
      myRequestProceso.input('idPieza', Int, idPieza);
      myRequestProceso.input('idMaquina', Int, idMaquina);
      myRequestProceso.input('idTiposProceso', Int, idTiposProceso);
      myRequestProceso.input('idProceso', Int, idProceso);
      const queryProcesos = `update procesos
            set
            descripcion = @descripcionProceso ,
            id_pieza = @idPieza ,
            id_maquina = @idMaquina ,
            id_tipos_proceso = @idTiposProceso
            where id = @idProceso ; delete piezas_x_hora where id_proceso = @idProceso`;
      const responseProcesos = await myRequestProceso.query(queryProcesos);

      if (responseProcesos) {
        if (Array.isArray(vecPiezasXhora) && vecPiezasXhora.length > 0) {
          asincrono.eachSeries(vecPiezasXhora, (piezaXhs, callback) => {
            const myRequestPieXhs = new Request(myTransaction);
            myRequestPieXhs.input('cantidadPiezasXhs', Int, piezaXhs.cantidadPiezasXhs);
            myRequestPieXhs.input('desdePiezasXhs', Date, piezaXhs.desdePiezasXhs);
            myRequestPieXhs.input('hastaPiezasXhs', Date, piezaXhs.hastaPiezasXhs);
            myRequestPieXhs.input('idProceso', Int, parseInt(idProceso));
            const queryPiexhs = `insert into piezas_x_hora ( cantidad , fe_desde , fe_hasta , id_proceso , estado )
                        values ( @cantidadPiezasXhs , @desdePiezasXhs , @hastaPiezasXhs , @idProceso , 1 )`;
            myRequestPieXhs.query(queryPiexhs, (error, result) => {
              if (error) {
                callback(error);
              } else {
                callback();
              }
            });
          }, errorCalback => {
            if (errorCalback) {
              myTransaction.rollback();
              cerrarConexionPOOL();
              res.json({
                mensaje: errorCalback.message
              });
            } else {
              myTransaction.commit();
              cerrarConexionPOOL();
              res.json({
                mensaje: 'Proceso actualizado correctamente'
              });
            }
          });
        }
      }
    });
  } catch (e) {
    myTransaction.rollback();
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idProceso
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deleteProceso');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequestProceso = new Request(conexion);
    myRequestProceso.input('idProceso', Int, idProceso);
    const queryProcesos = `update procesos
        set
        estado = 0
        where id = @idProceso `;
    const responseProcesos = await myRequestProceso.query(queryProcesos);

    if (responseProcesos) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Procesos eliminado correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposMaterial.js":
/*!***********************************!*\
  !*** ./rutasApi/tiposMaterial.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('consultaListaClientes');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select id as idTipoMaterial , nombre as nombreTipoMaterial
        from tipos_material
        where estado = 1`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombreMaterial
  } = req.body;

  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('insertTipoMatrial');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreMaterial', VarChar, nombreMaterial);
    const query = `insert into tipos_material ( nombre , estado )
        values ( @nombreMaterial , 1 )  `;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de Material insertado correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idTipoMaterial,
    nombreTipoMaterial
  } = req.body;

  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('updateTipoMaterial');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoMaterial', VarChar, nombreTipoMaterial);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `update tipos_material
        set
        nombre = @nombreTipoMaterial
        where id = @idTipoMaterial`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de Material actualizado correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idTipoMaterial
  } = req.body;

  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('deletTipoMaterial');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `update tipos_material
        set
        estado = 0
        where id = @idTipoMaterial`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de Material eliminado  correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NQcm9jZXNvLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RyYWJhamFkb3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90dXJub3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHQtbm9kZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uZXhpb24iLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImxvZyIsInJlZCIsIm1zc3FsIiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJwb3J0Iiwic2VydmVyIiwib3B0aW9ucyIsImFwcE5hbWUiLCJlbmFibGVBcml0aEFib3J0IiwiZW5jcnlwdCIsImNvbm5lY3Rpb25UaW1lT3V0IiwiZHJpdmVyIiwic3RyZWFtIiwicG9vbCIsIm1heCIsIm1pbiIsImlkbGVUaW1lb3V0TWlsbGlzIiwiQ29uZXhpb25TUUwiLCJhYnJpckNvbmV4aW9uIiwidW5kZWZpbmVkIiwiY2VycmFyQ29uZXhpb24iLCJhYnJpckNvbmV4aW9uUE9PTCIsImNlcnJhckNvbmV4aW9uUE9PTCIsInRoZW4iLCJfY29ubmVjdGVkIiwiYmx1ZSIsImdyZWVuIiwiY2xvc2UiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJhcmdzIiwiUHJvbWlzZSIsImFsbCIsInZhbHVlcyIsIm1hcCIsInBlcmZpbCIsIlNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJlbnVtIiwic2V0IiwibW9kZWwiLCJ1c3VhcmlvIiwidXNlck5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwibm9tYnJlIiwiYXBlbGxpZG8iLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsInllbGxvdyIsIlJvdXRlciIsImp3dCIsIkNPTkZJRyIsInJvdXRlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwibWVuc2FqZSIsInRva2VuIiwic3BsaXQiLCJ2ZXJpZnkiLCJkIiwiYmNyeXB0IiwiVXN1YXJpbyIsInBvc3QiLCJuZXh0IiwiZmluZCIsImJvZHkiLCJ2ZXJpZmljYVBhc3MiLCJjb21wYXJlU3luYyIsIm1pVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJSZXF1ZXN0IiwibXlSZXF1ZXN0IiwicXVlcnkiLCJyZXN1bHQiLCJyZWNvcmRzZXQiLCJtZXNzYWdlIiwicHV0IiwiY29uZXhpb24yIiwiSW50IiwibXlSZXF1ZXN0MiIsImlucHV0IiwicGFyc2VJbnQiLCJpZENsaWVudGUiLCJub21icmVDbGllbnRlIiwicmF6b25Tb2NpYWxDbGllbnRlIiwiVmFyQ2hhciIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsImlkT3BlcmFjaW9uIiwicGFyYW1zIiwiaWRQaWV6YSIsImlkTWFxdWluYSIsIm5vbWJyZVBpZXphIiwiaWRUaXBvTWF0ZXJpYWwiLCJNb21lbnQiLCJjb252aWVydGVIb3JhIiwiaG9yYSIsIkhvckluaWNpb25PIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJpZFBsYW5pbGxhIiwiY29uZXhpb25BYmllcnRhIiwiZmVjaGFEZXNkZVByb2R1Y2Npb24iLCJmZWNoYUhhc3RhUHJvZHVjY2lvbiIsImZlY2hhRGVzZGVGdW5kaWNpb24iLCJmZWNoYUhhc3RhRnVuZGljb24iLCJpZE1vbGRlIiwiaWRUaXBvUHJvY2VzbyIsIlRyYW5zYWN0aW9uIiwidHJhbnNhY2Npb24iLCJiZWdpbiIsInNxbENvbnN1bHRhIiwiY29uc3VsdGFQbGFuaWxsYSIsImNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwiY29uc3VsdGFSZWNoYXpvcyIsImNvbnN1bHRhWm9uYXMiLCJjb25zdWx0YVBNIiwidmVjUGxhbmlsbGFQcm9kdWNjaW9uIiwidmVjVHJhYmFqYWRvcmVzIiwidmVjUmVjaGF6b3MiLCJ2ZWNab25hcyIsInZlY1BNIiwicmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInBsYSIsInBsYW5pbGxhIiwiZmVjaGFDYXJnYSIsImZlY2hhUHJvZHVjY2lvbiIsImZlY2hhRnVuZGljaW9uIiwiaG9yYUluaWNpbyIsImZvcm1hdCIsImhvcmFGaW4iLCJub21icmVNYXF1aW5hIiwibm9tYnJlTW9sZGUiLCJ0aXBvUHJvY2VzbyIsImlkUHJvY2VzbyIsInB1c2giLCJsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIiwiaW5kZXhQbGFuaWxsYSIsImxlbmd0aCIsInNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFQTSIsInRyYWJhamFkb3Jlc1hwbGFuaWxsYSIsInJlY29yZHNldHMiLCJsaXN0YUlkVHJhYmFqYWRvcmVzIiwidCIsImkiLCJpZFRyYWJhamFkb3JYcGxhbmlsbGEiLCJzcWxDb25zdWx0YVJlY2hhem9zIiwicmVjaGF6b3MiLCJsaXN0YUlkUmVjaGF6b3MiLCJyZSIsImluZGV4UmVjaGF6byIsImlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIiwic3FsQ29uc3VsdGFab25hcyIsImRpcmVyZW5jaWFFbk1pbnV0b3MiLCJoX2luaWNpbyIsImhfZmluIiwiaERlc2RlIiwiaEhhc3RhIiwibGlzdGFab25hcyIsInBsIiwidmVjT3BlcmFyaW9zIiwidmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEiLCJwbSIsInBhcmFkYU1hcSIsImlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSIsImlkUGFyYWRhTWFxdWluYSIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJkZXNkZVBhcmFkYU1hcXVpbmEiLCJob3JhSW5pY2lvUGFyYWRhTWFxdWluYSIsImhhc3RhUGFyYWRhTWFxdWluYSIsImhvcmFGaW5QYXJhZGFNYXF1aW5hIiwiZHVyYWNpb25QYXJhZGFNYXF1aW5hIiwidGlwb1BhcmFkYU1hcXVpbmEiLCJ0ciIsImluZGV4VHJhYmFqYWRvciIsInRyYVhwbGEiLCJpZE9wZXJhcmlvIiwiaWRUcmFiYWphZG9yIiwiaWRUdXJubyIsIm5vbWJyZVRyYWJhamFkb3IiLCJhcGVsbGlkb1RyYWJhamFkb3IiLCJ0dXJub1RyYWJhamFkb3IiLCJwcm9kdWNjaW9uIiwicGllemFzUHJvZHVjaWRhcyIsImNhbG9yaWFzIiwidmVjUmVjaGF6byIsInJlY2giLCJpZFJlY2hhem8iLCJpZERlZmVjdG8iLCJub21icmVSZWNoYXpvIiwidGlwbyIsInRpcG9SZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvcyIsInpvbiIsImlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSIsInpvbmFYcmVjaGEiLCJpZFpvbmEiLCJsZXRyYSIsImxldHJhWm9uYSIsIm51bWVybyIsIm51bWVyb1pvbmEiLCJjYW50aWRhZCIsImNhbnRpZGFkWm9uYSIsImNvbW1pdCIsInJvbGxiYWNrIiwiSG9yYUluaWNpb1Byb2R1Y2Npb24iLCJIb3JhRmluUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtIiwiYXNpbmNyb25vIiwibWV0b2RvVHJhbnNhY2Npb24iLCJpZFpvbmFzRGVsZXRlIiwiaWRSZWNoYXpvc0RlbGV0ZSIsImlkT3BlcmFyaW9zRGVsZXRlIiwiaWRQbURlbGV0ZSIsInAiLCJpcCIsIm8iLCJpbyIsInIiLCJpciIsInoiLCJpeiIsInRyaW0iLCJzdWJzdHJpbmciLCJyZXN1bHREZWxldGUiLCJUaW1lIiwicHJlcGFyZSIsImRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIiwiZmVfcHJvZHVjY2lvbiIsImZlX2Z1bmRpY2lvbiIsImhvcmFfaW5pY2lvIiwiaG9yYV9maW4iLCJpZF90dXJubyIsImlkX21vbGRlIiwicmVzdWx0QzEiLCJleGVjdXRlIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsInZlY09wZXJhcmlvc1hwbGFuaWxsYSIsIm9wZXJhcmlvIiwib3AiLCJwemFfcHJvZHVjaWRhcyIsImlkX3RyYWJhamFkb3IiLCJpZF9wbGFuaWxsYSIsImVhY2hTZXJpZXMiLCJ0cmFiYWphZG9yIiwiY2FsbGJhY2siLCJwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEiLCJ2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEiLCJyZWNoYXpvWiIsImlkX2RlZmVjdG8iLCJyZWNoYXpvIiwidmVjWm9uYXNYcmVjaGF6byIsInpvbmEiLCJ6b28iLCJ2ZWNQYXJhZGFzRGVNYXF1aW5hIiwicGFyYU1BQyIsImlkX3BhcmFkYXNfbWFxdWluYSIsIlBNIiwiY2FsbGJhY2tQTSIsImNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSIsIkVSIiwicmVzdWx0UE0iLCJlcnJvUiIsInNldEhlYWRlciIsIm1lbnNhamUyIiwiaWRQbGFuaWxsYVByb2R1Y2Npb24iLCJjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uIiwiaXNOYU4iLCJteVRyYW5zYWN0aW9uIiwiZXJyb3JUcmFuc2FjIiwidmVjUHJvY2Vzb3MiLCJteVJlcXVlc3RQaWV6YVhocyIsInJlc3BvbnNlIiwiaWRQcm9jZXNvcyIsInF1ZXJ5UGllemFYaHMiLCJyZXN1bHJwelhocyIsInZlY1BpZXphc1hob3JhIiwicHpYaHMiLCJpbmRleCIsImRlc2NyaXBjaW9uUHJvY2VzbyIsImlkVGlwb3NQcm9jZXNvIiwibXlSZXF1ZXN0UHJvY2VzbyIsImVycm9yVHJhc2FjdGlvbnMiLCJxdWVyeVByb2Nlc29zIiwicmVzcG9uc2VQcm9jZXNvcyIsInBpZXphWGhzIiwibXlSZXF1ZXN0UGllWGhzIiwiY2FudGlkYWRQaWV6YXNYaHMiLCJkZXNkZVBpZXphc1hocyIsImhhc3RhUGllemFzWGhzIiwicXVlcnlQaWV4aHMiLCJlcnJvckNhbGJhY2siLCJub21icmVNYXRlcmlhbCIsIm5vbWJyZVRpcG9NYXRlcmlhbCIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FB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Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VjcmV0OidqYXZpZXIxOTA1J1xyXG59IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxucmVxdWlyZSgnY29sb3JzJylcclxufVxyXG5cclxudmFyIFVSSTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICAgVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxufVxyXG5lbHNle1xyXG4gICAgIFVSSSA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjUwMDA6MjcwMTcvdXN1YXJpb3NFTVMnXHJcbn1cclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoVVJJLHt1c2VOZXdVcmxQYXJzZXI6dHJ1ZSx1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KTtcclxuXHJcbnZhciBjb25leGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG5jb25leGlvbi5vbignZXJyb3InLGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCdlcnJvciBkZSBjb25leGlvbicpKTtcclxuXHJcbmNvbmV4aW9uLm9uY2UoJ29wZW4nLCgpPT57XHJcbiAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJy5yZWQpXHJcbiAgICAgfSBcclxuICAgICBlbHNle1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJylcclxuICAgICB9XHJcbn0pXHJcbiIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpeyByZXF1aXJlKCdjb2xvcnMnKSB9XHJcblxyXG52YXIgVVJJXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5VU0VSU1FMLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwsXHJcbiAgICAgICAgc2VydmVyOnByb2Nlc3MuZW52LlNFUlZFUlNRTCxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdEQmphdicsIC8qIERCamF2IGVtc0RCICAqL1xyXG4gICAgICAgIHBhc3N3b3JkOiAnYmVsZ3Jhbm80NTUnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnRU1TX0RCX1NRTCcsXHJcbiAgICAgICAgcG9ydDoxNDMzLFxyXG4gICAgICAgIHNlcnZlcjonREVTS1RPUC1HMUkwOTdDJywgLyogREVTS1RPUC1HMUkwOTdDICBQQzIzNjAgKi9cclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgYXBwTmFtZTonZW1zLW5vZGUtYXBpJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG52YXIgY29uZXhpb25cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbiAgICAudGhlbihwb29sPT57XHJcbiAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgXHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICBcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBwZXJmaWwgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxuXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3BlcmZpbCcscGVyZmlsKSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgdXN1YXJpbyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG5cclxuICAgIHVzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBlbGxpZG86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgndXN1YXJpbycsdXN1YXJpbykiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhbjtcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSlcclxufVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL21hcXVpbmFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21hcXVpbmFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0ZW50aWZpY2FzaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGllemFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BpZXphcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbW9sZGVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21vbGRlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGVmZWN0b3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvZGVmZWN0b3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL29wZXJhY2lvbmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL29wZXJhY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9jZXNvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9wcm9jZXNvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHVybm9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3R1cm5vcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGFyYWRhc01hcXVpbmEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGFyYWRhc01hcXVpbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RyYWJhamFkb3JlcycscmVxdWlyZSgnLi9ydXRhc0FwaS90cmFiYWphZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NQcm9jZXNvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUHJvY2VzbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2xpZW50ZXMnLCByZXF1aXJlKCAnLi9ydXRhc0FwaS9jbGllbnRlcycgKSApXHJcbnNlcnZpZG9yLnVzZSAoJy9hcGkvdGlwb3NNYXRlcmlhbCcsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS90aXBvc01hdGVyaWFsJyApIClcclxuXHJcbi8vU2V0dGluZ3Ncclxuc2Vydmlkb3Iuc2V0KCdwb3J0Jyxwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDApXHJcblxyXG5zZXJ2aWRvci5saXN0ZW4oc2Vydmlkb3IuZ2V0KCdwb3J0JyksKG0sZSk9PntcclxuICAgIGlmKGUpe2NvbnNvbGUubG9nKGUpfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycueWVsbG93LHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycsc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcblxyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidObyBlbnZpbyBlbCBUb2tlbiBlbiBlbCBoZWFkZXJzJ30pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm5hbWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID1yZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMsbmV4dCk9PntcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzdWFyaW8uZmluZCh7dXNlck5hbWU6cmVxLmJvZHkudXNlck5hbWV9KVxyXG4gICAgICAgIGlmKCF1c2VyWzBdKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J1VzdWFyaW8gSW5leGlzdGVudGUgISd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYVBhc3MgPSBhd2FpdCBiY3J5cHQuY29tcGFyZVN5bmMocmVxLmJvZHkucGFzc3dvcmQsdXNlclswXS5wYXNzd29yZClcclxuICAgICAgICAgICAgaWYoIXZlcmlmaWNhUGFzcyl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonUGFzc3dvcmQgSW5jb3JyZWN0YSd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaVVzdWFyaW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6dXNlclswXS51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDp1c2VyWzBdLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTp1c2VyWzBdLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkbzp1c2VyWzBdLmFwZWxsaWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmZpbDp1c2VyWzBdLnBlcmZpbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgand0LnNpZ24obWlVc3VhcmlvLHNlY3JldCx7ZXhwaXJlc0luOjE0NDAwfSwoZSx0b2tlbik9PntcclxuICAgICAgICAgICAgICAgICAgICBlPyByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbid9KTpcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG9rZW59KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtlfSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdjb25zdWx0YUNsaWVudGVzJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHNlbGVjdCBjLmlkIGFzIGlkQ2xpZW50ZSAsIGMubm9tYnJlIGFzIG5vbWJyZUNsaWVudGUgLCBjLnJhem9uX3NvY2lhbCBhcyByYXpvblNvY2lhbENsaWVudGVcclxuICAgIGZyb20gY2xpZW50ZXMgY1xyXG4gICAgd2hlcmUgYy5lc3RhZG8gPSAxYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbjIgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVDbGllbnRlJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0MiA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24yICApXHJcbiAgICAgICAgbXlSZXF1ZXN0Mi5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgcGFyc2VJbnQgKCByZXEuYm9keS5pZENsaWVudGUgKSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGNsaWVudGVzIHNldCBlc3RhZG8gPSAwIHdoZXJlIGlkID0gQGlkQ2xpZW50ZWBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QyLnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdDbGllbnRlIEVsaW1pbmFkbyBDb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoICByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUNsaWVudGUgLCAgcmF6b25Tb2NpYWxDbGllbnRlICwgaWRDbGllbnRlIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVDbGllbnRlJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCAgbm9tYnJlQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAncmF6b25Tb2NpYWxDbGllbnRlJyAsIFZhckNoYXIgLCAgcmF6b25Tb2NpYWxDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgIGlkQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGAgdXBkYXRlIGNsaWVudGVzXHJcbiAgICBzZXRcclxuICAgIG5vbWJyZSA9IEBub21icmVDbGllbnRlICxcclxuICAgIHJhem9uX3NvY2lhbCA9IEByYXpvblNvY2lhbENsaWVudGVcclxuICAgIHdoZXJlIGlkID0gQGlkQ2xpZW50ZWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdDbGllbnRlIEFjdHVhbGl6YWRvIENvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCAgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUNsaWVudGUgLCAgcmF6b25Tb2NpYWxDbGllbnRlICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0Q2xpZW50ZScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCAgY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUNsaWVudGUnICwgVmFyQ2hhciAsIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgcmF6b25Tb2NpYWxDbGllbnRlIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGNsaWVudGVzICggbm9tYnJlICwgcmF6b25fc29jaWFsICwgZXN0YWRvICApIHZhbHVlcyAgKCBAbm9tYnJlQ2xpZW50ZSAsIEByYXpvblNvY2lhbENsaWVudGUgLCAxIClgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGQuaWQgYXMgaWREZWZlY3RvLCBkLm5vbWJyZSBhcyBub21icmVEZWZlY3RvLCBkLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbixvLm5vbWJyZSBhcyBub21icmVPcGVyYWNpb24gZnJvbSBkZWZlY3RvcyBkIGpvaW4gb3BlcmFjaW9uZXMgbyBvbiBkLmlkX29wZXJhY2lvbj1vLmlkIHdoZXJlIGQuZXN0YWRvID0gMScsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICBjb25zdWx0YS5xdWVyeShcclxuICAgIGBzZWxlY3QgbS5pZCBhcyBpZE1hcXVpbmEsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEsIG0uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25NYXF1aW5hICwgaWRfdGlwb3NfbWFxdWluYSBhcyBpZFRpcG9NYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIHdoZXJlIG0uZXN0YWRvID0gMWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94b3BlcmFjaW9uLzppZE9wZXJhY2lvbicsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBjb25zdCB7aWRPcGVyYWNpb259ID0gcmVxLnBhcmFtc1xyXG4gIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICBjb25zdWx0YS5xdWVyeShcclxuICAgIGBzZWxlY3QgbS5pZCBhcyBpZE1hcXVpbmEsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG0uaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDEgYW5kIHRtLmlkX29wZXJhY2lvbiA9ICR7aWRPcGVyYWNpb259YCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkTW9sZGUsaWRfcGllemEgYXMgaWRQaWV6YSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveHBpZXphLzppZFBpZXphJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZFBpZXphfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLCBub21icmUgYXMgbm9tYnJlTW9sZGUgZnJvbSBtb2xkZXMgd2hlcmUgZXN0YWRvID0gMSBhbmQgaWRfcGllemEgPSAnK2lkUGllemEsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZE9wZXJhY2lvbiwgbm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gb3BlcmFjaW9uZXMgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdmFyIHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSwgcG0udGlwbyBhcyB0aXBvUGFyYWRhTWFxdWluYSwgcG0uaWRfYXJlYSBhcyBpZEFyZWEsIGEubm9tYnJlIGFzIG5vbWJyZUFyZWFcclxuICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYSBwbVxyXG5cdFx0am9pbiBhcmVhcyBhIG9uIHBtLmlkX2FyZWE9YS5pZFxyXG4gICAgICAgIHdoZXJlIHBtLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlKXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihkYXRvLnJlY29yZHNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle2NlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IG5ldyByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfY2xpZW50ZSBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICxcclxuICAgICAgICBwLmlkX3RpcG9zX21hdGVyaWFsIGFzIGlkVGlwb01hdGVyaWFsICwgdG0ubm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIGNsaWVudGVzIGMgb24gcC5pZF9jbGllbnRlID0gYy5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWF0ZXJpYWwgdG0gb24gcC5pZF90aXBvc19tYXRlcmlhbCA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQaWV6YScgLCBWYXJDaGFyICwgbm9tYnJlUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBpZXphcyAoIG5vbWJyZSAsIGlkX2NsaWVudGUgLCBpZF90aXBvc19tYXRlcmlhbCAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZVBpZXphICwgQGlkQ2xpZW50ZSAsIEBpZFRpcG9NYXRlcmlhbCAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEgLCBub21icmVQaWV6YSAsIGlkQ2xpZW50ZSAsIGlkVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGllemFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFuaWxsYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZWxpbWluYVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnN1bHRhLnF1ZXJ5KCBgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gJHsgcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgfWBcclxuICAgICAgICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFbGltaW5hY2lvbiBleGl0b3NhICEnIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QoICcvbGlzdGFyJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkT3BlcmFjaW9uXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgIHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVGdW5kaWNpb259JyBhbmQgJyR7ZmVjaGFIYXN0YUZ1bmRpY29ufSdcclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAnJHtmZWNoYURlc2RlUHJvZHVjY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhUHJvZHVjY2lvbn0nXHJcbiAgICAgICAgYW5kICggJHsgaWRNYXF1aW5hIH0gaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gICR7IGlkTWFxdWluYSB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFBpZXphIH0gaXMgbnVsbCAgb3IgcC5pZF9waWV6YSA9ICAkeyBpZFBpZXphIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb1Byb2Nlc28gfSBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgJHsgaWRUaXBvUHJvY2VzbyB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZE9wZXJhY2lvbiB9IGlzIG51bGwgIG9yIHRtLmlkX29wZXJhY2lvbiA9ICAkeyBpZE9wZXJhY2lvbiB9ICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID09PSAnJyApeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICxcclxuICAgICAgICAgICAgICAgIHR4cC5jYWxvcmlhcyBhcyBjYWxvcmlhcyAsIHR4cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgdHhwLmlkX3RyYWJhamFkb3IgYXMgaWRUcmFiYWphZG9yICwgdHhwLmlkX3R1cm5vIGFzIGlkVHVybm9cclxuICAgICAgICAgICAgICAgIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhIHR4cFxyXG4gICAgICAgICAgICAgICAgam9pbiB0cmFiYWphZG9yZXMgdCBvbiB0eHAuaWRfdHJhYmFqYWRvciA9IHQuaWRcclxuICAgICAgICAgICAgICAgIGpvaW4gdHVybm9zIHR1ciBvbiB0eHAuaWRfdHVybm8gPSB0dXIuaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHR4cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgdHhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgIDsgYFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFRyYWJhamFkb3JlcyA9PT0gJycgKSB7IGxpc3RhSWRUcmFiYWphZG9yZXMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRSZWNoYXpvcyA9PT0gJycgKSB7IGxpc3RhSWRSZWNoYXpvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlcmVuY2lhRW5NaW51dG9zID0gKGhvcmFJbmljaW8saG9yYUZpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaF9pbmljaW8gPSBuZXcgTW9tZW50ICggIGhvcmFJbmljaW8gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoX2ZpbiA9IG5ldyBNb21lbnQgKCAgaG9yYUZpbiAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhEZXNkZSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9pbmljaW99YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoSGFzdGEgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfZmlufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihoX2luaWNpbyA9PT0gJzA2OjAwJyAmJiBoX2ZpbiA9PT0gJzA2OjAwJyl7ICByZXR1cm4gMjQgKiA2MCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigoaEhhc3RhLWhEZXNkZSkvMTAwMCA8IDApeyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgKyAxNDQwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhWm9uYXMgPSBhd2FpdCBjb25zdWx0YVpvbmFzLnF1ZXJ5KCBzcWxDb25zdWx0YVpvbmFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxpc3RhWm9uYXMucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA9IGxpc3RhWm9uYXMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCggKHBsICwgaW5kZXhQbGFuaWxsYSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQTS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggcG0uaWRQbGFuaWxsYSApID09PSBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFkYU1hcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGE6IHBtLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hIDogcG0uaWRQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVQYXJhZGFNYXF1aW5hIDogcG0ubm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZGVQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzdGFQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYWNpb25QYXJhZGFNYXF1aW5hIDogZGlyZXJlbmNpYUVuTWludXRvcyggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCAgcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1BhcmFkYU1hcXVpbmEgOiBwbS50aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEucHVzaCggcGFyYWRhTWFxIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goICh0ciAsIGluZGV4VHJhYmFqYWRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggdHIuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYVhwbGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUcmFiYWphZG9yWHBsYW5pbGxhIDogdHIuaWRUcmFiYWphZG9yWHBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW8gOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVHJhYmFqYWRvciA6IHRyLmFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJub1RyYWJhamFkb3IgOiB0ci50dXJub1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCB0ci5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCB0ci5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjY2lvbiA6IHRyLnBpZXphc1Byb2R1Y2lkYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiB0ci5jYWxvcmlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvIDogWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB0cmFYcGxhLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApID09PSBwYXJzZUludCAoIHJlLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIDogcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem8gOiByZS5pZERlZmVjdG8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUmVjaGF6byA6IHJlLm5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbyA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6byA6IHJlLmNhbnRpZGFkUmVjaGF6b3MgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzLmZvckVhY2goIHpvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB6b24uaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhICkgPT09IHBhcnNlSW50KCByZWNoLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmFYcmVjaGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmEgOiB6b24uaWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uLmxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHpvbi5jYW50aWRhZFpvbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoLnZlY1pvbmFzLnB1c2goIHpvbmFYcmVjaGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYVhwbGEudmVjUmVjaGF6by5wdXNoKCByZWNoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zLnB1c2goIHRyYVhwbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAvLyBob2xhIG11bmRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiAsICBpZE9wZXJhY2lvbiAsIGlkTWFxdWluYSAsICBpZFBpZXphICwgIGlkTW9sZGUgLCBpZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MgLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSAsIGlkUGxhbmlsbGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc29sZS5sb2cgKCBpZFBsYW5pbGxhIClcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtID0gYXdhaXQgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiAoIGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZiAoICFlcnIgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICggICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRab25hc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUmVjaGF6b3NEZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZE9wZXJhcmlvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUG1EZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCAoIHAgLCBpcCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5sZW5ndGggLTEgKSAgPT09IGlwICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoICggbyAsIGlvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQoIG8uaWRUcmFiYWphZG9yWHBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnZlY1JlY2hhem8uZm9yRWFjaCAoICggciAsIGlyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCByLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZWNab25hcy5mb3JFYWNoICggKCB6ICwgaXogKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCB6LmlkWm9uYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRPcGVyYXJpb3NEZWxldGUgIT09ICcnICkgeyBpZE9wZXJhcmlvc0RlbGV0ZSA9ICBpZE9wZXJhcmlvc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFJlY2hhem9zRGVsZXRlICE9PSAnJyApIHsgaWRSZWNoYXpvc0RlbGV0ZSA9ICBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRSZWNoYXpvc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRab25hc0RlbGV0ZSAhPT0gJycgKSB7IGlkWm9uYXNEZWxldGUgPSAgaWRab25hc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkWm9uYXNEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHREZWxldGUgPSBhd2FpdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0ucXVlcnkgKCBgIGRlbGV0ZSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkWm9uYXNEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkWm9uYXNEZWxldGV9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUmVjaGF6b3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUmVjaGF6b3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRPcGVyYXJpb3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkT3BlcmFyaW9zRGVsZXRlIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUG1EZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUG1EZWxldGUgfSApIDsgYCApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHREZWxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9wcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfZnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkX21vbGRlJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZFBsYW5pbGxhJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb24gPSBAZmVfcHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb24gPSBAZmVfZnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvID0gQGhvcmFfaW5pY2lvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluID0gQGhvcmFfZmluICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3Byb2Nlc28gPSBAaWRQcm9jZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZSA9IEBpZF9tb2xkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFuaWxsYWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGFyc2VJbnQgKCBpZFBsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSAoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0QzEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2ggKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8uY2Fsb3JpYXMgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5wcm9kdWNjaW9uICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50ICggb3BlcmFyaW8uaWRPcGVyYXJpbyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCAoIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJywgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoICggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG8gOiBwYXJzZUludCAoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzIDogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uYS5sZXRyYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5ICggY29uc3VsdGEgLCAoIGVyciAsIHJlc3VsdCApID0+IHsgaWYgKCBlcnIgKSB7ICBjYWxsYmFjayAoIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrICggICkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCAsICggRVIgLCByZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0oIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvUi5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIgKCAnQ29udGVudC1UeXBlJyAsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKS5qc29uICggeyBtZW5zYWplIDogJ0FjdHVhbGl6YWNpb24gZXhpdG9zYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbnJvdXRlci5wb3N0KCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJywgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhOiB6b25hLmxldHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2ggKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNICggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNICggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyb1IubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnSW5zZXJjaW9uIGV4aXRvcmEnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIG1lbnNhamUyIDogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0ICgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3NlbGVjdFByb2Nlc29zJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhbnNhYyApID0+IHtcclxuICAgICAgICBpZiAoIGVycm9yVHJhbnNhYyApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFuc2FjLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB2ZWNQcm9jZXNvcyA9IFsgIF1cclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllemFYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgcC5pZCBhcyBpZFByb2Nlc28gLCBwLmRlc2NyaXBjaW9uIGFzIGRlc2NpcGNpb25Qcm9jZXNvICwgcC5pZF9waWV6YSBhcyBpZFBpZXphICxcclxuICAgICAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfbWFxdWluYSBhcyBpZE1hcXVpbmEgLCBtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLFxyXG4gICAgICAgICAgICBwLmlkX3RpcG9zX3Byb2Nlc28gYXMgaWRUaXBvUHJvY2VzbyAsIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgICAgICBmcm9tIHByb2Nlc29zIHBcclxuICAgICAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICAgICAgam9pbiBtYXF1aW5hcyBtYXEgb24gcC5pZF9tYXF1aW5hID0gbWFxLmlkXHJcbiAgICAgICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MgPSByZXNwb25zZS5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgIHZhciBpZFByb2Nlc29zID0gJydcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1Byb2Nlc29zICkgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFByb2Nlc29zICs9IGAgJHtwLmlkUHJvY2Vzb30gLGBcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpZFByb2Nlc29zID09PSAnJyApIHsgaWRQcm9jZXNvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IGlkUHJvY2Vzb3MgPSBpZFByb2Nlc29zLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgIGlkUHJvY2Vzb3MubGVuZ3RoIC0yICkgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBpZFByb2Nlc29zIClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGllemFYaHMgPSBgc2VsZWN0IHB4aC5pZCBhcyBpZFBpZXphc1hocyAsIHB4aC5jYW50aWRhZCBhcyBjYW50aWRhZFBpZXphc1hocyAsIHB4aC5mZV9kZXNkZSBhcyBkZXNkZVBpZXphc1hocyAsXHJcbiAgICAgICAgICAgICAgICBweGguZmVfaGFzdGEgYXMgaGFzdGFQaWV6YXNYaHMgLCBweGguaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICAgICAgICAgIGZyb20gcGllemFzX3hfaG9yYSBweGhcclxuICAgICAgICAgICAgICAgIHdoZXJlIHB4aC5pZF9wcm9jZXNvIGluICgke2lkUHJvY2Vzb3N9KWBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VscnB6WGhzID0gYXdhaXQgbXlSZXF1ZXN0UGllemFYaHMucXVlcnkgKCBxdWVyeVBpZXphWGhzIClcclxuICAgICAgICAgICAgICAgIHZhciB2ZWNQaWV6YXNYaG9yYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgIGlmICggcmVzdWxycHpYaHMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCB2ZWNQaWV6YXNYaG9yYSApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEgPSByZXN1bHJwelhocy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIHJlc3VscnB6WGhzLnJlY29yZHNldCApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MuZm9yRWFjaCAoICggcCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEuZm9yRWFjaCAoICggcHpYaHMgLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQgKCBwLmlkUHJvY2VzbyApID09PSBwYXJzZUludCAoIHB6WGhzLmlkUHJvY2VzbyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEucHVzaCAoIHB6WGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB2ZWNQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn0gKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgZGVzY3JpcGNpb25Qcm9jZXNvICwgaWRQaWV6YSAsIGlkTWFxdWluYSAsIGlkVGlwb3NQcm9jZXNvICwgdmVjUGllemFzWGhvcmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCAsRGF0ZSAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdFByb2Nlc28gPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgICAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYXNhY3Rpb25zICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGVycm9yVHJhc2FjdGlvbnMgKSB7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhc2FjdGlvbnMubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2Rlc2NyaXBjaW9uUHJvY2VzbycgLCBWYXJDaGFyICwgIGRlc2NyaXBjaW9uUHJvY2VzbyApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCAgaWRQaWV6YSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsICBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkVGlwb3NQcm9jZXNvJyAsIEludCAsICBpZFRpcG9zUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgaW5zZXJ0IGludG8gcHJvY2Vzb3MgKCBkZXNjcmlwY2lvbiAsIGlkX3BpZXphICwgaWRfbWFxdWluYSAsIGlkX3RpcG9zX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgKCBAZGVzY3JpcGNpb25Qcm9jZXNvICwgQGlkUGllemEgLCBAaWRNYXF1aW5hICwgQGlkVGlwb3NQcm9jZXNvICwgMSApIDtcclxuICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZXNvIGludFxyXG4gICAgICAgICAgICBzZXQgQGlkUHJvY2VzbyA9ICggc2VsZWN0IHRvcCAxIG1heCAoIGlkICkgZnJvbSBwcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHNlbGVjdCBAaWRQcm9jZXNvIGFzIGlkUHJvY2Vzb2BcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICAgICAgdmFyIGlkUHJvY2Vzb1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZFByb2Nlc28gPSByZXNwb25zZVByb2Nlc29zLnJlY29yZHNldHNbMF1bMF0uaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUHJvY2VzbyAsIGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCAgaWRQcm9jZXNvIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uID0gQGRlc2NyaXBjaW9uUHJvY2VzbyAsXHJcbiAgICAgICAgICAgIGlkX3BpZXphID0gQGlkUGllemEgLFxyXG4gICAgICAgICAgICBpZF9tYXF1aW5hID0gQGlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgIGlkX3RpcG9zX3Byb2Nlc28gPSBAaWRUaXBvc1Byb2Nlc29cclxuICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIDsgZGVsZXRlIHBpZXphc194X2hvcmEgd2hlcmUgaWRfcHJvY2VzbyA9IEBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1BpZXphc1hob3JhICkgJiYgdmVjUGllemFzWGhvcmEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BpZXphc1hob3JhICwgKCBwaWV6YVhocyAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3RQaWVYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnY2FudGlkYWRQaWV6YXNYaHMnICwgSW50ICwgcGllemFYaHMuY2FudGlkYWRQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnZGVzZGVQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmRlc2RlUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2hhc3RhUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5oYXN0YVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgcGFyc2VJbnQgKCBpZFByb2Nlc28gKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGlleGhzID0gYGluc2VydCBpbnRvIHBpZXphc194X2hvcmEgKCBjYW50aWRhZCAsIGZlX2Rlc2RlICwgZmVfaGFzdGEgLCBpZF9wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICggQGNhbnRpZGFkUGllemFzWGhzICwgQGRlc2RlUGllemFzWGhzICwgQGhhc3RhUGllemFzWGhzICwgQGlkUHJvY2VzbyAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLnF1ZXJ5ICggcXVlcnlQaWV4aHMgLCAoIGVycm9yICwgcmVzdWx0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyb3JDYWxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yQ2FsYmFjayApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvckNhbGJhY2subWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQcm9jZXNvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7ICBSZXF1ZXN0ICAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIGBcclxuICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2Vzb3MgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFMaXN0YUNsaWVudGVzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IGlkIGFzIGlkVGlwb01hdGVyaWFsICwgbm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU1hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRUaXBvTWF0cmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNYXRlcmlhbCcgLCBWYXJDaGFyICwgbm9tYnJlTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byB0aXBvc19tYXRlcmlhbCAoIG5vbWJyZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZU1hdGVyaWFsICwgMSApICBgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVGlwb01hdGVyaWFsICAsICBub21icmVUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGVsaW1pbmFkbyAgY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSAgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUcmFiYWphZG9yLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmZfbmFjaW1pZW50byBhcyBmZWNoYU5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBmZWNoYUluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvVHJhYmFqYWRvciwgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxucmVxdWlyZSgnLi4vY29uZXhpb25lcy9tb25nb0RiJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3QgUGVyZmlsID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hUm9sZXNVc3VhcmlvcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgYXdhaXQgVXN1YXJpby5maW5kKChlLGRhdG8pPT57XHJcbiAgICAgICAgZSA/IHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdFcnJvciBlbiBlbCByZXF1ZXN0JykgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdG8pXHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbiAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkKHtfaWQ6cmVxLnBhcmFtcy5pZH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcilcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbiAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1VzdWFyaW8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4gICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbiAgICB9KVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=