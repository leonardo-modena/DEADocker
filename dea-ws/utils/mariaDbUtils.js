var mariadb = require('mariadb');
var config = require('../config/config.js');

var dbUtils = {
    query: (sqlString, params, res) =>{
        const pool = mariadb.createPool({host: config.databaseParams.host, database: config.databaseParams.database, user: config.databaseParams.user, password: config.databaseParams.password, connectionLimit: 5}) 
        pool.getConnection()
        .then(conn => {
        
          conn.query(sqlString, params)
            .then((rows) => {
              //console.log(rows);
              return res.json(rows);
              //return rows;
            })
            .then((res) => {
              //console.log(res); 
              conn.end();
            })
            .catch(err => {
              //console.log(err); 
              conn.end();
            })
            
        }).catch(err => {
        });
    }
}

module.exports = dbUtils;