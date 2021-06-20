let express = require('express');
var cors = require("cors");
app.use(cors());
let dbUtils = require('../utils/mariaDbUtils.js')
let deviceController = require('../controller/device.controller.js');

let router = express.Router();


router.get('/:id', (req, res) => {
    let id = req.params.id;
    dbUtils.query(deviceController.query.findUserById, id, res);
})

router.post('/new_user', (req, res) => {
    let user = req.body;
    let newUser = {
        'id': null,
        'name': user.name,
        'surname': user.surname
    };

    dbUtils.query(deviceController.query.createUser, newUser, res)

})

router.put('/change_user/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let surname = req.body.surname;

    let params = [name, surname, id]

    dbUtils.query(deviceController.query.updateUser, params, res)

})

module.exports = router;