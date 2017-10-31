const express = require('express');
const showsRoutes = express.Router();

const showsController = require('../controllers/shows-controller.js');

// showsRoutes.post('/', showsController.create);



showsRoutes.get('/', (req,res) => {
  res.render('showsViews/shows-search.ejs')
})
showsRoutes.get('/favorites', (showsController.favorites));
showsRoutes.post('/add', showsController.create);
showsRoutes.get(`/:search`, showsController.fetch);
showsRoutes.get('/search/:code', showsController.findById);
showsRoutes.delete('/search/:id', showsController.destroy);

module.exports = showsRoutes;
