// Enviroment & Dependencies
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
app.set('view engine', 'ejs'); 
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');

//Controllers

const authController = require('./controllers/auth.js');

const clientRoutes = require ("./routes/clients");

const noteRoutes = require("./routes/notes")

//Port Setup

const port = process.env.PORT ? process.env.PORT : '3000';

//Data Connection
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

//Middleware

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
// app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//Routes

// Home Page route 
app.get('/', (req, res) => {
  res.render('index.ejs', {
    user: req.session.user,
  });
});
// Test protected route
app.get('/vip-lounge', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.send('Sorry, no guests allowed.');
  }
});
// Auth routes
app.use('/auth', authController);
app.use("/clients", clientRoutes);
app.use("/notes", noteRoutes);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
