var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/news', function(req, res){
  res.sendFile(__dirname + '/about.html');
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

app.listen(3000);
