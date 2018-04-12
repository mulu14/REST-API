const mongoose = require('mongoose'); 
const jwt = require('jsonwebtoken');
const User = require('./../model/usermodel');
const bcrypt = require('bcrypt'); 


exports.user_sign_up = (req, res, next) =>{
    User.find({email: req.body.email})
    .exec()
    .then(user =>{
        if(user.length >= 1){
            return res.status(409).json({
                message: 'Email is exited or Already taken'
            })
        }
        else{

            bcrypt.hash(req.body.password , 10, (err, hash) =>{
                if(err){
                    return res.status(500).json({
                        error: err
                    }); 
                }
                else{
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        email: req.body.email,
                        password: hash
                    }); 
                    user.save().then(result =>{
                        console.log(result), 
                        res.status(201).json({
                            message: 'User created', 
                            newuser: user, 
                        })
                    })
                    .catch(err =>{
                        console.log(err); 
                    })      
                }
        
            })

        }
    })

}

exports.user_log_in = (req, res, next) => {
    User.find({email: req.body.email})
    .exec()
    .then( user =>{
        if(user.length < 1){
            return res.status(401).json({
                message: 'Auth failed'
            })
        }
        bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
            if(err){
                return res.status(401).json({
                    message: 'Auth failed'
                })
            }
            if(result){
            const token =  jwt.sign({
                    email: user[0].email,
                    userId: user[0]._id
                }, 
                process.env.JWT_KEY,
                {
                    expiresIn: "1h"
                }, 

            
               )
                return res.status(200).json({
                    message: 'Auth Success', 
                    token : token 
                })
            }
            res.status(404).json({
                message: 'Auth failed'
            })

        })

    })
    .catch()
}

exports.get_all_users = (req, res, next) =>{
    User.find()
    .select('email  _id')
    .exec()
    .then(data=>{
        const respose ={
            count: data.length,
            users: data.map(user =>{
                return{
                    email: user.email, 
                    _id: user._id, 
                    request: {
                        type: 'GET', 
                        url: 'http://localhost:8080/users/' + user._id
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

exports.get_individual_user = (req, res, next) => {
    userId = req.params.id; 
    User.findById(userId)
    .exec()
    .then(data=>{
        res.status(200).json({
            message: 'Success', 
            
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
  
}

exports.delete_users =(req, res, next) => {
    userId = req.params.id; 
    User.remove({_id: userId})
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

exports.updateUsers =(req, res, next) =>{
    userId = req.params.id; 
    const updateOps = {}; 
    User.update({_id: userId}, {$set: {
        email: req.body.email, 
        password: req.body.password
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



/*

const express = require('express'); 
const mongoose = require('mongoose'); 
const router = express.Router(); 
const User = require('./../model/usermodel');
var db = mongoose.connect('mongodb://localhost/users'); 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const UserControler = require('./../controllers/userControler')

router.post("/signup", UserControler.user_sign_up)
router.post("/login", UserControler.user_log_in) 
router.get('/', UserControler.get_all_users); 
router.get('/:id', UserControler.get_individual_user); 
router.delete('/:id', UserControler.delete_users); 
router.patch('/:id', UserControler.updateUsers)

module.exports = router; 



*/