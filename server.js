var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {Client} = require('pg');

var dbconfig = require('./db/dbconfig');
var  auth  =  require('./auth/index');
var  scheduler  =  require('./scheduler/index');

const app = express();
const client = new Client(dbconfig);

client.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth',auth);
app.use('/scheduler',scheduler);


app.get('/chk', (req, res)=>{

    client.query('SELECT * FROM users')
        .then(res => {
            console.log(res.rows);
            client.end();
        })
        .catch(e => console.error(e.stack)
        )
    // 이미 존재 하는 아이디 걸러네기
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.status(err.status || 500);
    res.json({
        message : err.message,
        error : req.app.get('env') === 'development' ? err : {}
    })
});

const port = 5000;

app.listen(port, () => console.log('Server started on port',port));
