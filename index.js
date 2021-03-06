var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



var index = require('./routes/index');
var auth = require('./routes/auth');
var compaings = require('./routes/compaings');
var voits = require('./routes/voits');
var users = require('./routes/users');


app.set('port', (process.env.PORT || 5000));

// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'client/dist')));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
//
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});



// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/dist/index.html'));
// });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use('/', index);
app.use('/auth', auth);
app.use('/api/compaings', compaings);
app.use('/api/voits', voits);
app.use('/api/users', users);




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
