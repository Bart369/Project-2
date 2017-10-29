const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-Override');

const app = express();

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Chillin on Port: ${port}`);
});

app.get('/', (req,res) => {
  res.render('index.ejs');
})

const showsRoutes = require('./routes/shows-routes.js');
app.use('/shows',showsRoutes);

app.get('*', (req,res) =>{
  res.status(404).send('404 Not Found.');
});
