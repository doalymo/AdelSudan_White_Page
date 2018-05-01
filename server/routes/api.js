var express = require('express'),
router = express.Router();
router.use("/person", require("../controllers/person.api"));
router.use("/user", require("../controllers/user.api"));
var app = express();
var User=require("../models/user");
router.post('/auth',function(req,res){
    User.findOne({userName:req.body.userName}).select('userName passward').exec(function(err,user){
        if(err)throw err;
        if(user==null){
            res.json({success:false,message: 'username or passward is uncorrect'});
        }
        else if (user!=null){
            if(req.body.passward){
                var validatePwd= user.comparePwd(req.body.passward);

            }
            else{
                res.json({success:false,message:'could not find pass'});
            }
            if(!validatePwd){
                res.json({success:false ,message:'could not auth'});
            }
            else{
                res.json({success:true,message: 'login succes',userName:req.body.userName});
            }
        }
    });
});
module.exports = router;

