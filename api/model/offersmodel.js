const mongoose = require('mongoose'); 

const offerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    company:{type: mongoose.Schema.Types.ObjectId, ref: 'Companies', required: true},
    salary: {type: Number, required: true}, 
    bonses: {type: Number, required: true}, 
})

module.exports = mongoose.model('Offers', offerSchema); 