const express= require ('express');
const mongoose= require ('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
require ('./models/User');
require ('./services/passport');

mongoose.connect(keys.mongooseUri);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
            maxAge : 30 * 24 * 60 * 60 *1000,
            keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth-routes') (app);
require ('./routes/billing-routes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
