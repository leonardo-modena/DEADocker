var mysql = require('mysql');
var config = require('../config/config.js');

var dbUtils = {
    query: (query, params, res) => {
        var connessione = mysql.createConnection(config.databaseParams);
        connessione.query(query, params, (err, data) => {
            if (!err) {
                return res.json(data);
            } else {
                console.log("Errore...");
                res.json({ 'err': err })
            }
        })
    },

    queryCallback: (query, params, res, callback) => {
        var connessione = mysql.createConnection(config.databaseParams);
        connessione.query(query, params, (err, data) => {
            if (!err) {
                return callback(data)
            } else {
                console.log("Errore...");
                res.json({ 'err': err })
            }
        })
    }


}

module.exports = dbUtils;