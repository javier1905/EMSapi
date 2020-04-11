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
} // console.log(process.env.NODE_ENV)


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
servidor.use('/api/tiposMaquina', __webpack_require__(/*! ./rutasApi/tiposMaquina */ "./rutasApi/tiposMaquina.js"));
servidor.use('/api/plantas', __webpack_require__(/*! ./rutasApi/plantas */ "./rutasApi/plantas.js"));
servidor.use('/api/puestos', __webpack_require__(/*! ./rutasApi/puestos */ "./rutasApi/puestos.js")); //Settings

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
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

/***/ "./rutasApi/plantas.js":
/*!*****************************!*\
  !*** ./rutasApi/plantas.js ***!
  \*****************************/
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

  try {
    const conexion = await abrirConexionPOOL('listaPlantas');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select p.id as idPlanta , p.nombre as nombrePlanta , p.barrio as barrioPlanta ,
        p.cp as codigoPostalPlanta , p.calle as callePlanta , p.altura_calle as alturaCallePlanta
        from plantas p
        where p.estado = 1`;
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
    nombrePlanta,
    barrioPlanta,
    codigoPostalPlanta,
    callePlanta,
    alturaCallePlanta
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
    const conexion = await abrirConexionPOOL('insertPlanta');
    const myRequest = new Request(conexion);
    myRequest.input('nombrePlanta', VarChar, nombrePlanta);
    myRequest.input('barrioPlanta', VarChar, barrioPlanta);
    myRequest.input('codigoPostalPlanta', Int, codigoPostalPlanta);
    myRequest.input('callePlanta', VarChar, callePlanta);
    myRequest.input('alturaCallePlanta', Int, alturaCallePlanta);
    const query = `insert into plantas ( nombre , barrio , cp , calle , altura_calle , estado )
        values
        ( @nombrePlanta , @barrioPlanta , @codigoPostalPlanta , @callePlanta , @alturaCallePlanta , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Planta Insertada correctamente',
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
    idPlanta,
    nombrePlanta,
    barrioPlanta,
    codigoPostalPlanta,
    callePlanta,
    alturaCallePlanta
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
    const conexion = await abrirConexionPOOL('updatePlanta');
    const myRequest = new Request(conexion);
    myRequest.input('nombrePlanta', VarChar, nombrePlanta);
    myRequest.input('barrioPlanta', VarChar, barrioPlanta);
    myRequest.input('codigoPostalPlanta', Int, codigoPostalPlanta);
    myRequest.input('callePlanta', VarChar, callePlanta);
    myRequest.input('alturaCallePlanta', Int, alturaCallePlanta);
    myRequest.input('idPlanta', Int, idPlanta);
    const query = `update plantas
        set
        nombre = @nombrePlanta ,
        barrio = @barrioPlanta ,
        cp = @codigoPostalPlanta ,
        calle = @callePlanta ,
        altura_calle = alturaCallePlanta
        where id = @idPlanta`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Planta actualizada correctamente',
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
    idPlanta
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
    const conexion = await abrirConexionPOOL('deletePlanta');
    const myRequest = new Request(conexion);
    myRequest.input('idPlanta', Int, idPlanta);
    const query = `update plantas
        set
        estado = 0
        where id = @idPlanta`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Planta eliminada correctamente',
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

/***/ "./rutasApi/puestos.js":
/*!*****************************!*\
  !*** ./rutasApi/puestos.js ***!
  \*****************************/
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

  try {
    const conexion = await abrirConexionPOOL('listarPuestos');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select id as idPuesto , nombre as nombrePuesto from puestos where estado = 1`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombrePuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertPuesto');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombrePuesto', VarChar, nombrePuesto);
    const query = `insert into puestos ( nombre , estado )
        values
        ( @nombrePuesto , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Puesto insertado correctamente',
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
    idPuesto,
    nombrePuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('updatePuesto');

    const {
      Request,
      Int,
      Date,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombrePuesto', VarChar, nombrePuesto);
    myRequest.input('idPuesto', Int, idPuesto);
    const query = `update puestos
                                    set
                                    nombre = @nombrePuesto
                                    where id = @idPuesto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Puesto actualizado correctamente',
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
    idPuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deletePuesto');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idPuesto', Int, idPuesto);
    const query = `update puestos
                                    set
                                    estado = 0
                                    where id = @idPuesto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Puesto eliminado correctamente',
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
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
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
        t.f_nacimiento as nacimientoTrabajador, t.f_ingreso as ingresoTrabajador,
        t.id_puesto as idPuesto, p.nombre as nombrePuesto
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
router.post('/insert', async (req, res) => {
  const {
    nombreTrabajador,
    apellidoTrabajador,
    nacimientoTrabajador,
    ingresoTrabajador,
    idPuesto
  } = req.body;

  const Moment = __webpack_require__(/*! moment */ "moment");

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertTrabajador');

    const {
      Request,
      Int,
      Date,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTrabajador', VarChar, nombreTrabajador);
    myRequest.input('apellidoTrabajador', VarChar, apellidoTrabajador);
    myRequest.input('nacimientoTrabajador', Date, new Moment(nacimientoTrabajador));
    myRequest.input('ingresoTrabajador', Date, new Moment(ingresoTrabajador));
    myRequest.input('idPuesto', Int, idPuesto);
    const query = `set dateformat dmy ; insert into trabajadores ( nombre , apellido , f_nacimiento , f_ingreso , id_puesto , estado )
        values
        ( @nombreTrabajador , @apellidoTrabajador , @nacimientoTrabajador , @ingresoTrabajador , @idPuesto , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Trabajador insertado correctamente',
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
    idTrabajador,
    nombreTrabajador,
    apellidoTrabajador,
    nacimientoTrabajador,
    ingresoTrabajador,
    idPuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('updateTrabajador');

    const {
      Request,
      Int,
      Date,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTrabajador', VarChar, nombreTrabajador);
    myRequest.input('apellidoTrabajador', VarChar, apellidoTrabajador);
    myRequest.input('nacimientoTrabajador', Date, new Moment(nacimientoTrabajador));
    myRequest.input('ingresoTrabajador', Date, new Moment(ingresoTrabajador));
    myRequest.input('idPuesto', Int, idPuesto);
    myRequest.input('idTrabajador', Int, idTrabajador);
    const query = `update trabajadores
                                    set
                                    nombre = @nombreTrabajador ,
                                    apellido = @apellidoTrabajador ,
                                    f_nacimiento = @nacimientoTrabajador ,
                                    f_ingreso = @ingresoTrabajador ,
                                    id_puesto = @idPuesto
                                    where id = @idTrabajador`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Trabajador actualizado correctamente',
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
    idTrabajador
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deleteTrabajador');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idTrabajador', Int, idTrabajador);
    const query = `update trabajadores
                                    set
                                    estado = 0
                                    where id = @idTrabajador`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Trabajador eliminado correctamente',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJlYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvY2xpZW50ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvZGVmZWN0b3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbWFxdWluYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvbW9sZGVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BsYW50YXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvY2Vzb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHVlc3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc01hcXVpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3R1cm5vcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNzcWxcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VjcmV0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwicHJvY2VzcyIsIlVSSSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25leGlvbiIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJvbmNlIiwibG9nIiwicmVkIiwibXNzcWwiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInBvcnQiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiYXBwTmFtZSIsImVuYWJsZUFyaXRoQWJvcnQiLCJlbmNyeXB0IiwiY29ubmVjdGlvblRpbWVPdXQiLCJkcml2ZXIiLCJzdHJlYW0iLCJwb29sIiwibWF4IiwibWluIiwiaWRsZVRpbWVvdXRNaWxsaXMiLCJDb25leGlvblNRTCIsImFicmlyQ29uZXhpb24iLCJ1bmRlZmluZWQiLCJjZXJyYXJDb25leGlvbiIsImFicmlyQ29uZXhpb25QT09MIiwiY2VycmFyQ29uZXhpb25QT09MIiwidGhlbiIsIl9jb25uZWN0ZWQiLCJibHVlIiwiZ3JlZW4iLCJjbG9zZSIsImNvbmV4aW9uZXMiLCJuYW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmV3Q29uZXhpb24iLCJDb25uZWN0aW9uUG9vbCIsImFyZ3MiLCJQcm9taXNlIiwiYWxsIiwidmFsdWVzIiwibWFwIiwicGVyZmlsIiwiU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsImVudW0iLCJzZXQiLCJtb2RlbCIsInVzdWFyaW8iLCJ1c2VyTmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJub21icmUiLCJhcGVsbGlkbyIsImV4cHJlc3MiLCJjb3JzIiwibW9yZ2FuIiwic2Vydmlkb3IiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImdldCIsIm0iLCJlIiwieWVsbG93IiwiUm91dGVyIiwiand0IiwiQ09ORklHIiwicm91dGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJtZW5zYWplIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsImQiLCJiY3J5cHQiLCJVc3VhcmlvIiwicG9zdCIsIm5leHQiLCJmaW5kIiwiYm9keSIsInZlcmlmaWNhUGFzcyIsImNvbXBhcmVTeW5jIiwibWlVc3VhcmlvIiwic2lnbiIsImV4cGlyZXNJbiIsIlJlcXVlc3QiLCJteVJlcXVpcmVzIiwicmVzdWx0IiwicXVlcnkiLCJyZWNvcmRzZXQiLCJtZXNzYWdlIiwibm9tYnJlQXJlYSIsIlZhckNoYXIiLCJteVJlcXVlc3QiLCJpbnB1dCIsInB1dCIsImlkQXJlYSIsIkludCIsImNvbmV4aW9uMiIsIm15UmVxdWVzdDIiLCJwYXJzZUludCIsImlkQ2xpZW50ZSIsIm5vbWJyZUNsaWVudGUiLCJyYXpvblNvY2lhbENsaWVudGUiLCJjb25zdWx0YSIsImVyciIsImRhdG8iLCJub21icmVEZWZlY3RvIiwiaWRPcGVyYWNpb24iLCJpZERlZmVjdG8iLCJwYXJhbXMiLCJub21icmVNYXF1aW5hIiwiZGVzY3JpcGNpb25NYXF1aW5hIiwiaWRUaXBvTWFxdWluYSIsImlkUGxhbnRhIiwiaWRNYXF1aW5hIiwiaWRQaWV6YSIsIm5vbWJyZU1vbGRlIiwiaWRNb2xkZSIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJ0aXBvUGFyYWRhTWFxdWluYSIsIkJpdCIsImlkUGFyYWRhTWFxdWluYSIsIm5vbWJyZVBpZXphIiwiaWRUaXBvTWF0ZXJpYWwiLCJNb21lbnQiLCJjb252aWVydGVIb3JhIiwiaG9yYSIsIkhvckluaWNpb25PIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJpZFBsYW5pbGxhIiwiY29uZXhpb25BYmllcnRhIiwiZmVjaGFEZXNkZVByb2R1Y2Npb24iLCJmZWNoYUhhc3RhUHJvZHVjY2lvbiIsImZlY2hhRGVzZGVGdW5kaWNpb24iLCJmZWNoYUhhc3RhRnVuZGljb24iLCJpZFRpcG9Qcm9jZXNvIiwiVHJhbnNhY3Rpb24iLCJ0cmFuc2FjY2lvbiIsImJlZ2luIiwic3FsQ29uc3VsdGEiLCJjb25zdWx0YVBsYW5pbGxhIiwiY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEiLCJjb25zdWx0YVJlY2hhem9zIiwiY29uc3VsdGFab25hcyIsImNvbnN1bHRhUE0iLCJ2ZWNQbGFuaWxsYVByb2R1Y2Npb24iLCJ2ZWNUcmFiYWphZG9yZXMiLCJ2ZWNSZWNoYXpvcyIsInZlY1pvbmFzIiwidmVjUE0iLCJyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24iLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwicGxhIiwicGxhbmlsbGEiLCJmZWNoYUNhcmdhIiwiZmVjaGFQcm9kdWNjaW9uIiwiZmVjaGFGdW5kaWNpb24iLCJob3JhSW5pY2lvIiwiZm9ybWF0IiwiaG9yYUZpbiIsInRpcG9Qcm9jZXNvIiwiaWRQcm9jZXNvIiwicHVzaCIsImxpc3RhSWRQbGFuaWxsYXNQcm9kdWMiLCJpbmRleFBsYW5pbGxhIiwibGVuZ3RoIiwic3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEiLCJzcWxDb25zdWx0YVBNIiwidHJhYmFqYWRvcmVzWHBsYW5pbGxhIiwicmVjb3Jkc2V0cyIsImxpc3RhSWRUcmFiYWphZG9yZXMiLCJ0IiwiaSIsImlkVHJhYmFqYWRvclhwbGFuaWxsYSIsInNxbENvbnN1bHRhUmVjaGF6b3MiLCJyZWNoYXpvcyIsImxpc3RhSWRSZWNoYXpvcyIsInJlIiwiaW5kZXhSZWNoYXpvIiwiaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJzcWxDb25zdWx0YVpvbmFzIiwiZGlyZXJlbmNpYUVuTWludXRvcyIsImhfaW5pY2lvIiwiaF9maW4iLCJoRGVzZGUiLCJoSGFzdGEiLCJsaXN0YVpvbmFzIiwicGwiLCJ2ZWNPcGVyYXJpb3MiLCJ2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSIsInBtIiwicGFyYWRhTWFxIiwiaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhIiwiZGVzZGVQYXJhZGFNYXF1aW5hIiwiaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEiLCJoYXN0YVBhcmFkYU1hcXVpbmEiLCJob3JhRmluUGFyYWRhTWFxdWluYSIsImR1cmFjaW9uUGFyYWRhTWFxdWluYSIsInRyIiwiaW5kZXhUcmFiYWphZG9yIiwidHJhWHBsYSIsImlkT3BlcmFyaW8iLCJpZFRyYWJhamFkb3IiLCJpZFR1cm5vIiwibm9tYnJlVHJhYmFqYWRvciIsImFwZWxsaWRvVHJhYmFqYWRvciIsInR1cm5vVHJhYmFqYWRvciIsInByb2R1Y2Npb24iLCJwaWV6YXNQcm9kdWNpZGFzIiwiY2Fsb3JpYXMiLCJ2ZWNSZWNoYXpvIiwicmVjaCIsImlkUmVjaGF6byIsIm5vbWJyZVJlY2hhem8iLCJ0aXBvIiwidGlwb1JlY2hhem8iLCJjYW50aWRhZFJlY2hhem8iLCJjYW50aWRhZFJlY2hhem9zIiwiem9uIiwiaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhIiwiem9uYVhyZWNoYSIsImlkWm9uYSIsImxldHJhIiwibGV0cmFab25hIiwibnVtZXJvIiwibnVtZXJvWm9uYSIsImNhbnRpZGFkIiwiY2FudGlkYWRab25hIiwiY29tbWl0Iiwicm9sbGJhY2siLCJIb3JhSW5pY2lvUHJvZHVjY2lvbiIsIkhvcmFGaW5Qcm9kdWNjaW9uIiwiUHJlcGFyZWRTdGF0ZW1lbnQiLCJwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24iLCJkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0iLCJhc2luY3Jvbm8iLCJtZXRvZG9UcmFuc2FjY2lvbiIsImlkWm9uYXNEZWxldGUiLCJpZFJlY2hhem9zRGVsZXRlIiwiaWRPcGVyYXJpb3NEZWxldGUiLCJpZFBtRGVsZXRlIiwicCIsImlwIiwibyIsImlvIiwiciIsImlyIiwieiIsIml6IiwidHJpbSIsInN1YnN0cmluZyIsInJlc3VsdERlbGV0ZSIsIlRpbWUiLCJwcmVwYXJlIiwiZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24iLCJmZV9wcm9kdWNjaW9uIiwiZmVfZnVuZGljaW9uIiwiaG9yYV9pbmljaW8iLCJob3JhX2ZpbiIsImlkX3R1cm5vIiwiaWRfbW9sZGUiLCJyZXN1bHRDMSIsImV4ZWN1dGUiLCJ1bnByZXBhcmVkIiwidW5wcmVwYXJlIiwidmVjT3BlcmFyaW9zWHBsYW5pbGxhIiwib3BlcmFyaW8iLCJvcCIsInB6YV9wcm9kdWNpZGFzIiwiaWRfdHJhYmFqYWRvciIsImlkX3BsYW5pbGxhIiwiZWFjaFNlcmllcyIsInRyYWJhamFkb3IiLCJjYWxsYmFjayIsInBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSIsInZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSIsInJlY2hhem9aIiwiaWRfZGVmZWN0byIsInJlY2hhem8iLCJ2ZWNab25hc1hyZWNoYXpvIiwiem9uYSIsInpvbyIsInZlY1BhcmFkYXNEZU1hcXVpbmEiLCJwYXJhTUFDIiwiaWRfcGFyYWRhc19tYXF1aW5hIiwiUE0iLCJjYWxsYmFja1BNIiwiY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hIiwiRVIiLCJyZXN1bHRQTSIsImVycm9SIiwic2V0SGVhZGVyIiwibWVuc2FqZTIiLCJpZFBsYW5pbGxhUHJvZHVjY2lvbiIsImNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24iLCJpc05hTiIsInJlc3BvbnNlIiwibm9tYnJlUGxhbnRhIiwiYmFycmlvUGxhbnRhIiwiY29kaWdvUG9zdGFsUGxhbnRhIiwiY2FsbGVQbGFudGEiLCJhbHR1cmFDYWxsZVBsYW50YSIsIm15VHJhbnNhY3Rpb24iLCJlcnJvclRyYW5zYWMiLCJ2ZWNQcm9jZXNvcyIsIm15UmVxdWVzdFBpZXphWGhzIiwiaWRQcm9jZXNvcyIsInF1ZXJ5UGllemFYaHMiLCJyZXN1bHJwelhocyIsInZlY1BpZXphc1hob3JhIiwicHpYaHMiLCJpbmRleCIsImRlc2NyaXBjaW9uUHJvY2VzbyIsImlkVGlwb3NQcm9jZXNvIiwibXlSZXF1ZXN0UHJvY2VzbyIsImVycm9yVHJhc2FjdGlvbnMiLCJxdWVyeVByb2Nlc29zIiwicmVzcG9uc2VQcm9jZXNvcyIsInBpZXphWGhzIiwibXlSZXF1ZXN0UGllWGhzIiwiY2FudGlkYWRQaWV6YXNYaHMiLCJkZXNkZVBpZXphc1hocyIsImhhc3RhUGllemFzWGhzIiwicXVlcnlQaWV4aHMiLCJlcnJvckNhbGJhY2siLCJub21icmVQdWVzdG8iLCJpZFB1ZXN0byIsIm5vbWJyZVRpcG9NYXF1aW5hIiwibm9tYnJlTWF0ZXJpYWwiLCJub21icmVUaXBvTWF0ZXJpYWwiLCJuYWNpbWllbnRvVHJhYmFqYWRvciIsImluZ3Jlc29UcmFiYWphZG9yIiwiYmNyeXAiLCJQZXJmaWwiLCJzZW5kIiwibGlzdGFQZXJmaWxlcyIsIm5ld1BlcmZpbCIsInNhdmUiLCJmaW5kQnlJZCIsIl9pZCIsImlkIiwiaGFzaFN5bmMiLCJuZXdVc2VyIiwiZmluZEJ5SWRBbmRVcGRhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNB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Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZWNyZXQ6J2phdmllcjE5MDUnXHJcbn0iLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG5yZXF1aXJlKCdjb2xvcnMnKVxyXG59XHJcblxyXG52YXIgVVJJO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKXtcclxuICAgICBVUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG59XHJcbmVsc2V7XHJcbiAgICAgVVJJID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3Q6NTAwMDoyNzAxNy91c3Vhcmlvc0VNUydcclxufVxyXG5cclxubW9uZ29vc2UuY29ubmVjdChVUkkse3VzZU5ld1VybFBhcnNlcjp0cnVlLHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZX0pO1xyXG5cclxudmFyIGNvbmV4aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvbjtcclxuXHJcbmNvbmV4aW9uLm9uKCdlcnJvcicsY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsJ2Vycm9yIGRlIGNvbmV4aW9uJykpO1xyXG5cclxuY29uZXhpb24ub25jZSgnb3BlbicsKCk9PntcclxuICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICBjb25zb2xlIC5sb2coJ0NvbmVjdGFkbyBhIE1PTkdPREInLnJlZClcclxuICAgICB9IFxyXG4gICAgIGVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlIC5sb2coJ0NvbmVjdGFkbyBhIE1PTkdPREInKVxyXG4gICAgIH1cclxufSlcclxuIiwiY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7IHJlcXVpcmUoJ2NvbG9ycycpIH1cclxuXHJcbnZhciBVUklcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgVVJJID0ge1xyXG4gICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlVTRVJTUUwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBBU1NXT1JEU1FMLFxyXG4gICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQVRBQkFTRVNRTCxcclxuICAgICAgICBzZXJ2ZXI6cHJvY2Vzcy5lbnYuU0VSVkVSU1FMLFxyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcbmVsc2V7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogJ0RCamF2JywgLyogREJqYXYgZW1zREIgICovXHJcbiAgICAgICAgcGFzc3dvcmQ6ICdiZWxncmFubzQ1NScsXHJcbiAgICAgICAgZGF0YWJhc2U6ICdFTVNfREJfU1FMJyxcclxuICAgICAgICBwb3J0OjE0MzMsXHJcbiAgICAgICAgc2VydmVyOidERVNLVE9QLUcxSTA5N0MnLCAvKiBERVNLVE9QLUcxSTA5N0MgIFBDMjM2MCAqL1xyXG4gICAgICAgIG9wdGlvbnM6e1xyXG4gICAgICAgICAgICBhcHBOYW1lOidlbXMtbm9kZS1hcGknLFxyXG4gICAgICAgICAgICBlbmFibGVBcml0aEFib3J0OnRydWUsXHJcbiAgICAgICAgICAgIGVuY3J5cHQ6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgLFxyXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lT3V0OjE1MDAwMCxcclxuICAgICAgICBkcml2ZXI6J3RlZGlvdXMnLFxyXG4gICAgICAgIHN0cmVhbTpmYWxzZSxcclxuICAgICAgICBwb29sOntcclxuICAgICAgICAgICAgbWF4OjIwLFxyXG4gICAgICAgICAgICBtaW46MCxcclxuICAgICAgICAgICAgaWRsZVRpbWVvdXRNaWxsaXM6MzAwMDAsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgQ29uZXhpb25TUUwgPSB7IGFicmlyQ29uZXhpb246dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvbjp1bmRlZmluZWQsIGFicmlyQ29uZXhpb25QT09MOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb25QT09MOnVuZGVmaW5lZCB9XHJcbnZhciBjb25leGlvblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBtc3NxbC5jb25uZWN0KFVSSSlcclxuICAgIC50aGVuKHBvb2w9PntcclxuICAgICAgICBpZihwb29sLl9jb25uZWN0ZWQpe1xyXG4gICAgICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIEFCSUVSVEEnLmdyZWVuKVxyXG4gICAgICAgICAgICAgICAgY29uZXhpb24gPSBwb29sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGRlIENvbmV4aW9uJyxwb29sLl9jb25uZWN0ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgY29uZXhpb24uY2xvc2UoKVxyXG4gICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQ0VSUkFEQScuZ3JlZW4pXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbmV4aW9uZXMgPSB7fVxyXG5cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvblBPT0wgPSBhc3luYyBuYW1lID0+e1xyXG4gICBcclxuICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZXhpb25lcyxuYW1lKSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3Q29uZXhpb24gPSBuZXcgbXNzcWwuQ29ubmVjdGlvblBvb2woVVJJKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3Q29uZXhpb24uY2xvc2UuYmluZChuZXdDb25leGlvbilcclxuICAgICAgIFxyXG4gICAgICAgIG5ld0NvbmV4aW9uLmNsb3NlID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgICAgICAgICAgcmV0dXJuIGNsb3NlKC4uLmFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG5ld0NvbmV4aW9uLmNvbm5lY3QoKVxyXG4gICAgICAgIGNvbmV4aW9uZXNbbmFtZV0gPSBuZXdDb25leGlvblxyXG4gICAgICAgIHJldHVybiBjb25leGlvbmVzW25hbWVdXHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uUE9PTCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC52YWx1ZXMoY29uZXhpb25lcykubWFwKChwb29sKT0+e1xyXG4gICAgICAgIHJldHVybiBwb29sLmNsb3NlKClcclxuICAgIH0pKVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZXhpb25TUUwiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHBlcmZpbCA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWUsXHJcbiAgICAgICAgZW51bTpbJ0FkbWluJywnbml2ZWwtMScsJ25pdmVsLTInLCduaXZlbC0zJywnbml2ZWwtNCcsJ25pdmVsLTUnXVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgncGVyZmlsJyxwZXJmaWwpIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCB1c3VhcmlvID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcblxyXG4gICAgdXNlck5hbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtYWlsOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZVxyXG4gICAgfSxcclxuICAgIG5vbWJyZTp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBhcGVsbGlkbzp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgZW51bTpbJ0FkbWluJywnbml2ZWwtMScsJ25pdmVsLTInLCduaXZlbC0zJywnbml2ZWwtNCcsJ25pdmVsLTUnXVxyXG4gICAgfVxyXG59KVxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCd1c3VhcmlvJyx1c3VhcmlvKSIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgY29ycyA9IHJlcXVpcmUoJ2NvcnMnKVxyXG52YXIgbW9yZ2FuO1xyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgcmVxdWlyZSgnY29sb3JzJylcclxuICAgIG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbn1cclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcblxyXG5jb25zdCBzZXJ2aWRvciA9IGV4cHJlc3MoKVxyXG5zZXJ2aWRvci51c2UoY29ycygpKVxyXG5cclxuLy8gbWlkZGVsd2FyZVxyXG5cclxuc2Vydmlkb3IudXNlKGV4cHJlc3MuanNvbigpKVxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKVxyXG5cclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIHNlcnZpZG9yLnVzZShtb3JnYW4oJ2RldicpKVxyXG59XHJcblxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbWFxdWluYXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvbWFxdWluYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3VzdWFyaW9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9sb2d1ZW8nLHJlcXVpcmUoJy4vcnV0YXNBcGkvTG9ndWVvJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRlbnRpZmljYXNpb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvQXV0ZW50aWZpY2FzaW9uJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9waWV6YXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGllemFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tb2xkZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvbW9sZGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9kZWZlY3RvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9kZWZlY3RvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvb3BlcmFjaW9uZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvb3BlcmFjaW9uZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3Byb2Nlc29zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3Byb2Nlc29zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90dXJub3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHVybm9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wYXJhZGFzTWFxdWluYScscmVxdWlyZSgnLi9ydXRhc0FwaS9wYXJhZGFzTWFxdWluYScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHJhYmFqYWRvcmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RyYWJhamFkb3JlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc1Byb2Nlc28nLHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NQcm9jZXNvJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9jbGllbnRlcycsIHJlcXVpcmUoICcuL3J1dGFzQXBpL2NsaWVudGVzJyApIClcclxuc2Vydmlkb3IudXNlICgnL2FwaS90aXBvc01hdGVyaWFsJywgcmVxdWlyZSAoICcuL3J1dGFzQXBpL3RpcG9zTWF0ZXJpYWwnICkgKVxyXG5zZXJ2aWRvci51c2UgKCcvYXBpL2FyZWFzJywgcmVxdWlyZSAoICcuL3J1dGFzQXBpL2FyZWFzJyApIClcclxuc2Vydmlkb3IudXNlICggJy9hcGkvdGlwb3NNYXF1aW5hJyAsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS90aXBvc01hcXVpbmEnICkpXHJcbnNlcnZpZG9yLnVzZSAoICcvYXBpL3BsYW50YXMnICwgcmVxdWlyZSAoICcuL3J1dGFzQXBpL3BsYW50YXMnICkpXHJcbnNlcnZpZG9yLnVzZSAoICcvYXBpL3B1ZXN0b3MnICwgcmVxdWlyZSAoICcuL3J1dGFzQXBpL3B1ZXN0b3MnICkgKVxyXG5cclxuLy9TZXR0aW5nc1xyXG5zZXJ2aWRvci5zZXQoJ3BvcnQnLHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwobSxlKT0+e1xyXG4gICAgaWYoZSl7Y29uc29sZS5sb2coZSl9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pIiwiY29uc3QgUm91dGVyID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IENPTkZJRyA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXI9Um91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PntcclxuXHJcbiAgICBpZighcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J05vIGVudmlvIGVsIFRva2VuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xyXG4gICAgICAgIGp3dC52ZXJpZnkodG9rZW4sQ09ORklHLnNlY3JldCwoZSxkKT0+e1xyXG4gICAgICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubmFtZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPXJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uL0NPTkZJRycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyxuZXh0KT0+e1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kKHt1c2VyTmFtZTpyZXEuYm9keS51c2VyTmFtZX0pXHJcbiAgICAgICAgaWYoIXVzZXJbMF0pe1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonVXN1YXJpbyBJbmV4aXN0ZW50ZSAhJ30pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhUGFzcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlU3luYyhyZXEuYm9keS5wYXNzd29yZCx1c2VyWzBdLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICBpZighdmVyaWZpY2FQYXNzKXtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidQYXNzd29yZCBJbmNvcnJlY3RhJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pVXN1YXJpbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTp1c2VyWzBdLnVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXJbMF0uZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOnVzZXJbMF0ubm9tYnJlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvOnVzZXJbMF0uYXBlbGxpZG8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGVyZmlsOnVzZXJbMF0ucGVyZmlsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBqd3Quc2lnbihtaVVzdWFyaW8sc2VjcmV0LHtleHBpcmVzSW46MTQ0MDB9LChlLHRva2VuKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOidFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJ30pOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt0b2tlbn0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe2V9KTtcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFBcmVhcycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gbmV3IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVpcmVzID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1aXJlcy5xdWVyeSAoXHJcbiAgICAgICAgICAgIGBzZWxlY3QgaWQgYXMgaWRBcmVhICwgbm9tYnJlIGFzIG5vbWJyZUFyZWFcclxuICAgICAgICAgICAgZnJvbSBhcmVhc1xyXG4gICAgICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0QXJlYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVBcmVhJyAsIFZhckNoYXIgLCBub21icmVBcmVhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBhcmVhcyAoIG5vbWJyZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlQXJlYSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0FyZWEgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZEFyZWEgLCBub21icmVBcmVhICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVBcmVhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUFyZWEnICwgVmFyQ2hhciAsIG5vbWJyZUFyZWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZEFyZWEnICwgSW50ICwgaWRBcmVhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgYXJlYXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlQXJlYVxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkQXJlYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0FyZWEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZUFyZWEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGFyZWFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkQXJlYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0FyZWEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdjb25zdWx0YUNsaWVudGVzJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHNlbGVjdCBjLmlkIGFzIGlkQ2xpZW50ZSAsIGMubm9tYnJlIGFzIG5vbWJyZUNsaWVudGUgLCBjLnJhem9uX3NvY2lhbCBhcyByYXpvblNvY2lhbENsaWVudGVcclxuICAgIGZyb20gY2xpZW50ZXMgY1xyXG4gICAgd2hlcmUgYy5lc3RhZG8gPSAxYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgICAgICBjb25zdCBjb25leGlvbjIgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVDbGllbnRlJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0MiA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24yICApXHJcbiAgICAgICAgbXlSZXF1ZXN0Mi5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgcGFyc2VJbnQgKCByZXEuYm9keS5pZENsaWVudGUgKSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGNsaWVudGVzIHNldCBlc3RhZG8gPSAwIHdoZXJlIGlkID0gQGlkQ2xpZW50ZWBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QyLnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdDbGllbnRlIEVsaW1pbmFkbyBDb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoICByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUNsaWVudGUgLCAgcmF6b25Tb2NpYWxDbGllbnRlICwgaWRDbGllbnRlIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVDbGllbnRlJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCAgbm9tYnJlQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAncmF6b25Tb2NpYWxDbGllbnRlJyAsIFZhckNoYXIgLCAgcmF6b25Tb2NpYWxDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZENsaWVudGUnICwgSW50ICwgIGlkQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGAgdXBkYXRlIGNsaWVudGVzXHJcbiAgICBzZXRcclxuICAgIG5vbWJyZSA9IEBub21icmVDbGllbnRlICxcclxuICAgIHJhem9uX3NvY2lhbCA9IEByYXpvblNvY2lhbENsaWVudGVcclxuICAgIHdoZXJlIGlkID0gQGlkQ2xpZW50ZWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdDbGllbnRlIEFjdHVhbGl6YWRvIENvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCAgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUNsaWVudGUgLCAgcmF6b25Tb2NpYWxDbGllbnRlICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0Q2xpZW50ZScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCAgY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUNsaWVudGUnICwgVmFyQ2hhciAsIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgcmF6b25Tb2NpYWxDbGllbnRlIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGNsaWVudGVzICggbm9tYnJlICwgcmF6b25fc29jaWFsICwgZXN0YWRvICApIHZhbHVlcyAgKCBAbm9tYnJlQ2xpZW50ZSAsIEByYXpvblNvY2lhbENsaWVudGUgLCAxIClgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGQuaWQgYXMgaWREZWZlY3RvLCBkLm5vbWJyZSBhcyBub21icmVEZWZlY3RvLCBkLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbixvLm5vbWJyZSBhcyBub21icmVPcGVyYWNpb24gZnJvbSBkZWZlY3RvcyBkIGpvaW4gb3BlcmFjaW9uZXMgbyBvbiBkLmlkX29wZXJhY2lvbj1vLmlkIHdoZXJlIGQuZXN0YWRvID0gMScsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZURlZmVjdG8gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnREZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZURlZmVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZURlZmVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gZGVmZWN0b3MgKCBub21icmUgLCBpZF9vcGVyYWNpb24gLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZURlZmVjdG8gLCBAaWRPcGVyYWNpb24gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWREZWZlY3RvICwgbm9tYnJlRGVmZWN0byAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZURlZmVjdG8nIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlRGVmZWN0bycgLCBWYXJDaGFyICwgbm9tYnJlRGVmZWN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWREZWZlY3RvJyAsIEludCAsIGlkRGVmZWN0byApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGRlZmVjdG9zXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZURlZmVjdG8gLFxyXG4gICAgICAgIGlkX29wZXJhY2lvbiA9IEBpZE9wZXJhY2lvblxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkRGVmZWN0b2BcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0RlZmVjdG8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkRGVmZWN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZURlZmVjdG8nIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWREZWZlY3RvJyAsIEludCAsIGlkRGVmZWN0byApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGRlZmVjdG9zXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkRGVmZWN0b2BcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0RlZmVjdG8gZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hICwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYSAsIG0uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25NYXF1aW5hICxcclxuICAgIG0uaWRfdGlwb3NfbWFxdWluYSBhcyBpZFRpcG9NYXF1aW5hICwgdG0ubm9tYnJlIGFzIG5vbWJyZVRpcG9NYXF1aW5hICwgbS5pZF9wbGFudGEgYXMgaWRQbGFudGEgLCBwLm5vbWJyZSBhcyBub21icmVQbGFudGFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG0uaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICBqb2luIHBsYW50YXMgcCBvbiBtLmlkX3BsYW50YSA9IHAuaWRcclxuICAgIHdoZXJlIG0uZXN0YWRvID0gMWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94b3BlcmFjaW9uLzppZE9wZXJhY2lvbicsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICBjb25zdCB7aWRPcGVyYWNpb259ID0gcmVxLnBhcmFtc1xyXG4gIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICBjb25zdWx0YS5xdWVyeShcclxuICAgIGBzZWxlY3QgbS5pZCBhcyBpZE1hcXVpbmEsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmFcclxuICAgIGZyb20gbWFxdWluYXMgbVxyXG4gICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG0uaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDEgYW5kIHRtLmlkX29wZXJhY2lvbiA9ICR7aWRPcGVyYWNpb259YCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICBjb25zdCB7IG5vbWJyZU1hcXVpbmEgLCBkZXNjcmlwY2lvbk1hcXVpbmEgLCBpZFRpcG9NYXF1aW5hICwgaWRQbGFudGEgfSA9IHJlcS5ib2R5XHJcbiAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRNYXF1aW5hJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVNYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdkZXNjcmlwY2lvbk1hcXVpbmEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBtYXF1aW5hcyAoIG5vbWJyZSAsIGRlc2NyaXBjaW9uICwgaWRfdGlwb3NfbWFxdWluYSAsIGlkX3BsYW50YSAsIGVzdGFkbyApXHJcbiAgICB2YWx1ZXNcclxuICAgICggQG5vbWJyZU1hcXVpbmEgLCBAZGVzY3JpcGNpb25NYXF1aW5hICwgQGlkVGlwb01hcXVpbmEgLCBAaWRQbGFudGEgLCAxIClgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTWFxdWluYSBJbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgY29uc3QgeyBpZE1hcXVpbmEgLCBub21icmVNYXF1aW5hICwgZGVzY3JpcGNpb25NYXF1aW5hICwgaWRUaXBvTWFxdWluYSAsIGlkUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlTWFxdWluYScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnZGVzY3JpcGNpb25NYXF1aW5hJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbk1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQbGFudGEnICwgSW50ICwgaWRQbGFudGEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG1hcXVpbmFzXHJcbiAgICBzZXRcclxuICAgIG5vbWJyZSA9IEBub21icmVNYXF1aW5hICxcclxuICAgIGRlc2NyaXBjaW9uID0gQGRlc2NyaXBjaW9uTWFxdWluYSAsXHJcbiAgICBpZF90aXBvc19tYXF1aW5hID0gQGlkVGlwb01hcXVpbmEgLFxyXG4gICAgaWRfcGxhbnRhID0gQGlkUGxhbnRhXHJcbiAgICB3aGVyZSBpZCA9IEBpZE1hcXVpbmFgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgIH1cclxuICB9XHJcbiAgY2F0Y2ggKCBlICkge1xyXG4gICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgY29uc3QgeyBpZE1hcXVpbmEgfSA9IHJlcS5ib2R5XHJcbiAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZU1hcXVpbmEnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG1hcXVpbmFzXHJcbiAgICBzZXRcclxuICAgIGVzdGFkbyA9IDBcclxuICAgIHdoZXJlIGlkID0gQGlkTWFxdWluYWBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNYXF1aW5hIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgIH1cclxuICB9XHJcbiAgY2F0Y2ggKCBlICkge1xyXG4gICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCBtLmlkIGFzIGlkTW9sZGUgLCBtLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIG0uaWRfcGllemEgYXMgaWRQaWV6YSAsIHAubm9tYnJlIGFzIG5vbWJyZVBpZXphXHJcbiAgICBmcm9tIG1vbGRlcyBtXHJcbiAgICBqb2luIHBpZXphcyBwIG9uIG0uaWRfcGllemEgPSBwLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgXHJcbiAgICBjb25zdWx0YS5xdWVyeSggcXVlcnkgLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveHBpZXphLzppZFBpZXphJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZFBpZXphfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZE1vbGRlLCBub21icmUgYXMgbm9tYnJlTW9sZGUgZnJvbSBtb2xkZXMgd2hlcmUgZXN0YWRvID0gMSBhbmQgaWRfcGllemEgPSAnK2lkUGllemEsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVNb2xkZSAsIGlkUGllemEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0TW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTW9sZGUnICwgVmFyQ2hhciAsIG5vbWJyZU1vbGRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBtb2xkZXMgKCBub21icmUgLCBpZF9waWV6YSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlTW9sZGUgLCBAaWRQaWV6YSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRNb2xkZSAsIG5vbWJyZU1vbGRlICwgaWRQaWV6YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVNb2xkZScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNb2xkZScgLCBWYXJDaGFyICwgbm9tYnJlTW9sZGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1vbGRlJyAsIEludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtb2xkZXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlTW9sZGUgLFxyXG4gICAgICAgIGlkX3BpZXphID0gQGlkUGllemFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZE1vbGRlYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTW9sZGUgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTW9sZGUgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVNb2xkZScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1vbGRlJyAsIEludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtb2xkZXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRNb2xkZWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkT3BlcmFjaW9uLCBub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uXHJcbiAgICAgICAgZnJvbSBvcGVyYWNpb25lcyB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB2YXIge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwbS5pZCBhcyBpZFBhcmFkYU1hcXVpbmEsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hLCBwbS5pZF9hcmVhIGFzIGlkQXJlYSwgYS5ub21icmUgYXMgbm9tYnJlQXJlYVxyXG4gICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hIHBtXHJcblx0XHRqb2luIGFyZWFzIGEgb24gcG0uaWRfYXJlYT1hLmlkXHJcbiAgICAgICAgd2hlcmUgcG0uZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGUsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWUpe2NlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7Y2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hICggbm9tYnJlICwgdGlwbyAsIGlkX2FyZWEgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVBhcmFkYU1hcXVpbmEgLCBAdGlwb1BhcmFkYU1hcXVpbmEgLCBAaWRBcmVhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGFyYWRhIGRlIE1hcXVpbmEgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hICwgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGFyYWRhTWFxdWluYScgLCBJbnQgLCBpZFBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwYXJhZGFzX21hcXVpbmFcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgdGlwbyA9IEB0aXBvUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgaWRfYXJlYSA9IEBpZEFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBhcmFkYU1hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQYXJhZGEgZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUGFyYWRhTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBhcmFkYU1hcXVpbmEnICwgSW50ICwgaWRQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGFyYWRhTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BhcmFkYXMgZGUgTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gbmV3IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwLmlkIGFzIGlkUGllemEsIHAubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgcC5pZF9jbGllbnRlIGFzIGlkQ2xpZW50ZSAsIGMubm9tYnJlIGFzIG5vbWJyZUNsaWVudGUgLFxyXG4gICAgICAgIHAuaWRfdGlwb3NfbWF0ZXJpYWwgYXMgaWRUaXBvTWF0ZXJpYWwgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSBwaWV6YXMgcFxyXG4gICAgICAgIGpvaW4gY2xpZW50ZXMgYyBvbiBwLmlkX2NsaWVudGUgPSBjLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19tYXRlcmlhbCB0bSBvbiBwLmlkX3RpcG9zX21hdGVyaWFsID0gdG0uaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCgnL3htYXF1aW5hLzppZE1hcXVpbmEnLCBhc3luYyAocmVxLHJlcyk9PnsgLy8gISBMSVNUQURPIERFIFBJRVpBUyBTRUdVTiBNQVFVSU5BXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmF9ID0gcmVxLnBhcmFtc1xyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIHByb2Nlc29zIHByb1xyXG4gICAgICAgIG9uIHByby5pZF9waWV6YSA9IHAuaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDEgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH0gXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwaWV6YXMgKCBub21icmUgLCBpZF9jbGllbnRlICwgaWRfdGlwb3NfbWF0ZXJpYWwgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlcyAoIEBub21icmVQaWV6YSAsIEBpZENsaWVudGUgLCBAaWRUaXBvTWF0ZXJpYWwgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBpbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphICwgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwaWV6YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQaWV6YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IE1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcbmNvbnN0IGNvbnZpZXJ0ZUhvcmEgPSAoIGhvcmEgKSA9PiB7XHJcbiAgICB2YXIgSG9ySW5pY2lvbk8gPSBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke2hvcmF9OjAwYClcclxuICAgIEhvckluaWNpb25PLnNldEhvdXJzKCBIb3JJbmljaW9uTy5nZXRIb3VycygpIC0gMyApXHJcbiAgICByZXR1cm4gSG9ySW5pY2lvbk9cclxufVxyXG5yb3V0ZXIucG9zdCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW5pbGxhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdlbGltaW5hUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29uc3VsdGEucXVlcnkoIGB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSAkeyBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSB9YFxyXG4gICAgICAgIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0VsaW1pbmFjaW9uIGV4aXRvc2EgIScgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCggJy9saXN0YXInLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVQcm9kdWNjaW9uICwgZmVjaGFIYXN0YVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNvbiAsIGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICxpZFRpcG9Qcm9jZXNvICwgaWRPcGVyYWNpb25cclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSBuZXcgVHJhbnNhY3Rpb24oY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbiggYXN5bmMgZSA9PntcclxuICAgICAgICBpZiggZSApIHsgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSB9ICkgIH1cclxuICAgICAgICBjb25zdCBzcWxDb25zdWx0YSA9IGAgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICBzZWxlY3QgcGwuaWQgYXMgaWRQbGFuaWxsYSwgcGwuZmVfY2FyZ2EgYXMgZmVjaGFDYXJnYSwgcGwuZmVfcHJvZHVjY2lvbiBhcyBmZWNoYVByb2R1Y2Npb24sIHBsLmZlX2Z1bmRpY2lvbiBhcyBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICBwbC5ob3JhX2luaWNpbyBhcyBob3JhSW5pY2lvICwgcGwuaG9yYV9maW4gYXMgaG9yYUZpbiwgdG0uaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLCBtYXEuaWQgYXMgaWRNYXF1aW5hICxtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBwaWUuaWQgYXMgaWRQaWV6YSxcclxuICAgICAgICBwaWUubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgbW9sLmlkIGFzIGlkTW9sZGUsICBtb2wubm9tYnJlIGFzIG5vbWJyZU1vbGRlICwgdHAuaWQgYXMgaWRUaXBvUHJvY2VzbywgdHAubm9tYnJlIGFzIHRpcG9Qcm9jZXNvXHJcbiAgICAgICAgLCBwbC5pZF9wcm9jZXNvIGFzIGlkUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gcGxhbmlsbGFzX3Byb2R1Y2Npb24gcGxcclxuICAgICAgICBqb2luIG1vbGRlcyBtb2wgb24gcGwuaWRfbW9sZGUgPSBtb2wuaWRcclxuICAgICAgICBqb2luIHByb2Nlc29zIHAgb24gcGwuaWRfcHJvY2VzbyA9IHAuaWRcclxuICAgICAgICBqb2luIHBpZXphcyBwaWUgb24gcC5pZF9waWV6YSA9IHBpZS5pZFxyXG4gICAgICAgIGpvaW4gbWFxdWluYXMgbWFxIG9uIHAuaWRfbWFxdWluYSA9IG1hcS5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtYXEuaWRfdGlwb3NfbWFxdWluYSA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcGwuZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCAgcGwuZmVfZnVuZGljaW9uIGJldHdlZW4gJyR7ZmVjaGFEZXNkZUZ1bmRpY2lvbn0nIGFuZCAnJHtmZWNoYUhhc3RhRnVuZGljb259J1xyXG4gICAgICAgIGFuZCAgcGwuZmVfcHJvZHVjY2lvbiBiZXR3ZWVuICcke2ZlY2hhRGVzZGVQcm9kdWNjaW9ufScgYW5kICcke2ZlY2hhSGFzdGFQcm9kdWNjaW9ufSdcclxuICAgICAgICBhbmQgKCAkeyBpZE1hcXVpbmEgfSBpcyBudWxsICBvciBwLmlkX21hcXVpbmEgPSAgJHsgaWRNYXF1aW5hIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkUGllemEgfSBpcyBudWxsICBvciBwLmlkX3BpZXphID0gICR7IGlkUGllemEgfSApXHJcbiAgICAgICAgYW5kICggJHsgaWRNb2xkZSB9IGlzIG51bGwgIG9yIHBsLmlkX21vbGRlID0gICR7IGlkTW9sZGUgfSApXHJcbiAgICAgICAgYW5kICggJHsgaWRUaXBvUHJvY2VzbyB9IGlzIG51bGwgIG9yIHAuaWRfdGlwb3NfcHJvY2VzbyA9ICAkeyBpZFRpcG9Qcm9jZXNvIH0gKVxyXG4gICAgICAgIGFuZCAoICR7IGlkT3BlcmFjaW9uIH0gaXMgbnVsbCAgb3IgdG0uaWRfb3BlcmFjaW9uID0gICR7IGlkT3BlcmFjaW9uIH0gKSBgXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUmVjaGF6b3MgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhWm9uYXMgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUE0gPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIHZhciB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gPSBbXVxyXG4gICAgICAgIHZhciB2ZWNUcmFiYWphZG9yZXNcclxuICAgICAgICB2YXIgdmVjUmVjaGF6b3NcclxuICAgICAgICB2YXIgdmVjWm9uYXNcclxuICAgICAgICB2YXIgdmVjUE1cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBjb25zdWx0YVBsYW5pbGxhLnF1ZXJ5KCBzcWxDb25zdWx0YSApXHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldCkpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5mb3JFYWNoKCBwbGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGFuaWxsYSAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGEgOiBwbGEuaWRQbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhQ2FyZ2EgOiBwbGEuZmVjaGFDYXJnYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhUHJvZHVjY2lvbiA6IHBsYS5mZWNoYVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUZ1bmRpY2lvbiA6IHBsYS5mZWNoYUZ1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiBuZXcgTW9tZW50ICggcGxhLmhvcmFJbmljaW8gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCAgcGxhLmhvcmFGaW4gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRPcGVyYWNpb24gOiBwbGEuaWRPcGVyYWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1hcXVpbmEgOiBwbGEuaWRNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTWFxdWluYSA6IHBsYS5ub21icmVNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQaWV6YSA6IHBsYS5pZFBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGllemEgOiBwbGEubm9tYnJlUGllemEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1vbGRlIDogcGxhLmlkTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVNb2xkZSA6IHBsYS5ub21icmVNb2xkZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVGlwb1Byb2Nlc28gOiBwbGEuaWRUaXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9Qcm9jZXNvIDogcGxhLnRpcG9Qcm9jZXNvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQcm9jZXNvIDogcGxhLmlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24ucHVzaChwbGFuaWxsYSlcclxuICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goKHBsYSxpbmRleFBsYW5pbGxhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UGxhbmlsbGEgPT09IChyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0Lmxlbmd0aCAtIDEpKXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyArPSBgJHtwYXJzZUludChwbGEuaWRQbGFuaWxsYSl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYoIGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPT09ICcnICl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSA9IGBzZWxlY3QgdHhwLmlkIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSAsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLCB0dXIuZGVzY3JpcGNpb24gIGFzIHR1cm5vVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICB0eHAuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHR4cC5ob3JhX2ZpbiBhcyBob3JhRmluLCAgdHhwLnB6YV9wcm9kdWNpZGFzIGFzIHBpZXphc1Byb2R1Y2lkYXMgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmNhbG9yaWFzIGFzIGNhbG9yaWFzICwgdHhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCB0eHAuaWRfdHJhYmFqYWRvciBhcyBpZFRyYWJhamFkb3IgLCB0eHAuaWRfdHVybm8gYXMgaWRUdXJub1xyXG4gICAgICAgICAgICAgICAgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdHhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHRyYWJhamFkb3JlcyB0IG9uIHR4cC5pZF90cmFiYWphZG9yID0gdC5pZFxyXG4gICAgICAgICAgICAgICAgam9pbiB0dXJub3MgdHVyIG9uIHR4cC5pZF90dXJubyA9IHR1ci5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgdHhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCB0eHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSAgOyBgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFQTSA9IGAgc2VsZWN0IHBteHAuaWQgYXMgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhICwgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hICwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgcG14cC5ob3JhX2luY2lvIGFzIGhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgcG14cC5ob3JhX2ZpbiBhcyBob3JhRmluUGFyYWRhTWFxdWluYSAsIHBteHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYSAsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhIHBteHBcclxuICAgICAgICAgICAgICAgIGpvaW4gcGFyYWRhc19tYXF1aW5hIHBtIG9uIHBteHAuaWRfcGFyYWRhc19tYXF1aW5hID0gcG0uaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHBteHAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgYW5kIHBteHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWJhamFkb3Jlc1hwbGFuaWxsYSA9IGF3YWl0ICBjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgKyBzcWxDb25zdWx0YVBNIClcclxuICAgICAgICAgICAgICAgIGlmKHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzBdICYmIHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdKXtcclxuICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMgPSB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BNID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMV1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFRyYWJhamFkb3JlcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goKCB0ICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGkgPT09ICggdmVjVHJhYmFqYWRvcmVzLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkVHJhYmFqYWRvcmVzICs9IGAke3BhcnNlSW50KHQuaWRUcmFiYWphZG9yWHBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0YUlkVHJhYmFqYWRvcmVzID09PSAnJyApIHsgbGlzdGFJZFRyYWJhamFkb3JlcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVJlY2hhem9zID0gYCBzZWxlY3Qgcnh0eXAuaWQgYXMgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgLCBkLm5vbWJyZSBhcyBub21icmVSZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICByeHR5cC50aXBvIGFzIHRpcG9SZWNoYXpvICwgcnh0eXAuY2FudGlkYWQgYXMgY2FudGlkYWRSZWNoYXpvcyAsIHJ4dHlwLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCByeHR5cC5pZF9kZWZlY3RvIGFzIGlkRGVmZWN0b1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgcnh0eXBcclxuICAgICAgICAgICAgICAgICAgICBqb2luIGRlZmVjdG9zIGQgb24gcnh0eXAuaWRfZGVmZWN0byA9IGQuaWRcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZSByeHR5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgYW5kIHJ4dHlwLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRUcmFiYWphZG9yZXMgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2hhem9zID0gYXdhaXQgY29uc3VsdGFSZWNoYXpvcy5xdWVyeSggc3FsQ29uc3VsdGFSZWNoYXpvcyApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlY2hhem9zLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcyA9IHJlY2hhem9zLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFJlY2hhem9zID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggKCByZSAsICBpbmRleFJlY2hhem8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhSZWNoYXpvID09PSAoIHZlY1JlY2hhem9zLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFJlY2hhem9zICs9IGAke3BhcnNlSW50KCByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSApfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludChyZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFJlY2hhem9zID09PSAnJyApIHsgbGlzdGFJZFJlY2hhem9zID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxbENvbnN1bHRhWm9uYXMgPSBgIHNlbGVjdCB6eHJ5cC5pZCBhcyBpZFpvbmEgLCB6eHJ5cC5sZXRyYSBhcyBsZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5udW1lcm8gYXMgbnVtZXJvWm9uYSAsIHp4cnlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGFzIGlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHp4cnlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHp4cnlwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFJlY2hhem9zIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVyZW5jaWFFbk1pbnV0b3MgPSAoaG9yYUluaWNpbyxob3JhRmluKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoX2luaWNpbyA9IG5ldyBNb21lbnQgKCAgaG9yYUluaWNpbyAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhfZmluID0gbmV3IE1vbWVudCAoICBob3JhRmluICApLmZvcm1hdCAoIFwiSEg6bW1cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaERlc2RlID0gbmV3IERhdGUoYDE5OTUtMTItMTdUMDM6JHtoX2luaWNpb31gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhIYXN0YSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9maW59YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhfaW5pY2lvID09PSAnMDY6MDAnICYmIGhfZmluID09PSAnMDY6MDAnKXsgIHJldHVybiAyNCAqIDYwICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChoSGFzdGEtaERlc2RlKS8xMDAwIDwgMCl7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCArIDE0NDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgcmV0dXJuIChoSGFzdGEtaERlc2RlKS8xMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFab25hcyA9IGF3YWl0IGNvbnN1bHRhWm9uYXMucXVlcnkoIHNxbENvbnN1bHRhWm9uYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbGlzdGFab25hcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzID0gbGlzdGFab25hcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKCAocGwgLCBpbmRleFBsYW5pbGxhICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY09wZXJhcmlvcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BNLmZvckVhY2goIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCBwbS5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYWRhTWFxID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYTogcG0uaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmEgOiBwbS5pZFBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBhcmFkYU1hcXVpbmEgOiBwbS5ub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNkZVBhcmFkYU1hcXVpbmEgOiBuZXcgTW9tZW50ICggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXN0YVBhcmFkYU1hcXVpbmEgOiBuZXcgTW9tZW50ICggcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhY2lvblBhcmFkYU1hcXVpbmEgOiBkaXJlcmVuY2lhRW5NaW51dG9zKCBwbS5ob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsICBwbS5ob3JhRmluUGFyYWRhTWFxdWluYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvUGFyYWRhTWFxdWluYSA6IHBtLnRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5wdXNoKCBwYXJhZGFNYXEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMuZm9yRWFjaCggKHRyICwgaW5kZXhUcmFiYWphZG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQgKCB0ci5pZFBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhWHBsYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFRyYWJhamFkb3JYcGxhbmlsbGEgOiB0ci5pZFRyYWJhamFkb3JYcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRPcGVyYXJpbyA6IHRyLmlkVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUdXJubyA6IHRyLmlkVHVybm8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVRyYWJhamFkb3IgOiB0ci5ub21icmVUcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZSA6IHRyLmlkVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9UcmFiYWphZG9yIDogdHIuYXBlbGxpZG9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cm5vVHJhYmFqYWRvciA6IHRyLnR1cm5vVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHRyLmhvcmFJbmljaW8gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhRmluIDogbmV3IE1vbWVudCAoIHRyLmhvcmFGaW4gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNjaW9uIDogdHIucGllemFzUHJvZHVjaWRhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHRyLmNhbG9yaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem8gOiBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHRyYVhwbGEuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggcmUuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgOiByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6byA6IHJlLmlkRGVmZWN0byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVSZWNoYXpvIDogcmUubm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvIDogcmUudGlwb1JlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWRSZWNoYXpvIDogcmUuY2FudGlkYWRSZWNoYXpvcyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMuZm9yRWFjaCggem9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHpvbi5pZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHJlY2guaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9uYVhyZWNoYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkWm9uYSA6IHpvbi5pZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmEgOiB6b24ubGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybyA6IHpvbi5udW1lcm9ab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogem9uLmNhbnRpZGFkWm9uYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2gudmVjWm9uYXMucHVzaCggem9uYVhyZWNoYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhWHBsYS52ZWNSZWNoYXpvLnB1c2goIHJlY2ggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MucHVzaCggdHJhWHBsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgIC8vIGhvbGEgbXVuZG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggdmVjUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCggIClcclxuICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHZhciB7IGZlY2hhUHJvZHVjY2lvbiwgZmVjaGFGdW5kaWNpb24sIGlkVHVybm8sIEhvcmFJbmljaW9Qcm9kdWNjaW9uLFxyXG4gICAgICAgIEhvcmFGaW5Qcm9kdWNjaW9uICwgIGlkT3BlcmFjaW9uICwgaWRNYXF1aW5hICwgIGlkUGllemEgLCAgaWRNb2xkZSAsIGlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgIHZlY09wZXJhcmlvcyAsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhICwgaWRQbGFuaWxsYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zb2xlLmxvZyAoIGlkUGxhbmlsbGEgKVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9ICByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gIGF3YWl0IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0gPSBhd2FpdCBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luICggYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmICggIWVyciApIHtcclxuICAgICAgICAgICAgY29uc3QgbWV0b2RvVHJhbnNhY2Npb24gPSAgYXN5bmMgKCAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZFpvbmFzRGVsZXRlID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRSZWNoYXpvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkT3BlcmFyaW9zRGVsZXRlID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWRQbURlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoICggcCAsIGlwICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmxlbmd0aCAtMSApICA9PT0gaXAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQbURlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCBwLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSApfSAgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQbURlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCBwLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoICggKCBvICwgaW8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkT3BlcmFyaW9zRGVsZXRlICs9IGAgJHtwYXJzZUludCggby5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG8udmVjUmVjaGF6by5mb3JFYWNoICggKCByICwgaXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem9zRGVsZXRlICs9IGAgJHtwYXJzZUludCAoIHIuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnZlY1pvbmFzLmZvckVhY2ggKCAoIHogLCBpeiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFpvbmFzRGVsZXRlICs9IGAgJHtwYXJzZUludCAoIHouaWRab25hICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZE9wZXJhcmlvc0RlbGV0ZSAhPT0gJycgKSB7IGlkT3BlcmFyaW9zRGVsZXRlID0gIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRPcGVyYXJpb3NEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGlkUmVjaGF6b3NEZWxldGUgIT09ICcnICkgeyBpZFJlY2hhem9zRGVsZXRlID0gIGlkUmVjaGF6b3NEZWxldGUudHJpbSAoICApLnN1YnN0cmluZyAoIDAgLCBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBpZFpvbmFzRGVsZXRlICE9PSAnJyApIHsgaWRab25hc0RlbGV0ZSA9ICBpZFpvbmFzRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRab25hc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdERlbGV0ZSA9IGF3YWl0IGRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbS5xdWVyeSAoIGAgZGVsZXRlIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRab25hc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRab25hc0RlbGV0ZX0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRSZWNoYXpvc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRSZWNoYXpvc0RlbGV0ZSB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgd2hlcmUgaWQgaW4gKCAkeyBpZE9wZXJhcmlvc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRPcGVyYXJpb3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRQbURlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRQbURlbGV0ZSB9ICkgOyBgIClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3VsdERlbGV0ZSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2ZlX3Byb2R1Y2Npb24nICwgbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9mdW5kaWNpb24nICwgbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaWRfbW9sZGUnICwgbXNzcWwuSW50IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkUGxhbmlsbGEnICwgbXNzcWwuSW50IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnByZXBhcmUgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZFByb2NlIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbiA9IEBmZV9wcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX2Z1bmRpY2lvbiA9IEBmZV9mdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW8gPSBAaG9yYV9pbmljaW8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW4gPSBAaG9yYV9maW4gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcHJvY2VzbyA9IEBpZFByb2NlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlID0gQGlkX21vbGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFBsYW5pbGxhYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbjogZmVjaGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX2Z1bmRpY2lvbjogZmVjaGFGdW5kaWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFGaW5Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFGaW5Qcm9kdWNjaW9ufTowMGApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggaWRUdXJubyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGEgOiBwYXJzZUludCAoIGlkUGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRDMSA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5leGVjdXRlICggZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdW5wcmVwYXJlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFcnJvciBJbnNlcmNpb25QbGFuaWxsYScgfSApLnN0YXR1cyAoIDQwMyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHRDMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCAoIG9wZXJhcmlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5jYWxvcmlhcyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHphX3Byb2R1Y2lkYXMgOiBwYXJzZUludCAoIG9wZXJhcmlvLnByb2R1Y2Npb24gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFGaW4gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUZpbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHJhYmFqYWRvcjogcGFyc2VJbnQgKCBvcGVyYXJpby5pZE9wZXJhcmlvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIG9wZXJhcmlvLmlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zOiBvcGVyYXJpby52ZWNSZWNoYXpvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoICggb3AgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2NhbG9yaWFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuY2Fsb3JpYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdwemFfcHJvZHVjaWRhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLnB6YV9wcm9kdWNpZGFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfaW5pY2lvJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9maW4nLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3RyYWJhamFkb3InICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2ggKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoYXpvWiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCByZS5jYW50aWRhZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfZGVmZWN0byA6IHBhcnNlSW50ICggcmUuaWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMgOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5wdXNoICggcmVjaGF6b1ogKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnN1bHRhID0gYGluc2VydCBpbnRvIHRyYWJhamFkb3JfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxvcmlhcyAsIHB6YV9wcm9kdWNpZGFzLCBpZF90dXJubyAsIGhvcmFfaW5pY2lvICwgaG9yYV9maW4gLCBpZF90cmFiYWphZG9yICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEBjYWxvcmlhcyAsIEBwemFfcHJvZHVjaWRhcyAsIEBpZF90dXJubyAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZF90cmFiYWphZG9yICwgQGlkX3BsYW5pbGxhICwgMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgPSAoIHNlbGVjdCBtYXgoIGlkICkgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLmZvckVhY2ggKCByZWNoYXpvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIHRpcG8gLCBpZF9kZWZlY3RvICwgaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgPSAoc2VsZWN0IG1heChpZCkgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNab25hc1hyZWNoYXpvID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2ggKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b28gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiBwYXJzZUludCAoIHpvbmEuY2FudGlkYWQgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmEgOiB6b25hLmxldHJhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm8gOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8ucHVzaCggem9vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgIGluc2VydCBpbnRvIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyB6b25hLmNhbnRpZGFkIH0gLCAnJHsgem9uYS5sZXRyYSB9JyAsICR7IHpvbmEubnVtZXJvIH0gLCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCAxICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEucXVlcnkgKCBjb25zdWx0YSAsICggZXJyICwgcmVzdWx0ICkgPT4geyBpZiAoIGVyciApIHsgIGNhbGxiYWNrICggZXJyICkgfSBlbHNlIHsgY2FsbGJhY2sgKCAgKSB9IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApLnN0YXR1cyAoIDQwMyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUGFyYWRhc0RlTWFxdWluYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYU1BQyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5kZXNkZVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uZGVzZGVQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BhcmFkYXNfbWFxdWluYTogcGFyc2VJbnQoIHBtLmlkUGFyYWRhTWFxdWluYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQYXJhZGFzRGVNYXF1aW5hICwgKCBQTSAsIGNhbGxiYWNrUE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9pbmNpbycgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCAsIFBNLmlkX3BhcmFkYXNfbWFxdWluYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLnF1ZXJ5IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBAaG9yYV9pbmNpbyAsIEBob3JhX2ZpbiAsIEBpZF9wYXJhZGFzX21hcXVpbmEgLCBAaWRfcGxhbmlsbGEgLCAxIClgICwgKCBFUiAsIHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBFUiApIHsgY2FsbGJhY2tQTSggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNKCAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvUiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9SLm1lc3NhZ2UgfSApLnN0YXR1cyAoIDQwMyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciAoICdDb250ZW50LVR5cGUnICwgJ3RleHQvZXZlbnQtc3RyZWFtJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyAoIDIwMCApLmpzb24gKCB7IG1lbnNhamUgOiAnQWN0dWFsaXphY2lvbiBleGl0b3NhJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTogZS5tZXNzYWdlICwgbWVuc2FqZTI6ICdFcnJvciBjYXRjaCBGSU5BTCcgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0b2RvVHJhbnNhY2Npb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2VyciBjb21taXQnIClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IClcclxucm91dGVyLnBvc3QoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBmZWNoYVByb2R1Y2Npb24sIGZlY2hhRnVuZGljaW9uLCBpZFR1cm5vLCBIb3JhSW5pY2lvUHJvZHVjY2lvbixcclxuICAgICAgICBIb3JhRmluUHJvZHVjY2lvbiwgIGlkT3BlcmFjaW9uLCBpZE1hcXVpbmEsICBpZFBpZXphLCAgaWRNb2xkZSwgaWRUaXBvUHJvY2VzbyxcclxuICAgICAgICB2ZWNPcGVyYXJpb3MsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIHZhciAgaWRQbGFuaWxsYVByb2R1Y2Npb25cclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICdjb25zdWx0YXNhJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uIH0gPSAgcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCxQcmVwYXJlZFN0YXRlbWVudCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB0cmFuc2FjY2lvbiA9ICBhd2FpdCBuZXcgVHJhbnNhY3Rpb24oIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSggJ2FzeW5jJyApXHJcbiAgICB0cmFuc2FjY2lvbi5iZWdpbihhc3luYyBmdW5jdGlvbiAoIGVyciApICB7XHJcbiAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldG9kb1RyYW5zYWNjaW9uID0gIGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9wcm9kdWNjaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdmZV9mdW5kaWNpb24nLG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2hvcmFfaW5pY2lvJyxtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2ZpbicsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaWRfbW9sZGUnLG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnByZXBhcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZFByb2NlIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRQcm9jZSA9IChzZWxlY3QgdG9wIDEgaWQgZnJvbSBwcm9jZXNvcyBwICB3aGVyZSBwLmlkX21hcXVpbmEgPSAkeyBpZE1hcXVpbmEgfSBhbmQgcC5pZF9waWV6YSA9ICR7IGlkUGllemEgfSBhbmQgaWRfdGlwb3NfcHJvY2VzbyA9ICR7IGlkVGlwb1Byb2Nlc28gfSBhbmQgZXN0YWRvID0gMSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0IGludG8gcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBmZV9jYXJnYSAsIGZlX3Byb2R1Y2Npb24gLCBmZV9mdW5kaWNpb24gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfcHJvY2VzbyAsIGlkX21vbGRlICAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIEdFVERBVEUoKSAsIEBmZV9wcm9kdWNjaW9uICwgQGZlX2Z1bmRpY2lvbiAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZFByb2NlICwgQGlkX21vbGRlICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfcHJvZHVjY2lvbjogZmVjaGFQcm9kdWNjaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFJbmljaW9Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFJbmljaW9Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFGaW5Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFGaW5Qcm9kdWNjaW9ufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGU6IHBhcnNlSW50KCBpZE1vbGRlIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEMxXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSggZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJlcGFyZWQgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24udW5wcmVwYXJlKClcclxuICAgICAgICAgICAgICAgICAgICBpZiggdW5wcmVwYXJlZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOidFcnJvciBJbnNlcmNpb25QbGFuaWxsYScueWVsbG93IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihyZXN1bHRDMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbi5xdWVyeSggYHNlbGVjdCBtYXgoIGlkICkgYXMgaWRQbGFuaWxsYSBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uYCApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICYmICEgaXNOYU4oIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2goIG9wZXJhcmlvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhczogcGFyc2VJbnQoIG9wZXJhcmlvLmNhbG9yaWFzICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHphX3Byb2R1Y2lkYXM6IHBhcnNlSW50KCBvcGVyYXJpby5wcm9kdWNjaW9uICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhSW5pY2lvICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFJbmljaW99OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHJhYmFqYWRvcjogcGFyc2VJbnQoIG9wZXJhcmlvLmlkT3BlcmFyaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBwYXJzZUludCggaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIG9wZXJhcmlvLmlkVHVybm8gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zWHBsYW5pbGxhLnB1c2goIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgLCAoIHRyYWJhamFkb3IgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdwemFfcHJvZHVjaWRhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLnB6YV9wcm9kdWNpZGFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90dXJubycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3R1cm5vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3RyYWJhamFkb3InLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3RyYWJhamFkb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWJhamFkb3IudmVjUmVjaGF6b3MuZm9yRWFjaCggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoYXpvWiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50KCByZS5jYW50aWRhZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG86IHJlLnRpcG8gPyAxIDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfZGVmZWN0bzogcGFyc2VJbnQoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXM6IHJlLnZlY1pvbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5wdXNoICggcmVjaGF6b1ogKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYWxvcmlhcyAsIHB6YV9wcm9kdWNpZGFzLCBpZF90dXJubyAsIGhvcmFfaW5pY2lvICwgaG9yYV9maW4gLCBpZF90cmFiYWphZG9yICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLmZvckVhY2ggKCByZWNoYXpvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgaW5zZXJ0IGludG8gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHJlY2hhem8uY2FudGlkYWQgfSwgJHsgcmVjaGF6by50aXBvIH0gLCAkeyByZWNoYXpvLmlkX2RlZmVjdG8gfSAsIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNab25hc1hyZWNoYXpvID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2hhem8udmVjWm9uYXMuZm9yRWFjaCggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b28gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmE6IHpvbmEubGV0cmEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1lcm86IHBhcnNlSW50ICggem9uYS5udW1lcm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8ucHVzaCAoIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgIGluc2VydCBpbnRvIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIGxldHJhICwgbnVtZXJvICwgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyB6b25hLmNhbnRpZGFkIH0gLCAnJHsgem9uYS5sZXRyYSB9JyAsICR7IHpvbmEubnVtZXJvIH0gLCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCAxICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEucXVlcnkoIGNvbnN1bHRhLChlcnIscmVzdWx0KT0+eyBpZiggZXJyICkgeyAgY2FsbGJhY2soIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrKCkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnIubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5mb3JFYWNoICggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5kZXNkZVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uZGVzZGVQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uaGFzdGFQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmhhc3RhUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNEZU1hcXVpbmEucHVzaCAoIHBhcmFNQUMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQYXJhZGFzRGVNYXF1aW5hICwgKCBQTSAsIGNhbGxiYWNrUE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSA9ICBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wYXJhZGFzX21hcXVpbmEnICwgbXNzcWwuSW50LFBNLmlkX3BhcmFkYXNfbWFxdWluYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGhvcmFfaW5jaW8gLCBob3JhX2ZpbiAsIGlkX3BhcmFkYXNfbWFxdWluYSAsIGlkX3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBAaG9yYV9pbmNpbyAsIEBob3JhX2ZpbiAsIEBpZF9wYXJhZGFzX21hcXVpbmEgLCBAaWRfcGxhbmlsbGEgLCAxIClgLCggRVIscmVzdWx0UE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0gKCBFUiApIH0gZWxzZSB7IGNhbGxiYWNrUE0gKCAgKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCBlcnJvUiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTplcnJvUi5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyKCAnQ29udGVudC1UeXBlJywgJ3RleHQvZXZlbnQtc3RyZWFtJyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdJbnNlcmNpb24gZXhpdG9yYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSAvLyAhIEZJTiBGT1IgRUFDSFxyXG4gICAgICAgICAgICAgICAgICAgIH0gLy8hIEZJTiAgSUlGXHJcbiAgICAgICAgICAgICAgICB9IC8vISBGSU4gREVMIFRSWVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgbWVuc2FqZTIgOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFQbGFudGFzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IHAuaWQgYXMgaWRQbGFudGEgLCBwLm5vbWJyZSBhcyBub21icmVQbGFudGEgLCBwLmJhcnJpbyBhcyBiYXJyaW9QbGFudGEgLFxyXG4gICAgICAgIHAuY3AgYXMgY29kaWdvUG9zdGFsUGxhbnRhICwgcC5jYWxsZSBhcyBjYWxsZVBsYW50YSAsIHAuYWx0dXJhX2NhbGxlIGFzIGFsdHVyYUNhbGxlUGxhbnRhXHJcbiAgICAgICAgZnJvbSBwbGFudGFzIHBcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXNwb25zZS5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVQbGFudGEgLCBiYXJyaW9QbGFudGEgLCBjb2RpZ29Qb3N0YWxQbGFudGEgLCBjYWxsZVBsYW50YSAsIGFsdHVyYUNhbGxlUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBsYW50YScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQbGFudGEnICwgVmFyQ2hhciAsIG5vbWJyZVBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2JhcnJpb1BsYW50YScgLCBWYXJDaGFyICwgYmFycmlvUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnY29kaWdvUG9zdGFsUGxhbnRhJyAsIEludCAsIGNvZGlnb1Bvc3RhbFBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2NhbGxlUGxhbnRhJyAsIFZhckNoYXIgLCBjYWxsZVBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FsdHVyYUNhbGxlUGxhbnRhJyAsIEludCAsIGFsdHVyYUNhbGxlUGxhbnRhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwbGFudGFzICggbm9tYnJlICwgYmFycmlvICwgY3AgLCBjYWxsZSAsIGFsdHVyYV9jYWxsZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlUGxhbnRhICwgQGJhcnJpb1BsYW50YSAsIEBjb2RpZ29Qb3N0YWxQbGFudGEgLCBAY2FsbGVQbGFudGEgLCBAYWx0dXJhQ2FsbGVQbGFudGEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQbGFudGEgSW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFudGEgLCBub21icmVQbGFudGEgLCBiYXJyaW9QbGFudGEgLCBjb2RpZ29Qb3N0YWxQbGFudGEgLCBjYWxsZVBsYW50YSAsIGFsdHVyYUNhbGxlUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBsYW50YScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQbGFudGEnICwgVmFyQ2hhciAsIG5vbWJyZVBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2JhcnJpb1BsYW50YScgLCBWYXJDaGFyICwgYmFycmlvUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnY29kaWdvUG9zdGFsUGxhbnRhJyAsIEludCAsIGNvZGlnb1Bvc3RhbFBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2NhbGxlUGxhbnRhJyAsIFZhckNoYXIgLCBjYWxsZVBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FsdHVyYUNhbGxlUGxhbnRhJyAsIEludCAsIGFsdHVyYUNhbGxlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQbGFudGEnICwgSW50ICwgaWRQbGFudGEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwbGFudGFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBsYW50YSAsXHJcbiAgICAgICAgYmFycmlvID0gQGJhcnJpb1BsYW50YSAsXHJcbiAgICAgICAgY3AgPSBAY29kaWdvUG9zdGFsUGxhbnRhICxcclxuICAgICAgICBjYWxsZSA9IEBjYWxsZVBsYW50YSAsXHJcbiAgICAgICAgYWx0dXJhX2NhbGxlID0gYWx0dXJhQ2FsbGVQbGFudGFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBsYW50YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BsYW50YSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBsYW50YScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBsYW50YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFudGFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQbGFudGEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5yb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSB0aXBvc19wcm9jZXNvXHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCgnL3htYXF1aW5hcGllemF0aXBvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge2lkTWFxdWluYSxpZFBpZXphLGlkVGlwb1Byb2Nlc299ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcHJvLmlkIGFzIGlkUHJvY2VzbywgcHJvLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gcHJvY2Vzb3MgcHJvXHJcbiAgICAgICAgd2hlcmUgcHJvLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgcHJvLmlkX3BpZXphID0gJHtpZFBpZXphfVxyXG4gICAgICAgIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfVxyXG4gICAgICAgIGFuZCBwcm8uaWRfdGlwb3NfcHJvY2VzbyA9ICR7aWRUaXBvUHJvY2Vzb31gLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCAoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdzZWxlY3RQcm9jZXNvcycgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYW5zYWMgKSA9PiB7XHJcbiAgICAgICAgaWYgKCBlcnJvclRyYW5zYWMgKSB7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhbnNhYy5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgdmVjUHJvY2Vzb3MgPSBbICBdXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZXphWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IHAuaWQgYXMgaWRQcm9jZXNvICwgcC5kZXNjcmlwY2lvbiBhcyBkZXNjaXBjaW9uUHJvY2VzbyAsIHAuaWRfcGllemEgYXMgaWRQaWV6YSAsXHJcbiAgICAgICAgICAgIHBpZS5ub21icmUgYXMgbm9tYnJlUGllemEgLCBwLmlkX21hcXVpbmEgYXMgaWRNYXF1aW5hICwgbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICxcclxuICAgICAgICAgICAgcC5pZF90aXBvc19wcm9jZXNvIGFzIGlkVGlwb1Byb2Nlc28gLCB0cC5ub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICAgICAgZnJvbSBwcm9jZXNvcyBwXHJcbiAgICAgICAgICAgIGpvaW4gcGllemFzIHBpZSBvbiBwLmlkX3BpZXphID0gcGllLmlkXHJcbiAgICAgICAgICAgIGpvaW4gbWFxdWluYXMgbWFxIG9uIHAuaWRfbWFxdWluYSA9IG1hcS5pZFxyXG4gICAgICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zID0gcmVzcG9uc2UucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm9jZXNvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQcm9jZXNvcyApICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZWNQcm9jZXNvcy5mb3JFYWNoICggKCBwICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQcm9jZXNvcyArPSBgICR7cC5pZFByb2Nlc299ICxgXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRQcm9jZXNvcyA9PT0gJycgKSB7IGlkUHJvY2Vzb3MgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyBpZFByb2Nlc29zID0gaWRQcm9jZXNvcy50cmltICggICkuc3Vic3RyaW5nICggMCAsICBpZFByb2Nlc29zLmxlbmd0aCAtMiApIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggaWRQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXphWGhzID0gYHNlbGVjdCBweGguaWQgYXMgaWRQaWV6YXNYaHMgLCBweGguY2FudGlkYWQgYXMgY2FudGlkYWRQaWV6YXNYaHMgLCBweGguZmVfZGVzZGUgYXMgZGVzZGVQaWV6YXNYaHMgLFxyXG4gICAgICAgICAgICAgICAgcHhoLmZlX2hhc3RhIGFzIGhhc3RhUGllemFzWGhzICwgcHhoLmlkX3Byb2Nlc28gYXMgaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBpZXphc194X2hvcmEgcHhoXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBweGguaWRfcHJvY2VzbyBpbiAoJHtpZFByb2Nlc29zfSlgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHJwelhocyA9IGF3YWl0IG15UmVxdWVzdFBpZXphWGhzLnF1ZXJ5ICggcXVlcnlQaWV6YVhocyApXHJcbiAgICAgICAgICAgICAgICB2YXIgdmVjUGllemFzWGhvcmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJlc3VscnB6WGhzICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggdmVjUGllemFzWGhvcmEgKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BpZXphc1hob3JhID0gcmVzdWxycHpYaHMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCByZXN1bHJwelhocy5yZWNvcmRzZXQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnZlY1BpZXphc1hob3JhID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BpZXphc1hob3JhLmZvckVhY2ggKCAoIHB6WGhzICwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50ICggcC5pZFByb2Nlc28gKSA9PT0gcGFyc2VJbnQgKCBwelhocy5pZFByb2Nlc28gKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnZlY1BpZXphc1hob3JhLnB1c2ggKCBwelhocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggdmVjUHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59IClcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVByb2Nlc29zID0gYGluc2VydCBpbnRvIHByb2Nlc29zICggZGVzY3JpcGNpb24gLCBpZF9waWV6YSAsIGlkX21hcXVpbmEgLCBpZF90aXBvc19wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICggQGRlc2NyaXBjaW9uUHJvY2VzbyAsIEBpZFBpZXphICwgQGlkTWFxdWluYSAsIEBpZFRpcG9zUHJvY2VzbyAsIDEgKSA7XHJcbiAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2VzbyBpbnRcclxuICAgICAgICAgICAgc2V0IEBpZFByb2Nlc28gPSAoIHNlbGVjdCB0b3AgMSBtYXggKCBpZCApIGZyb20gcHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICBzZWxlY3QgQGlkUHJvY2VzbyBhcyBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHZhciBpZFByb2Nlc29cclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZVByb2Nlc29zICkge1xyXG4gICAgICAgICAgICAgICAgaWRQcm9jZXNvID0gcmVzcG9uc2VQcm9jZXNvcy5yZWNvcmRzZXRzWzBdWzBdLmlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5ICggdmVjUGllemFzWGhvcmEgKSAmJiB2ZWNQaWV6YXNYaG9yYS5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGllemFzWGhvcmEgLCAoIHBpZXphWGhzICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZVhocyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdjYW50aWRhZFBpZXphc1hocycgLCBJbnQgLCBwaWV6YVhocy5jYW50aWRhZFBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdkZXNkZVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuZGVzZGVQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaGFzdGFQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmhhc3RhUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCBwYXJzZUludCAoIGlkUHJvY2VzbyApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQaWV4aHMgPSBgaW5zZXJ0IGludG8gcGllemFzX3hfaG9yYSAoIGNhbnRpZGFkICwgZmVfZGVzZGUgLCBmZV9oYXN0YSAsIGlkX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgKCBAY2FudGlkYWRQaWV6YXNYaHMgLCBAZGVzZGVQaWV6YXNYaHMgLCBAaGFzdGFQaWV6YXNYaHMgLCBAaWRQcm9jZXNvICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMucXVlcnkgKCBxdWVyeVBpZXhocyAsICggZXJyb3IgLCByZXN1bHQgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggZXJyb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnJvckNhbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3JDYWxiYWNrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yQ2FsYmFjay5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc28gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gLCBkZXNjcmlwY2lvblByb2Nlc28gLCBpZFBpZXphICwgaWRNYXF1aW5hICwgaWRUaXBvc1Byb2Nlc28gLCB2ZWNQaWV6YXNYaG9yYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQcm9jZXNvJyApXHJcbiAgICAgICAgY29uc3QgIHsgVHJhbnNhY3Rpb24gLCBSZXF1ZXN0ICxEYXRlICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSAoICdhc3luYycgKVxyXG4gICAgICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhc2FjdGlvbnMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggZXJyb3JUcmFzYWN0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFzYWN0aW9ucy5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnZGVzY3JpcGNpb25Qcm9jZXNvJyAsIFZhckNoYXIgLCAgZGVzY3JpcGNpb25Qcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsICBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgIGlkTWFxdWluYSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRUaXBvc1Byb2Nlc28nICwgSW50ICwgIGlkVGlwb3NQcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgdXBkYXRlIHByb2Nlc29zXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbiA9IEBkZXNjcmlwY2lvblByb2Nlc28gLFxyXG4gICAgICAgICAgICBpZF9waWV6YSA9IEBpZFBpZXphICxcclxuICAgICAgICAgICAgaWRfbWFxdWluYSA9IEBpZE1hcXVpbmEgLFxyXG4gICAgICAgICAgICBpZF90aXBvc19wcm9jZXNvID0gQGlkVGlwb3NQcm9jZXNvXHJcbiAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHJvY2VzbyA7IGRlbGV0ZSBwaWV6YXNfeF9ob3JhIHdoZXJlIGlkX3Byb2Nlc28gPSBAaWRQcm9jZXNvYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQcm9jZXNvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyAgUmVxdWVzdCAgLCBJbnQgIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsICBpZFByb2Nlc28gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgdXBkYXRlIHByb2Nlc29zXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUHJvY2VzbyBgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc29zIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhclB1ZXN0b3MnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgaWQgYXMgaWRQdWVzdG8gLCBub21icmUgYXMgbm9tYnJlUHVlc3RvIGZyb20gcHVlc3RvcyB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoICByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBub21icmVQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHVlc3RvJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVB1ZXN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwdWVzdG9zICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVQdWVzdG8gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQdWVzdG8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBpZFB1ZXN0byAsIG5vbWJyZVB1ZXN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQdWVzdG8nIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBEYXRlICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVB1ZXN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHVlc3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQdWVzdG8nICwgSW50ICwgaWRQdWVzdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwdWVzdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgPSBAbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHVlc3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHVlc3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGlkUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVB1ZXN0bycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcHVlc3Rvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFB1ZXN0b2BcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1B1ZXN0byBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdsaXN0YVRpcG9zTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCB0bS5pZCBhcyBpZFRpcG9NYXF1aW5hICwgdG0ubm9tYnJlIGFzIG5vbWJyZVRpcG9NYXF1aW5hICwgdG0uaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uICxcclxuICAgICAgICBvLm5vbWJyZSBhcyBub21icmVPcGVyYWNpb25cclxuICAgICAgICBmcm9tIHRpcG9zX21hcXVpbmEgdG1cclxuICAgICAgICBqb2luIG9wZXJhY2lvbmVzIG8gb24gdG0uaWRfb3BlcmFjaW9uID0gby5pZFxyXG4gICAgICAgIHdoZXJlIHRtLmVzdGFkbyA9IDFgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXNwb25zZS5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVUaXBvTWFxdWluYSAgLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRUaXBvTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb01hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gdGlwb3NfbWFxdWluYSAoIG5vbWJyZSAsIGlkX29wZXJhY2lvbiAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlVGlwb01hcXVpbmEgLCBAaWRPcGVyYWNpb24gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIG1hcXVpbmEgSW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWFxdWluYSAsIG5vbWJyZVRpcG9NYXF1aW5hICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlVGlwb01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVGlwb01hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnZGVzY3JpcGNpb25NYXF1aW5hJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbk1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRpcG9zX21hcXVpbmFcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlVGlwb01hcXVpbmEgLFxyXG4gICAgICAgIGlkX29wZXJhY2lvbiA9IEBpZE9wZXJhY2lvblxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkVGlwb01hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIG1hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVRpcG9NYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRpcG9zX21hcXVpbmFcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCApXHJcblxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFMaXN0YUNsaWVudGVzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IGlkIGFzIGlkVGlwb01hdGVyaWFsICwgbm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU1hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRpcG9NYXRyaWFsJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hdGVyaWFsJyAsIFZhckNoYXIgLCBub21icmVNYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHRpcG9zX21hdGVyaWFsICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXMgKCBAbm9tYnJlTWF0ZXJpYWwgLCAxICkgIGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWF0ZXJpYWwgICwgIG5vbWJyZVRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVGlwb01hdGVyaWFsJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGVsaW1pbmFkbyAgY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy8nICwgYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9ICByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgdC5pZCBhcyBpZFRyYWJhamFkb3IsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuZl9uYWNpbWllbnRvIGFzIG5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBpbmdyZXNvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmlkX3B1ZXN0byBhcyBpZFB1ZXN0bywgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgICggZXJyICwgZGF0byApID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlVHJhYmFqYWRvciAsIGFwZWxsaWRvVHJhYmFqYWRvciAsIG5hY2ltaWVudG9UcmFiYWphZG9yICwgaW5ncmVzb1RyYWJhamFkb3IgLCBpZFB1ZXN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IE1vbWVudCA9IHJlcXVpcmUgICggJ21vbWVudCcgKVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRyYWJhamFkb3InIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBEYXRlICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRyYWJhamFkb3InICwgVmFyQ2hhciAsIG5vbWJyZVRyYWJhamFkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdhcGVsbGlkb1RyYWJhamFkb3InICwgVmFyQ2hhciAsIGFwZWxsaWRvVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25hY2ltaWVudG9UcmFiYWphZG9yJyAsIERhdGUgLCBuZXcgTW9tZW50ICggbmFjaW1pZW50b1RyYWJhamFkb3IgKSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2luZ3Jlc29UcmFiYWphZG9yJyAsIERhdGUgLCBuZXcgTW9tZW50ICggaW5ncmVzb1RyYWJhamFkb3IgKSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZXQgZGF0ZWZvcm1hdCBkbXkgOyBpbnNlcnQgaW50byB0cmFiYWphZG9yZXMgKCBub21icmUgLCBhcGVsbGlkbyAsIGZfbmFjaW1pZW50byAsIGZfaW5ncmVzbyAsIGlkX3B1ZXN0byAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlVHJhYmFqYWRvciAsIEBhcGVsbGlkb1RyYWJhamFkb3IgLCBAbmFjaW1pZW50b1RyYWJhamFkb3IgLCBAaW5ncmVzb1RyYWJhamFkb3IgLCBAaWRQdWVzdG8gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUcmFiYWphZG9yIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVHJhYmFqYWRvciAsIG5vbWJyZVRyYWJhamFkb3IgLCBhcGVsbGlkb1RyYWJhamFkb3IgLCBuYWNpbWllbnRvVHJhYmFqYWRvciAsIGluZ3Jlc29UcmFiYWphZG9yICwgaWRQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlVHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIERhdGUgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgbm9tYnJlVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FwZWxsaWRvVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgYXBlbGxpZG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbmFjaW1pZW50b1RyYWJhamFkb3InICwgRGF0ZSAsIG5ldyBNb21lbnQgKCBuYWNpbWllbnRvVHJhYmFqYWRvciApIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaW5ncmVzb1RyYWJhamFkb3InICwgRGF0ZSAsIG5ldyBNb21lbnQgKCBpbmdyZXNvVHJhYmFqYWRvciApIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQdWVzdG8nICwgSW50ICwgaWRQdWVzdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRyYWJhamFkb3InICwgSW50ICwgaWRUcmFiYWphZG9yIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdHJhYmFqYWRvcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgPSBAbm9tYnJlVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwZWxsaWRvID0gQGFwZWxsaWRvVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZfbmFjaW1pZW50byA9IEBuYWNpbWllbnRvVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZfaW5ncmVzbyA9IEBpbmdyZXNvVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3B1ZXN0byA9IEBpZFB1ZXN0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFRyYWJhamFkb3JgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUcmFiYWphZG9yIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGlkVHJhYmFqYWRvciB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVUcmFiYWphZG9yJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUcmFiYWphZG9yJyAsIEludCAsIGlkVHJhYmFqYWRvciApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRyYWJhamFkb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFRyYWJhamFkb3JgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUcmFiYWphZG9yIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgdC5pZCBhcyBpZFR1cm5vLCB0LmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uVHVybm8sdC5oc19pbmljaW8gYXMgaHNJbmljaW9UdXJubyAsdC5oc19maW4gYXMgaHNGaW5UdXJubyAgXHJcbiAgICAgICAgZnJvbSB0dXJub3MgdFxyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0bykgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cCA9IHJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKVxyXG5yZXF1aXJlKCcuLi9jb25leGlvbmVzL21vbmdvRGInKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCBQZXJmaWwgPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBhd2FpdCBVc3VhcmlvLmZpbmQoKGUsZGF0byk9PntcclxuICAgICAgICBlID8gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0Vycm9yIGVuIGVsIHJlcXVlc3QnKSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0bylcclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIuZ2V0KCcvcGVyZmlsZXMnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGxpc3RhUGVyZmlsZXMgPSBhd2FpdCBQZXJmaWwuZmluZCgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obGlzdGFQZXJmaWxlcylcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB7cGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3QgbmV3UGVyZmlsID0gbmV3IFBlcmZpbCh7cGVyZmlsfSlcclxuICAgICAgICBhd2FpdCBuZXdQZXJmaWwuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J0d1YXJkYWRvIEV4aXRvc2FtZW50ZSAhJ30pXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KVxyXG5cclxucm91dGVyLmdldCgnLzppZCcsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzdWFyaW8uZmluZEJ5SWQoe19pZDpyZXEucGFyYW1zLmlkfSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICB2YXIge3VzZXJOYW1lLHBhc3N3b3JkLGVtYWlsLG5vbWJyZSxhcGVsbGlkbyxwZXJmaWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBwYXNzd29yZCA9IGF3YWl0IGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnN0IG5ld1VzZXI9IG5ldyBVc3VhcmlvKHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSlcclxuICAgICAgICBjb25zdCBkYXRvID0gYXdhaXQgbmV3VXNlci5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonVXN1YXJpbyBndWFyZGFkbyBleGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnB1dCgnLzppZCcsKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7aWR9ID0gcmVxLnBhcmFtc1xyXG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5XHJcbiAgICBpZihib2R5LnBhc3N3b3JkKXtib2R5LnBhc3N3b3JkID0gYmNyeXAuaGFzaFN5bmMoYm9keS5wYXNzd29yZCkgfVxyXG4gICAgVXN1YXJpby5maW5kQnlJZEFuZFVwZGF0ZSh7X2lkOmlkfSxib2R5LChlLGQpPT57XHJcbiAgICAgICAgZT8gcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmUubWVzc2FnZX0pIDpcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonTW9kaWZpY2FkbyBjb3JyZWN0YW1lbnRlICEnfSlcclxuICAgIH0pXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHQtbm9kZWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNzcWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==