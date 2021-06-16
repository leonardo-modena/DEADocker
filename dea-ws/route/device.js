let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');


let router = express.Router();

router.get('/all', (req, res) => {
    dbUtils.query(deviceController.query.findAll, null, res)
});

router.get('/:secretKey', (req, res) => {
    let secretKey = req.params.secretKey;
    dbUtils.query(deviceController.query.findBySecretKey, secretKey, res)
});

module.exports = router;