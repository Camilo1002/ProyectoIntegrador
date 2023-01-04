const express = require('express');
const path = require('path');


const session = require("express-session");
const cookieParser =  require("cookie-parser");
const indexRouter = require('./routes/index');


const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const usersRoutes = require('./routes/usersRoutes');
const app = express();


app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: true,
}));
app.use(cookieParser());


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use(usersRoutes);



app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));

