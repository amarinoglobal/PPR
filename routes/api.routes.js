const router = require("express").Router()
const Equipment = require('./../models/Equipment.model')
const Warehouse = require('./../models/Warehouse.model')

router.get('/placeEquipment', (req, res) => {

    Equipment
        .find({ owner: req.session.currentUser })
        .then(equipment => res.json(equipment))
        .catch(err => console.log(err))

})

router.get('/placeWarehouse', (req, res) => {

    Warehouse
        .find({ owner: req.session.currentUser })
        .then(warehouse => res.json(warehouse))
        .catch(err => console.log(err))

})

module.exports = router