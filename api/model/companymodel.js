const mongoose = require('mongoose'); 

const companiesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String}, 
    email:{type: String},
    phone: {type: Number}, 
    nameOfCompany: {type: String}, 
    publishd: {type: Boolean},
    benefitsOffers: [
        {
        balance : Boolean 
        },
         {
             car: Boolean 
        },

        {
           bonseModel: Boolean  
            
        }, 
        {
            centerlaOffice: Boolean
        }, 
        {
            owenerShip: Boolean
        }, 
        {
            ownResponsiblity: Boolean
         }, 
        {
            monthlySalary : Boolean 
         }, 
        {
            flexiableworking: Boolean
        }, 
        {
        freedom: Boolean
        
        }, 
        {
            medicalAllowance: Boolean
        
        }, 
        {
            careergrowth: Boolean
        
        },
        {
            codeDays: Boolean
        },
        {
            competitivesalary: Boolean
        }, 
        {
            morethan25Days: Boolean
        }, 
        {
            possiblityWorkfromHome: Boolean 
    
        }, 
        {
            possiblityWorkfromdistance :  Boolean
        }, 
        {
            newtechnique: Boolean
        },
        {
            healthInsurance: Boolean

        }, 
        {
            stableworkingCondition: Boolean
        }, 
        {
            toothInsurance: Boolean
            }, 
        {
            penstion:Boolean 
            
        }, 
        {
            supportsystem : Boolean 
    }, 
        {
         developementpossiblity: Boolean
    }
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