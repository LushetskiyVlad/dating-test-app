const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const router = require('./src/routes');
const { sequelize } = require('./src/db/sequelize');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./config/passport');
app.use(passport.initialize());

app.use('/', router);

async function start() {
    try {
        // await sequelize.sync({force: true});
        await sequelize.authenticate();
        console.log('Connected to Db!');

        app.listen(PORT, () => {
            console.log('Server has been started...');
        });
    } catch (e) {
        console.log(e);
    }
}

start();