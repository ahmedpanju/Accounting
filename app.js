var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.get('*', routes.notFound);

app.listen(process.env.PORT || 3000);