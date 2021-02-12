const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Roman618!',
    database: 'database',
    port: 3307
  });

connection.connect(err => {
    if(err){
        throw err;
    }
    console.log('Connected')
});

/*
connection.query('SELECT * FROM `User`', (error, results) => {
    if (error) throw new Error('Database connection did not work');
    console.log(results)
})
*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/register', (req, res) => {
    console.log('Post for register working');
    console.log(req.body);
    connection.query(`INSERT INTO User VALUES ('${req.body.email}', '${req.body.firstName}', '${req.body.lastName}', '${req.body.password}');`, 
    (error, result) => {
        if(error){
            if(error.errno === 1062){
                res.status(409).send('Account already exists');
            }
        }
        else{
            console.log('Account Created');
            console.log(result)
            res.status(204).send('Account Created')
        }
    });
})

/*
connection.query("SELECT * FROM USER WHERE Email = 'emmanueladiari@hotmail.com' AND password = 'Busybody';", (err, result) => {
    if (err) throw err;
    console.log(result)
});
*/



app.post('/login', (req, res) => {
    console.log('Get for login working');
    console.log(req.body);
    connection.query(`SELECT * FROM User WHERE Email = '${req.body.email}' AND password = '${req.body.password}';`, (error, result) => {
        if (error){
            throw error;
        }
        if(result.length){
            console.log('Account found, login successful');
            console.log(result);
            res.status(204).send('Account Found');
        }
        else{
            console.log('Credentials do not exist.');
            res.status(401).send('Credentials do not exist.')
        }
    });

})

app.listen(3000)























/*
app.get('/', (req, res) => {
    res.sendFile('C:/Users/emman/project/public/index.html')
})

app.get('/register', (req, res) => {
    res.redirect('/')
    //res.send('hi')
})

app.get('/login', (req, res) => {
    console.log('Login get worked');
    res.redirect('/');
})

*/

//app.listen(PORT, () => console.log('Server running...'))