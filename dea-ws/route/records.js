let express = require('express');

let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');

let router = express.Router();

router.post('/new_record', (req, res) => {
    let record = req.body

    let date = new Date();
    let dateTime = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

    let newRecord = {
        'id': null,
        'pm25': record.pm25,
        'pm10': record.pm10,
        'recordingtime': dateTime,
        'fkDevice': record.fkDevice,
    }

    dbUtils.query(deviceController.query.createRecord, newRecord, res)
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    dbUtils.query(deviceController.query.findRecordsById, id, res);
})

module.exports = router;