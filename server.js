// require('dotenv').config();
const express = require('express');
const app = express();
const staticRoot = __dirname + '/src/';

app.use(express.static(__dirname + '/dist/study-buddy'));

// app.use(express.static(__dirname + '/src/'+'index.html'));
// console.log('testing env? ', process.env.NODE_ENV);
// app.use(express.static(__dirname + '/src'));
// Start the app by listening on the default or Heroku port

// app.use(express.static(staticRoot + 'index.html'));
app.use(express.static(staticRoot));
app.use(express.static(__dirname + '/src'));


app.listen(process.env.PORT || 8000, () => {
  console.log('RunTimez listening on 8000');
});
