const router = require("express").Router()
const User = require('./../models/User.model')
const Shipping = require('./../models/Shipping.model')
const Warehouse = require('./../models/Warehouse.model')
const Equipment = require('./../models/Equipment.model')
const { checkLoggedUser, checkRoles } = require('./../middleware')

router.get('/', (req, res, next) => {

    Shipping
        .find({ owner: req.session.currentUser })
        .then(shipping => res.render('shipping/shipping', { shipping }))
        .catch(err => console.log(err))

})

router.get('/registrar', (req, res) => {

    let p1 = Warehouse
        .find({ owner: req.session.currentUser })

    let p2 = Equipment
        .find({ owner: req.session.currentUser })

    Promise.all([p1, p2]) //[ res1, res2 ]
        .then(values => res.render('shipping/new-shipping', { warehouse: values[0], equipment: values[1] }))
        .catch(reason => {
            console.log(reason)
        })

})

router.post('/registrar', (req, res) => {

    const { date, status, equipment, warehouse, lng, lat } = req.body

    if (lat && lng) {
        const location = {
            type: 'Point',
            coordinates: [lat, lng]
        }
        Shipping
            .create({ date, owner: req.session.currentUser, status, equipment, location })
            .then(() => res.redirect('/envios'))
            .catch(err => console.log(err))

    }
    else {
        Shipping
            .create({ date, owner: req.session.currentUser, status, equipment, warehouse })
            .then(() => res.redirect('/envios'))
            .catch(err => console.log(err))

    }


})

router.get('/:shipping_id/editar', (req, res) => {

    const { shipping_id } = req.params

    let p1 = Warehouse
        .find({ owner: req.session.currentUser })

    let p2 = Equipment
        .find({ owner: req.session.currentUser })
        .populate('warehouse')

    let p3 = Shipping
        .findById(shipping_id)
        .populate('equipment')
        .populate('warehouse')

    Promise.all([p1, p2, p3])
        .then(values => res.render('shipping/edit-shipping', { warehouse: values[0], equipment: values[1], shipping: values[2] }))
        .catch(err => {
            console.log(err)
        })

})

router.post('/:shipping_id/editar', (req, res) => {

    const { shipping_id } = req.params
    const { date, status, equipment, warehouse, lng, lat } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Shipping
        .findByIdAndUpdate(shipping_id, { date, status, equipment, warehouse, location })
        .then(() => res.redirect('/envios'))
        .catch(err => console.log(err))

})

router.get('/detalles/:shipping_id', (req, res) => {

    const { shipping_id } = req.params

    Shipping
        .findById(shipping_id)
        .populate('warehouse')
        .populate('equipment')
        .then(shipping => res.render('shipping/shipping-details', shipping))
        .catch(err => console.log(err))
})

router.get('/borrar/:shipping_id', (req, res) => {

    const { shipping_id } = req.params

    Shipping
        .findByIdAndRemove(shipping_id)
        .then(() => res.redirect('/almacenes'))
        .catch(err => console.log(err))

})


module.exports = router
