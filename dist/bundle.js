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
servidor.use('/api/tiposMaterial', __webpack_require__(/*! ./rutasApi/tiposMaterial */ "./rutasApi/tiposMaterial.js"));
servidor.use('/api/areas', __webpack_require__(/*! ./rutasApi/areas */ "./rutasApi/areas.js"));
servidor.use('/api/tiposMaquina', __webpack_require__(/*! ./rutasApi/tiposMaquina */ "./rutasApi/tiposMaquina.js")); //Settings

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

/***/ "./rutasApi/areas.js":
/*!***************************!*\
  !*** ./rutasApi/areas.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  try {
    const {
      abrirConexionPOOL,
      cerrarConexionPOOL
    } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

    const conexion = await abrirConexionPOOL('listaAreas');
    const {
      Request
    } = new __webpack_require__(/*! mssql */ "mssql");
    const myRequires = new Request(conexion);
    const result = await myRequires.query(`select id as idArea , nombre as nombreArea
            from areas
            where estado = 1`);

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
    nombreArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertArea');
    const myRequest = new Request(conexion);
    myRequest.input('nombreArea', VarChar, nombreArea);
    const query = `insert into areas ( nombre , estado )
        values
        ( @nombreArea , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Area Insertado correctamente',
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
    idArea,
    nombreArea
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
    const conexion = await abrirConexionPOOL('updateArea');
    const myRequest = new Request(conexion);
    myRequest.input('nombreArea', VarChar, nombreArea);
    myRequest.input('idArea', Int, idArea);
    const query = `update areas
        set
        nombre = @nombreArea
        where id = @idArea`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Area actualizada correctamente',
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
    idArea
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
    const conexion = await abrirConexionPOOL('deleteArea');
    const myRequest = new Request(conexion);
    myRequest.input('idArea', Int, idArea);
    const query = `update areas
        set
        estado = 0
        where id = @idArea`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Area eliminada correctamente',
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
  consulta.query(`select m.id as idMaquina , m.nombre as nombreMaquina , m.descripcion as descripcionMaquina ,
    m.id_tipos_maquina as idTipoMaquina , tm.nombre as nombreTipoMaquina , m.id_planta as idPlanta , p.nombre as nombrePlanta
    from maquinas m
    join tipos_maquina tm on m.id_tipos_maquina = tm.id
    join plantas p on m.id_planta = p.id
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
router.post('/insert', async (req, res) => {
  const {
    nombreMaquina,
    descripcionMaquina,
    idTipoMaquina,
    idPlanta
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
    const conexion = await abrirConexionPOOL('insertMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMaquina', VarChar, nombreMaquina);
    myRequest.input('descripcionMaquina', VarChar, descripcionMaquina);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    myRequest.input('idPlanta', Int, idPlanta);
    const query = `insert into maquinas ( nombre , descripcion , id_tipos_maquina , id_planta , estado )
    values
    ( @nombreMaquina , @descripcionMaquina , @idTipoMaquina , @idPlanta , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Maquina Insertada correctamente',
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
    idMaquina,
    nombreMaquina,
    descripcionMaquina,
    idTipoMaquina,
    idPlanta
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
    const conexion = await abrirConexionPOOL('updateMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMaquina', VarChar, nombreMaquina);
    myRequest.input('descripcionMaquina', VarChar, descripcionMaquina);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    myRequest.input('idPlanta', Int, idPlanta);
    myRequest.input('idMaquina', Int, idMaquina);
    const query = `update maquinas
    set
    nombre = @nombreMaquina ,
    descripcion = @descripcionMaquina ,
    id_tipos_maquina = @idTipoMaquina ,
    id_planta = @idPlanta
    where id = @idMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Maquina actualizada correctamente',
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
    idMaquina
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
    const conexion = await abrirConexionPOOL('deleteMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('idMaquina', Int, idMaquina);
    const query = `update maquinas
    set
    estado = 0
    where id = @idMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Maquina eliminada correctamente',
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
  const query = `select m.id as idMolde , m.nombre as nombreMolde , m.id_pieza as idPieza , p.nombre as nombrePieza
    from moldes m
    join piezas p on m.id_pieza = p.id
    where m.estado = 1`;
  consulta.query(query, (err, dato) => {
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
router.post('/insert', async (req, res) => {
  const {
    nombreMolde,
    idPieza
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
    const conexion = await abrirConexionPOOL('insertMolde');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMolde', VarChar, nombreMolde);
    myRequest.input('idPieza', Int, idPieza);
    const query = `insert into moldes ( nombre , id_pieza , estado )
        values
        ( @nombreMolde , @idPieza , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Molde Insertado correctamente',
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
    idMolde,
    nombreMolde,
    idPieza
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
    const conexion = await abrirConexionPOOL('updateMolde');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMolde', VarChar, nombreMolde);
    myRequest.input('idPieza', Int, idPieza);
    myRequest.input('idMolde', Int, idMolde);
    const query = `update moldes
        set
        nombre = @nombreMolde ,
        id_pieza = @idPieza
        where id = @idMolde`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Molde actualizado correctamente',
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
    idMolde
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
    const conexion = await abrirConexionPOOL('deleteMolde');
    const myRequest = new Request(conexion);
    myRequest.input('idMolde', Int, idMolde);
    const query = `update moldes
        set
        estado = 0
        where id = @idMolde`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Molde eliminado correctamente',
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
router.post('/insert', async (req, res) => {
  const {
    nombreParadaMaquina,
    tipoParadaMaquina,
    idArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int,
    Bit
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertParadaMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreParadaMaquina', VarChar, nombreParadaMaquina);
    myRequest.input('tipoParadaMaquina', Bit, tipoParadaMaquina);
    myRequest.input('idArea', Int, idArea);
    const query = `insert into paradas_maquina ( nombre , tipo , id_area , estado )
        values
        ( @nombreParadaMaquina , @tipoParadaMaquina , @idArea , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Parada de Maquina Insertado correctamente',
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
    idParadaMaquina,
    nombreParadaMaquina,
    tipoParadaMaquina,
    idArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int,
    Bit
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateParadaMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreParadaMaquina', VarChar, nombreParadaMaquina);
    myRequest.input('tipoParadaMaquina', Bit, tipoParadaMaquina);
    myRequest.input('idArea', Int, idArea);
    myRequest.input('idParadaMaquina', Int, idParadaMaquina);
    const query = `update paradas_maquina
        set
        nombre = @nombreParadaMaquina ,
        tipo = @tipoParadaMaquina ,
        id_area = @idArea
        where id = @idParadaMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Parada de maquina actualizada correctamente',
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
    idParadaMaquina
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
    const conexion = await abrirConexionPOOL('deleteParadaMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('idParadaMaquina', Int, idParadaMaquina);
    const query = `update paradas_maquina
        set
        estado = 0
        where id = @idParadaMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Paradas de Maquina eliminada correctamente',
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

/***/ "./rutasApi/tiposMaquina.js":
/*!**********************************!*\
  !*** ./rutasApi/tiposMaquina.js ***!
  \**********************************/
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

    const conexion = await abrirConexionPOOL('listaTiposMaquina');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select tm.id as idTipoMaquina , tm.nombre as nombreTipoMaquina , tm.id_operacion as idOperacion ,
        o.nombre as nombreOperacion
        from tipos_maquina tm
        join operaciones o on tm.id_operacion = o.id
        where tm.estado = 1`;
    const response = await myRequest.query(query);

    if (response) {
      cerrarConexionPOOL();
      res.json(response.recordset);
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
    nombreTipoMaquina,
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
    const conexion = await abrirConexionPOOL('insertTipoMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoMaquina', VarChar, nombreTipoMaquina);
    myRequest.input('idOperacion', Int, idOperacion);
    const query = `insert into tipos_maquina ( nombre , id_operacion , estado )
        values
        ( @nombreTipoMaquina , @idOperacion , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de maquina Insertada correctamente',
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
    idTipoMaquina,
    nombreTipoMaquina,
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
    const conexion = await abrirConexionPOOL('updateTipoMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoMaquina', VarChar, nombreTipoMaquina);
    myRequest.input('descripcionMaquina', VarChar, descripcionMaquina);
    myRequest.input('idOperacion', Int, idOperacion);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    const query = `update tipos_maquina
        set
        nombre = @nombreTipoMaquina ,
        id_operacion = @idOperacion
        where id = @idTipoMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de maquina actualizada correctamente',
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
    idTipoMaquina
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
    const conexion = await abrirConexionPOOL('deleteTipoMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    const query = `update tipos_maquina
        set
        estado = 0
        where id = @idTipoMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de maquina eliminada correctamente',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJlYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zTWFxdWluYS5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc01hdGVyaWFsLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zUHJvY2Vzby5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90cmFiYWphZG9yZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHVybm9zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3VzdWFyaW9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzeW5jXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0LW5vZGVqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbmV4aW9uIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImVycm9yIiwiYmluZCIsIm9uY2UiLCJsb2ciLCJyZWQiLCJtc3NxbCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicG9ydCIsInNlcnZlciIsIm9wdGlvbnMiLCJhcHBOYW1lIiwiZW5hYmxlQXJpdGhBYm9ydCIsImVuY3J5cHQiLCJjb25uZWN0aW9uVGltZU91dCIsImRyaXZlciIsInN0cmVhbSIsInBvb2wiLCJtYXgiLCJtaW4iLCJpZGxlVGltZW91dE1pbGxpcyIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJ0aGVuIiwiX2Nvbm5lY3RlZCIsImJsdWUiLCJncmVlbiIsImNsb3NlIiwiY29uZXhpb25lcyIsIm5hbWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJuZXdDb25leGlvbiIsIkNvbm5lY3Rpb25Qb29sIiwiYXJncyIsIlByb21pc2UiLCJhbGwiLCJ2YWx1ZXMiLCJtYXAiLCJwZXJmaWwiLCJTY2hlbWEiLCJ0eXBlIiwiU3RyaW5nIiwidW5pcXVlIiwiZW51bSIsInNldCIsIm1vZGVsIiwidXN1YXJpbyIsInVzZXJOYW1lIiwicmVxdWlyZWQiLCJlbWFpbCIsIm5vbWJyZSIsImFwZWxsaWRvIiwiZXhwcmVzcyIsImNvcnMiLCJtb3JnYW4iLCJzZXJ2aWRvciIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiZ2V0IiwibSIsImUiLCJ5ZWxsb3ciLCJSb3V0ZXIiLCJqd3QiLCJDT05GSUciLCJyb3V0ZXIiLCJyZXEiLCJyZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsIm1lbnNhamUiLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwiZCIsImJjcnlwdCIsIlVzdWFyaW8iLCJwb3N0IiwibmV4dCIsImZpbmQiLCJib2R5IiwidmVyaWZpY2FQYXNzIiwiY29tcGFyZVN5bmMiLCJtaVVzdWFyaW8iLCJzaWduIiwiZXhwaXJlc0luIiwiUmVxdWVzdCIsIm15UmVxdWlyZXMiLCJyZXN1bHQiLCJxdWVyeSIsInJlY29yZHNldCIsIm1lc3NhZ2UiLCJub21icmVBcmVhIiwiVmFyQ2hhciIsIm15UmVxdWVzdCIsImlucHV0IiwicHV0IiwiaWRBcmVhIiwiSW50IiwiY29uZXhpb24yIiwibXlSZXF1ZXN0MiIsInBhcnNlSW50IiwiaWRDbGllbnRlIiwibm9tYnJlQ2xpZW50ZSIsInJhem9uU29jaWFsQ2xpZW50ZSIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsIm5vbWJyZURlZmVjdG8iLCJpZE9wZXJhY2lvbiIsImlkRGVmZWN0byIsInBhcmFtcyIsIm5vbWJyZU1hcXVpbmEiLCJkZXNjcmlwY2lvbk1hcXVpbmEiLCJpZFRpcG9NYXF1aW5hIiwiaWRQbGFudGEiLCJpZE1hcXVpbmEiLCJpZFBpZXphIiwibm9tYnJlTW9sZGUiLCJpZE1vbGRlIiwibm9tYnJlUGFyYWRhTWFxdWluYSIsInRpcG9QYXJhZGFNYXF1aW5hIiwiQml0IiwiaWRQYXJhZGFNYXF1aW5hIiwibm9tYnJlUGllemEiLCJpZFRpcG9NYXRlcmlhbCIsIk1vbWVudCIsImNvbnZpZXJ0ZUhvcmEiLCJob3JhIiwiSG9ySW5pY2lvbk8iLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImlkUGxhbmlsbGEiLCJjb25leGlvbkFiaWVydGEiLCJmZWNoYURlc2RlUHJvZHVjY2lvbiIsImZlY2hhSGFzdGFQcm9kdWNjaW9uIiwiZmVjaGFEZXNkZUZ1bmRpY2lvbiIsImZlY2hhSGFzdGFGdW5kaWNvbiIsImlkVGlwb1Byb2Nlc28iLCJUcmFuc2FjdGlvbiIsInRyYW5zYWNjaW9uIiwiYmVnaW4iLCJzcWxDb25zdWx0YSIsImNvbnN1bHRhUGxhbmlsbGEiLCJjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsImNvbnN1bHRhUmVjaGF6b3MiLCJjb25zdWx0YVpvbmFzIiwiY29uc3VsdGFQTSIsInZlY1BsYW5pbGxhUHJvZHVjY2lvbiIsInZlY1RyYWJhamFkb3JlcyIsInZlY1JlY2hhem9zIiwidmVjWm9uYXMiLCJ2ZWNQTSIsInJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwbGEiLCJwbGFuaWxsYSIsImZlY2hhQ2FyZ2EiLCJmZWNoYVByb2R1Y2Npb24iLCJmZWNoYUZ1bmRpY2lvbiIsImhvcmFJbmljaW8iLCJmb3JtYXQiLCJob3JhRmluIiwidGlwb1Byb2Nlc28iLCJpZFByb2Nlc28iLCJwdXNoIiwibGlzdGFJZFBsYW5pbGxhc1Byb2R1YyIsImluZGV4UGxhbmlsbGEiLCJsZW5ndGgiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJkaXJlcmVuY2lhRW5NaW51dG9zIiwiaF9pbmljaW8iLCJoX2ZpbiIsImhEZXNkZSIsImhIYXN0YSIsImxpc3RhWm9uYXMiLCJwbCIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwicG0iLCJwYXJhZGFNYXEiLCJpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEiLCJkZXNkZVBhcmFkYU1hcXVpbmEiLCJob3JhSW5pY2lvUGFyYWRhTWFxdWluYSIsImhhc3RhUGFyYWRhTWFxdWluYSIsImhvcmFGaW5QYXJhZGFNYXF1aW5hIiwiZHVyYWNpb25QYXJhZGFNYXF1aW5hIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRPcGVyYXJpbyIsImlkVHJhYmFqYWRvciIsImlkVHVybm8iLCJub21icmVUcmFiYWphZG9yIiwiYXBlbGxpZG9UcmFiYWphZG9yIiwidHVybm9UcmFiYWphZG9yIiwicHJvZHVjY2lvbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInZlY1JlY2hhem8iLCJyZWNoIiwiaWRSZWNoYXpvIiwibm9tYnJlUmVjaGF6byIsInRpcG8iLCJ0aXBvUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6b3MiLCJ6b24iLCJpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJ6b25hWHJlY2hhIiwiaWRab25hIiwibGV0cmEiLCJsZXRyYVpvbmEiLCJudW1lcm8iLCJudW1lcm9ab25hIiwiY2FudGlkYWQiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsIkhvcmFJbmljaW9Qcm9kdWNjaW9uIiwiSG9yYUZpblByb2R1Y2Npb24iLCJQcmVwYXJlZFN0YXRlbWVudCIsInBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiIsImRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbSIsImFzaW5jcm9ubyIsIm1ldG9kb1RyYW5zYWNjaW9uIiwiaWRab25hc0RlbGV0ZSIsImlkUmVjaGF6b3NEZWxldGUiLCJpZE9wZXJhcmlvc0RlbGV0ZSIsImlkUG1EZWxldGUiLCJwIiwiaXAiLCJvIiwiaW8iLCJyIiwiaXIiLCJ6IiwiaXoiLCJ0cmltIiwic3Vic3RyaW5nIiwicmVzdWx0RGVsZXRlIiwiVGltZSIsInByZXBhcmUiLCJkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiIsImZlX3Byb2R1Y2Npb24iLCJmZV9mdW5kaWNpb24iLCJob3JhX2luaWNpbyIsImhvcmFfZmluIiwiaWRfdHVybm8iLCJpZF9tb2xkZSIsInJlc3VsdEMxIiwiZXhlY3V0ZSIsInVucHJlcGFyZWQiLCJ1bnByZXBhcmUiLCJ2ZWNPcGVyYXJpb3NYcGxhbmlsbGEiLCJvcGVyYXJpbyIsIm9wIiwicHphX3Byb2R1Y2lkYXMiLCJpZF90cmFiYWphZG9yIiwiaWRfcGxhbmlsbGEiLCJlYWNoU2VyaWVzIiwidHJhYmFqYWRvciIsImNhbGxiYWNrIiwicHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhIiwidmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhIiwicmVjaGF6b1oiLCJpZF9kZWZlY3RvIiwicmVjaGF6byIsInZlY1pvbmFzWHJlY2hhem8iLCJ6b25hIiwiem9vIiwidmVjUGFyYWRhc0RlTWFxdWluYSIsInBhcmFNQUMiLCJpZF9wYXJhZGFzX21hcXVpbmEiLCJQTSIsImNhbGxiYWNrUE0iLCJjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEiLCJFUiIsInJlc3VsdFBNIiwiZXJyb1IiLCJzZXRIZWFkZXIiLCJtZW5zYWplMiIsImlkUGxhbmlsbGFQcm9kdWNjaW9uIiwiY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbiIsImlzTmFOIiwibXlUcmFuc2FjdGlvbiIsImVycm9yVHJhbnNhYyIsInZlY1Byb2Nlc29zIiwibXlSZXF1ZXN0UGllemFYaHMiLCJyZXNwb25zZSIsImlkUHJvY2Vzb3MiLCJxdWVyeVBpZXphWGhzIiwicmVzdWxycHpYaHMiLCJ2ZWNQaWV6YXNYaG9yYSIsInB6WGhzIiwiaW5kZXgiLCJkZXNjcmlwY2lvblByb2Nlc28iLCJpZFRpcG9zUHJvY2VzbyIsIm15UmVxdWVzdFByb2Nlc28iLCJlcnJvclRyYXNhY3Rpb25zIiwicXVlcnlQcm9jZXNvcyIsInJlc3BvbnNlUHJvY2Vzb3MiLCJwaWV6YVhocyIsIm15UmVxdWVzdFBpZVhocyIsImNhbnRpZGFkUGllemFzWGhzIiwiZGVzZGVQaWV6YXNYaHMiLCJoYXN0YVBpZXphc1hocyIsInF1ZXJ5UGlleGhzIiwiZXJyb3JDYWxiYWNrIiwibm9tYnJlVGlwb01hcXVpbmEiLCJub21icmVNYXRlcmlhbCIsIm5vbWJyZVRpcG9NYXRlcmlhbCIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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akIsQzs7Ozs7Ozs7Ozs7QUN6RUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2VjcmV0OidqYXZpZXIxOTA1J1xyXG59IiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxucmVxdWlyZSgnY29sb3JzJylcclxufVxyXG5cclxudmFyIFVSSTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICAgVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxufVxyXG5lbHNle1xyXG4gICAgIFVSSSA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjUwMDA6MjcwMTcvdXN1YXJpb3NFTVMnXHJcbn1cclxuXHJcbm1vbmdvb3NlLmNvbm5lY3QoVVJJLHt1c2VOZXdVcmxQYXJzZXI6dHJ1ZSx1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWV9KTtcclxuXHJcbnZhciBjb25leGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG5jb25leGlvbi5vbignZXJyb3InLGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlLCdlcnJvciBkZSBjb25leGlvbicpKTtcclxuXHJcbmNvbmV4aW9uLm9uY2UoJ29wZW4nLCgpPT57XHJcbiAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJy5yZWQpXHJcbiAgICAgfSBcclxuICAgICBlbHNle1xyXG4gICAgICAgICAgY29uc29sZSAubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJylcclxuICAgICB9XHJcbn0pXHJcbiIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKTtcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpeyByZXF1aXJlKCdjb2xvcnMnKSB9XHJcblxyXG52YXIgVVJJXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5VU0VSU1FMLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwsXHJcbiAgICAgICAgc2VydmVyOnByb2Nlc3MuZW52LlNFUlZFUlNRTCxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5lbHNle1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6ICdEQmphdicsIC8qIERCamF2IGVtc0RCICAqL1xyXG4gICAgICAgIHBhc3N3b3JkOiAnYmVsZ3Jhbm80NTUnLFxyXG4gICAgICAgIGRhdGFiYXNlOiAnRU1TX0RCX1NRTCcsXHJcbiAgICAgICAgcG9ydDoxNDMzLFxyXG4gICAgICAgIHNlcnZlcjonREVTS1RPUC1HMUkwOTdDJywgLyogREVTS1RPUC1HMUkwOTdDICBQQzIzNjAgKi9cclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgYXBwTmFtZTonZW1zLW5vZGUtYXBpJyxcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICxcclxuICAgICAgICBjb25uZWN0aW9uVGltZU91dDoxNTAwMDAsXHJcbiAgICAgICAgZHJpdmVyOid0ZWRpb3VzJyxcclxuICAgICAgICBzdHJlYW06ZmFsc2UsXHJcbiAgICAgICAgcG9vbDp7XHJcbiAgICAgICAgICAgIG1heDoyMCxcclxuICAgICAgICAgICAgbWluOjAsXHJcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0TWlsbGlzOjMwMDAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG52YXIgY29uZXhpb25cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbiAgICAudGhlbihwb29sPT57XHJcbiAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgXHJcbiAgICBpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsbmFtZSkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0NvbmV4aW9uID0gbmV3IG1zc3FsLkNvbm5lY3Rpb25Qb29sKFVSSSlcclxuICAgICAgICBjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcbiAgICAgICBcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBwZXJmaWwgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxuXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3BlcmZpbCcscGVyZmlsKSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgdXN1YXJpbyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG5cclxuICAgIHVzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBlbGxpZG86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgndXN1YXJpbycsdXN1YXJpbykiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhbjtcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHJlcXVpcmUoJ2NvbG9ycycpXHJcbiAgICBtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSlcclxufVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL21hcXVpbmFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21hcXVpbmFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0ZW50aWZpY2FzaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGllemFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BpZXphcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbW9sZGVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21vbGRlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGVmZWN0b3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvZGVmZWN0b3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL29wZXJhY2lvbmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL29wZXJhY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9jZXNvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9wcm9jZXNvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHVybm9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3R1cm5vcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGFyYWRhc01hcXVpbmEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGFyYWRhc01hcXVpbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RyYWJhamFkb3JlcycscmVxdWlyZSgnLi9ydXRhc0FwaS90cmFiYWphZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NQcm9jZXNvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUHJvY2VzbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2xpZW50ZXMnLCByZXF1aXJlKCAnLi9ydXRhc0FwaS9jbGllbnRlcycgKSApXHJcbnNlcnZpZG9yLnVzZSAoJy9hcGkvdGlwb3NNYXRlcmlhbCcsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS90aXBvc01hdGVyaWFsJyApIClcclxuc2Vydmlkb3IudXNlICgnL2FwaS9hcmVhcycsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS9hcmVhcycgKSApXHJcbnNlcnZpZG9yLnVzZSAoICcvYXBpL3RpcG9zTWFxdWluYScgLCByZXF1aXJlICggJy4vcnV0YXNBcGkvdGlwb3NNYXF1aW5hJyApKVxyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyxuZXh0KT0+e1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kKHt1c2VyTmFtZTpyZXEuYm9keS51c2VyTmFtZX0pXHJcbiAgICAgICAgaWYoIXVzZXJbMF0pe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonVXN1YXJpbyBJbmV4aXN0ZW50ZSAhJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCx1c2VyWzBdLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZighdmVyaWZpY2FQYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidQYXNzd29yZCBJbmNvcnJlY3RhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTp1c2VyWzBdLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXJbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnVzZXJbMF0ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvOnVzZXJbMF0uYXBlbGxpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyZmlsOnVzZXJbMF0ucGVyZmlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqd3Quc2lnbihtaVVzdWFyaW8sc2VjcmV0LHtleHBpcmVzSW46MTQ0MDB9LChlLHRva2VuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOidFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJ30pOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe2V9KTtcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhQXJlYXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IG5ldyByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1aXJlcyA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWlyZXMucXVlcnkgKFxyXG4gICAgICAgICAgICBgc2VsZWN0IGlkIGFzIGlkQXJlYSAsIG5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgICAgIGZyb20gYXJlYXNcclxuICAgICAgICAgICAgd2hlcmUgZXN0YWRvID0gMWBcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydEFyZWEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQXJlYScgLCBWYXJDaGFyICwgbm9tYnJlQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gYXJlYXMgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZUFyZWEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRBcmVhICwgbm9tYnJlQXJlYSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQXJlYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVBcmVhJyAsIFZhckNoYXIgLCBub21icmVBcmVhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGFyZWFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZUFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZEFyZWFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZEFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVBcmVhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBhcmVhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZEFyZWFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFDbGllbnRlcycgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCBzZWxlY3QgYy5pZCBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICwgYy5yYXpvbl9zb2NpYWwgYXMgcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICBmcm9tIGNsaWVudGVzIGNcclxuICAgIHdoZXJlIGMuZXN0YWRvID0gMWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24yID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQ2xpZW50ZScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdDIgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uMiAgKVxyXG4gICAgICAgIG15UmVxdWVzdDIuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIHBhcnNlSW50ICggcmVxLmJvZHkuaWRDbGllbnRlICkgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBjbGllbnRlcyBzZXQgZXN0YWRvID0gMCB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0Mi5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBFbGltaW5hZG8gQ29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCAgcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAsIGlkQ2xpZW50ZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQ2xpZW50ZScgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsICBpZENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHVwZGF0ZSBjbGllbnRlc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlQ2xpZW50ZSAsXHJcbiAgICByYXpvbl9zb2NpYWwgPSBAcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBBY3R1YWxpemFkbyBDb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydENsaWVudGUnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBjbGllbnRlcyAoIG5vbWJyZSAsIHJhem9uX3NvY2lhbCAsIGVzdGFkbyAgKSB2YWx1ZXMgICggQG5vbWJyZUNsaWVudGUgLCBAcmF6b25Tb2NpYWxDbGllbnRlICwgMSApYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVEZWZlY3RvICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0RGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVEZWZlY3RvJyAsIFZhckNoYXIgLCBub21icmVEZWZlY3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGRlZmVjdG9zICggbm9tYnJlICwgaWRfb3BlcmFjaW9uICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVEZWZlY3RvICwgQGlkT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkRGVmZWN0byAsIG5vbWJyZURlZmVjdG8gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZURlZmVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZURlZmVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVEZWZlY3RvICxcclxuICAgICAgICBpZF9vcGVyYWNpb24gPSBAaWRPcGVyYWNpb25cclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZERlZmVjdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSAsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBtLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uTWFxdWluYSAsXHJcbiAgICBtLmlkX3RpcG9zX21hcXVpbmEgYXMgaWRUaXBvTWFxdWluYSAsIHRtLm5vbWJyZSBhcyBub21icmVUaXBvTWFxdWluYSAsIG0uaWRfcGxhbnRhIGFzIGlkUGxhbnRhICwgcC5ub21icmUgYXMgbm9tYnJlUGxhbnRhXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgam9pbiBwbGFudGFzIHAgb24gbS5pZF9wbGFudGEgPSBwLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveG9wZXJhY2lvbi86aWRPcGVyYWNpb24nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgY29uc3Qge2lkT3BlcmFjaW9ufSA9IHJlcS5wYXJhbXNcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgY29uc3QgeyBub21icmVNYXF1aW5hICwgZGVzY3JpcGNpb25NYXF1aW5hICwgaWRUaXBvTWFxdWluYSAsIGlkUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0TWFxdWluYScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnZGVzY3JpcGNpb25NYXF1aW5hJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbk1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQbGFudGEnICwgSW50ICwgaWRQbGFudGEgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gbWFxdWluYXMgKCBub21icmUgLCBkZXNjcmlwY2lvbiAsIGlkX3RpcG9zX21hcXVpbmEgLCBpZF9wbGFudGEgLCBlc3RhZG8gKVxyXG4gICAgdmFsdWVzXHJcbiAgICAoIEBub21icmVNYXF1aW5hICwgQGRlc2NyaXBjaW9uTWFxdWluYSAsIEBpZFRpcG9NYXF1aW5hICwgQGlkUGxhbnRhICwgMSApYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgSW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgaWRNYXF1aW5hICwgbm9tYnJlTWFxdWluYSAsIGRlc2NyaXBjaW9uTWFxdWluYSAsIGlkVGlwb01hcXVpbmEgLCBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZU1hcXVpbmEnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZU1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2Rlc2NyaXBjaW9uTWFxdWluYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25NYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXF1aW5hJyAsIEludCAsIGlkVGlwb01hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGxhbnRhJyAsIEludCAsIGlkUGxhbnRhIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgaWRNYXF1aW5hIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtYXF1aW5hc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlTWFxdWluYSAsXHJcbiAgICBkZXNjcmlwY2lvbiA9IEBkZXNjcmlwY2lvbk1hcXVpbmEgLFxyXG4gICAgaWRfdGlwb3NfbWFxdWluYSA9IEBpZFRpcG9NYXF1aW5hICxcclxuICAgIGlkX3BsYW50YSA9IEBpZFBsYW50YVxyXG4gICAgd2hlcmUgaWQgPSBAaWRNYXF1aW5hYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVNYXF1aW5hJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgaWRNYXF1aW5hIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtYXF1aW5hc1xyXG4gICAgc2V0XHJcbiAgICBlc3RhZG8gPSAwXHJcbiAgICB3aGVyZSBpZCA9IEBpZE1hcXVpbmFgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgbS5pZCBhcyBpZE1vbGRlICwgbS5ub21icmUgYXMgbm9tYnJlTW9sZGUgLCBtLmlkX3BpZXphIGFzIGlkUGllemEgLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgZnJvbSBtb2xkZXMgbVxyXG4gICAgam9pbiBwaWV6YXMgcCBvbiBtLmlkX3BpZXphID0gcC5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYFxyXG4gICAgY29uc3VsdGEucXVlcnkoIHF1ZXJ5ICwoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlTW9sZGUgLCBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydE1vbGRlJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1vbGRlJyAsIFZhckNoYXIgLCBub21icmVNb2xkZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gbW9sZGVzICggbm9tYnJlICwgaWRfcGllemEgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZU1vbGRlICwgQGlkUGllemEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTW9sZGUgLCBub21icmVNb2xkZSAsIGlkUGllemEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlTW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTW9sZGUnICwgVmFyQ2hhciAsIG5vbWJyZU1vbGRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbW9sZGVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZU1vbGRlICxcclxuICAgICAgICBpZF9waWV6YSA9IEBpZFBpZXphXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRNb2xkZWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZE1vbGRlIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlTW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbW9sZGVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkTW9sZGVgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZE9wZXJhY2lvbiwgbm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gb3BlcmFjaW9uZXMgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdmFyIHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSwgcG0udGlwbyBhcyB0aXBvUGFyYWRhTWFxdWluYSwgcG0uaWRfYXJlYSBhcyBpZEFyZWEsIGEubm9tYnJlIGFzIG5vbWJyZUFyZWFcclxuICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYSBwbVxyXG5cdFx0am9pbiBhcmVhcyBhIG9uIHBtLmlkX2FyZWE9YS5pZFxyXG4gICAgICAgIHdoZXJlIHBtLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlKXtjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbihkYXRvLnJlY29yZHNldClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle2NlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBhcmFkYU1hcXVpbmEgLCB0aXBvUGFyYWRhTWFxdWluYSAsIGlkQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgLCBCaXQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQYXJhZGFNYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBhcmFkYU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZVBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICd0aXBvUGFyYWRhTWFxdWluYScgLCBCaXQgLCB0aXBvUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYSAoIG5vbWJyZSAsIHRpcG8gLCBpZF9hcmVhICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVQYXJhZGFNYXF1aW5hICwgQHRpcG9QYXJhZGFNYXF1aW5hICwgQGlkQXJlYSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BhcmFkYSBkZSBNYXF1aW5hIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGFyYWRhTWFxdWluYSAsIG5vbWJyZVBhcmFkYU1hcXVpbmEgLCB0aXBvUGFyYWRhTWFxdWluYSAsIGlkQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgLCBCaXQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQYXJhZGFNYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBhcmFkYU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZVBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICd0aXBvUGFyYWRhTWFxdWluYScgLCBCaXQgLCB0aXBvUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBhcmFkYU1hcXVpbmEnICwgSW50ICwgaWRQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIHRpcG8gPSBAdGlwb1BhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIGlkX2FyZWEgPSBAaWRBcmVhXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQYXJhZGFNYXF1aW5hYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGFyYWRhIGRlIG1hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGFyYWRhTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQYXJhZGFNYXF1aW5hJyAsIEludCAsIGlkUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBhcmFkYXNfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBhcmFkYU1hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQYXJhZGFzIGRlIE1hcXVpbmEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IG5ldyByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfY2xpZW50ZSBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICxcclxuICAgICAgICBwLmlkX3RpcG9zX21hdGVyaWFsIGFzIGlkVGlwb01hdGVyaWFsICwgdG0ubm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIGNsaWVudGVzIGMgb24gcC5pZF9jbGllbnRlID0gYy5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWF0ZXJpYWwgdG0gb24gcC5pZF90aXBvc19tYXRlcmlhbCA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQaWV6YScgLCBWYXJDaGFyICwgbm9tYnJlUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBpZXphcyAoIG5vbWJyZSAsIGlkX2NsaWVudGUgLCBpZF90aXBvc19tYXRlcmlhbCAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZVBpZXphICwgQGlkQ2xpZW50ZSAsIEBpZFRpcG9NYXRlcmlhbCAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEgLCBub21icmVQaWV6YSAsIGlkQ2xpZW50ZSAsIGlkVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGllemFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFuaWxsYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZWxpbWluYVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnN1bHRhLnF1ZXJ5KCBgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gJHsgcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgfWBcclxuICAgICAgICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFbGltaW5hY2lvbiBleGl0b3NhICEnIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QoICcvbGlzdGFyJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkT3BlcmFjaW9uXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgIHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVGdW5kaWNpb259JyBhbmQgJyR7ZmVjaGFIYXN0YUZ1bmRpY29ufSdcclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAnJHtmZWNoYURlc2RlUHJvZHVjY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhUHJvZHVjY2lvbn0nXHJcbiAgICAgICAgYW5kICggJHsgaWRNYXF1aW5hIH0gaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gICR7IGlkTWFxdWluYSB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZFBpZXphIH0gaXMgbnVsbCAgb3IgcC5pZF9waWV6YSA9ICAkeyBpZFBpZXphIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkTW9sZGUgfSBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICAkeyBpZE1vbGRlIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkVGlwb1Byb2Nlc28gfSBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgJHsgaWRUaXBvUHJvY2VzbyB9IClcclxuICAgICAgICBhbmQgKCAkeyBpZE9wZXJhY2lvbiB9IGlzIG51bGwgIG9yIHRtLmlkX29wZXJhY2lvbiA9ICAkeyBpZE9wZXJhY2lvbiB9ICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gW11cclxuICAgICAgICB2YXIgdmVjVHJhYmFqYWRvcmVzXHJcbiAgICAgICAgdmFyIHZlY1JlY2hhem9zXHJcbiAgICAgICAgdmFyIHZlY1pvbmFzXHJcbiAgICAgICAgdmFyIHZlY1BNXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFQbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGEgKVxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQpKXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQuZm9yRWFjaCggcGxhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGxhbmlsbGEgID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGxhLmlkUGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUNhcmdhIDogcGxhLmZlY2hhQ2FyZ2EgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYVByb2R1Y2Npb24gOiBwbGEuZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFGdW5kaWNpb24gOiBwbGEuZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHBsYS5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggIHBsYS5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFjaW9uIDogcGxhLmlkT3BlcmFjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNYXF1aW5hIDogcGxhLmlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1hcXVpbmEgOiBwbGEubm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGllemEgOiBwbGEuaWRQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBpZXphIDogcGxhLm5vbWJyZVBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRNb2xkZSA6IHBsYS5pZE1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTW9sZGUgOiBwbGEubm9tYnJlTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFRpcG9Qcm9jZXNvIDogcGxhLmlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXBvUHJvY2VzbyA6IHBsYS50aXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA6IHBsYS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLnB1c2gocGxhbmlsbGEpXHJcbiAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gJydcclxuICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKChwbGEsaW5kZXhQbGFuaWxsYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFBsYW5pbGxhID09PSAocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5sZW5ndGggLSAxKSl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGlmKCBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID09PSAnJyApeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBgc2VsZWN0IHR4cC5pZCBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvciwgdHVyLmRlc2NyaXBjaW9uICBhcyB0dXJub1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCB0eHAuaG9yYV9maW4gYXMgaG9yYUZpbiwgIHR4cC5wemFfcHJvZHVjaWRhcyBhcyBwaWV6YXNQcm9kdWNpZGFzICxcclxuICAgICAgICAgICAgICAgIHR4cC5jYWxvcmlhcyBhcyBjYWxvcmlhcyAsIHR4cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgdHhwLmlkX3RyYWJhamFkb3IgYXMgaWRUcmFiYWphZG9yICwgdHhwLmlkX3R1cm5vIGFzIGlkVHVybm9cclxuICAgICAgICAgICAgICAgIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhIHR4cFxyXG4gICAgICAgICAgICAgICAgam9pbiB0cmFiYWphZG9yZXMgdCBvbiB0eHAuaWRfdHJhYmFqYWRvciA9IHQuaWRcclxuICAgICAgICAgICAgICAgIGpvaW4gdHVybm9zIHR1ciBvbiB0eHAuaWRfdHVybm8gPSB0dXIuaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHR4cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgdHhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgIDsgYFxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUE0gPSBgIHNlbGVjdCBwbXhwLmlkIGFzIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsIHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSAsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgIHBteHAuaG9yYV9pbmNpbyBhcyBob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsIHBteHAuaG9yYV9maW4gYXMgaG9yYUZpblBhcmFkYU1hcXVpbmEgLCBwbXhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSBwbXhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHBhcmFkYXNfbWFxdWluYSBwbSBvbiBwbXhwLmlkX3BhcmFkYXNfbWFxdWluYSA9IHBtLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBwbXhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCBwbXhwLmlkX3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFiYWphZG9yZXNYcGxhbmlsbGEgPSBhd2FpdCAgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhICsgc3FsQ29uc3VsdGFQTSApXHJcbiAgICAgICAgICAgICAgICBpZih0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXSAmJiB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQTSA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRUcmFiYWphZG9yZXMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCggdCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpID09PSAoIHZlY1RyYWJhamFkb3Jlcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFRyYWJhamFkb3JlcyA9PT0gJycgKSB7IGxpc3RhSWRUcmFiYWphZG9yZXMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFSZWNoYXpvcyA9IGAgc2VsZWN0IHJ4dHlwLmlkIGFzIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICwgZC5ub21icmUgYXMgbm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgcnh0eXAudGlwbyBhcyB0aXBvUmVjaGF6byAsIHJ4dHlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkUmVjaGF6b3MgLCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgcnh0eXAuaWRfZGVmZWN0byBhcyBpZERlZmVjdG9cclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHJ4dHlwXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbiBkZWZlY3RvcyBkIG9uIHJ4dHlwLmlkX2RlZmVjdG8gPSBkLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmUgcnh0eXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgIGFuZCByeHR5cC5pZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkVHJhYmFqYWRvcmVzIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWNoYXpvcyA9IGF3YWl0IGNvbnN1bHRhUmVjaGF6b3MucXVlcnkoIHNxbENvbnN1bHRhUmVjaGF6b3MgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCByZWNoYXpvcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MgPSByZWNoYXpvcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRSZWNoYXpvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goICggcmUgLCAgaW5kZXhSZWNoYXpvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UmVjaGF6byA9PT0gKCB2ZWNSZWNoYXpvcy5sZW5ndGggLSAxKSl7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludCggcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQocmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRSZWNoYXpvcyA9PT0gJycgKSB7IGxpc3RhSWRSZWNoYXpvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcWxDb25zdWx0YVpvbmFzID0gYCBzZWxlY3QgenhyeXAuaWQgYXMgaWRab25hICwgenhyeXAubGV0cmEgYXMgbGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAubnVtZXJvIGFzIG51bWVyb1pvbmEgLCB6eHJ5cC5jYW50aWRhZCBhcyBjYW50aWRhZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBhcyBpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB6eHJ5cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSB6eHJ5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB6eHJ5cC5pZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRSZWNoYXpvcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkaXJlcmVuY2lhRW5NaW51dG9zID0gKGhvcmFJbmljaW8saG9yYUZpbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaF9pbmljaW8gPSBuZXcgTW9tZW50ICggIGhvcmFJbmljaW8gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoX2ZpbiA9IG5ldyBNb21lbnQgKCAgaG9yYUZpbiAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhEZXNkZSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9pbmljaW99YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoSGFzdGEgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfZmlufWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihoX2luaWNpbyA9PT0gJzA2OjAwJyAmJiBoX2ZpbiA9PT0gJzA2OjAwJyl7ICByZXR1cm4gMjQgKiA2MCAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigoaEhhc3RhLWhEZXNkZSkvMTAwMCA8IDApeyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgKyAxNDQwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxpc3RhWm9uYXMgPSBhd2FpdCBjb25zdWx0YVpvbmFzLnF1ZXJ5KCBzcWxDb25zdWx0YVpvbmFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGxpc3RhWm9uYXMucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA9IGxpc3RhWm9uYXMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCggKHBsICwgaW5kZXhQbGFuaWxsYSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQTS5mb3JFYWNoKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggcG0uaWRQbGFuaWxsYSApID09PSBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFkYU1hcSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGE6IHBtLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hIDogcG0uaWRQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVQYXJhZGFNYXF1aW5hIDogcG0ubm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzZGVQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzdGFQYXJhZGFNYXF1aW5hIDogbmV3IE1vbWVudCAoIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYWNpb25QYXJhZGFNYXF1aW5hIDogZGlyZXJlbmNpYUVuTWludXRvcyggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCAgcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1BhcmFkYU1hcXVpbmEgOiBwbS50aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEucHVzaCggcGFyYWRhTWFxIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goICh0ciAsIGluZGV4VHJhYmFqYWRvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggdHIuaWRQbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYVhwbGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUcmFiYWphZG9yWHBsYW5pbGxhIDogdHIuaWRUcmFiYWphZG9yWHBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW8gOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHVybm8gOiB0ci5pZFR1cm5vICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVUcmFiYWphZG9yIDogdHIubm9tYnJlVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgOiB0ci5pZFRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvVHJhYmFqYWRvciA6IHRyLmFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0dXJub1RyYWJhamFkb3IgOiB0ci50dXJub1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCB0ci5ob3JhSW5pY2lvICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCB0ci5ob3JhRmluICkuZm9ybWF0KCBcIkhIOm1tXCIgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjY2lvbiA6IHRyLnBpZXphc1Byb2R1Y2lkYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiB0ci5jYWxvcmlhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvIDogWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB0cmFYcGxhLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApID09PSBwYXJzZUludCAoIHJlLmlkVHJhYmFqYWRvclhwbGFuaWxsYSApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIDogcmUuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem8gOiByZS5pZERlZmVjdG8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUmVjaGF6byA6IHJlLm5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbyA6IHJlLnRpcG9SZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkUmVjaGF6byA6IHJlLmNhbnRpZGFkUmVjaGF6b3MgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzLmZvckVhY2goIHpvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCB6b24uaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhICkgPT09IHBhcnNlSW50KCByZWNoLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbmFYcmVjaGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmEgOiB6b24uaWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uLmxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiB6b24ubnVtZXJvWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHpvbi5jYW50aWRhZFpvbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoLnZlY1pvbmFzLnB1c2goIHpvbmFYcmVjaGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYVhwbGEudmVjUmVjaGF6by5wdXNoKCByZWNoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zLnB1c2goIHRyYVhwbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pICAvLyBob2xhIG11bmRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0KCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHZlY1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiAsICBpZE9wZXJhY2lvbiAsIGlkTWFxdWluYSAsICBpZFBpZXphICwgIGlkTW9sZGUgLCBpZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MgLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSAsIGlkUGxhbmlsbGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc29sZS5sb2cgKCBpZFBsYW5pbGxhIClcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtID0gYXdhaXQgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiAoIGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZiAoICFlcnIgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICggICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRab25hc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUmVjaGF6b3NEZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZE9wZXJhcmlvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkUG1EZWxldGUgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCAoIHAgLCBpcCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoKCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5sZW5ndGggLTEgKSAgPT09IGlwICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUG1EZWxldGUgKz0gYCAke3BhcnNlSW50ICggcC5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoICggbyAsIGlvICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQoIG8uaWRUcmFiYWphZG9yWHBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvLnZlY1JlY2hhem8uZm9yRWFjaCAoICggciAsIGlyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCByLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgci52ZWNab25hcy5mb3JFYWNoICggKCB6ICwgaXogKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hc0RlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCB6LmlkWm9uYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRPcGVyYXJpb3NEZWxldGUgIT09ICcnICkgeyBpZE9wZXJhcmlvc0RlbGV0ZSA9ICBpZE9wZXJhcmlvc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFJlY2hhem9zRGVsZXRlICE9PSAnJyApIHsgaWRSZWNoYXpvc0RlbGV0ZSA9ICBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRSZWNoYXpvc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggaWRab25hc0RlbGV0ZSAhPT0gJycgKSB7IGlkWm9uYXNEZWxldGUgPSAgaWRab25hc0RlbGV0ZS50cmltICggICkuc3Vic3RyaW5nICggMCAsIGlkWm9uYXNEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHREZWxldGUgPSBhd2FpdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0ucXVlcnkgKCBgIGRlbGV0ZSB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkWm9uYXNEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkWm9uYXNEZWxldGV9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUmVjaGF6b3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUmVjaGF6b3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRPcGVyYXJpb3NEZWxldGUgPT09ICcnID8gbnVsbCA6IGlkT3BlcmFyaW9zRGVsZXRlIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSB3aGVyZSBpZCBpbiAoICR7IGlkUG1EZWxldGUgPT09ICcnID8gbnVsbCA6IGlkUG1EZWxldGUgfSApIDsgYCApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHREZWxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9wcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfZnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkX21vbGRlJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZFBsYW5pbGxhJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb24gPSBAZmVfcHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb24gPSBAZmVfZnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvID0gQGhvcmFfaW5pY2lvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluID0gQGhvcmFfZmluICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3Byb2Nlc28gPSBAaWRQcm9jZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZSA9IEBpZF9tb2xkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFuaWxsYWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGFyc2VJbnQgKCBpZFBsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSAoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0QzEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2ggKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8uY2Fsb3JpYXMgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5wcm9kdWNjaW9uICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50ICggb3BlcmFyaW8uaWRPcGVyYXJpbyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCAoIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJywgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoICggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG8gOiBwYXJzZUludCAoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzIDogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uYS5sZXRyYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5ICggY29uc3VsdGEgLCAoIGVyciAsIHJlc3VsdCApID0+IHsgaWYgKCBlcnIgKSB7ICBjYWxsYmFjayAoIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrICggICkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCAsICggRVIgLCByZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0oIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvUi5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIgKCAnQ29udGVudC1UeXBlJyAsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKS5qc29uICggeyBtZW5zYWplIDogJ0FjdHVhbGl6YWNpb24gZXhpdG9zYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbnJvdXRlci5wb3N0KCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJywgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhOiB6b25hLmxldHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2ggKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNICggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNICggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyb1IubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnSW5zZXJjaW9uIGV4aXRvcmEnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIG1lbnNhamUyIDogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0ICgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3NlbGVjdFByb2Nlc29zJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhbnNhYyApID0+IHtcclxuICAgICAgICBpZiAoIGVycm9yVHJhbnNhYyApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFuc2FjLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB2ZWNQcm9jZXNvcyA9IFsgIF1cclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllemFYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgcC5pZCBhcyBpZFByb2Nlc28gLCBwLmRlc2NyaXBjaW9uIGFzIGRlc2NpcGNpb25Qcm9jZXNvICwgcC5pZF9waWV6YSBhcyBpZFBpZXphICxcclxuICAgICAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfbWFxdWluYSBhcyBpZE1hcXVpbmEgLCBtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLFxyXG4gICAgICAgICAgICBwLmlkX3RpcG9zX3Byb2Nlc28gYXMgaWRUaXBvUHJvY2VzbyAsIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgICAgICBmcm9tIHByb2Nlc29zIHBcclxuICAgICAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICAgICAgam9pbiBtYXF1aW5hcyBtYXEgb24gcC5pZF9tYXF1aW5hID0gbWFxLmlkXHJcbiAgICAgICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MgPSByZXNwb25zZS5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgIHZhciBpZFByb2Nlc29zID0gJydcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1Byb2Nlc29zICkgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFByb2Nlc29zICs9IGAgJHtwLmlkUHJvY2Vzb30gLGBcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpZFByb2Nlc29zID09PSAnJyApIHsgaWRQcm9jZXNvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IGlkUHJvY2Vzb3MgPSBpZFByb2Nlc29zLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgIGlkUHJvY2Vzb3MubGVuZ3RoIC0yICkgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBpZFByb2Nlc29zIClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGllemFYaHMgPSBgc2VsZWN0IHB4aC5pZCBhcyBpZFBpZXphc1hocyAsIHB4aC5jYW50aWRhZCBhcyBjYW50aWRhZFBpZXphc1hocyAsIHB4aC5mZV9kZXNkZSBhcyBkZXNkZVBpZXphc1hocyAsXHJcbiAgICAgICAgICAgICAgICBweGguZmVfaGFzdGEgYXMgaGFzdGFQaWV6YXNYaHMgLCBweGguaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICAgICAgICAgIGZyb20gcGllemFzX3hfaG9yYSBweGhcclxuICAgICAgICAgICAgICAgIHdoZXJlIHB4aC5pZF9wcm9jZXNvIGluICgke2lkUHJvY2Vzb3N9KWBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VscnB6WGhzID0gYXdhaXQgbXlSZXF1ZXN0UGllemFYaHMucXVlcnkgKCBxdWVyeVBpZXphWGhzIClcclxuICAgICAgICAgICAgICAgIHZhciB2ZWNQaWV6YXNYaG9yYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgIGlmICggcmVzdWxycHpYaHMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCB2ZWNQaWV6YXNYaG9yYSApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEgPSByZXN1bHJwelhocy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIHJlc3VscnB6WGhzLnJlY29yZHNldCApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MuZm9yRWFjaCAoICggcCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEuZm9yRWFjaCAoICggcHpYaHMgLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQgKCBwLmlkUHJvY2VzbyApID09PSBwYXJzZUludCAoIHB6WGhzLmlkUHJvY2VzbyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEucHVzaCAoIHB6WGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB2ZWNQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn0gKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgZGVzY3JpcGNpb25Qcm9jZXNvICwgaWRQaWV6YSAsIGlkTWFxdWluYSAsIGlkVGlwb3NQcm9jZXNvICwgdmVjUGllemFzWGhvcmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCAsRGF0ZSAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdFByb2Nlc28gPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgICAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYXNhY3Rpb25zICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGVycm9yVHJhc2FjdGlvbnMgKSB7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhc2FjdGlvbnMubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2Rlc2NyaXBjaW9uUHJvY2VzbycgLCBWYXJDaGFyICwgIGRlc2NyaXBjaW9uUHJvY2VzbyApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCAgaWRQaWV6YSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsICBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkVGlwb3NQcm9jZXNvJyAsIEludCAsICBpZFRpcG9zUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgaW5zZXJ0IGludG8gcHJvY2Vzb3MgKCBkZXNjcmlwY2lvbiAsIGlkX3BpZXphICwgaWRfbWFxdWluYSAsIGlkX3RpcG9zX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgKCBAZGVzY3JpcGNpb25Qcm9jZXNvICwgQGlkUGllemEgLCBAaWRNYXF1aW5hICwgQGlkVGlwb3NQcm9jZXNvICwgMSApIDtcclxuICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZXNvIGludFxyXG4gICAgICAgICAgICBzZXQgQGlkUHJvY2VzbyA9ICggc2VsZWN0IHRvcCAxIG1heCAoIGlkICkgZnJvbSBwcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHNlbGVjdCBAaWRQcm9jZXNvIGFzIGlkUHJvY2Vzb2BcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICAgICAgdmFyIGlkUHJvY2Vzb1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZFByb2Nlc28gPSByZXNwb25zZVByb2Nlc29zLnJlY29yZHNldHNbMF1bMF0uaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUHJvY2VzbyAsIGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCAgaWRQcm9jZXNvIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uID0gQGRlc2NyaXBjaW9uUHJvY2VzbyAsXHJcbiAgICAgICAgICAgIGlkX3BpZXphID0gQGlkUGllemEgLFxyXG4gICAgICAgICAgICBpZF9tYXF1aW5hID0gQGlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgIGlkX3RpcG9zX3Byb2Nlc28gPSBAaWRUaXBvc1Byb2Nlc29cclxuICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIDsgZGVsZXRlIHBpZXphc194X2hvcmEgd2hlcmUgaWRfcHJvY2VzbyA9IEBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1BpZXphc1hob3JhICkgJiYgdmVjUGllemFzWGhvcmEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BpZXphc1hob3JhICwgKCBwaWV6YVhocyAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3RQaWVYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnY2FudGlkYWRQaWV6YXNYaHMnICwgSW50ICwgcGllemFYaHMuY2FudGlkYWRQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnZGVzZGVQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmRlc2RlUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2hhc3RhUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5oYXN0YVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgcGFyc2VJbnQgKCBpZFByb2Nlc28gKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGlleGhzID0gYGluc2VydCBpbnRvIHBpZXphc194X2hvcmEgKCBjYW50aWRhZCAsIGZlX2Rlc2RlICwgZmVfaGFzdGEgLCBpZF9wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICggQGNhbnRpZGFkUGllemFzWGhzICwgQGRlc2RlUGllemFzWGhzICwgQGhhc3RhUGllemFzWGhzICwgQGlkUHJvY2VzbyAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLnF1ZXJ5ICggcXVlcnlQaWV4aHMgLCAoIGVycm9yICwgcmVzdWx0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyb3JDYWxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yQ2FsYmFjayApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvckNhbGJhY2subWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQcm9jZXNvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7ICBSZXF1ZXN0ICAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIGBcclxuICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2Vzb3MgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhVGlwb3NNYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IHRtLmlkIGFzIGlkVGlwb01hcXVpbmEgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hcXVpbmEgLCB0bS5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24gLFxyXG4gICAgICAgIG8ubm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gdGlwb3NfbWFxdWluYSB0bVxyXG4gICAgICAgIGpvaW4gb3BlcmFjaW9uZXMgbyBvbiB0bS5pZF9vcGVyYWNpb24gPSBvLmlkXHJcbiAgICAgICAgd2hlcmUgdG0uZXN0YWRvID0gMWBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3BvbnNlLnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxuXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVRpcG9NYXF1aW5hICAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRpcG9NYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRpcG9NYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byB0aXBvc19tYXF1aW5hICggbm9tYnJlICwgaWRfb3BlcmFjaW9uICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVUaXBvTWFxdWluYSAsIEBpZE9wZXJhY2lvbiAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBJbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXF1aW5hICwgbm9tYnJlVGlwb01hcXVpbmEgLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVUaXBvTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb01hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdkZXNjcmlwY2lvbk1hcXVpbmEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWFxdWluYSAsXHJcbiAgICAgICAgaWRfb3BlcmFjaW9uID0gQGlkT3BlcmFjaW9uXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlVGlwb01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXF1aW5hYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBtYXF1aW5hIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFMaXN0YUNsaWVudGVzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IGlkIGFzIGlkVGlwb01hdGVyaWFsICwgbm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU1hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRUaXBvTWF0cmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNYXRlcmlhbCcgLCBWYXJDaGFyICwgbm9tYnJlTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byB0aXBvc19tYXRlcmlhbCAoIG5vbWJyZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzICggQG5vbWJyZU1hdGVyaWFsICwgMSApICBgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVGlwb01hdGVyaWFsICAsICBub21icmVUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGVsaW1pbmFkbyAgY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSAgcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUcmFiYWphZG9yLCB0Lm5vbWJyZSBhcyBub21icmVUcmFiYWphZG9yLCB0LmFwZWxsaWRvIGFzIGFwZWxsaWRvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmZfbmFjaW1pZW50byBhcyBmZWNoYU5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBmZWNoYUluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvVHJhYmFqYWRvciwgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxucmVxdWlyZSgnLi4vY29uZXhpb25lcy9tb25nb0RiJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3QgUGVyZmlsID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hUm9sZXNVc3VhcmlvcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgYXdhaXQgVXN1YXJpby5maW5kKChlLGRhdG8pPT57XHJcbiAgICAgICAgZSA/IHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdFcnJvciBlbiBlbCByZXF1ZXN0JykgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdG8pXHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbiAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkKHtfaWQ6cmVxLnBhcmFtcy5pZH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcilcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbiAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1VzdWFyaW8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4gICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbiAgICB9KVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=