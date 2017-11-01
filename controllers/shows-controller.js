require('isomorphic-fetch');

const Shows = require('../models/Shows.js');
const User = require('../models/user.js');

const showsController = {};

showsController.favorites = (req,res) => {
    Shows.findAll(req.user.id)
    .then((favorites) =>{
    console.log(favorites);
    res.render('showsViews/shows-favorites.ejs', {favorites});
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Errors man...',
      error: err
    })
  })
}

showsController.create = (req,res) => {
  console.log('req.body:', req.body);
  Shows.create({
    name: req.body.name,
    description: req.body.description,
    first_air_date: req.body.first_air_date,
    posterpath: req.body.posterpath,
    showcodeid: req.body.showcodeid
  },req.user.id).then(shows => {
    res.redirect('/shows/favorites')
  }).catch(err => {
    console.log(err).json({error:err})
  })
}

showsController.findById = (req,res) => {
    fetch(`https://api.themoviedb.org/3/tv/${req.params.code}?api_key=93b40ad27ade3177e800e02bd34024d6&language=en-US`)
    .then(response => {
      console.log('http response', response);
      return response.json();
    })
    .then(jsonData =>{
      res.render('showsViews/show-single.ejs', {jsonData})
    })
    .catch(err => {
      console.log(err);
    })
}

showsController.fetch = (req,res) => {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=93b40ad27ade3177e800e02bd34024d6&language=en-US&query=${req.params.search}&page=1`)
    .then(response => {
      console.log('http response', response);
      return response.json();
    })
    .then(jsonData =>{
      res.render('showsViews/shows-search.ejs', {data: jsonData})
    })
    .catch(err => {
      console.log(err);
    })
}
showsController.destroy = (req,res,next) => {
  Shows.delete(req.params.id)
    .then(() => {
      res.redirect('/shows/favorites');
    }).catch(err => {
      console.log(err).json({error:err})
    })
}


module.exports = showsController;

