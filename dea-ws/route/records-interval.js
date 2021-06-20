let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');


let router = express.Router();


router.get('/:secretKey', async(req, res) => {
    let secretKey = req.params.secretKey;
    dbUtils.query(deviceController.query.recordIntervalBySecretKey, secretKey, res)
})
module.exports = router;