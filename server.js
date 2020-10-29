const express= require('express');
const path= require('path');
const port= 8000;
const cookieParser= require('cookie-parser');
var app = express();
const cors = require('cors');
app.use(cors())
app.use(express.urlencoded());
const expressLayout=require('express-ejs-layouts');
app.use(cookieParser());

const boduparser= require('body-parser');

const mongoose= require('./config/mongoose');

const ejs= require('ejs');



  
app.use(express.json());

app.use('/', require('./routes/index'))

app.listen(port, function(err){
    if(err){
        console.log('Error in connnecting to port ',port );
    }
    console.log('Connected to port no:',port)
})