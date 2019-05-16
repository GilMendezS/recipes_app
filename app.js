const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

const PORT = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/recipes', {useNewUrlParser: true})
.then(db => {
    console.log('db connected')
    app.listen(PORT, () => {
        console.log('Server Running');
    })
})
.catch(err => {
    console.log(err)
})
