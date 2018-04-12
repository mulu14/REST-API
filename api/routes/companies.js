const express = require('express'); 
const mongoose = require('mongoose'); 
const multer = require('multer'); 
const router = express.Router(); 
const checkAuth = require('./../middelware/check-auth'); 
const CompanyControllers = require('./../controllers/companyController')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
       cb(null, './uploads/')
    }, 
    filename : function(req, file, cb){
        cb(null, new Date().toISOString() + file.filename)
    }
})

const filterFile = (req, file, cb) =>{
    if(file.mimtype ==='image/jpeng' || file.mimtype === 'image/png'){
        cb(null, true)
    }
    else{
        cb(null, false); 
    }
    
   
}
const uplode = multer({
    storage: storage,
     limits: {
    fileSize: 1024 *1024*5
}, 
fileFilter: filterFile

}); 

var db = mongoose.connect('mongodb://localhost/companies'); 
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
router.post('/', CompanyControllers.company_create); 
router.get('/', CompanyControllers.get_list_of_company ); 
router.get('/:id',CompanyControllers.get_one_company); 
router.delete('/:id', CompanyControllers.deleteCompany ); 
router.patch('/:id', CompanyControllers.updatesCompany)
    

module.exports = router; 