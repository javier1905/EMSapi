const express = require('express')
// const morgan = require('morgan')
// const path = require('path')
// require('colors')

const servidor = express()

// middelware
servidor.use(express.json())
// servidor.use(morgan('dev'))

servidor.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

//Settings
servidor.set('port',process.env.PORT || 5000)

servidor.listen(servidor.get('port'),(m,e)=>{
    e ? console.log(e) : console.log('Servidor corriendo en el PUERTO',servidor.get('port'))
})