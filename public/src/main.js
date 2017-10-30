let body = document.querySelector('body');
showsContainer = document.createElement('div'); //Container the shows
showsContainer.setAttribute('id', 'showsContainer');
body.append(showsContainer);

function onSuccess(responseData){
  console.log(responseData)
  if (responseData.results.length > 0){
    responseData.results.forEach(e => {
      let name = e.name;
      let poster = e.poster_path;
      let date = e.first_air_date;
      let description = e.overview;
      let showID = e.id;

      ///////////////////////////////////Container for EACH show
      let showListing = document.createElement('div');
      showListing.setAttribute('class', 'showListing');
      showsContainer.append(showListing);

      let form = document.createElement("form");
      form.setAttribute('method',"post");
      form.setAttribute('action',"/shows");
      showListing.append(form)

      let nameDiv = document.createElement('div');
      nameDiv.setAttribute('name', 'name')
      form.append(nameDiv);
      nameDiv.innerHTML += `${name}`;

      if (poster != null){
      let posterDiv = document.createElement('div');
      posterDiv.setAttribute('class', 'poster');
      posterDiv.setAttribute('name', 'poster')
      form.append(posterDiv);
      posterDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${poster})`;
      }

      let dateDiv = document.createElement('div');
      dateDiv.setAttribute('name', 'date');
      form.append(dateDiv)
      dateDiv.innerHTML += `First air date: ${date}`;

      let descriptionDiv = document.createElement('div');
      descriptionDiv.setAttribute('name', 'description');
      form.append(descriptionDiv)
      descriptionDiv.innerHTML += `Show description: ${description}`;

      let showIDDiv = document.createElement('div');
      showIDDiv.setAttribute('name', 'showID');
      form.append(showIDDiv)
      showIDDiv.innerHTML += `Code: ${showID}`;

      let submit = document.createElement("input"); //input element, Submit button
      submit.setAttribute('type',"submit");
      submit.setAttribute('value',"Submit");
      form.append(submit)

      ///////////////////////////////////////// FORM
      // let form = document.createElement("form");
      // form.setAttribute('method',"post");
      // form.setAttribute('action',"/shows");
      // showListing.append(form)
      // let nameInput = document.createElement('input')
      // nameInput.setAttribute('type', 'hidden')
      // nameInput.setAttribute('name', 'name')
      // nameInput.setattribute('value', `${name}`);
      // form.append(nameInput)
      // let posterInput = document.createElement('input')
      // posterInput.setAttribute('type', 'hidden')
      // posterInput.setAttribute('name', 'poster')
      // posterInput.setattribute('value', `${poster}`);
      // form.append(posterInput)
      // let dateInput = document.createElement('input')
      // dateInput.setAttribute('type', 'hidden')
      // dateInput.setAttribute('name', 'date')
      // dateInput.setattribute('value', `${date}`);
      // form.append(dateInput)
      // let descriptionInput = document.createElement('input')
      // descriptionInput.setAttribute('type', 'hidden')
      // descriptionInput.setAttribute('name', 'description')
      // descriptionInput.setattribute('value', `${description}`);
      // form.append(descriptionInput)
      // let IDInput = document.createElement('input')
      // IDInput.setAttribute('type', 'hidden')
      // IDInput.setAttribute('name', 'showcodeid')
      // IDInput.setattribute('value', `${showID}`);
      // form.append(IDInput)
      // //submit button
      // let submit = document.createElement("input");
      // submit.setAttribute('type',"submit");
      // submit.setAttribute('value',"Submit");
      // form.append(submit)
    })
  } else {
    //NO RESULTS FOUNDS
    let noResults = document.createElement('div');
    noResults.setAttribute('class', 'showListing nothing');
    showsContainer.append(noResults);
    noResults.innerHTML += 'No matches found.'
  }
}

let removeItems = false;

document.querySelector('.finder').addEventListener('click', () =>{
  let search = document.querySelector('.search').value;
  let url = `https://api.themoviedb.org/3/search/tv?api_key=93b40ad27ade3177e800e02bd34024d6&language=en-US&query=${search}&page=1`;

if (removeItems){
  //we are getting a nodelist here
  document.querySelectorAll(".showListing").forEach(e => e.parentNode.removeChild(e));
}

removeItems = true;

  fetch(url)
    .then(response => {
      console.log('http response', response);
      return response.json();
    })
    .then(jsonData =>{
      onSuccess(jsonData);
    })
    .catch(err => {
      console.log(err);
    })
})


