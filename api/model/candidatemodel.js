const mongoose = require('mongoose'); 

const candidateSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    account: {
        firstname: {type: String},
        lastname: {type: String},
        email:{
               type: String, 
           },
         phone: {type: String}, 
      //  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}, 
    
    }, 
    salary: {
        type: Number
    }, 
    headline: {
        type: String
    }, 
    
     topSkills: [
        {
            experience:{type: Number},
            id:{ type: mongoose.Schema.Types.ObjectId}, 
            title:{type: String}
        }

     ], 
     skills: [
         {
            id:{ type: mongoose.Schema.Types.ObjectId}, 
            title:{type: String}
         }
     ], 

     benefits: [
        {
            id:{ type: mongoose.Schema.Types.ObjectId}, 
            title:{type: String}
         }
     ],

      workExperiences: [
        {
          id:{ type: mongoose.Schema.Types.ObjectId}, 
        //  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
          title: { type: String}, 
          experience: {type: Number, default: 0} 
        }
    ],
    projectExperiences: [
        {
            id: {type: mongoose.Schema.Types.ObjectId},
            title: {type: String}, 
           // userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
        }
    ], 
    educations: [
        {
            id: {type: mongoose.Schema.Types.ObjectId},
            fieldofstudy: {type: String}, 
           // userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
        }
    ]

    
        
})

module.exports = mongoose.model('Candidate', candidateSchema); 

 /*
     publishInfo: [
        {
          auctionId: {type: mongoose.Schema.Types.ObjectId, required: true}, 
          status: {type: Number, required: true},
          userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
        }
      ],
      */