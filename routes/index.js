module.exports = app => {

  app.use('/', require('./auth.routes.js'))
  app.use('/', require('./base.routes.js'))
  app.use('/almacenes', require('./warehouse.routes.js'))
  app.use('/envios', require('./shipping.routes.js'))
  app.use('/equipamiento', require('./equipment.routes.js'))
  app.use('/api', require('./api.routes.js'))

}