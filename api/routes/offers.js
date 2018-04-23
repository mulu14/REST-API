const express = require('express'); 
const mongoose = require('mongoose'); 

const router = express.Router(); 
const OfferController = require('./../controllers/offercontroller'); 


var db = mongoose.connect('mongodb://localhost/offers'); 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/', OfferController.createOffer); 
router.get('/', OfferController.getoffers ); 
router.get('/:id', OfferController.getsingleoffer); 
router.delete('/:id', OfferController.deleteOffer); 
router.patch('/:id', OfferController.updateOffer)
    

module.exports = router; 