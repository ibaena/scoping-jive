var express = require('express'),
  app = express();

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
  console.log('hey man were rocking and rolling to the tune of %s', PORT);
});


app.get('/', function(req, res){
  res.send('TWIX ');
});
