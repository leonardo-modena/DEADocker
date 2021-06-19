let express = require('express');
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');

let router = express.Router();


router.get('/:id', (req, res) => {
    let id = req.params.id;
    dbUtils.query(deviceController.query.findUserById, id, res);
})

router.put('/change_user/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let surname = req.body.surname;

    let params = [name, surname, id]

    dbUtils.query(deviceController.query.updateUser, params, res)

})

module.exports = router;