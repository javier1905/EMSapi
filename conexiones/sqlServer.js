var Connection = require('tedious').Connection
var Request = require('tedious').Request

if(process.env.NODE_ENV === 'development'){ require('colors') }

var config

if(process.env.NODE_ENV === 'production'){
    config = {
        server: process.env.SERVERSQL,
        options: {},
        authentication: {
            type: "default",
            options: {
                userName: process.env.USERSQL,
                password: process.env.PASSWORDSQL,
                database: process.env.DATABASESQL
            }
        }
        ,options: {
            database: process.env.DATABASESQL,
        }
    }
}
else{
    config = {
        server: 'DESKTOP-G1I097C',
        port:1433,
        options: {},
        authentication: {
            type: "default",
            options: {
                userName: 'DBjav',
                password: 'belgrano455',
                database: 'EMS_DB_SQL'
            }
        },
        options: {
            database: "EMS_DB_SQL",
            rowCollectionOnRequestCompletion: true,
            rowCollectionOnDone: true
        }
    }
}
// var connection = new Connection(config)
// connection.on('connect', err => {
//     if(err){ console.log('error de conexion',err) }
//     console.log('Conectado SQL SERVER'.blue)
   
// })

const createSelectQuery = () =>{
    var jsonSql = new (require('json-sql'))
    let sql = jsonSql.build({
        dialect: 'mssql',
        type: 'select',
        table: 'maquinas',
        fields: [
            'id',
            'nombre',
            'descripcion',
            'id_tipos_maquina',
            'id_planta',
            'estado'
        ]
    })
    return sql.query
}
const Promise = require('bluebird')
const executeStatement = (query) => {

    let resultEntity = {
        result: {},
        error: null
    }
    return new Promise((resolve, reject) => {
        var connection = new Connection(config)
        connection.on('connect', function (err) {
            let request = new Request(query,  (err, rowCount, rows) => {
                if (err) { console.log('pase por el error')
                    resultEntity.error = err
                    reject(resultEntity)
                } else {console.log(rows)
                    resultEntity.result = rows
                    resolve(resultEntity)
                }
                 connection.close()
            })
            connection.execSql(request)
        }
        )
    })
  
    // request = new Request("SELECT * from maquinas", err => {
    //     if (err) { console.log(err) }
    // })
    // var result = ""
    // request.on('row', columns => {
    //     columns.forEach(column => {
    //         if (column.value === null) { console.log('NULL') }
    //         else { result+= column.value + " " ;console.log(column.metadata.colName,column.value)}
    //     })
    //     // console.log(result)
    //     result =""
    // })
    // request.on('done', (rowCount, more) => {
    //     console.log(rowCount + ' rows returned')
    // })
    // connection.execSql(request)
}
console.log(createSelectQuery())
executeStatement(createSelectQuery())
.then(dato=>console.log(dato))
