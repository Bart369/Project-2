//import express from out dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-Override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

//initialize the app
const app = express();
//add out dotenv files
require('dotenv').config();

//middlewares
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//static files
app.use(express.static('public'));

//views
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;
//tell the app to listen on that particular port
app.listen(port, () =>{
  console.log(`Chillin on Port: ${port}`);
});

//our index route
app.get('/', (req,res) => {
  res.render('index.ejs');
})

//import our show routes tell the app to use them
const showsRoutes = require('./routes/shows-routes.js');
app.use('/shows',showsRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

//error handler
app.get('*', (req,res) =>{
  res.status(404).send('404 Not Found.');
});
