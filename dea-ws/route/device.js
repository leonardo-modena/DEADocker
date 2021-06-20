var cors = require("cors");
app.use(cors());

let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');


let router = express.Router();

router.get('/all', (req, res) => {
    dbUtils.query(deviceController.query.findAll, null, res)
});

router.get('/by_secret_key/:secretKey', (req, res) => {
    let secretKey = req.params.secretKey;
    dbUtils.query(deviceController.query.findBySecretKey, secretKey, res)
});

router.get('/by_id/:id', (req, res) => {
    let id = req.params.id;
    dbUtils.query(deviceController.query.findById, id, res)
});

router.put('/new_secret_key/:id', (req, res) => {
    let id = req.params.id;
    let newSecretKey = req.body.secretKey;

    let params = [newSecretKey, id]

    dbUtils.query(deviceController.query.updateSecretKey, params, res)

})

module.exports = router;