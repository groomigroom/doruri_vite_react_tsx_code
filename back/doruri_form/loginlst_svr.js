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
    console.log('/process/adduser 호출됨' + req);

    const paramId = req.body.id;
    const paramName = req.body.name;
    const paramAge = req.body.age;
    const paramPassword = req.body.password;

    pool.getConnection((err, conn) => {
        if (err) {
            conn.release();
            console.log('mysql getConnection error. aborted');
            return;
        }

        console.log('db 연결 끊어졌음');

        conn.query('insert into users (id, name, age, password) values(?, ?, ?, password(?))',
            [paramId, paramName, paramAge, paramPassword]
        );
    });
});
