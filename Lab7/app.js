require('dotenv').config()
const express = require('express');
var hbs = require('express-hbs');

const connectDb = require('./dbConfig');



const app = express();
const PORT = 3000;


var path = require('path');
//Routes 
var routes = require('./Routes/index');

app.use(formData.parse())
app.use(cookieParser())

app.use(body_parse.urlencoded({ extended: false }));
app.use(body_parse.json({ limit: '50mb' }));

app.use('/public', express.static(path.join(__dirname, './public')));




app.use(require('./Routes/estudiantes'));



connectDb().then((res) => {
    console.log(res);
    app.listen(PORT, () => {
        console.log(`Ejecutando en el puerto ${PORT}`);
    });
});