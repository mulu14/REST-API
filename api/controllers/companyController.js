
const mongoose = require('mongoose'); 
const Companies = require('./../model/companymodel');

exports.company_create = (req, res, next) =>{
    const company = new Companies({
        _id: new mongoose.Types.ObjectId(),
        date: new Date(),
        name: req.body.company.name,
        email: req.body.company.email,
        phone: req.body.company.phone, 
        nameOfCompany: req.body.company.nameOfCompany,
        numberOfEmployee: req.body.company.numberOfEmployee,
        publishStatus: req.body.company.publishStatus,
        benefitsList: req.body.company.benefitsList, 
        intrestfromCandidates: req.body.company.intrestfromCandidates, 
        image: req.body.company.image, 
        companylogo: req.body.company.companylogo, 
        compangDescription: req.body.company.compangDescription, 
        includedInStack: req.body.company.includedInStack,     
})
company.save().then(result =>{
    res.status(201).json({
        message: 'Create new company', 
        newcompany: result, 
    })
})
.catch(err =>{
    res.status(500).json({
        error: err
    })
})

}

exports.get_list_of_company = (req, res, next) =>{
    Companies.find()
    .exec()
    .then(data=>{
        const respose ={
            count: data.length,
            companies: data.map(company =>{
                return{
                    _id: company._id, 
                    nameOfCompany: company.nameOfCompany,
                    date: company.date.toISOString().split('T')[0],
                    publishStatus: company.publishStatus,
                    numberOfEmployee: company.numberOfEmployee,
                    benefitsList: company.benefitsList.filter(benefit => benefit.code !==false), 
                    intrestfromCandidates: company.intrestfromCandidates, 
                    image: company.image, 
                    companylogo: company.companylogo, 
                    compangDescription: company.compangDescription, 
                    includedInStack: company.includedInStack,    
                    request: {
                        type: 'GET', 
                        url: 'http://localhost:8080/companies/' + company._id
                    }
                }
            })
        };
        res.status(200).json(respose);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
  
}

exports.get_one_company = (req, res, next) =>{
    companyId = req.params.id; 
    Companies.findById(companyId)
    .exec()
    .then(data=>{
        res.status(200).json({
            message: 'Get Company information', 
            data: data
            
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
  
}

exports.deleteCompany = (req,res,next) =>{
    companyId = req.params.id; 
    Companies.remove({_id:  companyId})
    .exec()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
}

exports.updatesCompany = (req, res, next) =>{
    companyId = req.params.id; 
    const updateOps = {}; 
    Companies.update({_id: companyId}, {$set: {
        name: req.body.company.name,
        email: req.body.company.email,
        phone: req.body.company.phone, 
        updateddate: new Date(),
        nameOfCompany: req.body.company.nameOfCompany,
        publishStatus: req.body.company.publishStatus,
        benefitsList: req.body.company.benefitsList, 
        intrestfromCandidates: req.body.company.intrestfromCandidates, 
        image: req.body.company.image, 
        numberOfEmployee: req.body.company.numberOfEmployee,
        companylogo: req.body.company.companylogo, 
        compangDescription: req.body.company.compangDescription, 
        includedInStack: req.body.company.includedInStack, 
      
       
    }})
    .exec()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
}
