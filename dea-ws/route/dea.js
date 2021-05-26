let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');


let router = express.Router();


router.get('/devices', (req, res) => {
    dbUtils.query(deviceController.query.findAll, null, res)
    //res.sendStatus(200).json(rows)

});

router.get('/devices:id', (req, res) => {
    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.findById, id, res)
    res.sendStatus(200).json(rows)
});

router.get('/records:id', (req, res) => {
    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.findRecordsById, id, res);
    res.sendStatus(200).json(rows);
})

router.get('/last-record-id:id', (req, res) => {
    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.lastRecordById, id , res)
    res.sendStatus(200).json(rows)
})

router.get('/last-record-location', (req, res) => {
    let rows = dbUtils.query(deviceController.query.lastRecordLocation ,null, res)
    res.sendStatus(200).json(rows)
});

router.get('/avg-pm25-24h:id', (req, res) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.pm25Records24hourById, id, res)
    let recordsObj = JSON.parse(rows);
    let avg = recordsObj.reduce(reducer);

    res.sendStatus(200).send(avg);
})

router.get('/avg-pm10-24h:id', (req, res) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.pm10Records24hourById, id, res)
    let recordsObj = JSON.parse(rows);
    let avg = recordsObj.reduce(reducer);

    res.sendStatus(200).send(avg);
})


router.get('/avg-pm25-48h:id', (req, res) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.pm25Records48hourById, id, res)
    let recordsObj = JSON.parse(rows);
    let avg = recordsObj.reduce(reducer);

    res.sendStatus(200).send(avg);
})

router.get('/avg-pm10-48h:id', (req, res) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let id = req.params.id;
    let rows = dbUtils.query(deviceController.query.pm10Records48hourById, id, res)
    let recordsObj = JSON.parse(rows);
    let avg = recordsObj.reduce(reducer);

    res.sendStatus(200).send(avg);
})


module.exports = router;