const mssql = require('mssql');


const URI = {
    user: process.env.USERSQL,
    password: process.env.PASSWORDSQL,
    database: process.env.DATABASESQL,
    server:process.env.SERVERSQL
}

module.exports = mssql.connect(URI)
.then(e=>{
    e ?  console.log('Conectado a SQL SERVER')
    :
    console.log('Error de conexion !!')
})





