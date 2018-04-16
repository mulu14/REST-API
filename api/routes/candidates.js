const express = require('express'); 
const mongoose = require('mongoose'); 

const router = express.Router(); 
const CandidateController  = require('./../controllers/candidateController'); 


var db = mongoose.connect('mongodb://localhost/candidates'); 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/', CandidateController.createCandidate); 
router.get('/',CandidateController.getAllcandidate ); 
router.get('/:id', CandidateController.getOneCandidate); 
router.delete('/:id', CandidateController.deleteCandidate); 
router.patch('/:id', CandidateController.updateCandidate )
    

module.exports = router; 