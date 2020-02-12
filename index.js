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

if(process.env.NODE_ENV === 'development'){
    servidor.use(morgan('dev'))
}


servidor.use('/api/maquinas',require('./rutasApi/maquinas'))
servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/logueo',require('./rutasApi/Logueo'))
servidor.use('/api/autentificasion',require('./rutasApi/Autentificasion'))
servidor.use('/api/piezas',require('./rutasApi/piezas'))
servidor.use('/api/moldes',require('./rutasApi/moldes'))
servidor.use('api/defectos',require('./rutasApi/defectos'))

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