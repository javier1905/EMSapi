const express = require('express')
// const morgan = require('morgan')
// const path = require('path')
// require('colors')

const servidor = express()

// middelware
servidor.use(express.json())
// servidor.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
servidor.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

servidor.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});

servidor.use('/api/maquinas',require('./rutasApi/maquinas'))
servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/logueo',require('./rutasApi/Logueo'))
servidor.use('/api/autentificasion',require('./rutasApi/Autentificasion'))
// servidor.use(morgan('dev'))



//Settings
servidor.set('port',process.env.PORT || 5000)

servidor.listen(servidor.get('port'),(m,e)=>{
    e ? console.log(e) : console.log('Servidor corriendo en el PUERTO',servidor.get('port'))
})