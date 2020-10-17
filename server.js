// require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/study-buddy'));
// app.use(expressSession({ secret: 'Gotta go fast!',
//  resave: true, saveUninitialized: true,

// app.use(express.static(__dirname + '/src'));
// app.use(express.static(__dirname + '/src/'+'index.html'));

// console.log('testing env? ', process.env.NODE_ENV);
// app.use(express.static(__dirname + '/src'));

app.get('/', function(req, res) {
  console.log('triggered /* route. dirName is ', __dirname);
    res.sendFile('src/index.html', {root: path.dirname(__dirname+'/study-buddy/')})
  });
// Start the app by listening on the default or Heroku port

// app.use(express.static(staticRoot + 'index.html'));


app.listen(process.env.PORT || 8000, () => {
  console.log('RunTimez listening on 8000');
});
