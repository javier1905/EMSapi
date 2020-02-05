const mssql = require('mssql');
if(process.env.NODE_ENV === 'development'){
    require('colors')
}

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
    if(!e){
        if(process.env.NODE_ENV === 'development'){
            console.log('Conectado a SQL SERVER'.blue)
        }        
    }  
    else{
        console.log('Error de conexion !!')
    }
    
})





