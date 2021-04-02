const express = require('express');
require('./db/mongoose');
const path = require('path');
const hbs = require('hbs');

const userRouter = require('./routers/user');

const app = express();
const port = process.env.PORT || 4000;

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.static(publicPath));
app.use(userRouter);

hbs.registerPartials(partialsPath);

app.set('view engine', 'hbs');
app.set('views', viewsPath);


app.listen(port, () => {
    console.log("O servidor iniciou.");
})
