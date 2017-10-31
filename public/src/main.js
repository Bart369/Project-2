
document.querySelector('.finder').addEventListener('click', () =>{
   search = document.querySelector('.search').value;
   let url = `/shows/${search}`;
  window.location = url;
})
