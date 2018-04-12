const mongoose = require('mongoose'); 

const Offers = require('./../model/offersmodel');
const Companies = require('./../model/companymodel');


exports.getAllOffers =(req, res, next) =>{

    Offers.find()
    .select('_id, company, salary, bonses')
    .populate('company', 'nameOfCompany')
    .exec()
    .then(data=>{
        const respose ={
            count: data.length,
            offers: data.map(offer =>{
                return{
                    _id: offer._id, 
                    company: offer.company, 
                    salary: offer.salary, 
                    bonses: offer.bonses,
                    request: {
                        type: 'GET', 
                        url: 'http://localhost:8080/offers/' + offer._id
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

exports.getOneOffer = (req, res, next) =>{
    offerId = req.params.id; 
    Offers.findById(offerId)
    .exec()
    .then(data=>{
        res.status(200).json({
            message: 'This is company offer', 
            
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
  
}


exports.createOffers =(req, res, next) => {
 // check if company is existed,
 //if not break the function 
    const offer = new Offers({
    _id: mongoose.Types.ObjectId(),
    company: req.body.company,
    salary: req.body.salary, 
    bonses : req.body.bonses
    })
     offer.save()
     .then(result => {
          console.log(result);
        res.status(201).json({
        message: "Offer stored",
        createdOrder: {
          _id: result._id,
          salary: result.product,
          bonses: result.quantity
        },
        request: {
          type: "GET",
          url: "http://localhost:8080/offers/" + result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};






exports.deleteOffers =(req, res, next) =>{
    offerId = req.params.id; 
    Offers.remove({_id: offerId})
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

exports.updateOffers =(req, res, next)=>{
    offerId = req.params.id; 
    const updateOps = {}; 
    Offers.update({_id: offerId}, {$set: {
        company: req.body.company,
        salary: req.body.salary, 
        bonses: req.body.bonses
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