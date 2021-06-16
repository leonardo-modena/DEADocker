let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');


let router = express.Router();

router.get('/:id', (req, res) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let id = req.params.id;
})


module.exports = router;