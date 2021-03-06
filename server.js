const path = require('path');
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();
const partialsPath = path.join(__dirname, 'views', 'partials');

hbs.registerPartials(partialsPath);
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMsg: 'Welcome To my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}!`);
});
