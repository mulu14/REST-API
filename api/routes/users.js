const express = require('express'); 
const mongoose = require('mongoose'); 
const router = express.Router(); 
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
