const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//Midlewares
app.use(cors());
app.use(bodyParser.json());

// imports route
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//routes
app.get('/', (req, res)=>{
    res.send('we are on home')
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true}, () => 
    console.log('connected db')
);

//we start listening
app.listen(3000);