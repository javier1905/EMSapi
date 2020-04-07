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
router.post('/insert', async (req, res) => {
  const {
    nombreDefecto,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertDefecto');
    const myRequest = new Request(conexion);
    myRequest.input('nombreDefecto', VarChar, nombreDefecto);
    myRequest.input('idOperacion', Int, idOperacion);
    const query = `insert into defectos ( nombre , id_operacion , estado )
        values
        ( @nombreDefecto , @idOperacion , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Defecto Insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idDefecto,
    nombreDefecto,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateDefecto');
    const myRequest = new Request(conexion);
    myRequest.input('nombreDefecto', VarChar, nombreDefecto);
    myRequest.input('idOperacion', Int, idOperacion);
    myRequest.input('idDefecto', Int, idDefecto);
    const query = `update defectos
        set
        nombre = @nombreDefecto ,
        id_operacion = @idOperacion
        where id = @idDefecto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Defecto actualizado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idDefecto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteDefecto');
    const myRequest = new Request(conexion);
    myRequest.input('idDefecto', Int, idDefecto);
    const query = `update defectos
        set
        estado = 0
        where id = @idDefecto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Defecto eliminado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NQcm9jZXNvLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RyYWJhamFkb3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90dXJub3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHQtbm9kZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uZXhpb24iLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImxvZyIsInJlZCIsIm1zc3FsIiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJwb3J0Iiwic2VydmVyIiwib3B0aW9ucyIsImFwcE5hbWUiLCJlbmFibGVBcml0aEFib3J0IiwiZW5jcnlwdCIsImNvbm5lY3Rpb25UaW1lT3V0IiwiZHJpdmVyIiwic3RyZWFtIiwicG9vbCIsIm1heCIsIm1pbiIsImlkbGVUaW1lb3V0TWlsbGlzIiwiQ29uZXhpb25TUUwiLCJhYnJpckNvbmV4aW9uIiwidW5kZWZpbmVkIiwiY2VycmFyQ29uZXhpb24iLCJhYnJpckNvbmV4aW9uUE9PTCIsImNlcnJhckNvbmV4aW9uUE9PTCIsInRoZW4iLCJfY29ubmVjdGVkIiwiYmx1ZSIsImdyZWVuIiwiY2xvc2UiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJhcmdzIiwiUHJvbWlzZSIsImFsbCIsInZhbHVlcyIsIm1hcCIsInBlcmZpbCIsIlNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJlbnVtIiwic2V0IiwibW9kZWwiLCJ1c3VhcmlvIiwidXNlck5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwibm9tYnJlIiwiYXBlbGxpZG8iLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsInllbGxvdyIsIlJvdXRlciIsImp3dCIsIkNPTkZJRyIsInJvdXRlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwibWVuc2FqZSIsInRva2VuIiwic3BsaXQiLCJ2ZXJpZnkiLCJkIiwiYmNyeXB0IiwiVXN1YXJpbyIsInBvc3QiLCJuZXh0IiwiZmluZCIsImJvZHkiLCJ2ZXJpZmljYVBhc3MiLCJjb21wYXJlU3luYyIsIm1pVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJSZXF1ZXN0IiwibXlSZXF1ZXN0IiwicXVlcnkiLCJyZXN1bHQiLCJyZWNvcmRzZXQiLCJtZXNzYWdlIiwicHV0IiwiY29uZXhpb24yIiwiSW50IiwibXlSZXF1ZXN0MiIsImlucHV0IiwicGFyc2VJbnQiLCJpZENsaWVudGUiLCJub21icmVDbGllbnRlIiwicmF6b25Tb2NpYWxDbGllbnRlIiwiVmFyQ2hhciIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsIm5vbWJyZURlZmVjdG8iLCJpZE9wZXJhY2lvbiIsImlkRGVmZWN0byIsInBhcmFtcyIsImlkUGllemEiLCJpZE1hcXVpbmEiLCJub21icmVQaWV6YSIsImlkVGlwb01hdGVyaWFsIiwiTW9tZW50IiwiY29udmllcnRlSG9yYSIsImhvcmEiLCJIb3JJbmljaW9uTyIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwiaWRQbGFuaWxsYSIsImNvbmV4aW9uQWJpZXJ0YSIsImZlY2hhRGVzZGVQcm9kdWNjaW9uIiwiZmVjaGFIYXN0YVByb2R1Y2Npb24iLCJmZWNoYURlc2RlRnVuZGljaW9uIiwiZmVjaGFIYXN0YUZ1bmRpY29uIiwiaWRNb2xkZSIsImlkVGlwb1Byb2Nlc28iLCJUcmFuc2FjdGlvbiIsInRyYW5zYWNjaW9uIiwiYmVnaW4iLCJzcWxDb25zdWx0YSIsImNvbnN1bHRhUGxhbmlsbGEiLCJjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsImNvbnN1bHRhUmVjaGF6b3MiLCJjb25zdWx0YVpvbmFzIiwiY29uc3VsdGFQTSIsInZlY1BsYW5pbGxhUHJvZHVjY2lvbiIsInZlY1RyYWJhamFkb3JlcyIsInZlY1JlY2hhem9zIiwidmVjWm9uYXMiLCJ2ZWNQTSIsInJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwbGEiLCJwbGFuaWxsYSIsImZlY2hhQ2FyZ2EiLCJmZWNoYVByb2R1Y2Npb24iLCJmZWNoYUZ1bmRpY2lvbiIsImhvcmFJbmljaW8iLCJmb3JtYXQiLCJob3JhRmluIiwibm9tYnJlTWFxdWluYSIsIm5vbWJyZU1vbGRlIiwidGlwb1Byb2Nlc28iLCJpZFByb2Nlc28iLCJwdXNoIiwibGlzdGFJZFBsYW5pbGxhc1Byb2R1YyIsImluZGV4UGxhbmlsbGEiLCJsZW5ndGgiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJkaXJlcmVuY2lhRW5NaW51dG9zIiwiaF9pbmljaW8iLCJoX2ZpbiIsImhEZXNkZSIsImhIYXN0YSIsImxpc3RhWm9uYXMiLCJwbCIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwicG0iLCJwYXJhZGFNYXEiLCJpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEiLCJpZFBhcmFkYU1hcXVpbmEiLCJub21icmVQYXJhZGFNYXF1aW5hIiwiZGVzZGVQYXJhZGFNYXF1aW5hIiwiaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEiLCJoYXN0YVBhcmFkYU1hcXVpbmEiLCJob3JhRmluUGFyYWRhTWFxdWluYSIsImR1cmFjaW9uUGFyYWRhTWFxdWluYSIsInRpcG9QYXJhZGFNYXF1aW5hIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRPcGVyYXJpbyIsImlkVHJhYmFqYWRvciIsImlkVHVybm8iLCJub21icmVUcmFiYWphZG9yIiwiYXBlbGxpZG9UcmFiYWphZG9yIiwidHVybm9UcmFiYWphZG9yIiwicHJvZHVjY2lvbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInZlY1JlY2hhem8iLCJyZWNoIiwiaWRSZWNoYXpvIiwibm9tYnJlUmVjaGF6byIsInRpcG8iLCJ0aXBvUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6b3MiLCJ6b24iLCJpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJ6b25hWHJlY2hhIiwiaWRab25hIiwibGV0cmEiLCJsZXRyYVpvbmEiLCJudW1lcm8iLCJudW1lcm9ab25hIiwiY2FudGlkYWQiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsIkhvcmFJbmljaW9Qcm9kdWNjaW9uIiwiSG9yYUZpblByb2R1Y2Npb24iLCJQcmVwYXJlZFN0YXRlbWVudCIsInBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiIsImRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbSIsImFzaW5jcm9ubyIsIm1ldG9kb1RyYW5zYWNjaW9uIiwiaWRab25hc0RlbGV0ZSIsImlkUmVjaGF6b3NEZWxldGUiLCJpZE9wZXJhcmlvc0RlbGV0ZSIsImlkUG1EZWxldGUiLCJwIiwiaXAiLCJvIiwiaW8iLCJyIiwiaXIiLCJ6IiwiaXoiLCJ0cmltIiwic3Vic3RyaW5nIiwicmVzdWx0RGVsZXRlIiwiVGltZSIsInByZXBhcmUiLCJkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiIsImZlX3Byb2R1Y2Npb24iLCJmZV9mdW5kaWNpb24iLCJob3JhX2luaWNpbyIsImhvcmFfZmluIiwiaWRfdHVybm8iLCJpZF9tb2xkZSIsInJlc3VsdEMxIiwiZXhlY3V0ZSIsInVucHJlcGFyZWQiLCJ1bnByZXBhcmUiLCJ2ZWNPcGVyYXJpb3NYcGxhbmlsbGEiLCJvcGVyYXJpbyIsIm9wIiwicHphX3Byb2R1Y2lkYXMiLCJpZF90cmFiYWphZG9yIiwiaWRfcGxhbmlsbGEiLCJlYWNoU2VyaWVzIiwidHJhYmFqYWRvciIsImNhbGxiYWNrIiwicHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhIiwidmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhIiwicmVjaGF6b1oiLCJpZF9kZWZlY3RvIiwicmVjaGF6byIsInZlY1pvbmFzWHJlY2hhem8iLCJ6b25hIiwiem9vIiwidmVjUGFyYWRhc0RlTWFxdWluYSIsInBhcmFNQUMiLCJpZF9wYXJhZGFzX21hcXVpbmEiLCJQTSIsImNhbGxiYWNrUE0iLCJjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEiLCJFUiIsInJlc3VsdFBNIiwiZXJyb1IiLCJzZXRIZWFkZXIiLCJtZW5zYWplMiIsImlkUGxhbmlsbGFQcm9kdWNjaW9uIiwiY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbiIsImlzTmFOIiwibXlUcmFuc2FjdGlvbiIsImVycm9yVHJhbnNhYyIsInZlY1Byb2Nlc29zIiwibXlSZXF1ZXN0UGllemFYaHMiLCJyZXNwb25zZSIsImlkUHJvY2Vzb3MiLCJxdWVyeVBpZXphWGhzIiwicmVzdWxycHpYaHMiLCJ2ZWNQaWV6YXNYaG9yYSIsInB6WGhzIiwiaW5kZXgiLCJkZXNjcmlwY2lvblByb2Nlc28iLCJpZFRpcG9zUHJvY2VzbyIsIm15UmVxdWVzdFByb2Nlc28iLCJlcnJvclRyYXNhY3Rpb25zIiwicXVlcnlQcm9jZXNvcyIsInJlc3BvbnNlUHJvY2Vzb3MiLCJwaWV6YVhocyIsIm15UmVxdWVzdFBpZVhocyIsImNhbnRpZGFkUGllemFzWGhzIiwiZGVzZGVQaWV6YXNYaHMiLCJoYXN0YVBpZXphc1hocyIsInF1ZXJ5UGlleGhzIiwiZXJyb3JDYWxiYWNrIiwibm9tYnJlTWF0ZXJpYWwiLCJub21icmVUaXBvTWF0ZXJpYWwiLCJiY3J5cCIsIlBlcmZpbCIsInNlbmQiLCJsaXN0YVBlcmZpbGVzIiwibmV3UGVyZmlsIiwic2F2ZSIsImZpbmRCeUlkIiwiX2lkIiwiaWQiLCJoYXNoU3luYyIsIm5ld1VzZXIiLCJmaW5kQnlJZEFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFD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Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZWNyZXQ6J2phdmllcjE5MDUnXHJcbn0iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG5yZXF1aXJlKCdjb2xvcnMnKVxyXG59XHJcblxyXG52YXIgVVJJO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcclxuICAgICBVUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG59XHJcbmVsc2V7XHJcbiAgICAgVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6NTAwMDoyNzAxNy91c3Vhcmlvc0VNUydcclxufVxyXG5cclxubW9uZ29vc2UuY29ubmVjdChVUkkse3VzZU5ld1VybFBhcnNlcjp0cnVlLHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZX0pO1xyXG5cclxudmFyIGNvbmV4aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuXHJcbmNvbmV4aW9uLm9uKCdlcnJvcicsY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsJ2Vycm9yIGRlIGNvbmV4aW9uJykpO1xyXG5cclxuY29uZXhpb24ub25jZSgnb3BlbicsKCk9PntcclxuICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICBjb25zb2xlIC5sb2coJ0NvbmVjdGFkbyBhIE1PTkdPREInLnJlZClcclxuICAgICB9IFxyXG4gICAgIGVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlIC5sb2coJ0NvbmVjdGFkbyBhIE1PTkdPREInKVxyXG4gICAgIH1cclxufSlcclxuIiwiY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7IHJlcXVpcmUoJ2NvbG9ycycpIH1cclxuXHJcbnZhciBVUklcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVJTUUwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBBU1NXT1JEU1FMLFxyXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRVNRTCxcclxuICAgICAgICBzZXJ2ZXI6cHJvY2Vzcy5lbnYuU0VSVkVSU1FMLFxyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbmVsc2V7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogJ0RCamF2JywgLyogREJqYXYgZW1zREIgICovXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdiZWxncmFubzQ1NScsXHJcbiAgICAgICAgZGF0YWJhc2U6ICdFTVNfREJfU1FMJyxcclxuICAgICAgICBwb3J0OjE0MzMsXHJcbiAgICAgICAgc2VydmVyOidERVNLVE9QLUcxSTA5N0MnLCAvKiBERVNLVE9QLUcxSTA5N0MgIFBDMjM2MCAqL1xyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBhcHBOYW1lOidlbXMtbm9kZS1hcGknLFxyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgICAgIHN0cmVhbTpmYWxzZSxcclxuICAgICAgICBwb29sOntcclxuICAgICAgICAgICAgbWF4OjIwLFxyXG4gICAgICAgICAgICBtaW46MCxcclxuICAgICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgQ29uZXhpb25TUUwgPSB7IGFicmlyQ29uZXhpb246dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvbjp1bmRlZmluZWQsIGFicmlyQ29uZXhpb25QT09MOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb25QT09MOnVuZGVmaW5lZCB9XHJcbnZhciBjb25leGlvblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBtc3NxbC5jb25uZWN0KFVSSSlcclxuICAgIC50aGVuKHBvb2w9PntcclxuICAgICAgICBpZihwb29sLl9jb25uZWN0ZWQpe1xyXG4gICAgICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIEFCSUVSVEEnLmdyZWVuKVxyXG4gICAgICAgICAgICAgICAgY29uZXhpb24gPSBwb29sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGRlIENvbmV4aW9uJyxwb29sLl9jb25uZWN0ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgY29uZXhpb24uY2xvc2UoKVxyXG4gICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQ0VSUkFEQScuZ3JlZW4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbmV4aW9uZXMgPSB7fVxyXG5cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvblBPT0wgPSBhc3luYyBuYW1lID0+e1xyXG4gICBcclxuICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZXhpb25lcyxuYW1lKSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3Q29uZXhpb24gPSBuZXcgbXNzcWwuQ29ubmVjdGlvblBvb2woVVJJKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3Q29uZXhpb24uY2xvc2UuYmluZChuZXdDb25leGlvbilcclxuICAgICAgIFxyXG4gICAgICAgIG5ld0NvbmV4aW9uLmNsb3NlID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlKC4uLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5ld0NvbmV4aW9uLmNvbm5lY3QoKVxyXG4gICAgICAgIGNvbmV4aW9uZXNbbmFtZV0gPSBuZXdDb25leGlvblxyXG4gICAgICAgIHJldHVybiBjb25leGlvbmVzW25hbWVdXHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uUE9PTCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMoY29uZXhpb25lcykubWFwKChwb29sKT0+e1xyXG4gICAgICAgIHJldHVybiBwb29sLmNsb3NlKClcclxuICAgIH0pKVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZXhpb25TUUwiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHBlcmZpbCA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWUsXHJcbiAgICAgICAgZW51bTpbJ0FkbWluJywnbml2ZWwtMScsJ25pdmVsLTInLCduaXZlbC0zJywnbml2ZWwtNCcsJ25pdmVsLTUnXVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgncGVyZmlsJyxwZXJmaWwpIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCB1c3VhcmlvID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcblxyXG4gICAgdXNlck5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtYWlsOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZVxyXG4gICAgfSxcclxuICAgIG5vbWJyZTp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBhcGVsbGlkbzp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgZW51bTpbJ0FkbWluJywnbml2ZWwtMScsJ25pdmVsLTInLCduaXZlbC0zJywnbml2ZWwtNCcsJ25pdmVsLTUnXVxyXG4gICAgfVxyXG59KVxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCd1c3VhcmlvJyx1c3VhcmlvKSIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxyXG52YXIgbW9yZ2FuO1xyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgcmVxdWlyZSgnY29sb3JzJylcclxuICAgIG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbn1cclxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcblxyXG5jb25zdCBzZXJ2aWRvciA9IGV4cHJlc3MoKVxyXG5zZXJ2aWRvci51c2UoY29ycygpKVxyXG5cclxuLy8gbWlkZGVsd2FyZVxyXG5cclxuc2Vydmlkb3IudXNlKGV4cHJlc3MuanNvbigpKVxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKVxyXG5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHNlcnZpZG9yLnVzZShtb3JnYW4oJ2RldicpKVxyXG59XHJcblxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbWFxdWluYXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvbWFxdWluYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9sb2d1ZW8nLHJlcXVpcmUoJy4vcnV0YXNBcGkvTG9ndWVvJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRlbnRpZmljYXNpb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvQXV0ZW50aWZpY2FzaW9uJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9waWV6YXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGllemFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tb2xkZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvbW9sZGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9kZWZlY3RvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9kZWZlY3RvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvb3BlcmFjaW9uZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvb3BlcmFjaW9uZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3Byb2Nlc29zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3Byb2Nlc29zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90dXJub3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHVybm9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wYXJhZGFzTWFxdWluYScscmVxdWlyZSgnLi9ydXRhc0FwaS9wYXJhZGFzTWFxdWluYScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHJhYmFqYWRvcmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RyYWJhamFkb3JlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc1Byb2Nlc28nLHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NQcm9jZXNvJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9jbGllbnRlcycsIHJlcXVpcmUoICcuL3J1dGFzQXBpL2NsaWVudGVzJyApIClcclxuc2Vydmlkb3IudXNlICgnL2FwaS90aXBvc01hdGVyaWFsJywgcmVxdWlyZSAoICcuL3J1dGFzQXBpL3RpcG9zTWF0ZXJpYWwnICkgKVxyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyxuZXh0KT0+e1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kKHt1c2VyTmFtZTpyZXEuYm9keS51c2VyTmFtZX0pXHJcbiAgICAgICAgaWYoIXVzZXJbMF0pe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonVXN1YXJpbyBJbmV4aXN0ZW50ZSAhJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCx1c2VyWzBdLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZighdmVyaWZpY2FQYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidQYXNzd29yZCBJbmNvcnJlY3RhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTp1c2VyWzBdLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXJbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnVzZXJbMF0ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvOnVzZXJbMF0uYXBlbGxpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyZmlsOnVzZXJbMF0ucGVyZmlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqd3Quc2lnbihtaVVzdWFyaW8sc2VjcmV0LHtleHBpcmVzSW46MTQ0MDB9LChlLHRva2VuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOidFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJ30pOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe2V9KTtcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2NvbnN1bHRhQ2xpZW50ZXMnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBjb25zdCBxdWVyeSA9IGAgc2VsZWN0IGMuaWQgYXMgaWRDbGllbnRlICwgYy5ub21icmUgYXMgbm9tYnJlQ2xpZW50ZSAsIGMucmF6b25fc29jaWFsIGFzIHJhem9uU29jaWFsQ2xpZW50ZVxyXG4gICAgZnJvbSBjbGllbnRlcyBjXHJcbiAgICB3aGVyZSBjLmVzdGFkbyA9IDFgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uMiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZUNsaWVudGUnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QyID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbjIgIClcclxuICAgICAgICBteVJlcXVlc3QyLmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCBwYXJzZUludCAoIHJlcS5ib2R5LmlkQ2xpZW50ZSApIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgY2xpZW50ZXMgc2V0IGVzdGFkbyA9IDAgd2hlcmUgaWQgPSBAaWRDbGllbnRlYFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdDIucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgRWxpbWluYWRvIENvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlQ2xpZW50ZSAsICByYXpvblNvY2lhbENsaWVudGUgLCBpZENsaWVudGUgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZUNsaWVudGUnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUNsaWVudGUnICwgVmFyQ2hhciAsICBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsICByYXpvblNvY2lhbENsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCAgaWRDbGllbnRlIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCB1cGRhdGUgY2xpZW50ZXNcclxuICAgIHNldFxyXG4gICAgbm9tYnJlID0gQG5vbWJyZUNsaWVudGUgLFxyXG4gICAgcmF6b25fc29jaWFsID0gQHJhem9uU29jaWFsQ2xpZW50ZVxyXG4gICAgd2hlcmUgaWQgPSBAaWRDbGllbnRlYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgQWN0dWFsaXphZG8gQ29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsICBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlQ2xpZW50ZSAsICByYXpvblNvY2lhbENsaWVudGUgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRDbGllbnRlJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoICBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgbm9tYnJlQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAncmF6b25Tb2NpYWxDbGllbnRlJyAsIFZhckNoYXIgLCByYXpvblNvY2lhbENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gY2xpZW50ZXMgKCBub21icmUgLCByYXpvbl9zb2NpYWwgLCBlc3RhZG8gICkgdmFsdWVzICAoIEBub21icmVDbGllbnRlICwgQHJhem9uU29jaWFsQ2xpZW50ZSAsIDEgKWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdDbGllbnRlIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgZC5pZCBhcyBpZERlZmVjdG8sIGQubm9tYnJlIGFzIG5vbWJyZURlZmVjdG8sIGQuaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLG8ubm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvbiBmcm9tIGRlZmVjdG9zIGQgam9pbiBvcGVyYWNpb25lcyBvIG9uIGQuaWRfb3BlcmFjaW9uPW8uaWQgd2hlcmUgZC5lc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlRGVmZWN0byAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydERlZmVjdG8nIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlRGVmZWN0bycgLCBWYXJDaGFyICwgbm9tYnJlRGVmZWN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBkZWZlY3RvcyAoIG5vbWJyZSAsIGlkX29wZXJhY2lvbiAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlRGVmZWN0byAsIEBpZE9wZXJhY2lvbiAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0RlZmVjdG8gSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZERlZmVjdG8gLCBub21icmVEZWZlY3RvICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlRGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVEZWZlY3RvJyAsIFZhckNoYXIgLCBub21icmVEZWZlY3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZERlZmVjdG8nICwgSW50ICwgaWREZWZlY3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgZGVmZWN0b3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlRGVmZWN0byAsXHJcbiAgICAgICAgaWRfb3BlcmFjaW9uID0gQGlkT3BlcmFjaW9uXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWREZWZlY3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWREZWZlY3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlRGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZERlZmVjdG8nICwgSW50ICwgaWREZWZlY3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgZGVmZWN0b3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWREZWZlY3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICBjb25zdWx0YS5xdWVyeShcclxuICAgIGBzZWxlY3QgbS5pZCBhcyBpZE1hcXVpbmEsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEsIG0uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25NYXF1aW5hICwgaWRfdGlwb3NfbWFxdWluYSBhcyBpZFRpcG9NYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIHdoZXJlIG0uZXN0YWRvID0gMWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94b3BlcmFjaW9uLzppZE9wZXJhY2lvbicsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBjb25zdCB7aWRPcGVyYWNpb259ID0gcmVxLnBhcmFtc1xyXG4gIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICBjb25zdWx0YS5xdWVyeShcclxuICAgIGBzZWxlY3QgbS5pZCBhcyBpZE1hcXVpbmEsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG0uaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDEgYW5kIHRtLmlkX29wZXJhY2lvbiA9ICR7aWRPcGVyYWNpb259YCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkTW9sZGUsaWRfcGllemEgYXMgaWRQaWV6YSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveHBpZXphLzppZFBpZXphJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZFBpZXphfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLCBub21icmUgYXMgbm9tYnJlTW9sZGUgZnJvbSBtb2xkZXMgd2hlcmUgZXN0YWRvID0gMSBhbmQgaWRfcGllemEgPSAnK2lkUGllemEsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZE9wZXJhY2lvbiwgbm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gb3BlcmFjaW9uZXMgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdmFyIHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSwgcG0udGlwbyBhcyB0aXBvUGFyYWRhTWFxdWluYSwgcG0uaWRfYXJlYSBhcyBpZEFyZWEsIGEubm9tYnJlIGFzIG5vbWJyZUFyZWFcclxuICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYSBwbVxyXG5cdFx0am9pbiBhcmVhcyBhIG9uIHBtLmlkX2FyZWE9YS5pZFxyXG4gICAgICAgIHdoZXJlIHBtLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlKXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihkYXRvLnJlY29yZHNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle2NlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IG5ldyByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfY2xpZW50ZSBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICxcclxuICAgICAgICBwLmlkX3RpcG9zX21hdGVyaWFsIGFzIGlkVGlwb01hdGVyaWFsICwgdG0ubm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIGNsaWVudGVzIGMgb24gcC5pZF9jbGllbnRlID0gYy5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWF0ZXJpYWwgdG0gb24gcC5pZF90aXBvc19tYXRlcmlhbCA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQaWV6YScgLCBWYXJDaGFyICwgbm9tYnJlUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBpZXphcyAoIG5vbWJyZSAsIGlkX2NsaWVudGUgLCBpZF90aXBvc19tYXRlcmlhbCAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZVBpZXphICwgQGlkQ2xpZW50ZSAsIEBpZFRpcG9NYXRlcmlhbCAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEgLCBub21icmVQaWV6YSAsIGlkQ2xpZW50ZSAsIGlkVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGllemFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFuaWxsYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZWxpbWluYVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnN1bHRhLnF1ZXJ5KCBgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gJHsgcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgfWBcclxuICAgICAgICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFbGltaW5hY2lvbiBleGl0b3NhICEnIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QoICcvbGlzdGFyJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkT3BlcmFjaW9uXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgIHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVGdW5kaWNpb259JyBhbmQgJyR7ZmVjaGFIYXN0YUZ1bmRpY29ufSdcclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAnJHtmZWNoYURlc2RlUHJvZHVjY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhUHJvZHVjY2lvbn0nXHJcbiAgICAgICAgYW5kICggJHsgaWRNYXF1aW5hIH0gaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gICR7IGlkTWFxdWluYSB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFBpZXphIH0gaXMgbnVsbCAgb3IgcC5pZF9waWV6YSA9ICAkeyBpZFBpZXphIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb1Byb2Nlc28gfSBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgJHsgaWRUaXBvUHJvY2VzbyB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZE9wZXJhY2lvbiB9IGlzIG51bGwgIG9yIHRtLmlkX29wZXJhY2lvbiA9ICAkeyBpZE9wZXJhY2lvbiB9ICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID09PSAnJyApeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICxcclxuICAgICAgICAgICAgICAgIHR4cC5jYWxvcmlhcyBhcyBjYWxvcmlhcyAsIHR4cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgdHhwLmlkX3RyYWJhamFkb3IgYXMgaWRUcmFiYWphZG9yICwgdHhwLmlkX3R1cm5vIGFzIGlkVHVybm9cclxuICAgICAgICAgICAgICAgIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhIHR4cFxyXG4gICAgICAgICAgICAgICAgam9pbiB0cmFiYWphZG9yZXMgdCBvbiB0eHAuaWRfdHJhYmFqYWRvciA9IHQuaWRcclxuICAgICAgICAgICAgICAgIGpvaW4gdHVybm9zIHR1ciBvbiB0eHAuaWRfdHVybm8gPSB0dXIuaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHR4cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgdHhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgIDsgYFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFRyYWJhamFkb3JlcyA9PT0gJycgKSB7IGxpc3RhSWRUcmFiYWphZG9yZXMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRSZWNoYXpvcyA9PT0gJycgKSB7IGxpc3RhSWRSZWNoYXpvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlcmVuY2lhRW5NaW51dG9zID0gKGhvcmFJbmljaW8saG9yYUZpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaF9pbmljaW8gPSBuZXcgTW9tZW50ICggIGhvcmFJbmljaW8gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoX2ZpbiA9IG5ldyBNb21lbnQgKCAgaG9yYUZpbiAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhEZXNkZSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9pbmljaW99YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoSGFzdGEgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfZmlufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihoX2luaWNpbyA9PT0gJzA2OjAwJyAmJiBoX2ZpbiA9PT0gJzA2OjAwJyl7ICByZXR1cm4gMjQgKiA2MCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigoaEhhc3RhLWhEZXNkZSkvMTAwMCA8IDApeyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgKyAxNDQwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhWm9uYXMgPSBhd2FpdCBjb25zdWx0YVpvbmFzLnF1ZXJ5KCBzcWxDb25zdWx0YVpvbmFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxpc3RhWm9uYXMucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA9IGxpc3RhWm9uYXMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCggKHBsICwgaW5kZXhQbGFuaWxsYSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQTS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggcG0uaWRQbGFuaWxsYSApID09PSBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFkYU1hcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGE6IHBtLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hIDogcG0uaWRQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVQYXJhZGFNYXF1aW5hIDogcG0ubm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZGVQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzdGFQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYWNpb25QYXJhZGFNYXF1aW5hIDogZGlyZXJlbmNpYUVuTWludXRvcyggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCAgcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1BhcmFkYU1hcXVpbmEgOiBwbS50aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEucHVzaCggcGFyYWRhTWFxIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goICh0ciAsIGluZGV4VHJhYmFqYWRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggdHIuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYVhwbGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUcmFiYWphZG9yWHBsYW5pbGxhIDogdHIuaWRUcmFiYWphZG9yWHBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW8gOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVHJhYmFqYWRvciA6IHRyLmFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJub1RyYWJhamFkb3IgOiB0ci50dXJub1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCB0ci5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCB0ci5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjY2lvbiA6IHRyLnBpZXphc1Byb2R1Y2lkYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiB0ci5jYWxvcmlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvIDogWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB0cmFYcGxhLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApID09PSBwYXJzZUludCAoIHJlLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIDogcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem8gOiByZS5pZERlZmVjdG8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUmVjaGF6byA6IHJlLm5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbyA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6byA6IHJlLmNhbnRpZGFkUmVjaGF6b3MgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzLmZvckVhY2goIHpvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB6b24uaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhICkgPT09IHBhcnNlSW50KCByZWNoLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmFYcmVjaGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmEgOiB6b24uaWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uLmxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHpvbi5jYW50aWRhZFpvbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoLnZlY1pvbmFzLnB1c2goIHpvbmFYcmVjaGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYVhwbGEudmVjUmVjaGF6by5wdXNoKCByZWNoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zLnB1c2goIHRyYVhwbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAvLyBob2xhIG11bmRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiAsICBpZE9wZXJhY2lvbiAsIGlkTWFxdWluYSAsICBpZFBpZXphICwgIGlkTW9sZGUgLCBpZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MgLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSAsIGlkUGxhbmlsbGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc29sZS5sb2cgKCBpZFBsYW5pbGxhIClcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtID0gYXdhaXQgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiAoIGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZiAoICFlcnIgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICggICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRab25hc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUmVjaGF6b3NEZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZE9wZXJhcmlvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUG1EZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCAoIHAgLCBpcCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5sZW5ndGggLTEgKSAgPT09IGlwICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoICggbyAsIGlvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQoIG8uaWRUcmFiYWphZG9yWHBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnZlY1JlY2hhem8uZm9yRWFjaCAoICggciAsIGlyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCByLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZWNab25hcy5mb3JFYWNoICggKCB6ICwgaXogKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCB6LmlkWm9uYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRPcGVyYXJpb3NEZWxldGUgIT09ICcnICkgeyBpZE9wZXJhcmlvc0RlbGV0ZSA9ICBpZE9wZXJhcmlvc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFJlY2hhem9zRGVsZXRlICE9PSAnJyApIHsgaWRSZWNoYXpvc0RlbGV0ZSA9ICBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRSZWNoYXpvc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRab25hc0RlbGV0ZSAhPT0gJycgKSB7IGlkWm9uYXNEZWxldGUgPSAgaWRab25hc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkWm9uYXNEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHREZWxldGUgPSBhd2FpdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0ucXVlcnkgKCBgIGRlbGV0ZSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkWm9uYXNEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkWm9uYXNEZWxldGV9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUmVjaGF6b3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUmVjaGF6b3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRPcGVyYXJpb3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkT3BlcmFyaW9zRGVsZXRlIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUG1EZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUG1EZWxldGUgfSApIDsgYCApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHREZWxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9wcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfZnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkX21vbGRlJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZFBsYW5pbGxhJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb24gPSBAZmVfcHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb24gPSBAZmVfZnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvID0gQGhvcmFfaW5pY2lvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluID0gQGhvcmFfZmluICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3Byb2Nlc28gPSBAaWRQcm9jZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZSA9IEBpZF9tb2xkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFuaWxsYWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGFyc2VJbnQgKCBpZFBsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSAoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0QzEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2ggKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8uY2Fsb3JpYXMgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5wcm9kdWNjaW9uICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50ICggb3BlcmFyaW8uaWRPcGVyYXJpbyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCAoIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJywgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoICggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG8gOiBwYXJzZUludCAoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzIDogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uYS5sZXRyYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5ICggY29uc3VsdGEgLCAoIGVyciAsIHJlc3VsdCApID0+IHsgaWYgKCBlcnIgKSB7ICBjYWxsYmFjayAoIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrICggICkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCAsICggRVIgLCByZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0oIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvUi5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIgKCAnQ29udGVudC1UeXBlJyAsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKS5qc29uICggeyBtZW5zYWplIDogJ0FjdHVhbGl6YWNpb24gZXhpdG9zYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbnJvdXRlci5wb3N0KCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJywgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhOiB6b25hLmxldHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2ggKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNICggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNICggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyb1IubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnSW5zZXJjaW9uIGV4aXRvcmEnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIG1lbnNhamUyIDogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0ICgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3NlbGVjdFByb2Nlc29zJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhbnNhYyApID0+IHtcclxuICAgICAgICBpZiAoIGVycm9yVHJhbnNhYyApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFuc2FjLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB2ZWNQcm9jZXNvcyA9IFsgIF1cclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllemFYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgcC5pZCBhcyBpZFByb2Nlc28gLCBwLmRlc2NyaXBjaW9uIGFzIGRlc2NpcGNpb25Qcm9jZXNvICwgcC5pZF9waWV6YSBhcyBpZFBpZXphICxcclxuICAgICAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfbWFxdWluYSBhcyBpZE1hcXVpbmEgLCBtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLFxyXG4gICAgICAgICAgICBwLmlkX3RpcG9zX3Byb2Nlc28gYXMgaWRUaXBvUHJvY2VzbyAsIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgICAgICBmcm9tIHByb2Nlc29zIHBcclxuICAgICAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICAgICAgam9pbiBtYXF1aW5hcyBtYXEgb24gcC5pZF9tYXF1aW5hID0gbWFxLmlkXHJcbiAgICAgICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MgPSByZXNwb25zZS5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgIHZhciBpZFByb2Nlc29zID0gJydcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1Byb2Nlc29zICkgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFByb2Nlc29zICs9IGAgJHtwLmlkUHJvY2Vzb30gLGBcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpZFByb2Nlc29zID09PSAnJyApIHsgaWRQcm9jZXNvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IGlkUHJvY2Vzb3MgPSBpZFByb2Nlc29zLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgIGlkUHJvY2Vzb3MubGVuZ3RoIC0yICkgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBpZFByb2Nlc29zIClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGllemFYaHMgPSBgc2VsZWN0IHB4aC5pZCBhcyBpZFBpZXphc1hocyAsIHB4aC5jYW50aWRhZCBhcyBjYW50aWRhZFBpZXphc1hocyAsIHB4aC5mZV9kZXNkZSBhcyBkZXNkZVBpZXphc1hocyAsXHJcbiAgICAgICAgICAgICAgICBweGguZmVfaGFzdGEgYXMgaGFzdGFQaWV6YXNYaHMgLCBweGguaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICAgICAgICAgIGZyb20gcGllemFzX3hfaG9yYSBweGhcclxuICAgICAgICAgICAgICAgIHdoZXJlIHB4aC5pZF9wcm9jZXNvIGluICgke2lkUHJvY2Vzb3N9KWBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VscnB6WGhzID0gYXdhaXQgbXlSZXF1ZXN0UGllemFYaHMucXVlcnkgKCBxdWVyeVBpZXphWGhzIClcclxuICAgICAgICAgICAgICAgIHZhciB2ZWNQaWV6YXNYaG9yYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgIGlmICggcmVzdWxycHpYaHMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCB2ZWNQaWV6YXNYaG9yYSApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEgPSByZXN1bHJwelhocy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIHJlc3VscnB6WGhzLnJlY29yZHNldCApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MuZm9yRWFjaCAoICggcCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEuZm9yRWFjaCAoICggcHpYaHMgLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQgKCBwLmlkUHJvY2VzbyApID09PSBwYXJzZUludCAoIHB6WGhzLmlkUHJvY2VzbyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEucHVzaCAoIHB6WGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB2ZWNQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn0gKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgZGVzY3JpcGNpb25Qcm9jZXNvICwgaWRQaWV6YSAsIGlkTWFxdWluYSAsIGlkVGlwb3NQcm9jZXNvICwgdmVjUGllemFzWGhvcmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCAsRGF0ZSAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdFByb2Nlc28gPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgICAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYXNhY3Rpb25zICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGVycm9yVHJhc2FjdGlvbnMgKSB7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhc2FjdGlvbnMubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2Rlc2NyaXBjaW9uUHJvY2VzbycgLCBWYXJDaGFyICwgIGRlc2NyaXBjaW9uUHJvY2VzbyApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCAgaWRQaWV6YSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsICBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkVGlwb3NQcm9jZXNvJyAsIEludCAsICBpZFRpcG9zUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgaW5zZXJ0IGludG8gcHJvY2Vzb3MgKCBkZXNjcmlwY2lvbiAsIGlkX3BpZXphICwgaWRfbWFxdWluYSAsIGlkX3RpcG9zX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgKCBAZGVzY3JpcGNpb25Qcm9jZXNvICwgQGlkUGllemEgLCBAaWRNYXF1aW5hICwgQGlkVGlwb3NQcm9jZXNvICwgMSApIDtcclxuICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZXNvIGludFxyXG4gICAgICAgICAgICBzZXQgQGlkUHJvY2VzbyA9ICggc2VsZWN0IHRvcCAxIG1heCAoIGlkICkgZnJvbSBwcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHNlbGVjdCBAaWRQcm9jZXNvIGFzIGlkUHJvY2Vzb2BcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICAgICAgdmFyIGlkUHJvY2Vzb1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZFByb2Nlc28gPSByZXNwb25zZVByb2Nlc29zLnJlY29yZHNldHNbMF1bMF0uaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUHJvY2VzbyAsIGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCAgaWRQcm9jZXNvIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uID0gQGRlc2NyaXBjaW9uUHJvY2VzbyAsXHJcbiAgICAgICAgICAgIGlkX3BpZXphID0gQGlkUGllemEgLFxyXG4gICAgICAgICAgICBpZF9tYXF1aW5hID0gQGlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgIGlkX3RpcG9zX3Byb2Nlc28gPSBAaWRUaXBvc1Byb2Nlc29cclxuICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIDsgZGVsZXRlIHBpZXphc194X2hvcmEgd2hlcmUgaWRfcHJvY2VzbyA9IEBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1BpZXphc1hob3JhICkgJiYgdmVjUGllemFzWGhvcmEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BpZXphc1hob3JhICwgKCBwaWV6YVhocyAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3RQaWVYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnY2FudGlkYWRQaWV6YXNYaHMnICwgSW50ICwgcGllemFYaHMuY2FudGlkYWRQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnZGVzZGVQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmRlc2RlUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2hhc3RhUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5oYXN0YVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgcGFyc2VJbnQgKCBpZFByb2Nlc28gKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGlleGhzID0gYGluc2VydCBpbnRvIHBpZXphc194X2hvcmEgKCBjYW50aWRhZCAsIGZlX2Rlc2RlICwgZmVfaGFzdGEgLCBpZF9wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICggQGNhbnRpZGFkUGllemFzWGhzICwgQGRlc2RlUGllemFzWGhzICwgQGhhc3RhUGllemFzWGhzICwgQGlkUHJvY2VzbyAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLnF1ZXJ5ICggcXVlcnlQaWV4aHMgLCAoIGVycm9yICwgcmVzdWx0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyb3JDYWxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yQ2FsYmFjayApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvckNhbGJhY2subWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQcm9jZXNvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7ICBSZXF1ZXN0ICAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIGBcclxuICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2Vzb3MgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFMaXN0YUNsaWVudGVzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IGlkIGFzIGlkVGlwb01hdGVyaWFsICwgbm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU1hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRUaXBvTWF0cmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNYXRlcmlhbCcgLCBWYXJDaGFyICwgbm9tYnJlTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byB0aXBvc19tYXRlcmlhbCAoIG5vbWJyZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZU1hdGVyaWFsICwgMSApICBgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVGlwb01hdGVyaWFsICAsICBub21icmVUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGVsaW1pbmFkbyAgY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSAgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUcmFiYWphZG9yLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmZfbmFjaW1pZW50byBhcyBmZWNoYU5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBmZWNoYUluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvVHJhYmFqYWRvciwgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxucmVxdWlyZSgnLi4vY29uZXhpb25lcy9tb25nb0RiJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3QgUGVyZmlsID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hUm9sZXNVc3VhcmlvcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgYXdhaXQgVXN1YXJpby5maW5kKChlLGRhdG8pPT57XHJcbiAgICAgICAgZSA/IHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdFcnJvciBlbiBlbCByZXF1ZXN0JykgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdG8pXHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbiAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkKHtfaWQ6cmVxLnBhcmFtcy5pZH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcilcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbiAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1VzdWFyaW8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4gICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbiAgICB9KVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=