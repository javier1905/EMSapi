const mongoose = require('mongoose')
require('colors')

var URI;
if(process.env.NODE_ENV === 'production'){
     URI = process.env.MONGODB_URI
}
else{
     URI = 'mongodb://localhost:5000:27017/usuariosEMS'
}

mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology: true});

var conexion = mongoose.connection;

conexion.on('error',console.error.bind(console,'error de conexion'));

conexion.once('open',()=>{ console.log('Conectado a MONGODB'.red) })
