const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config;


const app = express();
const port = process.env.PORT || 3000;

// parsing middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application /json
app.use(bodyParser.json());
// static files
app.use(express.static('public'));

// templating engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

//router
app.get('', (req, res) => {
    res.render('home');
});




app.listen(port, () => console.log(`listening on port ${port}`));