const mongoose = require('mongoose')
if(process.env.NODE_ENV === 'development'){
require('colors')
}

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

conexion.once('open',()=>{
     if(process.env.NODE_ENV === 'development'){
          console .log('Conectado a MONGODB'.red)
     } 
     else{
          console .log('Conectado a MONGODB')
     }
})
