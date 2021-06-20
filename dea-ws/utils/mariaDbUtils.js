var mysql = require('mysql');
var config = require('../config/config.js');

var dbUtils = {
    query: (query, params, res) => {
        var connessione = mysql.createConnection(config.databaseParams);
        connessione.query(query, params, (err, data) => {
            if (!err) {
                console.log(data, query, params);
                return res.json(data);
            } else {
                console.log("Errore...", err);
            }
        })
    },

    queryCallback: (query, params, callback) => {
        var connessione = mysql.createConnection(config.databaseParams);
        connessione.query(query, params, (err, data) => {
            if (!err) {
                return callback(data)
            } else {
                console.log("Errore...", err);
            }
        })
    }


}

module.exports = dbUtils;