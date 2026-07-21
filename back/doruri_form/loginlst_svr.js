const express = require('express');
const mysql = require('mysql');
const path = require('path');
const static = require('serve-static');
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
            console.log('mysql getConnection error. aborted');
            res.writeHead('200', { 'Content-Type': 'text/html; charset=utf-8' });
            res.write('<h1>DB 서버 연결 실패</h1>');
            res.end();
            return;
        }

        console.log('db 연결 성공');

        const exec = conn.query('insert into users (id, name, age, password) values(?, ?, ?, password(?))',
            [paramId, paramName, paramAge, paramPassword],
            (err, result) => {
                conn.release();
                console.log('실행된 SQL: ' + exec.sql);

                if (err) {
                    console.log('SQL 실행시 오류 발생');
                    console.dir(err);
                    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf-8' });
                    res.write('<h1>SQL query 실행 실패</h1>');
                    res.end();
                    return;
                }

                if (result) {
                    console.dir(result);
                    console.log('Inserted 성공');

                    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf-8' });
                    res.write('<h2>사용자 추가 성공</h2>');
                    res.end();
                }
                else {
                    console.log('Inserted 실패');

                    res.writeHead('200', { 'Content-Type': 'text/html; charset=utf-8' });
                    res.write('<h1>사용자 추가 실패</h1>');
                    res.end();
                }
            }
        );
    });
});

app.listen(3000, () => {
    console.log('3000번 포트에서 듣기');
});
