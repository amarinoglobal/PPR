const router = require("express").Router()
const User = require('./../models/User.model')
const Shipping = require('./../models/Warehouse.model')
const Warehouse = require('./../models/Warehouse.model')
const { checkLoggedUser, checkRoles } = require('./../middleware')


//Register Shipping

router.get('/', (req, res, next) => {

    Shipping
        .find({ owner: req.session.currentUser })
        .then(shipping => res.render('shipping/shipping', { shipping }))
        .catch(err => console.log(err))
})

router.get('/registrar', checkLoggedUser, (req, res) => {

    Warehouse
        .find({ owner: req.session.currentUser })
        .then(warehouse => res.render('shipping/new-shipping', { warehouse }))
})

router.post('/registrar', (req, res) => {


    const { date, status, equipment, warehouse, lng, lat } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Shipping
        .create({ owner: req.session.currentUser, date, status, equipment, warehouse, location })
        .then(() => res.redirect('/envios'))
        .catch(err => console.log(err))

})

module.exports = router
