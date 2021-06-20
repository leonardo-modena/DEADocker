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