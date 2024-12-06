const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//////////////////////
//    Variables     //
//////////////////////

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
const apiRoutes = require('./routes/apiRoutes');
const userRoutes = require('./routes/userRoutes');


//////////////////////
//    MiddleWare    //
//////////////////////

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//////////////////////
//      Routes      //
//////////////////////

app.use('/api', apiRoutes);
app.use('/user', userRoutes);



//////////////////////
//   MongoConnect   //
//////////////////////

mongoose.connect(MONGO_URI, { dbName:'Metaverse', useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });









app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});