const express = require('express');
const bodyParser = require('body-parser');
const {Pool,Client} = require('pg');

const app = express();

const client = new Client({
    host: '13.209.187.220',
        user: 'makersmaker',
        password: 'makersmaker',
        database: 'makersmaker',
        port: 5432
  });
  

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/api/customers', (req,res)=>{
    const customers = [
        {id : '1', firstName: 'John', lastName: 'Doe'},
        {id : '2', firstName: 'Steve', lastName: 'Smith'},
        {id : '3', firstName: 'Mary', lastName: 'Swanson'}
    ];

    res.json(customers);
});


app.post('/regist', (req,res)=>{
    var user_id = req.body.user_id,
        password = req.body.password,
        name = req.body.name;

    const text = 'INSERT INTO public.users (user_id,password,name) VALUES($1,$2,$3)'
    const values = [user_id , password ,name];
    client.connect();
    client.query(text,values)
        .then(res => {
            console.log('registration is done!');
            client.end();        
        })
        .catch(e => console.error(e.stack)
    )
    
    // client.query('SELECT * FROM users')
    //     .then(res => {
    //         console.log(res.rows)
    //     })
    //     .catch(e => console.error(e.stack))
});



const port = 5000;

app.listen(port, () => console.log('Server started on port ${port}'));
