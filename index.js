const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
require('colors')

const servidor = express()
servidor.use(cors())

// middelware

servidor.use(express.json())
servidor.use(express.urlencoded({extended: true}))

servidor.use(morgan('dev'))

servidor.use('/api/maquinas',require('./rutasApi/maquinas'))
servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/logueo',require('./rutasApi/Logueo'))
servidor.use('/api/autentificasion',require('./rutasApi/Autentificasion'))
 
//Settings
servidor.set('port',process.env.PORT || 5000)

servidor.listen(servidor.get('port'),(m,e)=>{
    e ? console.log(e) : console.log('Servidor corriendo en el PUERTO'.yellow,servidor.get('port'))
})