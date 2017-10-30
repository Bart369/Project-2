const express = require('express');
const showsRoutes = express.Router();

const showsController = require('../controllers/shows-controller.js');

// showsRoutes.post('/', showsController.create);


// showsRoutes.get('/', showsController.index); THIS WILL LEAD TO FAVORITES maybe
// showsRoutes.get('/:search', (req,res) => {
//   res.render('showsViews/shows-search.ejs')
// })
showsRoutes.get(`/:search`, showsController.fetch);
showsRoutes.get('/search/:code', showsController.findById);

module.exports = showsRoutes;
