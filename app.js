const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/Golden', (req, res) => {
  res.render('Golden');
});

app.get('/Pastor', (req, res) => {
  res.render('Pastor');
});

app.get('/Pequenis', (req, res) => {
  res.render('Pequenis');
});


  app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });


  
  