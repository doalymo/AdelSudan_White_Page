var express = require('express'),
router = express.Router();
router.use("/person", require("../controllers/person.api"));
router.use("/user", require("../controllers/person.api"));
var app = express();
var User=require("../models/person");
router.post('/auth',function(req,res){
    User.findOne({name:req.body.name}).select('userName passward').exec(function(err,user){
        if(err)throw err;
        if(user==null){
            res.json({success:false,message: 'username or passward is uncorrect'});
        }
        else if (user!=null){
            if(req.body.contactNo){
                var validatePwd= user.comparePwd(req.body.contactNo);
            }
            else{
                res.json({success:false,message:'could not find pass'});
            }
            if(!validatePwd){
                res.json({success:false ,message:'could not auth'});
            }
            else{
                res.json({success:true,message: 'login succes',name:req.body.name});
            }
        }
    });
});
module.exports = router;

