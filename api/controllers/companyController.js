
const mongoose = require('mongoose'); 
const Companies = require('./../model/companymodel');

exports.company_create = (req, res, next) =>{
    const company = new Companies({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone, 
        nameOfCompany: req.body.nameOfCompany
      
})
company.save().then(result =>{
    res.status(201).json({
        message: 'Create new company', 
        newcompany: company, 
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
                    name: company.name,
                    email: company.email, 
                    phone: company.phone, 
                    nameOfCompany: company.nameOfCompany,
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
    userId = req.params.id; 
    Companies.findById(userId)
    .exec()
    .then(data=>{
        res.status(200).json({
            message: 'Admin is created', 
            
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
    Companies.remove({_id: compnayId})
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
    Companies.update({_id: userId}, {$set: {
        name: req.body.name,
        email: req.body.email,
        phone: req.body,phone, 
        nameOfCompany: req.body.nameOfCompany    
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
