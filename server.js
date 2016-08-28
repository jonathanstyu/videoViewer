var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var bodyParser = require('body-parser');
// var connectionString = app.get('env') === 'development' ? 'postgres://localhost:5432/movies' : ;
// console.log(connectionString);
var db = pgp(`${process.env.DATABASE_URL}?ssl=true`);

// Express engine settings
app.engine('html', require('ejs').renderFile);
app.set("view engine", 'html');
app.set('views', './public');
app.use(express.static('public'));
app.use(bodyParser.json());

// Serves the SPA
app.get('/', function (req, res) {
  res.render('index.html', {})
})

// API actions
app.get('/history', function (req, res) {
  db.any("SELECT * FROM movies")
    .then(function (data) {
      res.send(data)
    }).catch(function (error) {
      console.log(error.message);
    });
})

app.post('/history', function (req, res) {
  db.none("INSERT into movies VALUES($1)", JSON.stringify(req.body))
    .then(function () {
      res.sendStatus(200)
    })
    .catch(function (error) {
      console.log(error.message);
    })
})

app.listen((process.env.PORT || 3000), function () {
  console.log("Example app listening at localhost:3000");
})
