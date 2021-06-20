require('dotenv').config();

const express = require('express')
const cors = require('cors');
const helmet = require("helmet");
const config = require('./config/config.js')
const auth = require('./utils/auth.js');

const app = express()
//abilita il cors per tutte le origini
app.use(cors());

app.use(helmet());

//abilita i middleware express che traducoino il body di una richiesta http in un oggetto json
app.use(express.urlencoded())
app.use(express.json())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

const routerDevice = require('./route/device.js');
const routerAvg24h = require('./route/avg24h.js');
const routerLastRecord = require('./route/last-record.js');
const routerRecords = require('./route/records.js');
const routerRecordsInterval = require('./route/records-interval.js');
const routerUser = require('./route/user.js');


app.get('/', (req, res) => {
    res.send("Ciao questo é il Web Service di DEA project")
})

app.use(auth);

app.use('/device', routerDevice)
app.use('/avg24h', routerAvg24h)
app.use('/last_record', routerLastRecord)
app.use('/records', routerRecords)
app.use('/records_interval', routerRecordsInterval)
app.use('/user', routerUser)





app.listen(config.port, () => {
    console.log(`Example app listening at ${config.serverLink}`)
})