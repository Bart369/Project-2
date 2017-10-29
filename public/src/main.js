let body = document.querySelector('body');
let showsContainer = document.createElement('div');
showsContainer.setAttribute('id', 'showsContainer');
body.append(showsContainer);

function onSuccess(responseData){
  console.log(responseData)
  for (let i = 0; i < responseData.results.length; i++){

    let name = responseData.results[i].name;
    let poster = responseData.results[i].poster_path;
    let date = responseData.results[i].first_air_date;
    let description = responseData.results[i].overview;
    let showID = responseData.results[i].id;

    let showListing = document.createElement('div');
    showListing.setAttribute('class', 'showListing');
    showsContainer.append(showListing);
    let nameDiv = document.createElement('div');
    showListing.append(nameDiv);
    nameDiv.innerHTML += `${name}`;

    if (poster != null){
    let posterDiv = document.createElement('div');
    posterDiv.setAttribute('class', 'poster');
    showListing.append(posterDiv);
    posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${poster})`;
    }

    let dateDiv = document.createElement('div');
    showListing.append(dateDiv)
    dateDiv.innerHTML += `${date}`;

    let descriptionDiv = document.createElement('div');
    showListing.append(descriptionDiv)
    descriptionDiv.innerHTML += `${description}`;
  }
};


document.querySelector('button').addEventListener('click', () =>{
  let search = document.querySelector('.search').value;
  url = `https://api.themoviedb.org/3/search/tv?api_key=93b40ad27ade3177e800e02bd34024d6&language=en-US&query=${search}&page=1`;

  fetch(url)
    .then(response => {
      console.log('http response'. response);
      return response.json();
    })
    .then(jsonData =>{
      onSuccess(jsonData);
    })
    .catch(err => {
      console.log(err);
    })
})


