const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const env = require('./config/environment');
const router = require('./config/routes');
const auth = require('./lib/auth');
const session = require('express-session');

mongoose.connect(env.dbUri);

const app = express();



app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

//Method-methodOverride
app.use(session({ secret: 'shh...', resave: false, saveUninitialized: false }));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static('public'));
app.use('*', auth.checkAuthStatus);

app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
