var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.engine('html', require('ejs').renderFile);
app.set("view engine", 'html');
app.set('views', './public');
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index.html', {})
})

app.get('/history', function (req, res) {
  res.send([])
})

app.post('/history', function (req, res) {
  console.log(req.body);
  res.sendStatus(200)
})

app.listen(3000, function () {
  console.log("Example app listening at localhost:3000");
})
