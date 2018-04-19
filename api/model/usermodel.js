const mongoose = require('mongoose'); 

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:{
        type: String, 
        required: true, 
        unique: true, 
        //match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema); 

 /*
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
    ], */