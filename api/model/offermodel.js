const mongoose = require('mongoose');


const offerShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    createdDate: {type: Date},
    updatedDate: {type: Date},
    offerstatus: {type: Number},
    candidate: {type: mongoose.Schema.Types.ObjectId,  ref: 'Candidate'}, 
    company: {type: mongoose.Schema.Types.ObjectId,  ref: 'Companies'}
})

module.exports = mongoose.model('Offers', offerShema); 