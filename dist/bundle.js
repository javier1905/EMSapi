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
servidor.use('/api/areas', __webpack_require__(/*! ./rutasApi/areas */ "./rutasApi/areas.js")); //Settings

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJlYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3Byb2Nlc29zLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RpcG9zTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NQcm9jZXNvLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3RyYWJhamFkb3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90dXJub3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdXN1YXJpb3MuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXN5bmNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHQtbm9kZWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vcmdhblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zc3FsXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNlY3JldCIsIm1vbmdvb3NlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJVUkkiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29uZXhpb24iLCJjb25uZWN0aW9uIiwib24iLCJjb25zb2xlIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsImxvZyIsInJlZCIsIm1zc3FsIiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJwb3J0Iiwic2VydmVyIiwib3B0aW9ucyIsImFwcE5hbWUiLCJlbmFibGVBcml0aEFib3J0IiwiZW5jcnlwdCIsImNvbm5lY3Rpb25UaW1lT3V0IiwiZHJpdmVyIiwic3RyZWFtIiwicG9vbCIsIm1heCIsIm1pbiIsImlkbGVUaW1lb3V0TWlsbGlzIiwiQ29uZXhpb25TUUwiLCJhYnJpckNvbmV4aW9uIiwidW5kZWZpbmVkIiwiY2VycmFyQ29uZXhpb24iLCJhYnJpckNvbmV4aW9uUE9PTCIsImNlcnJhckNvbmV4aW9uUE9PTCIsInRoZW4iLCJfY29ubmVjdGVkIiwiYmx1ZSIsImdyZWVuIiwiY2xvc2UiLCJjb25leGlvbmVzIiwibmFtZSIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm5ld0NvbmV4aW9uIiwiQ29ubmVjdGlvblBvb2wiLCJhcmdzIiwiUHJvbWlzZSIsImFsbCIsInZhbHVlcyIsIm1hcCIsInBlcmZpbCIsIlNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJ1bmlxdWUiLCJlbnVtIiwic2V0IiwibW9kZWwiLCJ1c3VhcmlvIiwidXNlck5hbWUiLCJyZXF1aXJlZCIsImVtYWlsIiwibm9tYnJlIiwiYXBlbGxpZG8iLCJleHByZXNzIiwiY29ycyIsIm1vcmdhbiIsInNlcnZpZG9yIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJnZXQiLCJtIiwiZSIsInllbGxvdyIsIlJvdXRlciIsImp3dCIsIkNPTkZJRyIsInJvdXRlciIsInJlcSIsInJlcyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwic3RhdHVzIiwibWVuc2FqZSIsInRva2VuIiwic3BsaXQiLCJ2ZXJpZnkiLCJkIiwiYmNyeXB0IiwiVXN1YXJpbyIsInBvc3QiLCJuZXh0IiwiZmluZCIsImJvZHkiLCJ2ZXJpZmljYVBhc3MiLCJjb21wYXJlU3luYyIsIm1pVXN1YXJpbyIsInNpZ24iLCJleHBpcmVzSW4iLCJSZXF1ZXN0IiwibXlSZXF1aXJlcyIsInJlc3VsdCIsInF1ZXJ5IiwicmVjb3Jkc2V0IiwibWVzc2FnZSIsIm5vbWJyZUFyZWEiLCJWYXJDaGFyIiwibXlSZXF1ZXN0IiwiaW5wdXQiLCJwdXQiLCJpZEFyZWEiLCJJbnQiLCJjb25leGlvbjIiLCJteVJlcXVlc3QyIiwicGFyc2VJbnQiLCJpZENsaWVudGUiLCJub21icmVDbGllbnRlIiwicmF6b25Tb2NpYWxDbGllbnRlIiwiY29uc3VsdGEiLCJlcnIiLCJkYXRvIiwibm9tYnJlRGVmZWN0byIsImlkT3BlcmFjaW9uIiwiaWREZWZlY3RvIiwicGFyYW1zIiwiaWRQaWV6YSIsIm5vbWJyZU1vbGRlIiwiaWRNb2xkZSIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJ0aXBvUGFyYWRhTWFxdWluYSIsIkJpdCIsImlkUGFyYWRhTWFxdWluYSIsImlkTWFxdWluYSIsIm5vbWJyZVBpZXphIiwiaWRUaXBvTWF0ZXJpYWwiLCJNb21lbnQiLCJjb252aWVydGVIb3JhIiwiaG9yYSIsIkhvckluaWNpb25PIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJpZFBsYW5pbGxhIiwiY29uZXhpb25BYmllcnRhIiwiZmVjaGFEZXNkZVByb2R1Y2Npb24iLCJmZWNoYUhhc3RhUHJvZHVjY2lvbiIsImZlY2hhRGVzZGVGdW5kaWNpb24iLCJmZWNoYUhhc3RhRnVuZGljb24iLCJpZFRpcG9Qcm9jZXNvIiwiVHJhbnNhY3Rpb24iLCJ0cmFuc2FjY2lvbiIsImJlZ2luIiwic3FsQ29uc3VsdGEiLCJjb25zdWx0YVBsYW5pbGxhIiwiY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEiLCJjb25zdWx0YVJlY2hhem9zIiwiY29uc3VsdGFab25hcyIsImNvbnN1bHRhUE0iLCJ2ZWNQbGFuaWxsYVByb2R1Y2Npb24iLCJ2ZWNUcmFiYWphZG9yZXMiLCJ2ZWNSZWNoYXpvcyIsInZlY1pvbmFzIiwidmVjUE0iLCJyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24iLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwicGxhIiwicGxhbmlsbGEiLCJmZWNoYUNhcmdhIiwiZmVjaGFQcm9kdWNjaW9uIiwiZmVjaGFGdW5kaWNpb24iLCJob3JhSW5pY2lvIiwiZm9ybWF0IiwiaG9yYUZpbiIsIm5vbWJyZU1hcXVpbmEiLCJ0aXBvUHJvY2VzbyIsImlkUHJvY2VzbyIsInB1c2giLCJsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIiwiaW5kZXhQbGFuaWxsYSIsImxlbmd0aCIsInNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFQTSIsInRyYWJhamFkb3Jlc1hwbGFuaWxsYSIsInJlY29yZHNldHMiLCJsaXN0YUlkVHJhYmFqYWRvcmVzIiwidCIsImkiLCJpZFRyYWJhamFkb3JYcGxhbmlsbGEiLCJzcWxDb25zdWx0YVJlY2hhem9zIiwicmVjaGF6b3MiLCJsaXN0YUlkUmVjaGF6b3MiLCJyZSIsImluZGV4UmVjaGF6byIsImlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIiwic3FsQ29uc3VsdGFab25hcyIsImRpcmVyZW5jaWFFbk1pbnV0b3MiLCJoX2luaWNpbyIsImhfZmluIiwiaERlc2RlIiwiaEhhc3RhIiwibGlzdGFab25hcyIsInBsIiwidmVjT3BlcmFyaW9zIiwidmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEiLCJwbSIsInBhcmFkYU1hcSIsImlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSIsImRlc2RlUGFyYWRhTWFxdWluYSIsImhvcmFJbmljaW9QYXJhZGFNYXF1aW5hIiwiaGFzdGFQYXJhZGFNYXF1aW5hIiwiaG9yYUZpblBhcmFkYU1hcXVpbmEiLCJkdXJhY2lvblBhcmFkYU1hcXVpbmEiLCJ0ciIsImluZGV4VHJhYmFqYWRvciIsInRyYVhwbGEiLCJpZE9wZXJhcmlvIiwiaWRUcmFiYWphZG9yIiwiaWRUdXJubyIsIm5vbWJyZVRyYWJhamFkb3IiLCJhcGVsbGlkb1RyYWJhamFkb3IiLCJ0dXJub1RyYWJhamFkb3IiLCJwcm9kdWNjaW9uIiwicGllemFzUHJvZHVjaWRhcyIsImNhbG9yaWFzIiwidmVjUmVjaGF6byIsInJlY2giLCJpZFJlY2hhem8iLCJub21icmVSZWNoYXpvIiwidGlwbyIsInRpcG9SZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvcyIsInpvbiIsImlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSIsInpvbmFYcmVjaGEiLCJpZFpvbmEiLCJsZXRyYSIsImxldHJhWm9uYSIsIm51bWVybyIsIm51bWVyb1pvbmEiLCJjYW50aWRhZCIsImNhbnRpZGFkWm9uYSIsImNvbW1pdCIsInJvbGxiYWNrIiwiSG9yYUluaWNpb1Byb2R1Y2Npb24iLCJIb3JhRmluUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtIiwiYXNpbmNyb25vIiwibWV0b2RvVHJhbnNhY2Npb24iLCJpZFpvbmFzRGVsZXRlIiwiaWRSZWNoYXpvc0RlbGV0ZSIsImlkT3BlcmFyaW9zRGVsZXRlIiwiaWRQbURlbGV0ZSIsInAiLCJpcCIsIm8iLCJpbyIsInIiLCJpciIsInoiLCJpeiIsInRyaW0iLCJzdWJzdHJpbmciLCJyZXN1bHREZWxldGUiLCJUaW1lIiwicHJlcGFyZSIsImRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIiwiZmVfcHJvZHVjY2lvbiIsImZlX2Z1bmRpY2lvbiIsImhvcmFfaW5pY2lvIiwiaG9yYV9maW4iLCJpZF90dXJubyIsImlkX21vbGRlIiwicmVzdWx0QzEiLCJleGVjdXRlIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsInZlY09wZXJhcmlvc1hwbGFuaWxsYSIsIm9wZXJhcmlvIiwib3AiLCJwemFfcHJvZHVjaWRhcyIsImlkX3RyYWJhamFkb3IiLCJpZF9wbGFuaWxsYSIsImVhY2hTZXJpZXMiLCJ0cmFiYWphZG9yIiwiY2FsbGJhY2siLCJwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEiLCJ2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEiLCJyZWNoYXpvWiIsImlkX2RlZmVjdG8iLCJyZWNoYXpvIiwidmVjWm9uYXNYcmVjaGF6byIsInpvbmEiLCJ6b28iLCJ2ZWNQYXJhZGFzRGVNYXF1aW5hIiwicGFyYU1BQyIsImlkX3BhcmFkYXNfbWFxdWluYSIsIlBNIiwiY2FsbGJhY2tQTSIsImNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSIsIkVSIiwicmVzdWx0UE0iLCJlcnJvUiIsInNldEhlYWRlciIsIm1lbnNhamUyIiwiaWRQbGFuaWxsYVByb2R1Y2Npb24iLCJjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uIiwiaXNOYU4iLCJteVRyYW5zYWN0aW9uIiwiZXJyb3JUcmFuc2FjIiwidmVjUHJvY2Vzb3MiLCJteVJlcXVlc3RQaWV6YVhocyIsInJlc3BvbnNlIiwiaWRQcm9jZXNvcyIsInF1ZXJ5UGllemFYaHMiLCJyZXN1bHJwelhocyIsInZlY1BpZXphc1hob3JhIiwicHpYaHMiLCJpbmRleCIsImRlc2NyaXBjaW9uUHJvY2VzbyIsImlkVGlwb3NQcm9jZXNvIiwibXlSZXF1ZXN0UHJvY2VzbyIsImVycm9yVHJhc2FjdGlvbnMiLCJxdWVyeVByb2Nlc29zIiwicmVzcG9uc2VQcm9jZXNvcyIsInBpZXphWGhzIiwibXlSZXF1ZXN0UGllWGhzIiwiY2FudGlkYWRQaWV6YXNYaHMiLCJkZXNkZVBpZXphc1hocyIsImhhc3RhUGllemFzWGhzIiwicXVlcnlQaWV4aHMiLCJlcnJvckNhbGJhY2siLCJub21icmVNYXRlcmlhbCIsIm5vbWJyZVRpcG9NYXRlcmlhbCIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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LENBQVcsTUFBWCxFQUFrQixDQUFDL0IsR0FBRCxFQUFLQyxHQUFMLEtBQVc7QUFDekIsUUFBTTtBQUFDMlE7QUFBRCxNQUFPNVEsR0FBRyxDQUFDOEMsTUFBakI7QUFDQSxRQUFNL0IsSUFBSSxHQUFHZixHQUFHLENBQUNlLElBQWpCOztBQUNBLE1BQUdBLElBQUksQ0FBQ3ZGLFFBQVIsRUFBaUI7QUFBQ3VGLFFBQUksQ0FBQ3ZGLFFBQUwsR0FBZ0I0VSxLQUFLLENBQUNTLFFBQU4sQ0FBZTlQLElBQUksQ0FBQ3ZGLFFBQXBCLENBQWhCO0FBQStDOztBQUNqRW1GLFNBQU8sQ0FBQ29RLGlCQUFSLENBQTBCO0FBQUNKLE9BQUcsRUFBQ0M7QUFBTCxHQUExQixFQUFtQzdQLElBQW5DLEVBQXdDLENBQUNyQixDQUFELEVBQUdlLENBQUgsS0FBTztBQUMzQ2YsS0FBQyxHQUFFTyxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCbEIsSUFBaEIsQ0FBcUI7QUFBQ2pFLFdBQUssRUFBQ3lFLENBQUMsQ0FBQ2dDO0FBQVQsS0FBckIsQ0FBRixHQUNEekIsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQmxCLElBQWhCLENBQXFCO0FBQUNtQixhQUFPLEVBQUM7QUFBVCxLQUFyQixDQURBO0FBRUgsR0FIRDtBQUlILENBUkQ7QUFVQWxHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjJGLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDekVBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbnJlcXVpcmUoJ2NvbG9ycycpXHJcbn1cclxuXHJcbnZhciBVUkk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgIFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbn1cclxuZWxzZXtcclxuICAgICBVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDo1MDAwOjI3MDE3L3VzdWFyaW9zRU1TJ1xyXG59XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFVSSSx7dXNlTmV3VXJsUGFyc2VyOnRydWUsdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSk7XHJcblxyXG52YXIgY29uZXhpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJyxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwnZXJyb3IgZGUgY29uZXhpb24nKSk7XHJcblxyXG5jb25leGlvbi5vbmNlKCdvcGVuJywoKT0+e1xyXG4gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicucmVkKVxyXG4gICAgIH0gXHJcbiAgICAgZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicpXHJcbiAgICAgfVxyXG59KVxyXG4iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUlNRTCxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMLFxyXG4gICAgICAgIHNlcnZlcjpwcm9jZXNzLmVudi5TRVJWRVJTUUwsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnREJqYXYnLCAvKiBEQmphdiBlbXNEQiAgKi9cclxuICAgICAgICBwYXNzd29yZDogJ2JlbGdyYW5vNDU1JyxcclxuICAgICAgICBkYXRhYmFzZTogJ0VNU19EQl9TUUwnLFxyXG4gICAgICAgIHBvcnQ6MTQzMyxcclxuICAgICAgICBzZXJ2ZXI6J0RFU0tUT1AtRzFJMDk3QycsIC8qIERFU0tUT1AtRzFJMDk3QyAgUEMyMzYwICovXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J2Vtcy1ub2RlLWFwaScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxudmFyIGNvbmV4aW9uXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4gICAgLnRoZW4ocG9vbD0+e1xyXG4gICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbiAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgIFxyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgcGVyZmlsID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdwZXJmaWwnLHBlcmZpbCkiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHVzdWFyaW8gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgICB1c2VyTmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgbm9tYnJlOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwZWxsaWRvOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3VzdWFyaW8nLHVzdWFyaW8pIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW47XHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpXHJcbn1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXF1aW5hcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tYXF1aW5hcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9BdXRlbnRpZmljYXNpb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BpZXphcycscmVxdWlyZSgnLi9ydXRhc0FwaS9waWV6YXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL21vbGRlcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tb2xkZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RlZmVjdG9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2RlZmVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9vcGVyYWNpb25lcycscmVxdWlyZSgnLi9ydXRhc0FwaS9vcGVyYWNpb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvY2Vzb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvY2Vzb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3R1cm5vcycscmVxdWlyZSgnLi9ydXRhc0FwaS90dXJub3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BhcmFkYXNNYXF1aW5hJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90cmFiYWphZG9yZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zUHJvY2VzbycscmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NsaWVudGVzJywgcmVxdWlyZSggJy4vcnV0YXNBcGkvY2xpZW50ZXMnICkgKVxyXG5zZXJ2aWRvci51c2UgKCcvYXBpL3RpcG9zTWF0ZXJpYWwnLCByZXF1aXJlICggJy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbCcgKSApXHJcbnNlcnZpZG9yLnVzZSAoJy9hcGkvYXJlYXMnLCByZXF1aXJlICggJy4vcnV0YXNBcGkvYXJlYXMnICkgKVxyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyxuZXh0KT0+e1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kKHt1c2VyTmFtZTpyZXEuYm9keS51c2VyTmFtZX0pXHJcbiAgICAgICAgaWYoIXVzZXJbMF0pe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonVXN1YXJpbyBJbmV4aXN0ZW50ZSAhJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCx1c2VyWzBdLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZighdmVyaWZpY2FQYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidQYXNzd29yZCBJbmNvcnJlY3RhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTp1c2VyWzBdLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXJbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnVzZXJbMF0ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvOnVzZXJbMF0uYXBlbGxpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyZmlsOnVzZXJbMF0ucGVyZmlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqd3Quc2lnbihtaVVzdWFyaW8sc2VjcmV0LHtleHBpcmVzSW46MTQ0MDB9LChlLHRva2VuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOidFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJ30pOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe2V9KTtcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhQXJlYXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IG5ldyByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1aXJlcyA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWlyZXMucXVlcnkgKFxyXG4gICAgICAgICAgICBgc2VsZWN0IGlkIGFzIGlkQXJlYSAsIG5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgICAgIGZyb20gYXJlYXNcclxuICAgICAgICAgICAgd2hlcmUgZXN0YWRvID0gMWBcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydEFyZWEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQXJlYScgLCBWYXJDaGFyICwgbm9tYnJlQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gYXJlYXMgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZUFyZWEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRBcmVhICwgbm9tYnJlQXJlYSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQXJlYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVBcmVhJyAsIFZhckNoYXIgLCBub21icmVBcmVhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGFyZWFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZUFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZEFyZWFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZEFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVBcmVhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBhcmVhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZEFyZWFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFDbGllbnRlcycgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCBzZWxlY3QgYy5pZCBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICwgYy5yYXpvbl9zb2NpYWwgYXMgcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICBmcm9tIGNsaWVudGVzIGNcclxuICAgIHdoZXJlIGMuZXN0YWRvID0gMWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24yID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQ2xpZW50ZScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdDIgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uMiAgKVxyXG4gICAgICAgIG15UmVxdWVzdDIuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIHBhcnNlSW50ICggcmVxLmJvZHkuaWRDbGllbnRlICkgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBjbGllbnRlcyBzZXQgZXN0YWRvID0gMCB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0Mi5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBFbGltaW5hZG8gQ29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCAgcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAsIGlkQ2xpZW50ZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQ2xpZW50ZScgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsICBpZENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHVwZGF0ZSBjbGllbnRlc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlQ2xpZW50ZSAsXHJcbiAgICByYXpvbl9zb2NpYWwgPSBAcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBBY3R1YWxpemFkbyBDb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydENsaWVudGUnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBjbGllbnRlcyAoIG5vbWJyZSAsIHJhem9uX3NvY2lhbCAsIGVzdGFkbyAgKSB2YWx1ZXMgICggQG5vbWJyZUNsaWVudGUgLCBAcmF6b25Tb2NpYWxDbGllbnRlICwgMSApYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVEZWZlY3RvICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0RGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVEZWZlY3RvJyAsIFZhckNoYXIgLCBub21icmVEZWZlY3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGRlZmVjdG9zICggbm9tYnJlICwgaWRfb3BlcmFjaW9uICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVEZWZlY3RvICwgQGlkT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkRGVmZWN0byAsIG5vbWJyZURlZmVjdG8gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZURlZmVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZURlZmVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVEZWZlY3RvICxcclxuICAgICAgICBpZF9vcGVyYWNpb24gPSBAaWRPcGVyYWNpb25cclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZERlZmVjdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYSwgbS5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvbk1hcXVpbmEgLCBpZF90aXBvc19tYXF1aW5hIGFzIGlkVGlwb01hcXVpbmFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxucm91dGVyLmdldCgnL3hvcGVyYWNpb24vOmlkT3BlcmFjaW9uJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGNvbnN0IHtpZE9wZXJhY2lvbn0gPSByZXEucGFyYW1zXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtXHJcbiAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbS5pZF90aXBvc19tYXF1aW5hID0gdG0uaWRcclxuICAgIHdoZXJlIG0uZXN0YWRvID0gMSBhbmQgdG0uaWRfb3BlcmFjaW9uID0gJHtpZE9wZXJhY2lvbn1gLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCBtLmlkIGFzIGlkTW9sZGUgLCBtLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIG0uaWRfcGllemEgYXMgaWRQaWV6YSAsIHAubm9tYnJlIGFzIG5vbWJyZVBpZXphXHJcbiAgICBmcm9tIG1vbGRlcyBtXHJcbiAgICBqb2luIHBpZXphcyBwIG9uIG0uaWRfcGllemEgPSBwLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgXHJcbiAgICBjb25zdWx0YS5xdWVyeSggcXVlcnkgLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveHBpZXphLzppZFBpZXphJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZFBpZXphfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLCBub21icmUgYXMgbm9tYnJlTW9sZGUgZnJvbSBtb2xkZXMgd2hlcmUgZXN0YWRvID0gMSBhbmQgaWRfcGllemEgPSAnK2lkUGllemEsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVNb2xkZSAsIGlkUGllemEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0TW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTW9sZGUnICwgVmFyQ2hhciAsIG5vbWJyZU1vbGRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBtb2xkZXMgKCBub21icmUgLCBpZF9waWV6YSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlTW9sZGUgLCBAaWRQaWV6YSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRNb2xkZSAsIG5vbWJyZU1vbGRlICwgaWRQaWV6YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVNb2xkZScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNb2xkZScgLCBWYXJDaGFyICwgbm9tYnJlTW9sZGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1vbGRlJyAsIEludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtb2xkZXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlTW9sZGUgLFxyXG4gICAgICAgIGlkX3BpZXphID0gQGlkUGllemFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZE1vbGRlYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTW9sZGUgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTW9sZGUgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVNb2xkZScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1vbGRlJyAsIEludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtb2xkZXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRNb2xkZWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkT3BlcmFjaW9uLCBub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uXHJcbiAgICAgICAgZnJvbSBvcGVyYWNpb25lcyB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB2YXIge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwbS5pZCBhcyBpZFBhcmFkYU1hcXVpbmEsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hLCBwbS5pZF9hcmVhIGFzIGlkQXJlYSwgYS5ub21icmUgYXMgbm9tYnJlQXJlYVxyXG4gICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hIHBtXHJcblx0XHRqb2luIGFyZWFzIGEgb24gcG0uaWRfYXJlYT1hLmlkXHJcbiAgICAgICAgd2hlcmUgcG0uZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGUsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWUpe2NlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7Y2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hICggbm9tYnJlICwgdGlwbyAsIGlkX2FyZWEgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVBhcmFkYU1hcXVpbmEgLCBAdGlwb1BhcmFkYU1hcXVpbmEgLCBAaWRBcmVhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGFyYWRhIGRlIE1hcXVpbmEgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hICwgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGFyYWRhTWFxdWluYScgLCBJbnQgLCBpZFBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwYXJhZGFzX21hcXVpbmFcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgdGlwbyA9IEB0aXBvUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgaWRfYXJlYSA9IEBpZEFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBhcmFkYU1hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQYXJhZGEgZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUGFyYWRhTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBhcmFkYU1hcXVpbmEnICwgSW50ICwgaWRQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGFyYWRhTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BhcmFkYXMgZGUgTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gbmV3IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwLmlkIGFzIGlkUGllemEsIHAubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgcC5pZF9jbGllbnRlIGFzIGlkQ2xpZW50ZSAsIGMubm9tYnJlIGFzIG5vbWJyZUNsaWVudGUgLFxyXG4gICAgICAgIHAuaWRfdGlwb3NfbWF0ZXJpYWwgYXMgaWRUaXBvTWF0ZXJpYWwgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSBwaWV6YXMgcFxyXG4gICAgICAgIGpvaW4gY2xpZW50ZXMgYyBvbiBwLmlkX2NsaWVudGUgPSBjLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19tYXRlcmlhbCB0bSBvbiBwLmlkX3RpcG9zX21hdGVyaWFsID0gdG0uaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCgnL3htYXF1aW5hLzppZE1hcXVpbmEnLCBhc3luYyAocmVxLHJlcyk9PnsgLy8gISBMSVNUQURPIERFIFBJRVpBUyBTRUdVTiBNQVFVSU5BXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmF9ID0gcmVxLnBhcmFtc1xyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIHByb2Nlc29zIHByb1xyXG4gICAgICAgIG9uIHByby5pZF9waWV6YSA9IHAuaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDEgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH0gXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UGllemEnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBpZXphJyAsIFZhckNoYXIgLCBub21icmVQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCBpZENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGllemFzICggbm9tYnJlICwgaWRfY2xpZW50ZSAsIGlkX3RpcG9zX21hdGVyaWFsICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXMgKCBAbm9tYnJlUGllemEgLCBAaWRDbGllbnRlICwgQGlkVGlwb01hdGVyaWFsICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgaW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSAsIG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQaWV6YScgLCBWYXJDaGFyICwgbm9tYnJlUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgaWRDbGllbnRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwaWV6YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlUGllemEgLFxyXG4gICAgICAgIGlkX2NsaWVudGUgPSBAaWRDbGllbnRlICxcclxuICAgICAgICBpZF90aXBvc19tYXRlcmlhbCA9IEBpZFRpcG9NYXRlcmlhbFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGllemFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGllemEgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwaWV6YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQaWV6YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IE1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcbmNvbnN0IGNvbnZpZXJ0ZUhvcmEgPSAoIGhvcmEgKSA9PiB7XHJcbiAgICB2YXIgSG9ySW5pY2lvbk8gPSBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke2hvcmF9OjAwYClcclxuICAgIEhvckluaWNpb25PLnNldEhvdXJzKCBIb3JJbmljaW9uTy5nZXRIb3VycygpIC0gMyApXHJcbiAgICByZXR1cm4gSG9ySW5pY2lvbk9cclxufVxyXG5yb3V0ZXIucG9zdCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW5pbGxhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdlbGltaW5hUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29uc3VsdGEucXVlcnkoIGB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSAkeyBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSB9YFxyXG4gICAgICAgIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0VsaW1pbmFjaW9uIGV4aXRvc2EgIScgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCggJy9saXN0YXInLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVQcm9kdWNjaW9uICwgZmVjaGFIYXN0YVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNvbiAsIGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICxpZFRpcG9Qcm9jZXNvICwgaWRPcGVyYWNpb25cclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSBuZXcgVHJhbnNhY3Rpb24oY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiggYXN5bmMgZSA9PntcclxuICAgICAgICBpZiggZSApIHsgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9ICkgIH1cclxuICAgICAgICBjb25zdCBzcWxDb25zdWx0YSA9IGAgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICBzZWxlY3QgcGwuaWQgYXMgaWRQbGFuaWxsYSwgcGwuZmVfY2FyZ2EgYXMgZmVjaGFDYXJnYSwgcGwuZmVfcHJvZHVjY2lvbiBhcyBmZWNoYVByb2R1Y2Npb24sIHBsLmZlX2Z1bmRpY2lvbiBhcyBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICBwbC5ob3JhX2luaWNpbyBhcyBob3JhSW5pY2lvICwgcGwuaG9yYV9maW4gYXMgaG9yYUZpbiwgdG0uaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLCBtYXEuaWQgYXMgaWRNYXF1aW5hICxtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBwaWUuaWQgYXMgaWRQaWV6YSxcclxuICAgICAgICBwaWUubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgbW9sLmlkIGFzIGlkTW9sZGUsICBtb2wubm9tYnJlIGFzIG5vbWJyZU1vbGRlICwgdHAuaWQgYXMgaWRUaXBvUHJvY2VzbywgdHAubm9tYnJlIGFzIHRpcG9Qcm9jZXNvXHJcbiAgICAgICAgLCBwbC5pZF9wcm9jZXNvIGFzIGlkUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gcGxhbmlsbGFzX3Byb2R1Y2Npb24gcGxcclxuICAgICAgICBqb2luIG1vbGRlcyBtb2wgb24gcGwuaWRfbW9sZGUgPSBtb2wuaWRcclxuICAgICAgICBqb2luIHByb2Nlc29zIHAgb24gcGwuaWRfcHJvY2VzbyA9IHAuaWRcclxuICAgICAgICBqb2luIHBpZXphcyBwaWUgb24gcC5pZF9waWV6YSA9IHBpZS5pZFxyXG4gICAgICAgIGpvaW4gbWFxdWluYXMgbWFxIG9uIHAuaWRfbWFxdWluYSA9IG1hcS5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtYXEuaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcGwuZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCAgcGwuZmVfZnVuZGljaW9uIGJldHdlZW4gJyR7ZmVjaGFEZXNkZUZ1bmRpY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhRnVuZGljb259J1xyXG4gICAgICAgIGFuZCAgcGwuZmVfcHJvZHVjY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVQcm9kdWNjaW9ufScgYW5kICcke2ZlY2hhSGFzdGFQcm9kdWNjaW9ufSdcclxuICAgICAgICBhbmQgKCAkeyBpZE1hcXVpbmEgfSBpcyBudWxsICBvciBwLmlkX21hcXVpbmEgPSAgJHsgaWRNYXF1aW5hIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkUGllemEgfSBpcyBudWxsICBvciBwLmlkX3BpZXphID0gICR7IGlkUGllemEgfSApXHJcbiAgICAgICAgYW5kICggJHsgaWRNb2xkZSB9IGlzIG51bGwgIG9yIHBsLmlkX21vbGRlID0gICR7IGlkTW9sZGUgfSApXHJcbiAgICAgICAgYW5kICggJHsgaWRUaXBvUHJvY2VzbyB9IGlzIG51bGwgIG9yIHAuaWRfdGlwb3NfcHJvY2VzbyA9ICAkeyBpZFRpcG9Qcm9jZXNvIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkT3BlcmFjaW9uIH0gaXMgbnVsbCAgb3IgdG0uaWRfb3BlcmFjaW9uID0gICR7IGlkT3BlcmFjaW9uIH0gKSBgXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUmVjaGF6b3MgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhWm9uYXMgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUE0gPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIHZhciB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gPSBbXVxyXG4gICAgICAgIHZhciB2ZWNUcmFiYWphZG9yZXNcclxuICAgICAgICB2YXIgdmVjUmVjaGF6b3NcclxuICAgICAgICB2YXIgdmVjWm9uYXNcclxuICAgICAgICB2YXIgdmVjUE1cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBjb25zdWx0YVBsYW5pbGxhLnF1ZXJ5KCBzcWxDb25zdWx0YSApXHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldCkpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5mb3JFYWNoKCBwbGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGFuaWxsYSAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGEgOiBwbGEuaWRQbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhQ2FyZ2EgOiBwbGEuZmVjaGFDYXJnYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhUHJvZHVjY2lvbiA6IHBsYS5mZWNoYVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUZ1bmRpY2lvbiA6IHBsYS5mZWNoYUZ1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiBuZXcgTW9tZW50ICggcGxhLmhvcmFJbmljaW8gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCAgcGxhLmhvcmFGaW4gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRPcGVyYWNpb24gOiBwbGEuaWRPcGVyYWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1hcXVpbmEgOiBwbGEuaWRNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTWFxdWluYSA6IHBsYS5ub21icmVNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQaWV6YSA6IHBsYS5pZFBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGllemEgOiBwbGEubm9tYnJlUGllemEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1vbGRlIDogcGxhLmlkTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVNb2xkZSA6IHBsYS5ub21icmVNb2xkZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVGlwb1Byb2Nlc28gOiBwbGEuaWRUaXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9Qcm9jZXNvIDogcGxhLnRpcG9Qcm9jZXNvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQcm9jZXNvIDogcGxhLmlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24ucHVzaChwbGFuaWxsYSlcclxuICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goKHBsYSxpbmRleFBsYW5pbGxhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UGxhbmlsbGEgPT09IChyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0Lmxlbmd0aCAtIDEpKXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyArPSBgJHtwYXJzZUludChwbGEuaWRQbGFuaWxsYSl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYoIGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPT09ICcnICl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSA9IGBzZWxlY3QgdHhwLmlkIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSAsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLCB0dXIuZGVzY3JpcGNpb24gIGFzIHR1cm5vVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICB0eHAuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHR4cC5ob3JhX2ZpbiBhcyBob3JhRmluLCAgdHhwLnB6YV9wcm9kdWNpZGFzIGFzIHBpZXphc1Byb2R1Y2lkYXMgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmNhbG9yaWFzIGFzIGNhbG9yaWFzICwgdHhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCB0eHAuaWRfdHJhYmFqYWRvciBhcyBpZFRyYWJhamFkb3IgLCB0eHAuaWRfdHVybm8gYXMgaWRUdXJub1xyXG4gICAgICAgICAgICAgICAgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdHhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHRyYWJhamFkb3JlcyB0IG9uIHR4cC5pZF90cmFiYWphZG9yID0gdC5pZFxyXG4gICAgICAgICAgICAgICAgam9pbiB0dXJub3MgdHVyIG9uIHR4cC5pZF90dXJubyA9IHR1ci5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgdHhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCB0eHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSAgOyBgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFQTSA9IGAgc2VsZWN0IHBteHAuaWQgYXMgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhICwgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hICwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgcG14cC5ob3JhX2luY2lvIGFzIGhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgcG14cC5ob3JhX2ZpbiBhcyBob3JhRmluUGFyYWRhTWFxdWluYSAsIHBteHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYSAsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhIHBteHBcclxuICAgICAgICAgICAgICAgIGpvaW4gcGFyYWRhc19tYXF1aW5hIHBtIG9uIHBteHAuaWRfcGFyYWRhc19tYXF1aW5hID0gcG0uaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHBteHAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgYW5kIHBteHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWJhamFkb3Jlc1hwbGFuaWxsYSA9IGF3YWl0ICBjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgKyBzcWxDb25zdWx0YVBNIClcclxuICAgICAgICAgICAgICAgIGlmKHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzBdICYmIHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdKXtcclxuICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMgPSB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BNID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMV1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFRyYWJhamFkb3JlcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goKCB0ICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGkgPT09ICggdmVjVHJhYmFqYWRvcmVzLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkVHJhYmFqYWRvcmVzICs9IGAke3BhcnNlSW50KHQuaWRUcmFiYWphZG9yWHBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0YUlkVHJhYmFqYWRvcmVzID09PSAnJyApIHsgbGlzdGFJZFRyYWJhamFkb3JlcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVJlY2hhem9zID0gYCBzZWxlY3Qgcnh0eXAuaWQgYXMgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgLCBkLm5vbWJyZSBhcyBub21icmVSZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICByeHR5cC50aXBvIGFzIHRpcG9SZWNoYXpvICwgcnh0eXAuY2FudGlkYWQgYXMgY2FudGlkYWRSZWNoYXpvcyAsIHJ4dHlwLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCByeHR5cC5pZF9kZWZlY3RvIGFzIGlkRGVmZWN0b1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgcnh0eXBcclxuICAgICAgICAgICAgICAgICAgICBqb2luIGRlZmVjdG9zIGQgb24gcnh0eXAuaWRfZGVmZWN0byA9IGQuaWRcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZSByeHR5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgYW5kIHJ4dHlwLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRUcmFiYWphZG9yZXMgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2hhem9zID0gYXdhaXQgY29uc3VsdGFSZWNoYXpvcy5xdWVyeSggc3FsQ29uc3VsdGFSZWNoYXpvcyApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlY2hhem9zLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcyA9IHJlY2hhem9zLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFJlY2hhem9zID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggKCByZSAsICBpbmRleFJlY2hhem8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhSZWNoYXpvID09PSAoIHZlY1JlY2hhem9zLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFJlY2hhem9zICs9IGAke3BhcnNlSW50KCByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSApfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludChyZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFJlY2hhem9zID09PSAnJyApIHsgbGlzdGFJZFJlY2hhem9zID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxbENvbnN1bHRhWm9uYXMgPSBgIHNlbGVjdCB6eHJ5cC5pZCBhcyBpZFpvbmEgLCB6eHJ5cC5sZXRyYSBhcyBsZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5udW1lcm8gYXMgbnVtZXJvWm9uYSAsIHp4cnlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGFzIGlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHp4cnlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHp4cnlwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFJlY2hhem9zIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVyZW5jaWFFbk1pbnV0b3MgPSAoaG9yYUluaWNpbyxob3JhRmluKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoX2luaWNpbyA9IG5ldyBNb21lbnQgKCAgaG9yYUluaWNpbyAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhfZmluID0gbmV3IE1vbWVudCAoICBob3JhRmluICApLmZvcm1hdCAoIFwiSEg6bW1cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaERlc2RlID0gbmV3IERhdGUoYDE5OTUtMTItMTdUMDM6JHtoX2luaWNpb31gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhIYXN0YSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9maW59YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhfaW5pY2lvID09PSAnMDY6MDAnICYmIGhfZmluID09PSAnMDY6MDAnKXsgIHJldHVybiAyNCAqIDYwICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChoSGFzdGEtaERlc2RlKS8xMDAwIDwgMCl7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCArIDE0NDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgcmV0dXJuIChoSGFzdGEtaERlc2RlKS8xMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFab25hcyA9IGF3YWl0IGNvbnN1bHRhWm9uYXMucXVlcnkoIHNxbENvbnN1bHRhWm9uYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbGlzdGFab25hcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzID0gbGlzdGFab25hcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKCAocGwgLCBpbmRleFBsYW5pbGxhICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY09wZXJhcmlvcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BNLmZvckVhY2goIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCBwbS5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYWRhTWFxID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYTogcG0uaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmEgOiBwbS5pZFBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBhcmFkYU1hcXVpbmEgOiBwbS5ub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNkZVBhcmFkYU1hcXVpbmEgOiBuZXcgTW9tZW50ICggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXN0YVBhcmFkYU1hcXVpbmEgOiBuZXcgTW9tZW50ICggcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhY2lvblBhcmFkYU1hcXVpbmEgOiBkaXJlcmVuY2lhRW5NaW51dG9zKCBwbS5ob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsICBwbS5ob3JhRmluUGFyYWRhTWFxdWluYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvUGFyYWRhTWFxdWluYSA6IHBtLnRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5wdXNoKCBwYXJhZGFNYXEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMuZm9yRWFjaCggKHRyICwgaW5kZXhUcmFiYWphZG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQgKCB0ci5pZFBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhWHBsYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFRyYWJhamFkb3JYcGxhbmlsbGEgOiB0ci5pZFRyYWJhamFkb3JYcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRPcGVyYXJpbyA6IHRyLmlkVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUdXJubyA6IHRyLmlkVHVybm8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVRyYWJhamFkb3IgOiB0ci5ub21icmVUcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZSA6IHRyLmlkVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9UcmFiYWphZG9yIDogdHIuYXBlbGxpZG9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cm5vVHJhYmFqYWRvciA6IHRyLnR1cm5vVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHRyLmhvcmFJbmljaW8gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhRmluIDogbmV3IE1vbWVudCAoIHRyLmhvcmFGaW4gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNjaW9uIDogdHIucGllemFzUHJvZHVjaWRhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHRyLmNhbG9yaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem8gOiBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHRyYVhwbGEuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggcmUuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgOiByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6byA6IHJlLmlkRGVmZWN0byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVSZWNoYXpvIDogcmUubm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvIDogcmUudGlwb1JlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWRSZWNoYXpvIDogcmUuY2FudGlkYWRSZWNoYXpvcyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMuZm9yRWFjaCggem9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHpvbi5pZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHJlY2guaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9uYVhyZWNoYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkWm9uYSA6IHpvbi5pZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmEgOiB6b24ubGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybyA6IHpvbi5udW1lcm9ab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogem9uLmNhbnRpZGFkWm9uYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2gudmVjWm9uYXMucHVzaCggem9uYVhyZWNoYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhWHBsYS52ZWNSZWNoYXpvLnB1c2goIHJlY2ggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MucHVzaCggdHJhWHBsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgIC8vIGhvbGEgbXVuZG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggdmVjUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCggIClcclxuICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHZhciB7IGZlY2hhUHJvZHVjY2lvbiwgZmVjaGFGdW5kaWNpb24sIGlkVHVybm8sIEhvcmFJbmljaW9Qcm9kdWNjaW9uLFxyXG4gICAgICAgIEhvcmFGaW5Qcm9kdWNjaW9uICwgIGlkT3BlcmFjaW9uICwgaWRNYXF1aW5hICwgIGlkUGllemEgLCAgaWRNb2xkZSAsIGlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgIHZlY09wZXJhcmlvcyAsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhICwgaWRQbGFuaWxsYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zb2xlLmxvZyAoIGlkUGxhbmlsbGEgKVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9ICByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gIGF3YWl0IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0gPSBhd2FpdCBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luICggYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmICggIWVyciApIHtcclxuICAgICAgICAgICAgY29uc3QgbWV0b2RvVHJhbnNhY2Npb24gPSAgYXN5bmMgKCAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZFpvbmFzRGVsZXRlID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRSZWNoYXpvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkT3BlcmFyaW9zRGVsZXRlID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRQbURlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoICggcCAsIGlwICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmxlbmd0aCAtMSApICA9PT0gaXAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQbURlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCBwLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSApfSAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQbURlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCBwLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoICggKCBvICwgaW8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW9zRGVsZXRlICs9IGAgJHtwYXJzZUludCggby5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8udmVjUmVjaGF6by5mb3JFYWNoICggKCByICwgaXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem9zRGVsZXRlICs9IGAgJHtwYXJzZUludCAoIHIuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnZlY1pvbmFzLmZvckVhY2ggKCAoIHogLCBpeiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmFzRGVsZXRlICs9IGAgJHtwYXJzZUludCAoIHouaWRab25hICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZE9wZXJhcmlvc0RlbGV0ZSAhPT0gJycgKSB7IGlkT3BlcmFyaW9zRGVsZXRlID0gIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRPcGVyYXJpb3NEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGlkUmVjaGF6b3NEZWxldGUgIT09ICcnICkgeyBpZFJlY2hhem9zRGVsZXRlID0gIGlkUmVjaGF6b3NEZWxldGUudHJpbSAoICApLnN1YnN0cmluZyAoIDAgLCBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFpvbmFzRGVsZXRlICE9PSAnJyApIHsgaWRab25hc0RlbGV0ZSA9ICBpZFpvbmFzRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRab25hc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdERlbGV0ZSA9IGF3YWl0IGRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbS5xdWVyeSAoIGAgZGVsZXRlIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRab25hc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRab25hc0RlbGV0ZX0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRSZWNoYXpvc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRSZWNoYXpvc0RlbGV0ZSB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgd2hlcmUgaWQgaW4gKCAkeyBpZE9wZXJhcmlvc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRPcGVyYXJpb3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRQbURlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRQbURlbGV0ZSB9ICkgOyBgIClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3VsdERlbGV0ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2ZlX3Byb2R1Y2Npb24nICwgbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9mdW5kaWNpb24nICwgbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaWRfbW9sZGUnICwgbXNzcWwuSW50IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkUGxhbmlsbGEnICwgbXNzcWwuSW50IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnByZXBhcmUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZFByb2NlIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbiA9IEBmZV9wcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX2Z1bmRpY2lvbiA9IEBmZV9mdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW8gPSBAaG9yYV9pbmljaW8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW4gPSBAaG9yYV9maW4gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcHJvY2VzbyA9IEBpZFByb2NlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlID0gQGlkX21vbGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFBsYW5pbGxhYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbjogZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX2Z1bmRpY2lvbjogZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFGaW5Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFGaW5Qcm9kdWNjaW9ufTowMGApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggaWRUdXJubyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGEgOiBwYXJzZUludCAoIGlkUGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRDMSA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5leGVjdXRlICggZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdW5wcmVwYXJlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFcnJvciBJbnNlcmNpb25QbGFuaWxsYScgfSApLnN0YXR1cyAoIDQwMyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHRDMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoIG9wZXJhcmlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5jYWxvcmlhcyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHphX3Byb2R1Y2lkYXMgOiBwYXJzZUludCAoIG9wZXJhcmlvLnByb2R1Y2Npb24gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFGaW4gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUZpbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHJhYmFqYWRvcjogcGFyc2VJbnQgKCBvcGVyYXJpby5pZE9wZXJhcmlvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIG9wZXJhcmlvLmlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zOiBvcGVyYXJpby52ZWNSZWNoYXpvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoICggb3AgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2NhbG9yaWFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuY2Fsb3JpYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdwemFfcHJvZHVjaWRhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLnB6YV9wcm9kdWNpZGFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfaW5pY2lvJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9maW4nLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3RyYWJhamFkb3InICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2ggKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoYXpvWiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCByZS5jYW50aWRhZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfZGVmZWN0byA6IHBhcnNlSW50ICggcmUuaWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMgOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5wdXNoICggcmVjaGF6b1ogKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnN1bHRhID0gYGluc2VydCBpbnRvIHRyYWJhamFkb3JfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxvcmlhcyAsIHB6YV9wcm9kdWNpZGFzLCBpZF90dXJubyAsIGhvcmFfaW5pY2lvICwgaG9yYV9maW4gLCBpZF90cmFiYWphZG9yICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEBjYWxvcmlhcyAsIEBwemFfcHJvZHVjaWRhcyAsIEBpZF90dXJubyAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZF90cmFiYWphZG9yICwgQGlkX3BsYW5pbGxhICwgMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgPSAoIHNlbGVjdCBtYXgoIGlkICkgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLmZvckVhY2ggKCByZWNoYXpvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIHRpcG8gLCBpZF9kZWZlY3RvICwgaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgPSAoc2VsZWN0IG1heChpZCkgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNab25hc1hyZWNoYXpvID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2ggKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b28gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiBwYXJzZUludCAoIHpvbmEuY2FudGlkYWQgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmEgOiB6b25hLmxldHJhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8ucHVzaCggem9vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgIGluc2VydCBpbnRvIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyB6b25hLmNhbnRpZGFkIH0gLCAnJHsgem9uYS5sZXRyYSB9JyAsICR7IHpvbmEubnVtZXJvIH0gLCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCAxICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEucXVlcnkgKCBjb25zdWx0YSAsICggZXJyICwgcmVzdWx0ICkgPT4geyBpZiAoIGVyciApIHsgIGNhbGxiYWNrICggZXJyICkgfSBlbHNlIHsgY2FsbGJhY2sgKCAgKSB9IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApLnN0YXR1cyAoIDQwMyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUGFyYWRhc0RlTWFxdWluYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYU1BQyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5kZXNkZVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uZGVzZGVQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BhcmFkYXNfbWFxdWluYTogcGFyc2VJbnQoIHBtLmlkUGFyYWRhTWFxdWluYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQYXJhZGFzRGVNYXF1aW5hICwgKCBQTSAsIGNhbGxiYWNrUE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9pbmNpbycgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCAsIFBNLmlkX3BhcmFkYXNfbWFxdWluYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLnF1ZXJ5IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBAaG9yYV9pbmNpbyAsIEBob3JhX2ZpbiAsIEBpZF9wYXJhZGFzX21hcXVpbmEgLCBAaWRfcGxhbmlsbGEgLCAxIClgICwgKCBFUiAsIHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBFUiApIHsgY2FsbGJhY2tQTSggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNKCAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvUiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9SLm1lc3NhZ2UgfSApLnN0YXR1cyAoIDQwMyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciAoICdDb250ZW50LVR5cGUnICwgJ3RleHQvZXZlbnQtc3RyZWFtJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyAoIDIwMCApLmpzb24gKCB7IG1lbnNhamUgOiAnQWN0dWFsaXphY2lvbiBleGl0b3NhJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTogZS5tZXNzYWdlICwgbWVuc2FqZTI6ICdFcnJvciBjYXRjaCBGSU5BTCcgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0b2RvVHJhbnNhY2Npb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2VyciBjb21taXQnIClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IClcclxucm91dGVyLnBvc3QoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiwgIGlkT3BlcmFjaW9uLCBpZE1hcXVpbmEsICBpZFBpZXphLCAgaWRNb2xkZSwgaWRUaXBvUHJvY2VzbyxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIHZhciAgaWRQbGFuaWxsYVByb2R1Y2Npb25cclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICdjb25zdWx0YXNhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCxQcmVwYXJlZFN0YXRlbWVudCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24oIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbihhc3luYyBmdW5jdGlvbiAoIGVyciApICB7XHJcbiAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9wcm9kdWNjaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9mdW5kaWNpb24nLG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2hvcmFfaW5pY2lvJyxtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2ZpbicsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaWRfbW9sZGUnLG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnByZXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZFByb2NlIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRQcm9jZSA9IChzZWxlY3QgdG9wIDEgaWQgZnJvbSBwcm9jZXNvcyBwICB3aGVyZSBwLmlkX21hcXVpbmEgPSAkeyBpZE1hcXVpbmEgfSBhbmQgcC5pZF9waWV6YSA9ICR7IGlkUGllemEgfSBhbmQgaWRfdGlwb3NfcHJvY2VzbyA9ICR7IGlkVGlwb1Byb2Nlc28gfSBhbmQgZXN0YWRvID0gMSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0IGludG8gcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBmZV9jYXJnYSAsIGZlX3Byb2R1Y2Npb24gLCBmZV9mdW5kaWNpb24gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfcHJvY2VzbyAsIGlkX21vbGRlICAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIEdFVERBVEUoKSAsIEBmZV9wcm9kdWNjaW9uICwgQGZlX2Z1bmRpY2lvbiAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZFByb2NlICwgQGlkX21vbGRlICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbjogZmVjaGFQcm9kdWNjaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFJbmljaW9Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFJbmljaW9Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFGaW5Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFGaW5Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGU6IHBhcnNlSW50KCBpZE1vbGRlIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEMxXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSggZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJlcGFyZWQgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24udW5wcmVwYXJlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiggdW5wcmVwYXJlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOidFcnJvciBJbnNlcmNpb25QbGFuaWxsYScueWVsbG93IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRDMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbi5xdWVyeSggYHNlbGVjdCBtYXgoIGlkICkgYXMgaWRQbGFuaWxsYSBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uYCApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICYmICEgaXNOYU4oIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2goIG9wZXJhcmlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhczogcGFyc2VJbnQoIG9wZXJhcmlvLmNhbG9yaWFzICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHphX3Byb2R1Y2lkYXM6IHBhcnNlSW50KCBvcGVyYXJpby5wcm9kdWNjaW9uICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhSW5pY2lvICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFJbmljaW99OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHJhYmFqYWRvcjogcGFyc2VJbnQoIG9wZXJhcmlvLmlkT3BlcmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBwYXJzZUludCggaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIG9wZXJhcmlvLmlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zWHBsYW5pbGxhLnB1c2goIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgLCAoIHRyYWJhamFkb3IgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdwemFfcHJvZHVjaWRhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLnB6YV9wcm9kdWNpZGFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90dXJubycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3R1cm5vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3RyYWJhamFkb3InLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3RyYWJhamFkb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWJhamFkb3IudmVjUmVjaGF6b3MuZm9yRWFjaCggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoYXpvWiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50KCByZS5jYW50aWRhZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG86IHJlLnRpcG8gPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfZGVmZWN0bzogcGFyc2VJbnQoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IHJlLnZlY1pvbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5wdXNoICggcmVjaGF6b1ogKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxvcmlhcyAsIHB6YV9wcm9kdWNpZGFzLCBpZF90dXJubyAsIGhvcmFfaW5pY2lvICwgaG9yYV9maW4gLCBpZF90cmFiYWphZG9yICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLmZvckVhY2ggKCByZWNoYXpvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgaW5zZXJ0IGludG8gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHJlY2hhem8uY2FudGlkYWQgfSwgJHsgcmVjaGF6by50aXBvIH0gLCAkeyByZWNoYXpvLmlkX2RlZmVjdG8gfSAsIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNab25hc1hyZWNoYXpvID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2hhem8udmVjWm9uYXMuZm9yRWFjaCggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b28gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmE6IHpvbmEubGV0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm86IHBhcnNlSW50ICggem9uYS5udW1lcm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8ucHVzaCAoIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgIGluc2VydCBpbnRvIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIGxldHJhICwgbnVtZXJvICwgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyB6b25hLmNhbnRpZGFkIH0gLCAnJHsgem9uYS5sZXRyYSB9JyAsICR7IHpvbmEubnVtZXJvIH0gLCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCAxICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEucXVlcnkoIGNvbnN1bHRhLChlcnIscmVzdWx0KT0+eyBpZiggZXJyICkgeyAgY2FsbGJhY2soIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrKCkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnIubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5mb3JFYWNoICggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5kZXNkZVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uZGVzZGVQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uaGFzdGFQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmhhc3RhUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNEZU1hcXVpbmEucHVzaCAoIHBhcmFNQUMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQYXJhZGFzRGVNYXF1aW5hICwgKCBQTSAsIGNhbGxiYWNrUE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSA9ICBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wYXJhZGFzX21hcXVpbmEnICwgbXNzcWwuSW50LFBNLmlkX3BhcmFkYXNfbWFxdWluYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGhvcmFfaW5jaW8gLCBob3JhX2ZpbiAsIGlkX3BhcmFkYXNfbWFxdWluYSAsIGlkX3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBAaG9yYV9pbmNpbyAsIEBob3JhX2ZpbiAsIEBpZF9wYXJhZGFzX21hcXVpbmEgLCBAaWRfcGxhbmlsbGEgLCAxIClgLCggRVIscmVzdWx0UE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0gKCBFUiApIH0gZWxzZSB7IGNhbGxiYWNrUE0gKCAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCBlcnJvUiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTplcnJvUi5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCAnQ29udGVudC1UeXBlJywgJ3RleHQvZXZlbnQtc3RyZWFtJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdJbnNlcmNpb24gZXhpdG9yYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAvLyAhIEZJTiBGT1IgRUFDSFxyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8hIEZJTiAgSUlGXHJcbiAgICAgICAgICAgICAgICB9IC8vISBGSU4gREVMIFRSWVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgbWVuc2FqZTIgOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxucm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkVGlwb1Byb2Nlc28sIG5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gdGlwb3NfcHJvY2Vzb1xyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QoJy94bWFxdWluYXBpZXphdGlwbycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmEsaWRQaWV6YSxpZFRpcG9Qcm9jZXNvfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHByby5pZCBhcyBpZFByb2Nlc28sIHByby5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblByb2Nlc29cclxuICAgICAgICBmcm9tIHByb2Nlc29zIHByb1xyXG4gICAgICAgIHdoZXJlIHByby5lc3RhZG8gPSAxXHJcbiAgICAgICAgYW5kIHByby5pZF9waWV6YSA9ICR7aWRQaWV6YX1cclxuICAgICAgICBhbmQgcHJvLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX1cclxuICAgICAgICBhbmQgcHJvLmlkX3RpcG9zX3Byb2Nlc28gPSAke2lkVGlwb1Byb2Nlc299YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQgKCcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnc2VsZWN0UHJvY2Vzb3MnIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gLCBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb24gKVxyXG4gICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFuc2FjICkgPT4ge1xyXG4gICAgICAgIGlmICggZXJyb3JUcmFuc2FjICkge1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYW5zYWMubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHZlY1Byb2Nlc29zID0gWyAgXVxyXG4gICAgICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICBjb25zdCBteVJlcXVlc3RQaWV6YVhocyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCBwLmlkIGFzIGlkUHJvY2VzbyAsIHAuZGVzY3JpcGNpb24gYXMgZGVzY2lwY2lvblByb2Nlc28gLCBwLmlkX3BpZXphIGFzIGlkUGllemEgLFxyXG4gICAgICAgICAgICBwaWUubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgcC5pZF9tYXF1aW5hIGFzIGlkTWFxdWluYSAsIG1hcS5ub21icmUgYXMgbm9tYnJlTWFxdWluYSAsXHJcbiAgICAgICAgICAgIHAuaWRfdGlwb3NfcHJvY2VzbyBhcyBpZFRpcG9Qcm9jZXNvICwgdHAubm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvXHJcbiAgICAgICAgICAgIGZyb20gcHJvY2Vzb3MgcFxyXG4gICAgICAgICAgICBqb2luIHBpZXphcyBwaWUgb24gcC5pZF9waWV6YSA9IHBpZS5pZFxyXG4gICAgICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICAgICAgam9pbiB0aXBvc19wcm9jZXNvIHRwIG9uIHAuaWRfdGlwb3NfcHJvY2VzbyA9IHRwLmlkXHJcbiAgICAgICAgICAgIHdoZXJlIHAuZXN0YWRvID0gMWBcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgICAgICB2ZWNQcm9jZXNvcyA9IHJlc3BvbnNlLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgdmFyIGlkUHJvY2Vzb3MgPSAnJ1xyXG4gICAgICAgICAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5ICggdmVjUHJvY2Vzb3MgKSAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MuZm9yRWFjaCAoICggcCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUHJvY2Vzb3MgKz0gYCAke3AuaWRQcm9jZXNvfSAsYFxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGlkUHJvY2Vzb3MgPT09ICcnICkgeyBpZFByb2Nlc29zID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgaWRQcm9jZXNvcyA9IGlkUHJvY2Vzb3MudHJpbSAoICApLnN1YnN0cmluZyAoIDAgLCAgaWRQcm9jZXNvcy5sZW5ndGggLTIgKSB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIGlkUHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQaWV6YVhocyA9IGBzZWxlY3QgcHhoLmlkIGFzIGlkUGllemFzWGhzICwgcHhoLmNhbnRpZGFkIGFzIGNhbnRpZGFkUGllemFzWGhzICwgcHhoLmZlX2Rlc2RlIGFzIGRlc2RlUGllemFzWGhzICxcclxuICAgICAgICAgICAgICAgIHB4aC5mZV9oYXN0YSBhcyBoYXN0YVBpZXphc1hocyAsIHB4aC5pZF9wcm9jZXNvIGFzIGlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgZnJvbSBwaWV6YXNfeF9ob3JhIHB4aFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgcHhoLmlkX3Byb2Nlc28gaW4gKCR7aWRQcm9jZXNvc30pYFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWxycHpYaHMgPSBhd2FpdCBteVJlcXVlc3RQaWV6YVhocy5xdWVyeSAoIHF1ZXJ5UGllemFYaHMgKVxyXG4gICAgICAgICAgICAgICAgdmFyIHZlY1BpZXphc1hob3JhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgaWYgKCByZXN1bHJwelhocyApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIHZlY1BpZXphc1hob3JhIClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNQaWV6YXNYaG9yYSA9IHJlc3VscnB6WGhzLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggcmVzdWxycHpYaHMucmVjb3Jkc2V0IClcclxuICAgICAgICAgICAgICAgICAgICB2ZWNQcm9jZXNvcy5mb3JFYWNoICggKCBwICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC52ZWNQaWV6YXNYaG9yYSA9IFsgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNQaWV6YXNYaG9yYS5mb3JFYWNoICggKCBwelhocyAsIGluZGV4ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwYXJzZUludCAoIHAuaWRQcm9jZXNvICkgPT09IHBhcnNlSW50ICggcHpYaHMuaWRQcm9jZXNvICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcC52ZWNQaWV6YXNYaG9yYS5wdXNoICggcHpYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHZlY1Byb2Nlc29zIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbiAgICB9IClcclxufSApXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBkZXNjcmlwY2lvblByb2Nlc28gLCBpZFBpZXphICwgaWRNYXF1aW5hICwgaWRUaXBvc1Byb2Nlc28gLCB2ZWNQaWV6YXNYaG9yYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQcm9jZXNvJyApXHJcbiAgICAgICAgY29uc3QgIHsgVHJhbnNhY3Rpb24gLCBSZXF1ZXN0ICxEYXRlICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSAoICdhc3luYycgKVxyXG4gICAgICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhc2FjdGlvbnMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggZXJyb3JUcmFzYWN0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFzYWN0aW9ucy5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnZGVzY3JpcGNpb25Qcm9jZXNvJyAsIFZhckNoYXIgLCAgZGVzY3JpcGNpb25Qcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsICBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgIGlkTWFxdWluYSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRUaXBvc1Byb2Nlc28nICwgSW50ICwgIGlkVGlwb3NQcm9jZXNvIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGBpbnNlcnQgaW50byBwcm9jZXNvcyAoIGRlc2NyaXBjaW9uICwgaWRfcGllemEgLCBpZF9tYXF1aW5hICwgaWRfdGlwb3NfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAoIEBkZXNjcmlwY2lvblByb2Nlc28gLCBAaWRQaWV6YSAsIEBpZE1hcXVpbmEgLCBAaWRUaXBvc1Byb2Nlc28gLCAxICkgO1xyXG4gICAgICAgICAgICBkZWNsYXJlIEBpZFByb2Nlc28gaW50XHJcbiAgICAgICAgICAgIHNldCBAaWRQcm9jZXNvID0gKCBzZWxlY3QgdG9wIDEgbWF4ICggaWQgKSBmcm9tIHByb2Nlc29zIClcclxuICAgICAgICAgICAgc2VsZWN0IEBpZFByb2Nlc28gYXMgaWRQcm9jZXNvYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICB2YXIgaWRQcm9jZXNvXHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgICAgIGlkUHJvY2VzbyA9IHJlc3BvbnNlUHJvY2Vzb3MucmVjb3Jkc2V0c1swXVswXS5pZFByb2Nlc29cclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1BpZXphc1hob3JhICkgJiYgdmVjUGllemFzWGhvcmEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BpZXphc1hob3JhICwgKCBwaWV6YVhocyAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3RQaWVYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnY2FudGlkYWRQaWV6YXNYaHMnICwgSW50ICwgcGllemFYaHMuY2FudGlkYWRQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnZGVzZGVQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmRlc2RlUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2hhc3RhUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5oYXN0YVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgcGFyc2VJbnQgKCBpZFByb2Nlc28gKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGlleGhzID0gYGluc2VydCBpbnRvIHBpZXphc194X2hvcmEgKCBjYW50aWRhZCAsIGZlX2Rlc2RlICwgZmVfaGFzdGEgLCBpZF9wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICggQGNhbnRpZGFkUGllemFzWGhzICwgQGRlc2RlUGllemFzWGhzICwgQGhhc3RhUGllemFzWGhzICwgQGlkUHJvY2VzbyAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLnF1ZXJ5ICggcXVlcnlQaWV4aHMgLCAoIGVycm9yICwgcmVzdWx0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyb3JDYWxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yQ2FsYmFjayApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvckNhbGJhY2subWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQcm9jZXNvIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQcm9jZXNvICwgZGVzY3JpcGNpb25Qcm9jZXNvICwgaWRQaWV6YSAsIGlkTWFxdWluYSAsIGlkVGlwb3NQcm9jZXNvICwgdmVjUGllemFzWGhvcmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCAsRGF0ZSAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdFByb2Nlc28gPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgICAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYXNhY3Rpb25zICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGVycm9yVHJhc2FjdGlvbnMgKSB7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhc2FjdGlvbnMubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2Rlc2NyaXBjaW9uUHJvY2VzbycgLCBWYXJDaGFyICwgIGRlc2NyaXBjaW9uUHJvY2VzbyApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCAgaWRQaWV6YSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsICBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkVGlwb3NQcm9jZXNvJyAsIEludCAsICBpZFRpcG9zUHJvY2VzbyApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsICBpZFByb2Nlc28gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVByb2Nlc29zID0gYHVwZGF0ZSBwcm9jZXNvc1xyXG4gICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgZGVzY3JpcGNpb24gPSBAZGVzY3JpcGNpb25Qcm9jZXNvICxcclxuICAgICAgICAgICAgaWRfcGllemEgPSBAaWRQaWV6YSAsXHJcbiAgICAgICAgICAgIGlkX21hcXVpbmEgPSBAaWRNYXF1aW5hICxcclxuICAgICAgICAgICAgaWRfdGlwb3NfcHJvY2VzbyA9IEBpZFRpcG9zUHJvY2Vzb1xyXG4gICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFByb2Nlc28gOyBkZWxldGUgcGllemFzX3hfaG9yYSB3aGVyZSBpZF9wcm9jZXNvID0gQGlkUHJvY2Vzb2BcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZVByb2Nlc29zICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5ICggdmVjUGllemFzWGhvcmEgKSAmJiB2ZWNQaWV6YXNYaG9yYS5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGllemFzWGhvcmEgLCAoIHBpZXphWGhzICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZVhocyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdjYW50aWRhZFBpZXphc1hocycgLCBJbnQgLCBwaWV6YVhocy5jYW50aWRhZFBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdkZXNkZVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuZGVzZGVQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaGFzdGFQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmhhc3RhUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCBwYXJzZUludCAoIGlkUHJvY2VzbyApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQaWV4aHMgPSBgaW5zZXJ0IGludG8gcGllemFzX3hfaG9yYSAoIGNhbnRpZGFkICwgZmVfZGVzZGUgLCBmZV9oYXN0YSAsIGlkX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgKCBAY2FudGlkYWRQaWV6YXNYaHMgLCBAZGVzZGVQaWV6YXNYaHMgLCBAaGFzdGFQaWV6YXNYaHMgLCBAaWRQcm9jZXNvICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMucXVlcnkgKCBxdWVyeVBpZXhocyAsICggZXJyb3IgLCByZXN1bHQgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggZXJyb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnJvckNhbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3JDYWxiYWNrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yQ2FsYmFjay5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc28gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUHJvY2VzbyB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVQcm9jZXNvJyApXHJcbiAgICAgICAgY29uc3QgIHsgIFJlcXVlc3QgICwgSW50ICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdFByb2Nlc28gPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCAgaWRQcm9jZXNvIClcclxuICAgICAgICBjb25zdCBxdWVyeVByb2Nlc29zID0gYHVwZGF0ZSBwcm9jZXNvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFByb2Nlc28gYFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgaWYgKCByZXNwb25zZVByb2Nlc29zICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQcm9jZXNvcyBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggKVxyXG5cclxuXHJcbnJvdXRlci5nZXQgKCAnL2xpc3QnICwgYXN5bmMgICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdjb25zdWx0YUxpc3RhQ2xpZW50ZXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgaWQgYXMgaWRUaXBvTWF0ZXJpYWwgLCBub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRpcG9NYXRyaWFsJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hdGVyaWFsJyAsIFZhckNoYXIgLCBub21icmVNYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHRpcG9zX21hdGVyaWFsICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXMgKCBAbm9tYnJlTWF0ZXJpYWwgLCAxICkgIGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWF0ZXJpYWwgICwgIG5vbWJyZVRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlVGlwb01hdGVyaWFsJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRpcG9NYXRlcmlhbCcgLCBWYXJDaGFyICwgbm9tYnJlVGlwb01hdGVyaWFsICApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsICApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRpcG9zX21hdGVyaWFsXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkVGlwb01hdGVyaWFsYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBNYXRlcmlhbCBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldFRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgZWxpbWluYWRvICBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc28gZnJvbSB0aXBvc19wcm9jZXNvIHdoZXJlIGVzdGFkbyA9IDEgJyAsIChlLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLnBvc3QoJy8nLCBhc3luYyAoIHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphLCBpZE1hcXVpbmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KGBzZWxlY3QgdHAuaWQgYXMgaWRUaXBvUHJvY2VzbywgdHAubm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB0cFxyXG4gICAgam9pbiBwcm9jZXNvcyBwIG9uIHRwLmlkID0gcC5pZF90aXBvc19wcm9jZXNvIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfSBhbmQgcC5pZF9waWV6YSA9ICR7aWRQaWV6YX0gYW5kIHRwLmVzdGFkbyA9IDFgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9ICByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgdC5pZCBhcyBpZFRyYWJhamFkb3IsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuZl9uYWNpbWllbnRvIGFzIGZlY2hhTmFjaW1pZW50b1RyYWJhamFkb3IsIHQuZl9pbmdyZXNvIGFzIGZlY2hhSW5ncmVzb1RyYWJhamFkb3IsXHJcbiAgICAgICAgdC5pZF9wdWVzdG8gYXMgaWRQdWVzdG9UcmFiYWphZG9yLCBwLm5vbWJyZSBhcyBub21icmVQdWVzdG9cclxuICAgICAgICBmcm9tIHRyYWJhamFkb3JlcyB0XHJcbiAgICAgICAgam9pbiBwdWVzdG9zIHAgb24gdC5pZF9wdWVzdG89cC5pZFxyXG4gICAgICAgIHdoZXJlIHQuZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7Y2VycmFyQ29uZXhpb24oKX1cclxuICAgICAgICAgICAgZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7Y2VycmFyQ29uZXhpb24oKX1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgdC5pZCBhcyBpZFR1cm5vLCB0LmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uVHVybm8sdC5oc19pbmljaW8gYXMgaHNJbmljaW9UdXJubyAsdC5oc19maW4gYXMgaHNGaW5UdXJubyAgXHJcbiAgICAgICAgZnJvbSB0dXJub3MgdFxyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0bykgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cCA9IHJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5yZXF1aXJlKCcuLi9jb25leGlvbmVzL21vbmdvRGInKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCBQZXJmaWwgPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBhd2FpdCBVc3VhcmlvLmZpbmQoKGUsZGF0byk9PntcclxuICAgICAgICBlID8gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0Vycm9yIGVuIGVsIHJlcXVlc3QnKSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0bylcclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIuZ2V0KCcvcGVyZmlsZXMnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGxpc3RhUGVyZmlsZXMgPSBhd2FpdCBQZXJmaWwuZmluZCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obGlzdGFQZXJmaWxlcylcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7cGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgbmV3UGVyZmlsID0gbmV3IFBlcmZpbCh7cGVyZmlsfSlcclxuICAgICAgICBhd2FpdCBuZXdQZXJmaWwuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0d1YXJkYWRvIEV4aXRvc2FtZW50ZSAhJ30pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KVxyXG5cclxucm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzdWFyaW8uZmluZEJ5SWQoe19pZDpyZXEucGFyYW1zLmlkfSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICB2YXIge3VzZXJOYW1lLHBhc3N3b3JkLGVtYWlsLG5vbWJyZSxhcGVsbGlkbyxwZXJmaWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBwYXNzd29yZCA9IGF3YWl0IGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnN0IG5ld1VzZXI9IG5ldyBVc3VhcmlvKHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSlcclxuICAgICAgICBjb25zdCBkYXRvID0gYXdhaXQgbmV3VXNlci5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonVXN1YXJpbyBndWFyZGFkbyBleGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnB1dCgnLzppZCcsKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7aWR9ID0gcmVxLnBhcmFtc1xyXG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5XHJcbiAgICBpZihib2R5LnBhc3N3b3JkKXtib2R5LnBhc3N3b3JkID0gYmNyeXAuaGFzaFN5bmMoYm9keS5wYXNzd29yZCkgfVxyXG4gICAgVXN1YXJpby5maW5kQnlJZEFuZFVwZGF0ZSh7X2lkOmlkfSxib2R5LChlLGQpPT57XHJcbiAgICAgICAgZT8gcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmUubWVzc2FnZX0pIDpcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonTW9kaWZpY2FkbyBjb3JyZWN0YW1lbnRlICEnfSlcclxuICAgIH0pXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHQtbm9kZWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNzcWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==