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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//abilita il cors per tutte le origini
app.use(cors());

const routerDea = require('./route/dea.js');

app.get('/', (req, res) => {
  res.send("HEllo")
})

app.use(auth);

app.use('/dea', routerDea)


app.listen(config.port, () => {
  console.log(`Example app listening at ${config.serverLink}`)
})
