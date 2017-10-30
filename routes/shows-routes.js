const express = require('express');
const showsRoutes = express.Router();

const showsController = require('../controllers/shows-controller.js');

showsRoutes.post('/', showsController.create);


// showsRoutes.get('/', showsController.index); THIS WILL LEAD TO FAVORITES maybe
showsRoutes.get('/', (req,res) => {
  res.render('showsViews/shows-search.ejs')
});

module.exports = showsRoutes;
