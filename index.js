var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/news/:id', function(req, res){
  var obj = {
    title: 'News',
    id: 4,
    par: ['Paragraph', 'Regular text', 'Numbers: 2, 4, 6', '99']
  };
  res.render('news', {
    newsId: req.params.id,
    obj: obj
  });
});

app.post('/about', urlencodedParser, function(req, res){
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.render('about-succes', {data: req.body});
});

app.listen(3000);
