const mongoose = require('mongoose'); 

const Candidates = require('./../model/candidatemodel');



exports.getAllcandidate =(req, res, next) =>{

    Candidates.find()
    .exec()
    .then(data=>{
        const respose ={
            count: data.length,
            candidates: data.map(candidate =>{
                return{
                    _id: candidate._id, 
                    account: candidate.account, 
                    date: candidate.date.toISOString().split('T')[0],
                    city: candidate.city,
                    userId: candidate.userId,
                    publishStatus: candidate.publishStatus,
                    salary: candidate.salary, 
                    headline: candidate.headline,
                    topSkills: candidate.topSkills, 
                    skill: candidate.skills, 
                    benefits: candidate.benefits,
                    workExperiences: candidate.workExperiences,
                    projectExperiences: candidate.projectExperiences,
                    educations: candidate.educations, 
                    request: {
                        type: 'GET', 
                        url: 'http://localhost:8080/candidates/' + candidate._id
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

exports.getOneCandidate = (req, res, next) =>{
    candidateId = req.params.id; 
    Candidates.findById(candidateId)
    .exec()
    .then(data=>{
        res.status(200).json({
            message: 'User profile', 
            profile: data     
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
  
}


exports.createCandidate =(req, res, next) => {
    var now = new Date();
    const candidate = new Candidates({
    _id: mongoose.Types.ObjectId(),
    account: req.body.candidate.account, 
    date: new Date(),
    city: req.body.candidate.city,
    userId: req.body.candidate.userId,
    publishStatus: req.body.candidate.publishStatus, 
    salary: req.body.candidate.salary,
    headline: req.body.candidate.headline,
    topSkills: req.body.candidate.topSkills, 
    skills: req.body.candidate.skills, 
    benefits: req.body.candidate.benefits,
    workExperiences: req.body.candidate.workExperiences,
    projectExperiences: req.body.candidate.projectExperiences,
    educations: req.body.candidate.educations
    })
     candidate.save()
     .then(result => {
          console.log(result);
        res.status(201).json({
        message: "new candidate is created",
        createdCandidate: {
          _id: result._id,
          account: result.account, 
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



exports.deleteCandidate =(req, res, next) =>{
    candidateId = req.params.id; 
    Candidates.remove({_id: candidateId})
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

exports.updateCandidate =(req, res, next)=>{
    candidateId = req.params.id; 
    const updateOps = {}; 
    Offers.update({_id: candidateId}, {$set: {
        account: req.body.candidate.account, 
        topSkills: req.body.candidate.topSkills, 
        skill: req.body.candidate.skills, 
        benefits: req.body.candidate.benefits,
        publishInfo: req.body.candidate.publishInfo,
        workExperiences: req.body.candidate.workExperiences,
        education: req.body.candidate.education
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