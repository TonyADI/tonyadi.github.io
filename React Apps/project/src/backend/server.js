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
            res.status(201).send();
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
        if (error) throw error;
        if(result.length){
            console.log('Account found, login successful');
            console.log(result);
            res.status(204).send();
        }
        else{
            console.log(result)
            console.log('Credentials do not exist.');
            res.status(401).send('Credentials do not exist.')
        }
    });

})


app.delete('/account', (req, res) => {
    console.log('Delete for account working');
    console.log(req.body);
    connection.query(`DELETE FROM USER WHERE email = '${req.body.email}';`, (error, result) => {
        if (error) throw error;
        console.log('Account deleted from database');
        console.log(result);
        res.status(204).send();
        
    })
})

// add acc details to url
app.post('/account/details', (req, res) => {
    console.log('Post for account details working');
    console.log(req.params);
    connection.query(`SELECT Email, first_name, last_name FROM USER WHERE email = '${req.body.email}';`, (error, result) => {
        if(error) throw error;
        console.log('Account details retreived');
        console.log(result[0])
        res.status(200).send(result[0]);
    })
})

/*
connection.query(`SELECT * FROM CATEGORY;`, (error, result) => {
    if (error) throw error;
    console.log(result[0]);
})
*/

app.get('/sell/categories', (req, res) => {
    console.log('Get for sell working');
    connection.query(`SELECT * FROM CATEGORY;`, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.status(200).send(result)
    })
})


app.get('/sell/categories/:name', (req, res) => {
    console.log('Get for product list working');
    connection.query(`SELECT * FROM PRODUCT WHERE category_name = '${req.params.name}' ORDER BY duration;`, (error, result) => {
        if (error) throw error;
        console.log(result);
        res.status(200).send(result)
    })
})
/*
connection.query(`INSERT INTO product (category_name, buy_now, initial_price, duration) 
VALUES ('iPhone 11', 1400, 900, 20)`, (error, result) => {
    if (error) throw error;
    console.log('Worked')
    console.log(result);
})
*/
app.post('/sell/products', (req, res) => {
    console.log('Post for products working');
    console.log(req.body);
    connection.query(`INSERT INTO product (category_name, user_email, buy_now, initial_price, duration) VALUES ('${req.body.category}', '${req.body.account}', 
    '${req.body.buyNow}', '${req.body.initialAsk}', '${req.body.duration}');`, 
    (error, result) => {
        if (error) throw error;
        console.log('Product Created');
        console.log(result)
        res.status(201).send();
    })
})


app.post('/account/listings', (req, res) => {
    console.log('Post for account listings working');
    console.log(req.body);
    connection.query(`SELECT * FROM PRODUCT WHERE user_email = '${req.body.email}' ORDER BY duration;`, (error, result) => {
        if (error) throw error;
        console.log('Connection to database was successful');
        console.log(result);
        res.status(200).send(result);
    })
    
})

// might have to add param or query
app.delete('/account/listings', (req, res) => {
    console.log('Delete for account listings working');
    console.log(req.body);
    connection.query(`DELETE FROM product where user_email = '${req.body.email}' AND id='${req.body.id}';`, (error, result) => {
        if (error) throw error;
        console.log('Connection to database was successful');
        console.log(result);
        res.status(204).send();
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