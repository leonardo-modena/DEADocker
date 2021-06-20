require('dotenv').config()


const config = {
    name: "DEA - ws - Dev Mode",
    port: process.env.PORT,
    protocol: "http",
    serverUrl: "localhost",
    serverLink: "http://localhost:3200/",
    databaseParams: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
    },
}

module.exports = config;