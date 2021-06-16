let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');

let router = express.Router();


router.get('/records:id', (req, res) => {
    let id = req.params.id;
    dbUtils.query(deviceController.query.findRecordsById, id, res);
})

module.exports = router;