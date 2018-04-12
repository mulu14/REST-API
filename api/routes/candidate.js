const express = require('express'); 
const mongoose = require('mongoose'); 

const router = express.Router(); 


var db = mongoose.connect('mongodb://localhost/candidates'); 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



router.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling PUT request'
    })
})

router.get('/:id', (req, res, next) =>{
   
    res.status(200).json({
        message: 'Handling PUT request'
    })
  
})

router.post('/', (req, res, next) =>{
    res.status(201).json({
        message: 'Handling POST request'
    })  
  
})

router.put('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling PUT request'
    })
})

router.delete('/:id', (req, res, next) =>{
    res.status(201).json({
        message: 'Handling DELETE request'
    })
})


router.patch('/', (req, res, next) =>{
    res.status(200).json({
        message: 'Handling PATCH request'
    })
})

module.exports = router; 