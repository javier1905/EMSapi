const mssql = require('mssql');
if(process.env.NODE_ENV === 'development'){ require('colors') }

var URI

if(process.env.NODE_ENV === 'production'){
    URI = {
        user: process.env.USERSQL,
        password: process.env.PASSWORDSQL,
        database: process.env.DATABASESQL,
        server:process.env.SERVERSQL,
        options:{
            enableArithAbort:true,
            encrypt:false
        },
    }
}
else{
    URI = {
        user: 'DBjav',
        password: 'belgrano455',
        database: 'EMS_DB_SQL',
        port:1433,
        server:'DESKTOP-G1I097C',
        options:{
            appName:'ems-node-api',
            enableArithAbort:true,
            encrypt:false
        }
        ,
        connectionTimeOut:150000,
        driver:'tedious',
        stream:false,
        pool:{
            max:20,
            min:0,
            idleTimeoutMillis:30000,
        }
    }
}

module.exports = mssql.connect(URI)
.then(pool=>{
    if(pool._connected){
        if(process.env.NODE_ENV === 'development'){
            console.log('Conectado a SQL SERVER'.blue)
        }
    }
    else{
        console.log('Error de Conexion',pool._connected)
    }
})