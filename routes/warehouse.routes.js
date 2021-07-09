const router = require("express").Router()
const User = require('./../models/User.model')
const Warehouse = require('./../models/Warehouse.model')
const { checkLoggedUser, checkRoles } = require('./../middleware')

router.get('/', (req, res, next) => {

    Warehouse
        .find({ owner: req.session.currentUser })
        .then(warehouse => res.render('warehouse/warehouse', { warehouse }))
        .catch(err => console.log(err))
})

router.get('/registrar', checkLoggedUser, (req, res) => res.render('warehouse/new-warehouse'))

router.post('/registrar', (req, res) => {

    const { name, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Warehouse
        .create({ name, owner: req.session.currentUser, location })
        .then(() => res.redirect('/almacenes'))
        .catch(err => console.log(err))

})

router.get('/detalles/:warehouse_id', (req, res) => {

    const { warehouse_id } = req.params

    Warehouse
        .findById(warehouse_id)
        .then(warehouse => res.render('warehouse/warehouse-details', warehouse))
        .catch(err => console.log(err))

})

router.get('/:warehouse_id/editar', (req, res) => {

    const { warehouse_id } = req.params

    Warehouse
        .findById(warehouse_id)
        .then(warehouse => res.render('warehouse/edit-warehouse', warehouse))
        .catch(err => console.log(err))

})

router.post('/:warehouse_id/editar', (req, res) => {

    const { warehouse_id } = req.params
    const { name, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Warehouse
        .findByIdAndUpdate(warehouse_id, { name, lat, lng })
        .then(() => res.redirect('/almacenes'))
        .catch(err => console.log(err))

})

router.get('/borrar/:warehouse_id', (req, res) => {

    const { warehouse_id } = req.params

    Warehouse
        .findByIdAndRemove(warehouse_id)
        .then(() => res.redirect('/almacenes'))
        .catch(err => console.log(err))

})

module.exports = router