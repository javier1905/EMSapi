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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NQcm9jZXNvLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RyYWJhamFkb3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90dXJub3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHQtbm9kZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uZXhpb24iLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImxvZyIsInJlZCIsIm1zc3FsIiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJwb3J0Iiwic2VydmVyIiwib3B0aW9ucyIsImFwcE5hbWUiLCJlbmFibGVBcml0aEFib3J0IiwiZW5jcnlwdCIsImNvbm5lY3Rpb25UaW1lT3V0IiwiZHJpdmVyIiwic3RyZWFtIiwicG9vbCIsIm1heCIsIm1pbiIsImlkbGVUaW1lb3V0TWlsbGlzIiwiQ29uZXhpb25TUUwiLCJhYnJpckNvbmV4aW9uIiwidW5kZWZpbmVkIiwiY2VycmFyQ29uZXhpb24iLCJhYnJpckNvbmV4aW9uUE9PTCIsImNlcnJhckNvbmV4aW9uUE9PTCIsInRoZW4iLCJfY29ubmVjdGVkIiwiYmx1ZSIsImdyZWVuIiwiY2xvc2UiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJhcmdzIiwiUHJvbWlzZSIsImFsbCIsInZhbHVlcyIsIm1hcCIsInBlcmZpbCIsIlNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJlbnVtIiwic2V0IiwibW9kZWwiLCJ1c3VhcmlvIiwidXNlck5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwibm9tYnJlIiwiYXBlbGxpZG8iLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsInllbGxvdyIsIlJvdXRlciIsImp3dCIsIkNPTkZJRyIsInJvdXRlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwibWVuc2FqZSIsInRva2VuIiwic3BsaXQiLCJ2ZXJpZnkiLCJkIiwiYmNyeXB0IiwiVXN1YXJpbyIsInBvc3QiLCJuZXh0IiwiZmluZCIsImJvZHkiLCJ2ZXJpZmljYVBhc3MiLCJjb21wYXJlU3luYyIsIm1pVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJSZXF1ZXN0IiwibXlSZXF1ZXN0IiwicXVlcnkiLCJyZXN1bHQiLCJyZWNvcmRzZXQiLCJtZXNzYWdlIiwicHV0IiwiY29uZXhpb24yIiwiSW50IiwibXlSZXF1ZXN0MiIsImlucHV0IiwicGFyc2VJbnQiLCJpZENsaWVudGUiLCJub21icmVDbGllbnRlIiwicmF6b25Tb2NpYWxDbGllbnRlIiwiVmFyQ2hhciIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsImlkT3BlcmFjaW9uIiwicGFyYW1zIiwiaWRQaWV6YSIsImlkTWFxdWluYSIsIm5vbWJyZVBpZXphIiwiaWRUaXBvTWF0ZXJpYWwiLCJNb21lbnQiLCJjb252aWVydGVIb3JhIiwiaG9yYSIsIkhvckluaWNpb25PIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJpZFBsYW5pbGxhIiwiY29uZXhpb25BYmllcnRhIiwiZmVjaGFEZXNkZVByb2R1Y2Npb24iLCJmZWNoYUhhc3RhUHJvZHVjY2lvbiIsImZlY2hhRGVzZGVGdW5kaWNpb24iLCJmZWNoYUhhc3RhRnVuZGljb24iLCJpZE1vbGRlIiwiaWRUaXBvUHJvY2VzbyIsIlRyYW5zYWN0aW9uIiwidHJhbnNhY2Npb24iLCJiZWdpbiIsInNxbENvbnN1bHRhIiwiY29uc3VsdGFQbGFuaWxsYSIsImNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwiY29uc3VsdGFSZWNoYXpvcyIsImNvbnN1bHRhWm9uYXMiLCJjb25zdWx0YVBNIiwidmVjUGxhbmlsbGFQcm9kdWNjaW9uIiwidmVjVHJhYmFqYWRvcmVzIiwidmVjUmVjaGF6b3MiLCJ2ZWNab25hcyIsInZlY1BNIiwicmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInBsYSIsInBsYW5pbGxhIiwiZmVjaGFDYXJnYSIsImZlY2hhUHJvZHVjY2lvbiIsImZlY2hhRnVuZGljaW9uIiwiaG9yYUluaWNpbyIsImZvcm1hdCIsImhvcmFGaW4iLCJub21icmVNYXF1aW5hIiwibm9tYnJlTW9sZGUiLCJ0aXBvUHJvY2VzbyIsImlkUHJvY2VzbyIsInB1c2giLCJsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIiwiaW5kZXhQbGFuaWxsYSIsImxlbmd0aCIsInNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFQTSIsInRyYWJhamFkb3Jlc1hwbGFuaWxsYSIsInJlY29yZHNldHMiLCJsaXN0YUlkVHJhYmFqYWRvcmVzIiwidCIsImkiLCJpZFRyYWJhamFkb3JYcGxhbmlsbGEiLCJzcWxDb25zdWx0YVJlY2hhem9zIiwicmVjaGF6b3MiLCJsaXN0YUlkUmVjaGF6b3MiLCJyZSIsImluZGV4UmVjaGF6byIsImlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIiwic3FsQ29uc3VsdGFab25hcyIsImRpcmVyZW5jaWFFbk1pbnV0b3MiLCJoX2luaWNpbyIsImhfZmluIiwiaERlc2RlIiwiaEhhc3RhIiwibGlzdGFab25hcyIsInBsIiwidmVjT3BlcmFyaW9zIiwidmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEiLCJwbSIsInBhcmFkYU1hcSIsImlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSIsImlkUGFyYWRhTWFxdWluYSIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJkZXNkZVBhcmFkYU1hcXVpbmEiLCJob3JhSW5pY2lvUGFyYWRhTWFxdWluYSIsImhhc3RhUGFyYWRhTWFxdWluYSIsImhvcmFGaW5QYXJhZGFNYXF1aW5hIiwiZHVyYWNpb25QYXJhZGFNYXF1aW5hIiwidGlwb1BhcmFkYU1hcXVpbmEiLCJ0ciIsImluZGV4VHJhYmFqYWRvciIsInRyYVhwbGEiLCJpZE9wZXJhcmlvIiwiaWRUcmFiYWphZG9yIiwiaWRUdXJubyIsIm5vbWJyZVRyYWJhamFkb3IiLCJhcGVsbGlkb1RyYWJhamFkb3IiLCJ0dXJub1RyYWJhamFkb3IiLCJwcm9kdWNjaW9uIiwicGllemFzUHJvZHVjaWRhcyIsImNhbG9yaWFzIiwidmVjUmVjaGF6byIsInJlY2giLCJpZFJlY2hhem8iLCJpZERlZmVjdG8iLCJub21icmVSZWNoYXpvIiwidGlwbyIsInRpcG9SZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvcyIsInpvbiIsImlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSIsInpvbmFYcmVjaGEiLCJpZFpvbmEiLCJsZXRyYSIsImxldHJhWm9uYSIsIm51bWVybyIsIm51bWVyb1pvbmEiLCJjYW50aWRhZCIsImNhbnRpZGFkWm9uYSIsImNvbW1pdCIsInJvbGxiYWNrIiwiSG9yYUluaWNpb1Byb2R1Y2Npb24iLCJIb3JhRmluUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtIiwiYXNpbmNyb25vIiwibWV0b2RvVHJhbnNhY2Npb24iLCJpZFpvbmFzRGVsZXRlIiwiaWRSZWNoYXpvc0RlbGV0ZSIsImlkT3BlcmFyaW9zRGVsZXRlIiwiaWRQbURlbGV0ZSIsInAiLCJpcCIsIm8iLCJpbyIsInIiLCJpciIsInoiLCJpeiIsInRyaW0iLCJzdWJzdHJpbmciLCJyZXN1bHREZWxldGUiLCJUaW1lIiwicHJlcGFyZSIsImRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIiwiZmVfcHJvZHVjY2lvbiIsImZlX2Z1bmRpY2lvbiIsImhvcmFfaW5pY2lvIiwiaG9yYV9maW4iLCJpZF90dXJubyIsImlkX21vbGRlIiwicmVzdWx0QzEiLCJleGVjdXRlIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsInZlY09wZXJhcmlvc1hwbGFuaWxsYSIsIm9wZXJhcmlvIiwib3AiLCJwemFfcHJvZHVjaWRhcyIsImlkX3RyYWJhamFkb3IiLCJpZF9wbGFuaWxsYSIsImVhY2hTZXJpZXMiLCJ0cmFiYWphZG9yIiwiY2FsbGJhY2siLCJwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEiLCJ2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEiLCJyZWNoYXpvWiIsImlkX2RlZmVjdG8iLCJyZWNoYXpvIiwidmVjWm9uYXNYcmVjaGF6byIsInpvbmEiLCJ6b28iLCJ2ZWNQYXJhZGFzRGVNYXF1aW5hIiwicGFyYU1BQyIsImlkX3BhcmFkYXNfbWFxdWluYSIsIlBNIiwiY2FsbGJhY2tQTSIsImNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSIsIkVSIiwicmVzdWx0UE0iLCJlcnJvUiIsInNldEhlYWRlciIsIm1lbnNhamUyIiwiaWRQbGFuaWxsYVByb2R1Y2Npb24iLCJjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uIiwiaXNOYU4iLCJub21icmVNYXRlcmlhbCIsIm5vbWJyZVRpcG9NYXRlcmlhbCIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxRQUFNLEVBQUM7QUFETSxDQUFqQixDOzs7Ozs7Ozs7OztBQ0FBLE1BQU1DLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFDQSxJQUFHQyxJQUFILEVBQTBDO0FBQzFDRCxxQkFBTyxDQUFDLHNCQUFELENBQVA7QUFDQzs7QUFFRCxJQUFJRSxHQUFKOztBQUNBLElBQUdELEtBQUgsRUFBeUMsRUFBekMsTUFHSTtBQUNDQyxLQUFHLEdBQUcsNENBQU47QUFDSjs7QUFFREgsUUFBUSxDQUFDSSxPQUFULENBQWlCRCxHQUFqQixFQUFxQjtBQUFDRSxpQkFBZSxFQUFDLElBQWpCO0FBQXNC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Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbnJlcXVpcmUoJ2NvbG9ycycpXHJcbn1cclxuXHJcbnZhciBVUkk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgIFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbn1cclxuZWxzZXtcclxuICAgICBVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDo1MDAwOjI3MDE3L3VzdWFyaW9zRU1TJ1xyXG59XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFVSSSx7dXNlTmV3VXJsUGFyc2VyOnRydWUsdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSk7XHJcblxyXG52YXIgY29uZXhpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJyxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwnZXJyb3IgZGUgY29uZXhpb24nKSk7XHJcblxyXG5jb25leGlvbi5vbmNlKCdvcGVuJywoKT0+e1xyXG4gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicucmVkKVxyXG4gICAgIH0gXHJcbiAgICAgZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicpXHJcbiAgICAgfVxyXG59KVxyXG4iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUlNRTCxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMLFxyXG4gICAgICAgIHNlcnZlcjpwcm9jZXNzLmVudi5TRVJWRVJTUUwsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnREJqYXYnLCAvKiBEQmphdiBlbXNEQiAgKi9cclxuICAgICAgICBwYXNzd29yZDogJ2JlbGdyYW5vNDU1JyxcclxuICAgICAgICBkYXRhYmFzZTogJ0VNU19EQl9TUUwnLFxyXG4gICAgICAgIHBvcnQ6MTQzMyxcclxuICAgICAgICBzZXJ2ZXI6J0RFU0tUT1AtRzFJMDk3QycsIC8qIERFU0tUT1AtRzFJMDk3QyAgUEMyMzYwICovXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J2Vtcy1ub2RlLWFwaScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxudmFyIGNvbmV4aW9uXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4gICAgLnRoZW4ocG9vbD0+e1xyXG4gICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbiAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgIFxyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgcGVyZmlsID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdwZXJmaWwnLHBlcmZpbCkiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHVzdWFyaW8gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgICB1c2VyTmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgbm9tYnJlOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwZWxsaWRvOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3VzdWFyaW8nLHVzdWFyaW8pIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW47XHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpXHJcbn1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXF1aW5hcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tYXF1aW5hcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9BdXRlbnRpZmljYXNpb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BpZXphcycscmVxdWlyZSgnLi9ydXRhc0FwaS9waWV6YXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL21vbGRlcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tb2xkZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RlZmVjdG9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2RlZmVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9vcGVyYWNpb25lcycscmVxdWlyZSgnLi9ydXRhc0FwaS9vcGVyYWNpb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvY2Vzb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvY2Vzb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3R1cm5vcycscmVxdWlyZSgnLi9ydXRhc0FwaS90dXJub3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BhcmFkYXNNYXF1aW5hJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90cmFiYWphZG9yZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zUHJvY2VzbycscmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NsaWVudGVzJywgcmVxdWlyZSggJy4vcnV0YXNBcGkvY2xpZW50ZXMnICkgKVxyXG5zZXJ2aWRvci51c2UgKCcvYXBpL3RpcG9zTWF0ZXJpYWwnLCByZXF1aXJlICggJy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbCcgKSApXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcscHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwKVxyXG5cclxuc2Vydmlkb3IubGlzdGVuKHNlcnZpZG9yLmdldCgncG9ydCcpLChtLGUpPT57XHJcbiAgICBpZihlKXtjb25zb2xlLmxvZyhlKX1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLnllbGxvdyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlcj1Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+e1xyXG5cclxuICAgIGlmKCFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonTm8gZW52aW8gZWwgVG9rZW4gZW4gZWwgaGVhZGVycyd9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgand0LnZlcmlmeSh0b2tlbixDT05GSUcuc2VjcmV0LChlLGQpPT57XHJcbiAgICAgICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5uYW1lfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwdCA9cmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpXHJcbmNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzLG5leHQpPT57XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmQoe3VzZXJOYW1lOnJlcS5ib2R5LnVzZXJOYW1lfSlcclxuICAgICAgICBpZighdXNlclswXSl7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidVc3VhcmlvIEluZXhpc3RlbnRlICEnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgdmVyaWZpY2FQYXNzID0gYXdhaXQgYmNyeXB0LmNvbXBhcmVTeW5jKHJlcS5ib2R5LnBhc3N3b3JkLHVzZXJbMF0ucGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGlmKCF2ZXJpZmljYVBhc3Mpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J1Bhc3N3b3JkIEluY29ycmVjdGEnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlVc3VhcmlvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOnVzZXJbMF0udXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6dXNlclswXS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBub21icmU6dXNlclswXS5ub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG86dXNlclswXS5hcGVsbGlkbyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJmaWw6dXNlclswXS5wZXJmaWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGp3dC5zaWduKG1pVXN1YXJpbyxzZWNyZXQse2V4cGlyZXNJbjoxNDQwMH0sKGUsdG9rZW4pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZT8gcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGdlbmVyYXIgZWwgdG9rZW4nfSk6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Rva2VufSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7ZX0pO1xyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFDbGllbnRlcycgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCBzZWxlY3QgYy5pZCBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICwgYy5yYXpvbl9zb2NpYWwgYXMgcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICBmcm9tIGNsaWVudGVzIGNcclxuICAgIHdoZXJlIGMuZXN0YWRvID0gMWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24yID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQ2xpZW50ZScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdDIgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uMiAgKVxyXG4gICAgICAgIG15UmVxdWVzdDIuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIHBhcnNlSW50ICggcmVxLmJvZHkuaWRDbGllbnRlICkgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBjbGllbnRlcyBzZXQgZXN0YWRvID0gMCB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0Mi5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBFbGltaW5hZG8gQ29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCAgcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAsIGlkQ2xpZW50ZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQ2xpZW50ZScgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsICBpZENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHVwZGF0ZSBjbGllbnRlc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlQ2xpZW50ZSAsXHJcbiAgICByYXpvbl9zb2NpYWwgPSBAcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBBY3R1YWxpemFkbyBDb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydENsaWVudGUnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBjbGllbnRlcyAoIG5vbWJyZSAsIHJhem9uX3NvY2lhbCAsIGVzdGFkbyAgKSB2YWx1ZXMgICggQG5vbWJyZUNsaWVudGUgLCBAcmF6b25Tb2NpYWxDbGllbnRlICwgMSApYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hLCBtLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uTWFxdWluYSAsIGlkX3RpcG9zX21hcXVpbmEgYXMgaWRUaXBvTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveG9wZXJhY2lvbi86aWRPcGVyYWNpb24nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgY29uc3Qge2lkT3BlcmFjaW9ufSA9IHJlcS5wYXJhbXNcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLGlkX3BpZXphIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVNb2xkZSBmcm9tIG1vbGRlcyB3aGVyZSBlc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRPcGVyYWNpb24sIG5vbWJyZSBhcyBub21icmVPcGVyYWNpb25cclxuICAgICAgICBmcm9tIG9wZXJhY2lvbmVzIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0bykgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHZhciB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmEsIHBtLmlkX2FyZWEgYXMgaWRBcmVhLCBhLm5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmEgcG1cclxuXHRcdGpvaW4gYXJlYXMgYSBvbiBwbS5pZF9hcmVhPWEuaWRcclxuICAgICAgICB3aGVyZSBwbS5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZSxkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZSl7Y2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oZGF0by5yZWNvcmRzZXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSBuZXcgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICAnc2VsZWN0IGlkIGFzIGlkUGllemEsIG5vbWJyZSBhcyBub21icmVQaWV6YSBmcm9tIHBpZXphcyB3aGVyZSBlc3RhZG8gPSAxJyxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQaWV6YScgLCBWYXJDaGFyICwgbm9tYnJlUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBpZXphcyAoIG5vbWJyZSAsIGlkX2NsaWVudGUgLCBpZF90aXBvc19tYXRlcmlhbCAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZVBpZXphICwgQGlkQ2xpZW50ZSAsIEBpZFRpcG9NYXRlcmlhbCAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEgLCBub21icmVQaWV6YSAsIGlkQ2xpZW50ZSAsIGlkVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGllemFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFuaWxsYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZWxpbWluYVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnN1bHRhLnF1ZXJ5KCBgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gJHsgcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgfWBcclxuICAgICAgICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFbGltaW5hY2lvbiBleGl0b3NhICEnIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QoICcvbGlzdGFyJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkT3BlcmFjaW9uXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgIHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVGdW5kaWNpb259JyBhbmQgJyR7ZmVjaGFIYXN0YUZ1bmRpY29ufSdcclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAnJHtmZWNoYURlc2RlUHJvZHVjY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhUHJvZHVjY2lvbn0nXHJcbiAgICAgICAgYW5kICggJHsgaWRNYXF1aW5hIH0gaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gICR7IGlkTWFxdWluYSB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFBpZXphIH0gaXMgbnVsbCAgb3IgcC5pZF9waWV6YSA9ICAkeyBpZFBpZXphIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb1Byb2Nlc28gfSBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgJHsgaWRUaXBvUHJvY2VzbyB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZE9wZXJhY2lvbiB9IGlzIG51bGwgIG9yIHRtLmlkX29wZXJhY2lvbiA9ICAkeyBpZE9wZXJhY2lvbiB9ICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID09PSAnJyApeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICxcclxuICAgICAgICAgICAgICAgIHR4cC5jYWxvcmlhcyBhcyBjYWxvcmlhcyAsIHR4cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgdHhwLmlkX3RyYWJhamFkb3IgYXMgaWRUcmFiYWphZG9yICwgdHhwLmlkX3R1cm5vIGFzIGlkVHVybm9cclxuICAgICAgICAgICAgICAgIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhIHR4cFxyXG4gICAgICAgICAgICAgICAgam9pbiB0cmFiYWphZG9yZXMgdCBvbiB0eHAuaWRfdHJhYmFqYWRvciA9IHQuaWRcclxuICAgICAgICAgICAgICAgIGpvaW4gdHVybm9zIHR1ciBvbiB0eHAuaWRfdHVybm8gPSB0dXIuaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHR4cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgdHhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgIDsgYFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFRyYWJhamFkb3JlcyA9PT0gJycgKSB7IGxpc3RhSWRUcmFiYWphZG9yZXMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRSZWNoYXpvcyA9PT0gJycgKSB7IGxpc3RhSWRSZWNoYXpvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlcmVuY2lhRW5NaW51dG9zID0gKGhvcmFJbmljaW8saG9yYUZpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaF9pbmljaW8gPSBuZXcgTW9tZW50ICggIGhvcmFJbmljaW8gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoX2ZpbiA9IG5ldyBNb21lbnQgKCAgaG9yYUZpbiAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhEZXNkZSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9pbmljaW99YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoSGFzdGEgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfZmlufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihoX2luaWNpbyA9PT0gJzA2OjAwJyAmJiBoX2ZpbiA9PT0gJzA2OjAwJyl7ICByZXR1cm4gMjQgKiA2MCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigoaEhhc3RhLWhEZXNkZSkvMTAwMCA8IDApeyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgKyAxNDQwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhWm9uYXMgPSBhd2FpdCBjb25zdWx0YVpvbmFzLnF1ZXJ5KCBzcWxDb25zdWx0YVpvbmFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxpc3RhWm9uYXMucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA9IGxpc3RhWm9uYXMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCggKHBsICwgaW5kZXhQbGFuaWxsYSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQTS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggcG0uaWRQbGFuaWxsYSApID09PSBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFkYU1hcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGE6IHBtLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hIDogcG0uaWRQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVQYXJhZGFNYXF1aW5hIDogcG0ubm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZGVQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzdGFQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYWNpb25QYXJhZGFNYXF1aW5hIDogZGlyZXJlbmNpYUVuTWludXRvcyggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCAgcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1BhcmFkYU1hcXVpbmEgOiBwbS50aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEucHVzaCggcGFyYWRhTWFxIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goICh0ciAsIGluZGV4VHJhYmFqYWRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggdHIuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYVhwbGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUcmFiYWphZG9yWHBsYW5pbGxhIDogdHIuaWRUcmFiYWphZG9yWHBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW8gOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVHJhYmFqYWRvciA6IHRyLmFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJub1RyYWJhamFkb3IgOiB0ci50dXJub1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCB0ci5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCB0ci5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjY2lvbiA6IHRyLnBpZXphc1Byb2R1Y2lkYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiB0ci5jYWxvcmlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvIDogWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB0cmFYcGxhLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApID09PSBwYXJzZUludCAoIHJlLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIDogcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem8gOiByZS5pZERlZmVjdG8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUmVjaGF6byA6IHJlLm5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbyA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6byA6IHJlLmNhbnRpZGFkUmVjaGF6b3MgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzLmZvckVhY2goIHpvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB6b24uaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhICkgPT09IHBhcnNlSW50KCByZWNoLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmFYcmVjaGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmEgOiB6b24uaWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uLmxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHpvbi5jYW50aWRhZFpvbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoLnZlY1pvbmFzLnB1c2goIHpvbmFYcmVjaGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYVhwbGEudmVjUmVjaGF6by5wdXNoKCByZWNoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zLnB1c2goIHRyYVhwbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAvLyBob2xhIG11bmRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiAsICBpZE9wZXJhY2lvbiAsIGlkTWFxdWluYSAsICBpZFBpZXphICwgIGlkTW9sZGUgLCBpZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MgLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSAsIGlkUGxhbmlsbGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc29sZS5sb2cgKCBpZFBsYW5pbGxhIClcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtID0gYXdhaXQgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiAoIGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZiAoICFlcnIgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICggICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRab25hc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUmVjaGF6b3NEZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZE9wZXJhcmlvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUG1EZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCAoIHAgLCBpcCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5sZW5ndGggLTEgKSAgPT09IGlwICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoICggbyAsIGlvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQoIG8uaWRUcmFiYWphZG9yWHBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnZlY1JlY2hhem8uZm9yRWFjaCAoICggciAsIGlyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCByLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZWNab25hcy5mb3JFYWNoICggKCB6ICwgaXogKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCB6LmlkWm9uYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRPcGVyYXJpb3NEZWxldGUgIT09ICcnICkgeyBpZE9wZXJhcmlvc0RlbGV0ZSA9ICBpZE9wZXJhcmlvc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFJlY2hhem9zRGVsZXRlICE9PSAnJyApIHsgaWRSZWNoYXpvc0RlbGV0ZSA9ICBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRSZWNoYXpvc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRab25hc0RlbGV0ZSAhPT0gJycgKSB7IGlkWm9uYXNEZWxldGUgPSAgaWRab25hc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkWm9uYXNEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHREZWxldGUgPSBhd2FpdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0ucXVlcnkgKCBgIGRlbGV0ZSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkWm9uYXNEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkWm9uYXNEZWxldGV9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUmVjaGF6b3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUmVjaGF6b3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRPcGVyYXJpb3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkT3BlcmFyaW9zRGVsZXRlIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUG1EZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUG1EZWxldGUgfSApIDsgYCApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHREZWxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9wcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfZnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkX21vbGRlJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZFBsYW5pbGxhJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb24gPSBAZmVfcHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb24gPSBAZmVfZnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvID0gQGhvcmFfaW5pY2lvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluID0gQGhvcmFfZmluICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3Byb2Nlc28gPSBAaWRQcm9jZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZSA9IEBpZF9tb2xkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFuaWxsYWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGFyc2VJbnQgKCBpZFBsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSAoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0QzEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2ggKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8uY2Fsb3JpYXMgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5wcm9kdWNjaW9uICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50ICggb3BlcmFyaW8uaWRPcGVyYXJpbyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCAoIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJywgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoICggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG8gOiBwYXJzZUludCAoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzIDogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uYS5sZXRyYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5ICggY29uc3VsdGEgLCAoIGVyciAsIHJlc3VsdCApID0+IHsgaWYgKCBlcnIgKSB7ICBjYWxsYmFjayAoIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrICggICkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCAsICggRVIgLCByZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0oIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvUi5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIgKCAnQ29udGVudC1UeXBlJyAsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKS5qc29uICggeyBtZW5zYWplIDogJ0FjdHVhbGl6YWNpb24gZXhpdG9zYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbnJvdXRlci5wb3N0KCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJywgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhOiB6b25hLmxldHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2ggKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNICggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNICggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyb1IubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnSW5zZXJjaW9uIGV4aXRvcmEnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIG1lbnNhamUyIDogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCApXHJcblxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2NvbnN1bHRhTGlzdGFDbGllbnRlcycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCBpZCBhcyBpZFRpcG9NYXRlcmlhbCAsIG5vbWJyZSBhcyBub21icmVUaXBvTWF0ZXJpYWxcclxuICAgICAgICBmcm9tIHRpcG9zX21hdGVyaWFsXHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVNYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VGlwb01hdHJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZU1hdGVyaWFsICApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gdGlwb3NfbWF0ZXJpYWwgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlcyAoIEBub21icmVNYXRlcmlhbCAsIDEgKSAgYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBNYXRlcmlhbCBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCAgLCAgbm9tYnJlVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVGlwb01hdGVyaWFsJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0VGlwb01hdGVyaWFsJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsICApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRpcG9zX21hdGVyaWFsXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkVGlwb01hdGVyaWFsYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBNYXRlcmlhbCBlbGltaW5hZG8gIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAoIHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkVGlwb1Byb2Nlc28sIG5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gd2hlcmUgZXN0YWRvID0gMSAnICwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIucG9zdCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEsIGlkTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoYHNlbGVjdCB0cC5pZCBhcyBpZFRpcG9Qcm9jZXNvLCB0cC5ub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc28gZnJvbSB0aXBvc19wcm9jZXNvIHRwXHJcbiAgICBqb2luIHByb2Nlc29zIHAgb24gdHAuaWQgPSBwLmlkX3RpcG9zX3Byb2Nlc28gd2hlcmUgcC5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9IGFuZCBwLmlkX3BpZXphID0gJHtpZFBpZXphfSBhbmQgdHAuZXN0YWRvID0gMWAsIChlLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gIHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHJhYmFqYWRvciwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgdC5mX25hY2ltaWVudG8gYXMgZmVjaGFOYWNpbWllbnRvVHJhYmFqYWRvciwgdC5mX2luZ3Jlc28gYXMgZmVjaGFJbmdyZXNvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmlkX3B1ZXN0byBhcyBpZFB1ZXN0b1RyYWJhamFkb3IsIHAubm9tYnJlIGFzIG5vbWJyZVB1ZXN0b1xyXG4gICAgICAgIGZyb20gdHJhYmFqYWRvcmVzIHRcclxuICAgICAgICBqb2luIHB1ZXN0b3MgcCBvbiB0LmlkX3B1ZXN0bz1wLmlkXHJcbiAgICAgICAgd2hlcmUgdC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTtjZXJyYXJDb25leGlvbigpfVxyXG4gICAgICAgICAgICBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTtjZXJyYXJDb25leGlvbigpfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHVybm8sIHQuZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25UdXJubyx0LmhzX2luaWNpbyBhcyBoc0luaWNpb1R1cm5vICx0LmhzX2ZpbiBhcyBoc0ZpblR1cm5vICBcclxuICAgICAgICBmcm9tIHR1cm5vcyB0XHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpXHJcbnJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvbW9uZ29EYicpXHJcbmNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IFBlcmZpbCA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVJvbGVzVXN1YXJpb3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGF3YWl0IFVzdWFyaW8uZmluZCgoZSxkYXRvKT0+e1xyXG4gICAgICAgIGUgPyByZXMuc3RhdHVzKDQwMykuc2VuZCgnRXJyb3IgZW4gZWwgcmVxdWVzdCcpIDpcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRvKVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgbGlzdGFQZXJmaWxlcyA9IGF3YWl0IFBlcmZpbC5maW5kKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihsaXN0YVBlcmZpbGVzKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvcGVyZmlsZXMnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHtwZXJmaWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBuZXdQZXJmaWwgPSBuZXcgUGVyZmlsKHtwZXJmaWx9KVxyXG4gICAgICAgIGF3YWl0IG5ld1BlcmZpbC5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonR3VhcmRhZG8gRXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0pXHJcblxyXG5yb3V0ZXIuZ2V0KCcvOmlkJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kQnlJZCh7X2lkOnJlcS5wYXJhbXMuaWR9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHZhciB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIHBhc3N3b3JkID0gYXdhaXQgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpXHJcbiAgICAgICAgY29uc3QgbmV3VXNlcj0gbmV3IFVzdWFyaW8oe3VzZXJOYW1lLHBhc3N3b3JkLGVtYWlsLG5vbWJyZSxhcGVsbGlkbyxwZXJmaWx9KVxyXG4gICAgICAgIGNvbnN0IGRhdG8gPSBhd2FpdCBuZXdVc2VyLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidVc3VhcmlvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZSAhJ30pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucHV0KCcvOmlkJywocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcclxuICAgIGlmKGJvZHkucGFzc3dvcmQpe2JvZHkucGFzc3dvcmQgPSBiY3J5cC5oYXNoU3luYyhib2R5LnBhc3N3b3JkKSB9XHJcbiAgICBVc3VhcmlvLmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LGJvZHksKGUsZCk9PntcclxuICAgICAgICBlPyByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZS5tZXNzYWdlfSkgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidNb2RpZmljYWRvIGNvcnJlY3RhbWVudGUgISd9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzeW5jXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc3NxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9