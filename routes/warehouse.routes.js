const router = require("express").Router()
const User = require('./../models/User.model')
const Warehouse = require('./../models/Warehouse.model')


//Register Warehouse

router.get('/', (req, res, next) => {

    Warehouse
        .find({ owner: req.session.currentUser })
        // .then(warehouse => res.render('/movies', { movies }))

        .catch(err => console.log(err))
})

router.get('/registro-almacen', (req, res) => res.render('warehouse/new-warehouse'))

router.post('/registro-almacen', (req, res) => {


    const { name, lat, lng } = req.body

    console.log('EL ALMACEN', req.body)

    const location = {
        type: 'Point',
        coordinates: [lat, lng]
    }

    Warehouse
        .create({ name, owner: req.session.currentUser, location })
        // .then(() => res.redirect('/warehouse'))
        .then(() => res.send(req.body))
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

    Movie
        .findById(warehouse_id)
        .then(movies => res.render('warehouse/edit-warehouse', warehouse))

        .catch(err => console.log(err))


})







module.exports = router