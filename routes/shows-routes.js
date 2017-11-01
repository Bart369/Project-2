const express = require('express');
const showsRoutes = express.Router();

const showsController = require('../controllers/shows-controller.js');
const authHelpers = require('../services/auth/auth-helpers');


showsRoutes.get('/', (req,res) => {
  res.render('showsViews/shows-searchbar.ejs')
})
showsRoutes.get('/favorites/', authHelpers.loginRequired, showsController.favorites);
showsRoutes.post('/add', authHelpers.loginRequired, showsController.create);
showsRoutes.get(`/:search`, showsController.fetch);
showsRoutes.get('/search/:code', showsController.findById);
showsRoutes.delete('/search/:id', showsController.destroy);

module.exports = showsRoutes;
