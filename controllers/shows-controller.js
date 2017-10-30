require('isomorphic-fetch');

const Shows = require('../models/Shows.js');

const showsController = {};


// showsController.create = (req,res) => {
//   Shows.create({
//     name: req.body.name,
//     description: req.body.description,
//     first_air_date: req.body.date,
//     posterPath: req.body.poster,
//     showcodeid: req.body.showcodeid
//   }).then(show => {
//     res.redirect(`/shows`)
//   }).catch(err => {
//     console.log(err).json({error:err})
//   })
// }

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





module.exports = showsController;

