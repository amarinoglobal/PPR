const router = require("express").Router()
const Equipment = require('./../models/Equipment.model')
const Warehouse = require('./../models/Warehouse.model')

router.get('/', (req, res, next) => {
    Equipment
        .find({ owner: req.session.currentUser })
        .then(equipment => res.render('equipment/equipment', { equipment }))
        .catch(err => console.log(err))

})

router.get('/registrar', (req, res) => {

    Warehouse
        .find({ owner: req.session.currentUser })
        .then(warehouse => res.render('equipment/new-equipment', { warehouse }))
        .catch(err => console.log(err))

})

router.post('/registrar', (req, res) => {

    const { name, brand, serie, description, status, warehouse, lng, lat } = req.body
    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Equipment
        .create({ name, brand, serie, description, status, warehouse, owner: req.session.currentUser, location })
        .then(() => res.redirect('/equipamiento'))
        .catch(err => console.log(err))

})

router.get('/detalles/:equipment_id', (req, res) => {

    const { equipment_id } = req.params

    Equipment
        .findById(equipment_id)
        .populate('warehouse')
        .then(equipment => res.render('equipment/equipment-details', equipment))
        .catch(err => console.log(err))

})

router.get('/:equipment_id/editar', (req, res) => {

    const { equipment_id } = req.params

    let p1 = Warehouse
        .find({ owner: req.session.currentUser })

    let p2 = Equipment
        .findById(equipment_id)
        .populate('warehouse')

    Promise.all([p1, p2])
        .then(values => res.render('equipment/edit-equipment', { warehouse: values[0], equipment: values[1] }))
        .catch(err => {
            console.log(err)
        })

})

router.post('/:equipment_id/editar', (req, res) => {

    const { equipment_id } = req.params
    const { name, brand, serie, status, warehouse, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Equipment
        .findByIdAndUpdate(equipment_id, { name, brand, serie, status, warehouse, location })
        .then(() => res.redirect('/equipamiento'))
        .catch(err => console.log(err))

})

router.get('/borrar/:equipment_id', (req, res) => {

    const { equipment_id } = req.params

    Equipment
        .findByIdAndRemove(equipment_id)
        .then(() => res.redirect('/equipamiento'))
        .catch(err => console.log(err))

})

module.exports = router