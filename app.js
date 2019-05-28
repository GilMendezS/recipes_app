const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('dotenv').config();
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

const PORT = process.env.PORT;

//routes
app.use('/api/categories', require('./api/routes/category'));
app.use('/api/recipes', require('./api/routes/recipe'));

mongoose.connect('mongodb://localhost:27017/recipes', {useNewUrlParser: true})
.then(db => {
    console.log('db connected')
    app.listen(PORT, () => {
        console.log('Server Running ' + PORT);
    })
})
.catch(err => {
    console.log(err)
})
