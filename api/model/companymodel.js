const mongoose = require('mongoose'); 

const  benefitsOffers =  mongoose.Schema({
        data: [
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },
            {
                title: String,
                type: Number, 
                id: mongoose.Schema.Types.ObjectId
            },

        ],
       

}); 

const companiesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String}, 
    email:{type: String},
    phone: {type: Number}, 
    nameOfCompany: {type: String}, 
    publishStatus: {type: Number }, 
    date: {type: Date},
    updateddate: {type: Date},
    benefitsList :  [
            {   id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
               
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number 
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number 
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },
            {
                id: mongoose.Schema.Types.ObjectId,
                title: String,
                code: Number
            },

        ],
       
    numberOfEmployee : Number,
    intrestfromCandidates: {type: String}, 
    image : [
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        },
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        },
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        }, 
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        }
    ], 
    companylogo: {type: String}, 
    compangDescription: {type: String}, 
    includedInStack : [
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        }, 
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        }, 
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        }, 
        {
            id: mongoose.Schema.Types.ObjectId,
            title: String
        }, 

    ]
 
})

module.exports = mongoose.model('Companies', companiesSchema); 
