const express = require('express'); 
const mongoose = require('mongoose'); 
const router = express.Router(); 
const OfferController = require('./../controllers/offers.controler'); 
var db = mongoose.connect('mongodb://localhost/offers'); 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



router.get('/', OfferController.getAllOffers)
router.get('/:id', OfferController.getOneOffer)
router.post('/', OfferController.createOffers)
router.delete('/:id',OfferController.deleteOffers)

router.patch('/:id',OfferController.updateOffers)

module.exports = router; 