
document.querySelector('.finder').addEventListener('click', () =>{
   search = document.querySelector('.search').value;
   let url = `/shows/${search}`;
  window.location = url;
})

document.querySelector('.single').addEventListener('click', () =>{
   code = document.querySelector('.code').value;
   let url = `/shows/search/${code}`;
  window.location = url;
})
