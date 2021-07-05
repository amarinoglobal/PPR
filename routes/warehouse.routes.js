const router = require("express").Router()
const User = require('./../models/User.model')
const Warehouse = require('./../models/Warehouse.model')


//Register Warehouse

router.get('/registro-almacen', (req, res) => res.render('warehouse/new-warehouse'))

router.post('/registro-almacen', (req, res) => {


    const { name, owner, lat, lng } = req.body

    const location = {
        type: 'Point',
        coordinates: [lat, lng]



    }

    Warehouse
        .create({ name, owner, location })
        // .then(() => res.redirect('/restaurantes/lista'))
        .then(() => res.send(req.body))
        .catch(err => console.log(err))

})

module.exports = router