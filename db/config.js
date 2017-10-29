const options = {
  query:(event) =>{
    console.log(event.query);
  }
}


const pgp = require('pg-promise')(options)

function setDatabase (){
  if(process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
    return pgp({
      database: 'showsApp',
      port: 5432,
      host: 'localhost'
    })
  } else if(process.env.NODE_ENV === 'production'){
      return pgp(process.env.DATABASE_URL);
  }
}

const db = setDatabase();

module.exports = db;
