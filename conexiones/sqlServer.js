var Connection = require('tedious').Connection

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
    };
}
else{     
    config = {
        server: 'PC2360',
        port:1433,
        options: {},
        authentication: {
            type: "default",
            options: {  
                userName: 'emsDB',
                password: 'belgrano455',
                database: 'EMS_DB_SQL'
            }
        }
        ,options: {
            database: 'EMS_DB_SQL',
        }
    };

}
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        if(err){
            console.log('error de conexion',err)
        }  
        console.log('Conectado SQL SERVER'.blue); 
        executeStatement();        
        
    });

    var Request = require('tedious').Request;  
     
    function executeStatement() {  
        request = new Request("SELECT * from maquinas", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
            console.log(rowCount + ' rows returned');  
        
        });  
        connection.execSql(request);  
    }

