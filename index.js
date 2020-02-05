const express = require('express')
const cors = require('cors')
var morgan;

if(process.env.NODE_ENV === 'development'){
    require('colors')
     morgan = require('morgan')
}
console.log(process.env.NODE_ENV)

const servidor = express()
servidor.use(cors())

// middelware

servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))

// servidor.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); //<= sólo permitirá conexiones cruzadas desde esta URI
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
if(process.env.NODE_ENV === 'development'){
    servidor.use(morgan('dev'))
}


servidor.use('/api/maquinas',require('./rutasApi/maquinas'))
servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/logueo',require('./rutasApi/Logueo'))
servidor.use('/api/autentificasion',require('./rutasApi/Autentificasion'))

//Settings
servidor.set('port',process.env.PORT || 5000)

servidor.listen(servidor.get('port'),(m,e)=>{
    if(e){console.log(e)}  
    else {
        if(process.env.NODE_ENV === 'development'){
            console.log('Servidor corriendo en el PUERTO'.yellow,servidor.get('port'))
        }
        else{
            console.log('Servidor corriendo en el PUERTO',servidor.get('port'))
        }
    }
})