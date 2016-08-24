var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);
app.set("view engine", 'html');
app.set('views', './public');
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index.html', {})
})

app.listen(3000, function () {
  console.log("Example app listening at localhost:3000");
})
