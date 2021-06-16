let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');

let router = express.Router();

router.get('/location', (req, res) => {
    dbUtils.query(deviceController.query.lastRecordLocation, null, res)
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    dbUtils.query(deviceController.query.lastRecordById, id, res)
})


module.exports = router;