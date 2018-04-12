const express = require('express'); 
const app = express(); 
const morgon = require('morgan');
const users = require('./api/routes/users'); 
const candidates = require('./api/routes/candidate')
const offers = require('./api/routes/offers')
const companies = require('./api/routes/companies')
const bodyparser = require('body-parser')
const mongoose = require('mongoose'); 



//app.use('/uploads', express.static('uploads'));
app.use(morgon('dev')); 
app.use(bodyparser.urlencoded({extended:false})); 
app.use(bodyparser.json()); 
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); 

    if(req.method==='OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next(); 
}); 


app.use('/users', users); 
app.use('/candidate', candidates); 
app.use('/offers', offers); 
app.use('/companies', companies)


app.use((req, res, next) =>{
    const error = new Error('Not Found'); 
    error.status = 404; 
    next(error); 
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500); 
    res.json({
        error:{
            message: error.message
        }
    })
})


module.exports = app; 