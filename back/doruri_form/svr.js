const express = require('express');
const mysql = require('mysql');
const path = require('path');
const static = require('serve_static');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '122.32.33.22',
    user: '---',
    password: 'veryimport',
    database: 'FirstDabase',
    debug: false
});
