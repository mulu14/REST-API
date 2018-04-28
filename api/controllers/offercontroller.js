const mongoose = require('mongoose'); 

const Offers = require('./../model/offermodel'); 



exports.getoffers =(req, res, next) =>{
    Offers.find()
    .populate('candidate', 'account')
    .populate('company', 'nameOfCompany')
    .exec()
    .then(data=>{
        const respose ={
            count: data.length,
            offers: data.map(offer =>{
                return{
                    _id: offer._id, 
                    candidate: offer.candidate, 
                    company: offer.company,
                    offerstatus: offer.offerstatus,
                    createdDate: offer.createdDate.toISOString().split('T')[0], 
                    updatedDate: offer.updatedDate,
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

exports.getsingleoffer = (req, res, next) =>{
    offerId = req.params.id; 
    Offers.findById(offerId)
    .exec()
    .then(data=>{
        res.status(200).json({
            message: 'Single Offer', 
            offer: data    
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
  
}

exports.createOffer =(req, res, next) => {
    const offer = new Offers({
    _id: mongoose.Types.ObjectId(),
    createdDate: new Date(),
    candidate: req.body.candidate, 
    company: req.body.company,
    offerstatus: req.body.offerstatus
    
    })
     offer.save()
     .then(result => {
        res.status(201).json({
        message: "new offer is created",
        createdOffer: {
          _id: result._id,
          createdDate: result.createdDate,
          candidate: result.candidate,
          company: result.company,
          offerstatus: result.offerstatus
        },
        request: {
          type: "GET",
          url: "http://localhost:8080/candidates/" + result._id
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



exports.deleteOffer =(req, res, next) =>{
    offerId = req.params.id; 
    Candidates.remove({_id: offerId})
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

exports.updateOffer =(req, res, next)=>{
    updateId = req.params.id; 
    Offers.update({_id: updateId}, {$set: {
        candidate: req.body.candidate, 
        company: req.body.company,
        offerstatus: req.body.offerstatus,
        updatedDate: new Date()
      
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