const express = require('express');
const showsRoutes = express.Router();

const showsController = require('../controllers/shows-controller.js');
// const showsSearcher = require('../services/shows/shows-searcher.js');


// showsRoutes.get('/', showsController.index);
showsRoutes.get('/search', (req,res) => {
  res.render('showsViews/shows-search.ejs')
});

module.exports = showsRoutes;
