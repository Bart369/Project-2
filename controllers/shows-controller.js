require('isomorphic-fetch');

const Shows = require('../models/Shows.js');

const showsController = {};


showsController.create = (req,res) => {
  Shows.create({
    name: req.body.name,
    description: req.body.description,
    first_air_date: req.body.date,
    posterPath: req.body.poster,
    showcodeid: req.body.showcodeid
  }).then(show => {
    res.redirect(`/shows`)
  }).catch(err => {
    console.log(err).json({error:err})
  })
}



module.exports = showsController;

