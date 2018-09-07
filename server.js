var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var {Client} = require('pg');

=======
var bodyParser = require('body-parser');
var {Client} = require('pg');


>>>>>>> 354936181f9fec55927ae77519721f42d65d6f92
var dbconfig = require('./db/dbconfig');
var  auth  =  require('./auth/index');

const app = express();
const client = new Client(dbconfig);

client.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

<<<<<<< HEAD
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
=======
const client = new Client(dbconfig);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
>>>>>>> 354936181f9fec55927ae77519721f42d65d6f92

app.use('/auth',auth);

client.connect();

app.get('/api/customers', (req, res)=>{
    const customers = [
        {id : '1', firstName: 'John', lastName: 'Doe'},
        {id : '2', firstName: 'Steve', lastName: 'Smith'},
        {id : '3', firstName: 'Mary', lastName: 'Swanson'}
    ];

    res.json(customers);
});


<<<<<<< HEAD
app.get('/chk', (req, res)=>{

    client.query('SELECT * FROM users')
=======
app.post('/regist', (req, res)=>{
    var user_id = req.body.user_id,
        password = req.body.password,
        name = req.body.name;

    const text = 'INSERT INTO public.users (user_id,password,name) VALUES($1,$2,$3)'
    const values = [user_id , password ,name];

    client.query(text,values)
>>>>>>> 354936181f9fec55927ae77519721f42d65d6f92
        .then(res => {
            console.log(res.rows);
            client.end();
        })
        .catch(e => console.error(e.stack)
<<<<<<< HEAD
        )
=======
    )
>>>>>>> 354936181f9fec55927ae77519721f42d65d6f92
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
