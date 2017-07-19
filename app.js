var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//set up controllers
todoController(app);



//listening
app.listen(3000);
console.log('Listening to port 3000');
