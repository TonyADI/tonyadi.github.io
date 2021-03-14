const https = require('https');
const express = require('express');
const mysql = require('mysql')
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database',
    port: 3307
  });

connection.connect(error => {
    if(error) throw error;
    console.log('Connected');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

                                                            // USERS ROUTE


// Register, create user record
app.post('/users', (req, res) => {
    connection.query(`INSERT INTO User (email, first_name, last_name, password) 
    VALUES (?, ?, ?, ?);`, 
    [req.body.email, req.body.first_name, req.body.last_name, req.body.password], 
    (error, result) => {
        if(error){
            if(error.errno === 1062){
                res.status(409).send();
            }
            throw error;
        }
        else{
            console.log('Account Created');
            res.status(201).send();
        }
    });
})


// Check if password is correct
app.post('/users/:userId', (req, res) => {
    connection.query("SELECT email FROM USER WHERE email = ? AND password = ?;", [req.body.email, req.body.password], 
    (error, result) => {
        if (error) throw error;
        if(result.length){
            console.log('Account found, password verification successful');
            res.status(204).send();
        }
        else{
            console.log('Credentials do not exist.');
            res.status(401).send()
        }
    })
})

// Modify personal details or password of user
app.put('/users/:userId', (req, res) => {
    switch(req.query.resource){
        case 'details':
            connection.query(`UPDATE user SET first_name = ?, last_name = ? 
            WHERE id = ?;`, [req.body.first_name, req.body.last_name, req.params.userId], 
            (error, result) => {
                if (error) throw error;
                if(result.changedRows){
                    res.status(204).send();
                }
                res.status(409).send();
            })
            break;
        case 'password':
            connection.query(`UPDATE USER SET password = ? WHERE id = ? AND 
            email = ? AND password = ?;`, [req.body.new_password, req.params.userId, req.body.email, req.body.password],
            (error, result) => {
                if (error) throw error;
                if(result.changedRows){
                    console.log('Password successfully updated')
                    res.status(204).send();
                }
                res.status(409).send();
            })
            break;
        default:
            console.log(`The query does not exist.`);
    }
    
})



app.get('/users/:userEmail', (req, res) => {
    connection.query(`SELECT email, first_name, last_name, id FROM USER WHERE email = ?;`, [req.params.userEmail], (error, result) => {
        if(error) throw error;
        console.log('Account details retreived');
        console.log(result[0]);
        res.status(200).send(result[0]);
    })
})

                                                                // PRODUCTS ROUTE

// Create product listing in sell page, needs to be modified
app.post('/products', (req, res) => {
    connection.query(`INSERT INTO product (category_name, user_email, buy_now, initial_price, duration) VALUES (?, ?, 
    ?, ?, ?);`, [req.body.category, req.body.account, req.body.buy_now, req.body.initial_ask, req.body.duration], 
    (error, result) => {
        if (error) throw error;
        console.log('Product Created');
        res.status(201).send();
    })
})

// creates sales/bids, needs to be modified
app.post('/products/:productId', (req, res) => {
    switch(req.query.action){
        case 'bid':
            // Sets the current ask for product and creates bid record
            connection.query(`UPDATE PRODUCT SET current_ask = ? WHERE id = ? AND 
            ? > current_ask ;`, [req.body.current_ask, req.params.productId, req.body.current_ask], (error, result) => {
                if (error) throw error;
                console.log('Product record successfully updated.');
                if(result.changedRows){
                    connection.query(`INSERT INTO bid (value, user_email, product_id) VALUES (?, 
                    ?, ?);`, [req.body.current_ask, req.body.email, req.params.productId], (error, result) => {
                        if (error) throw error;
                        console.log('Bid record successfully created.');
                    })
                    res.status(201).send();
                    }
                res.status(409).send();
            })
            break;
        case 'sell':
            // Sets the sold boolean to true and creates sale record
            connection.query(`UPDATE product SET sold = true, current_ask = ? 
                WHERE id = ? AND ? = buy_now AND sold = false;`, [req.body.current_ask, req.body.id, req.body.current_ask], 
                (error, result) => {
                    if (error) throw error;
                    console.log('Product record successfullt updated');
                    if(result.changedRows){
                        connection.query(`INSERT INTO sale (user_email, product_id) VALUES (?, ?);`, 
                        [req.body.email, req.params.productId],
                        (error, result) => {
                            if (error) throw error;
                            console.log('Sale record successfully created');
                        })
                        res.status(201).send();
                    }
                    res.status(409).send();   
                })
                break;
        case 'timeout':
            // Set sold to true and create a sale record when product times out
            connection.query(`UPDATE product SET sold = true WHERE id = ? AND duration <= (SELECT current_timestamp()) 
            AND sold = false;`, [req.params.productId], (error, result) => {
                if (error) throw error;
                console.log('Product successfully updated');
                if(result.changedRows){
                    connection.query(`INSERT INTO sale (user_email, product_id) VALUES 
                    ( (SELECT user_email FROM Bid WHERE product_id = ? 
                    ORDER BY value DESC LIMIT 1), ?);`, [req.params.productId, req.params.productId], (error, result) => {
                        if (error) throw error;
                        console.log('Sale record successfully created.')
                    })
                    res.status(201).send();
                }
                res.status(409).send();
            })
            break;
        default:
            console.log(`The query does not exist`);
    }
    
})

app.get('/products', (req, res) => {
    if(req.query.name){
        const categoryName = decodeURI(req.query.name);
        connection.query(`SELECT * FROM PRODUCT WHERE category_name = ? AND duration > (select current_timestamp()) AND 
        sold = false AND user_email <> ? ORDER BY duration;`, [categoryName, req.query.acc],
        (error, result) => {
            if (error) throw error;
            console.log('Products successfully retrieved.');
            res.status(200).send(result);
        })
    }
    switch(req.query.sortBy){
        case 'popular':
            // Fetch product with the most sales
            connection.query(`SELECT * FROM Product WHERE duration > (select current_timestamp()) AND 
            sold = false AND user_email <> ? AND category_name = 
            (SELECT category_name from 
                (SELECT category_name, count(*) FROM PRODUCT 
                WHERE Sold = true group by category_name ORDER BY 2 desc LIMIT 1)as name) ORDER BY duration;`, [req.query.acc],
            (error, result) => {
                if (error) throw error;
                console.log('Products successfully retrieved.');
                if(result.length){
                    res.status(200).send(result);
                }
            })
            break;
        case 'trending':
            // Fetch product with the most bids
            connection.query(`SELECT * FROM Product WHERE duration > (select current_timestamp()) AND 
            sold = false AND user_email <> ? AND category_name = 
            (SELECT category_name from 
                (SELECT category_name, COUNT(*) FROM Product 
                WHERE current_ask > 0 GROUP BY category_name ORDER BY 2 DESC LIMIT 1) as name) ORDER BY duration;`, [req.query.acc],
            (error, result) => {
                if (error) throw error;
                console.log('Products successfully retrieved.')
                if(result.length){
                    res.status(200).send(result);
                }
            })
            break;
        case 'recent':
            // Fetch 15 products that were recently bid on. Not currently implemented correctly
            connection.query(`SELECT * FROM PRODUCT WHERE duration > (select current_timestamp()) AND 
            sold = false AND user_email <> ? AND product.id IN (SELECT DISTINCT product_id FROM 
                    bid) ORDER BY id desc LIMIT 15;`, [req.query.acc], (error, result) => {
                        if (error) throw error;
                        console.log('Products successfully retrieved.')
                        if(result.length){
                            res.status(200).send(result);
                        }
                    })
            break;
        case 'featured':
            // Fetch a random product
            connection.query(`SELECT * FROM Product WHERE duration > (select current_timestamp()) AND 
            sold = false AND user_email <> ? AND category_name = 
            (SELECT name from (SELECT * FROM CATEGORY ORDER BY RAND() LIMIT 1) as name) ORDER BY duration;`, [req.query.acc],
            (error, result) => {
                if (error) throw error;
                console.log('Products successfully retrieved.')
                if(result.length){
                    res.status(200).send(result);
                }
            })
            break;
        case 'latest':
            // Fetch the products from the newest category
            connection.query(`SELECT * FROM PRODUCT WHERE duration > (select current_timestamp()) AND 
            sold = false AND user_email <> ? AND category_name = (SELECT name from 
                (SELECT * FROM CATEGORY ORDER BY id desc LIMIT 1) as name) ORDER BY duration;`, [req.query.acc],
                (error, result) => {
                    if (error) throw error;
                    console.log('Products successfully retrieved.')
                    if(result.length){
                        res.status(200).send(result);
                    }
                })
            break;
        case 'bid':           
            // Get bids for this account
            connection.query(`SELECT * FROM PRODUCT WHERE product.id IN (SELECT DISTINCT bid.product_id FROM PRODUCT, 
                bid WHERE bid.user_email = ?) ORDER BY duration;`, [req.query.acc],
                (error, result) => {
                    if (error) throw error;
                    console.log('Products successfully retrieved.')
                    if(result.length){
                        res.status(200).send(result);
                    }
                })
            break;
        case 'listing':
            // Get the product listings for this account, change to get
            connection.query(`SELECT * FROM PRODUCT WHERE user_email = ? ORDER BY duration;`, [req.query.acc],
             (error, result) => {
                if (error) throw error;
                console.log('Connection to database was successful');
                console.log('Products successfully retrieved.')
                if(result.length){
                    res.status(200).send(result);
                }
            })
            break;
        case 'purchase':
            // Get purchases for this account
            connection.query(`SELECT * FROM Product WHERE product.id IN (SELECT product_id FROM sale WHERE user_email = ?);`, 
            [req.query.acc], (error, result) => {
                if (error) throw error;
                console.log('Products successfully retrieved.')
                if(result.length){
                    res.status(200).send(result);
                }
            })
            break;
        default:
            console.log(`Supplied query does not exist`);
    }
    
})

                                                                // CATEGORIES ROUTE

// Retrieve categories for browse page
app.get('/categories', (req, res) => {
    connection.query(`SELECT * FROM CATEGORY`, (error, result) => {
        if (error) throw error;
        if(result.length){
            console.log('Categories successfully retrieved.')
            res.status(200).send(result);
        }
    })
})

https.createServer({
    key: fs.readFileSync('C:/Users/emman/project/src/backend/key.pem'),
    cert: fs.readFileSync('C:/Users/emman/project/src/backend/cert.pem'),
    passphrase: ''
}, app).listen(3000);
