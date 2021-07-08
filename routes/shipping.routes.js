const router = require("express").Router()
const User = require('./../models/User.model')
const Shipping = require('./../models/Shipping.model')
const Warehouse = require('./../models/Warehouse.model')
const Equipment = require('./../models/Equipment.model')

const { checkLoggedUser, checkRoles } = require('./../middleware')


//Register Shipping

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



    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Shipping
        .create({ date, owner: req.session.currentUser, status, equipment, warehouse, location })
        // .then(() => res.redirect('/envios'))

        .then(() => res.send(req.body))
        .catch(err => console.log(err))

})

module.exports = router
