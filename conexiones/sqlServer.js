const mssql = require('mssql');
require('colors')

var URI;

if(process.env.NODE_ENV === 'production'){
     URI = {
        user: process.env.USERSQL,
        password: process.env.PASSWORDSQL,
        database: process.env.DATABASESQL,
        server:process.env.SERVERSQL
    }
}
else{
     URI = {
        user: 'emsDB',
        password: 'belgrano455',
        database: 'EMS_DB_SQL',
        port:1433,
        server:'PC2360'
    }
}

module.exports = mssql.connect(URI)
.then(e=>{
    e ?  console.log('Conectado a SQL SERVER'.blue)
    :
    console.log('Error de conexion !!'.cyan)
})





