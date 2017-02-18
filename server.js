var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config=require('./config.js');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


app.get('*', function(req, res) {

  res.sendFile(__dirname +'/Public/Views/Index.html');

});

app.listen(config.port,function (err){
if(err) {

  console.log(err);
}
else {
  console.log("Successfull, Listening to port 3000");
}

})
