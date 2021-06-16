require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require("helmet");
const config = require('./config/config.js')
const auth = require('./utils/auth.js');

const app = express()

app.use(helmet());

//abilita bodyParser che traduce il body di una richiesta http in un oggetto json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//abilita il cors per tutte le origini
app.use(cors());

const routerDevice = require('./route/device.js');
const routerPm2524h = require('./route/pm2524h.js');
const routerLastRecord = require('./route/last-record.js');
const routerRecords = require('./route/records.js');
const routerRecordsInterval = require('./route/records-interval.js');


app.get('/', (req, res) => {
    res.send("Ciao questo é il Web Service di DEA project")
})

app.use(auth);

app.use('/device', routerDevice)
app.use('/pm25-24h', routerPm2524h)
app.use('/last-record', routerLastRecord)
app.use('/records', routerRecords)
app.use('/records-interval', routerRecordsInterval)




app.listen(config.port, () => {
    console.log(`Example app listening at ${config.serverLink}`)
})