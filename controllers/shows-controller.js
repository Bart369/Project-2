
const showsController = {};

showsController.search = (res,req) => {
  let search = document.querySelector('.search').value;
  let url = `https://api.themoviedb.org/3/search/tv?api_key=93b40ad27ade3177e800e02bd34024d6&language=en-US&query=${search}&page=1`;
  fetch(url)
    .then(response => {
      console.log('http response'. response);
      return response.json();
    })
    .then(jsonData =>{
      res.render('shows-search.ejs', {jsonData: results})
    })
    .catch(err => {
      console.log(err);
    })

}

module.exports = showsController;

