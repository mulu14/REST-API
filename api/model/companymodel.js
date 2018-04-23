const mongoose = require('mongoose'); 

const  benefitsOffers =  mongoose.Schema({
        balance : {type: Boolean, default: false}, 
        car: {type:Boolean, default:false}, 

        bonseModel: {type:Boolean, default:false}, 
        
        centerlaOffice: {type:Boolean, default:false}, 
        
        owenerShip: {type:Boolean, default:false}, 
        
        ownResponsiblity: {type:Boolean, default:false}, 
        
        monthlySalary : {type:Boolean, default:false}, 
        
        flexiableworking: {type:Boolean, default:false}, 
        
        freedom: {type:Boolean, default:false}, 
        
        medicalAllowance: {type:Boolean, default:false}, 
        
        careergrowth: {type:Boolean, default:false}, 
        
        codeDays: {type:Boolean, default:false}, 

        competitivesalary: {type:Boolean, default:false}, 
        
        morethan25Days: {type:Boolean, default:false}, 
        
        possiblityWorkfromHome: {type:Boolean, default:false}, 
        
        possiblityWorkfromdistance :{type:Boolean, default:false}, 
        
        newtechnique: {type:Boolean, default:false}, 
        
        healthInsurance: {type:Boolean, default:false}, 
        
        stableworkingCondition: {type:Boolean, default:false}, 
        
        toothInsurance: {type:Boolean, default:false}, 
        
        penstion: {type:Boolean, default:false}, 

        supportsystem :{type:Boolean, default:false}, 

        developementpossiblity: {type:Boolean, default:false}, 

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
    benefitsList : benefitsOffers,
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
