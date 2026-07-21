const express = require('express');
const mysql = require('mysql');
const path = require('path');
const static = require('serve_static');
const dbconfig = require('./config/dbconfig.json');

//Database connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    debug: false
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', static(path.join(__dirname, 'public')));

app.post('/process/adduser', (req, res) => {

});
