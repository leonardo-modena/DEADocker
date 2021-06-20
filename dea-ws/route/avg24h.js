let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')


let deviceController = require('../controller/device.controller.js');


let router = express.Router();
const reducer = (accumulator, currentValue) => accumulator + currentValue;

router.get('/25/:id', (req, res) => {
    let id = req.params.id;

    let arrayPm25;

    dbUtils.queryCallback(deviceController.query.Records24hourById, id, (data) => {
        arrayPm25 = data.map(record => record.pm25);
    })
    res.json({ 'Pm25Avarage': arrayPm25.reduce(reducer) });

})

router.get('/10/:id', (req, res) => {
    let id = req.params.id;

    let arrayPm10;

    dbUtils.queryCallback(deviceController.query.Records24hourById, id, (data) => {
        arrayPm10 = data.map(record => record.pm10);
    })
    res.json({ 'Pm10Avarage': arrayPm10.reduce(reducer) });
})


module.exports = router;