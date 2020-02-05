const express = require('express')

const servidor = express()

// middelware
// servidor.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// })
servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))

servidor.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*"); //<= sólo permitirá conexiones cruzadas desde esta URI
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

servidor.use('/api/maquinas',require('./rutasApi/maquinas'))
servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/logueo',require('./rutasApi/Logueo'))
servidor.use('/api/autentificasion',require('./rutasApi/Autentificasion'))

//Settings
servidor.set('port',process.env.PORT || 5000)

servidor.listen(servidor.get('port'),(m,e)=>{
    e ? console.log(e) : console.log('Servidor corriendo en el PUERTO',servidor.get('port'))
})