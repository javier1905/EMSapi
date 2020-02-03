const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI

mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology: true});

var conexion = mongoose.connection;

conexion.on('error',console.error.bind(console,'error de conexion'));

conexion.once('open',()=>{ console.log('Conectado a MONGODB') })
