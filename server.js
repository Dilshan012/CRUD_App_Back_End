const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

//middlewares
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://dnt:dnt123123@cluster0.grs45or.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch{
        console.log('MongoDB Error: ', console.error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`);
});

app.use('/api', router);