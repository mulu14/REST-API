const mongoose = require('mongoose'); 

const candidateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
     firstname: {type: String, required: true},
     lastname: {type: String, required: true},
     email:{
            type: String, 
            required: true, 
            unique: true, 
    
        },
     phone: {type: String, required: true}, 
     userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, 
     expectedSalary: {type: String, required: true}, 
     headline: {type: String, required: true}, 
     
     topSkills: [
        {
            experience:{type: String, required: true},
            id:{ type: mongoose.Schema.Types.ObjectId}, 
            title:{type: String, required: true}
        }

     ], 
     skills: [
         {
            id:{ type: mongoose.Schema.Types.ObjectId}, 
            title:{type: String, required: true}
         }
     ], 

     benefits: [
        {
            id:{ type: mongoose.Schema.Types.ObjectId}, 
            title:{type: String, required: true}
         }
     ],

     publishInfo: [
        {
          auctionId: {type: Number, required: true}, 
          status: {type: Number, required: true},
          userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
        }
      ],
      workExperiences: [
        {
          id:  {type: Number, default: 0},
          userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
          title: { type: String, required: true}, 
          experience: {type: Number, default: 0} 
        }
    ],

    
        
})

module.exports = mongoose.model('Candidate', candidateSchema); 